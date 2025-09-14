// prop-types is a library for typechecking of props
import PropTypes from 'prop-types';

// Material Kit 2 PRO React components
import MKBox from 'components/MKBox';
import MKTypography from 'components/MKTypography';

function ListItem({ title, children }) {
  return (
    <MKBox p={2}>
      <MKTypography variant="h5" mb={1}>
        {title}
      </MKTypography>
      <MKTypography variant="body2" color="text" mb={2}>
        {children}
      </MKTypography>
    </MKBox>
  );
}

// Typechecking props for the ListItem
ListItem.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default ListItem;
