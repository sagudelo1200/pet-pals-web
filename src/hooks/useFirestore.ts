import { useState, useEffect, useCallback } from 'react';
import { db } from '../firebase/config';
import {
  collection,
  doc,
  getDocs,
  getDoc,
  addDoc,
  setDoc,
  updateDoc,
  deleteDoc,
  QueryDocumentSnapshot,
  DocumentData,
  WithFieldValue
} from 'firebase/firestore';
import { BaseModel } from '../models/BaseModel';

// Hook genérico para CRUD en Firestore
export function useFirestore<T extends BaseModel>(collectionName: string) {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>(null);

  // Obtener todos los documentos
  const fetchAll = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const ref = collection(db, collectionName);
      const snapshot = await getDocs(ref);
      const docs = snapshot.docs.map((doc: QueryDocumentSnapshot<DocumentData>) => ({
        id: doc.id,
        ...doc.data(),
        createdAt: doc.data().createdAt?.toDate?.() ?? new Date(),
        updatedAt: doc.data().updatedAt?.toDate?.() ?? new Date(),
      })) as T[];
      setData(docs);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, [collectionName]);

  // Obtener un documento por ID
  const fetchById = useCallback(async (id: string): Promise<T | null> => {
    setLoading(true);
    setError(null);
    try {
      const ref = doc(db, collectionName, id);
      const snapshot = await getDoc(ref);
      if (!snapshot.exists()) return null;
      return {
        id: snapshot.id,
        ...snapshot.data(),
        createdAt: snapshot.data().createdAt?.toDate?.() ?? new Date(),
        updatedAt: snapshot.data().updatedAt?.toDate?.() ?? new Date(),
      } as T;
    } catch (err) {
      setError(err);
      return null;
    } finally {
      setLoading(false);
    }
  }, [collectionName]);

  // Crear un documento (permite id personalizado)
  const create = useCallback(
    async (
      item: Omit<T, 'createdAt' | 'updatedAt'> & { id?: string }
    ) => {
      setLoading(true);
      setError(null);
      try {
        const now = new Date();
        let docId = item.id;
        const ref = collection(db, collectionName);
        if (docId) {
          const docRef = doc(db, collectionName, docId);
          await setDoc(docRef, {
            ...item,
            createdAt: now,
            updatedAt: now,
          } as WithFieldValue<DocumentData>);
        } else {
          const docRef = await addDoc(ref, {
            ...item,
            createdAt: now,
            updatedAt: now,
          } as WithFieldValue<DocumentData>);
          docId = docRef.id;
        }
        await fetchAll();
        return docId;
      } catch (err) {
        setError(err);
        throw err;
      } finally {
        setLoading(false);
      }
    },
    [collectionName, fetchAll]
  );

  // Actualizar un documento
  const update = useCallback(async (id: string, item: Partial<Omit<T, 'id' | 'createdAt' | 'updatedAt'>>) => {
    setLoading(true);
    setError(null);
    try {
      const ref = doc(db, collectionName, id);
      await updateDoc(ref, {
        ...item,
        updatedAt: new Date(),
      } as WithFieldValue<DocumentData>);
      await fetchAll();
    } catch (err) {
      setError(err);
      throw err;
    } finally {
      setLoading(false);
    }
  }, [collectionName, fetchAll]);

  // Eliminar un documento
  const remove = useCallback(async (id: string) => {
    setLoading(true);
    setError(null);
    try {
      const ref = doc(db, collectionName, id);
      await deleteDoc(ref);
      await fetchAll();
    } catch (err) {
      setError(err);
      throw err;
    } finally {
      setLoading(false);
    }
  }, [collectionName, fetchAll]);

  useEffect(() => {
    fetchAll();
  }, [fetchAll]);

  return {
    data,
    loading,
    error,
    fetchAll,
    fetchById,
    create,
    update,
    remove,
  };
}
