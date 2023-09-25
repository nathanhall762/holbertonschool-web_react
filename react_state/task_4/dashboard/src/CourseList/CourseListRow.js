import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";

// Define your styles with Aphrodite
const styles = StyleSheet.create({
  row: {
    backgroundColor: "#f5f5f5ab",
  },
  headerRow: {
    backgroundColor: "#deb5b545",
  },
  // th: {
  //   backgroundColor: "#deb5b545",
  // },
  rowChecked: {
    backgroundColor: "#e6e4e4",
  },
});

const CourseListRow = ({
  isHeader = false,
  textFirstCell,
  textSecondCell = null,
}) => {
  const rowStyle = isHeader ? styles.headerRow : styles.row;

  const [isChecked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!isChecked);
  };

  return (
    <tr className={css(rowStyle)}>
      {isHeader ? (
        textSecondCell === null ? (
          <th colSpan="2" className={css(styles.th)}>
            {textFirstCell}
          </th>
        ) : (
          <>
            <th className={css(styles.th)}>{textFirstCell}</th>
            <th className={css(styles.th)}>{textSecondCell}</th>
          </>
        )
      ) : (
        <>
          <td>
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            {textFirstCell}
          </td>
          <td>{textSecondCell}</td>
        </>
      )}
    </tr>
  );
};

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

export default CourseListRow;
