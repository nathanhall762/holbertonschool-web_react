import React from "react";
import PropTypes from "prop-types";
import CourseListRow from "./CourseListRow";
import "./CourseList.css";
import CourseShape from "./CourseShape";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  CourseList: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    margin: "0 -10px",
  }
});

const CourseList = ({ listCourses = [] }) => {
  return (
    <table id="CourseList" >
      <thead>
        <CourseListRow textFirstCell="Available courses" isHeader={true} />
        <CourseListRow
          textFirstCell="Course name"
          textSecondCell="Credit"
          isHeader={true}
        />
      </thead>
      <tbody>
        {listCourses.length === 0 ? (
          <CourseListRow
            textFirstCell="No course available yet"
            isHeader={false}
          />
        ) : (
          listCourses.map((course) => (
            <CourseListRow
              key={course.id}
              textFirstCell={course.name}
              textSecondCell={String(course.credit)}
              isHeader={false}
            />
          ))
        )}
      </tbody>
    </table>
  );
};

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape)
};

CourseList.defaultProps = {
  listCourses: []
};

export default CourseList;
