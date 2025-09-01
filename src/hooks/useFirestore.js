import { useState, useEffect, useCallback } from 'react';
import {
  collection,
  doc,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  query as firestoreQuery,
  where,
  orderBy,
  limit as firestoreLimit,
  onSnapshot,
} from 'firebase/firestore';
import { db } from 'firebase/config';

/**
 * Hook base para CRUD genérico sobre cualquier colección de Firestore.
 * Permite leer, crear, actualizar y eliminar documentos.
 * Soporta queries, filtros y suscripción en tiempo real.
 *
 * Opciones:
 * - query: consulta personalizada (opcional)
 * - realtime: booleano para suscripción en tiempo real (opcional, default false)
 * - filters: array de filtros para where (opcional)
 * - orderBy: array para ordenar (opcional)
 * - limit: número máximo de documentos a obtener (opcional)
 */
export default function useFirestore(collectionName, options = {}) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Opciones: { query, realtime, filters, orderBy, limit }
  useEffect(() => {
    setLoading(true);
    setError(null);
    let q = collection(db, collectionName);

    // Filtros
    if (options.filters) {
      options.filters.forEach((f) => {
        q = firestoreQuery(q, where(...f));
      });
    }
    // Orden
    if (options.orderBy) {
      q = firestoreQuery(q, orderBy(...options.orderBy));
    }
    // Límite
    if (options.limit) {
      q = firestoreQuery(q, firestoreLimit(options.limit));
    }

    // Suscripción en tiempo real
    if (options.realtime) {
      const unsubscribe = onSnapshot(
        q,
        (snapshot) => {
          setData(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
          setLoading(false);
        },
        (err) => {
          setError(err);
          setLoading(false);
        }
      );
      return () => unsubscribe();
    } else {
      getDocs(q)
        .then((snapshot) => {
          setData(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
          setLoading(false);
        })
        .catch((err) => {
          setError(err);
          setLoading(false);
        });
    }
  }, [collectionName, JSON.stringify(options)]);

  // CRUD
  const create = useCallback(
    async (docData) => {
      try {
        const docRef = await addDoc(collection(db, collectionName), docData);
        return docRef;
      } catch (err) {
        setError(err);
        throw err;
      }
    },
    [collectionName]
  );

  const read = useCallback(
    async (id) => {
      try {
        const docSnap = await getDoc(doc(db, collectionName, id));
        return docSnap.exists() ? { id: docSnap.id, ...docSnap.data() } : null;
      } catch (err) {
        setError(err);
        throw err;
      }
    },
    [collectionName]
  );

  const update = useCallback(
    async (id, docData) => {
      try {
        await updateDoc(doc(db, collectionName, id), docData);
      } catch (err) {
        setError(err);
        throw err;
      }
    },
    [collectionName]
  );

  const remove = useCallback(
    async (id) => {
      try {
        await deleteDoc(doc(db, collectionName, id));
      } catch (err) {
        setError(err);
        throw err;
      }
    },
    [collectionName]
  );

  return {
    data,
    loading,
    error,
    create,
    read,
    update,
    remove,
  };
}
