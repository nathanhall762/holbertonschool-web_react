import React from 'react';
import PropTypes from 'prop-types';

// Define your styles as constants
const rowStyle = { backgroundColor: "#f5f5f5ab" };
const headerRowStyle = { backgroundColor: "#deb5b545" };

const CourseListRow = ({ isHeader = false, textFirstCell, textSecondCell = null }) => {
  const appliedStyle = isHeader ? headerRowStyle : rowStyle; // Choose the style based on `isHeader`

  return (
    <tr style={appliedStyle}>
      {isHeader ? (
        textSecondCell === null ? (
          <th colSpan="2" style={headerRowStyle}>{textFirstCell}</th>
        ) : (
          <>
            <th>{textFirstCell}</th>
            <th>{textSecondCell}</th>
          </>
        )
      ) : (
        <>
          <td>{textFirstCell}</td>
          <td>{textSecondCell}</td>
        </>
      )}
    </tr>
  );
};

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

export default CourseListRow;
