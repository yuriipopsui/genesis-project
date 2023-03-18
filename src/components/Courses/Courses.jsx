import React from "react";
import CourseCard from "../CourseCard/CourseCard";
import Loader from "../Loader/Loader";
import styles from "./Courses.module.scss";

const Courses = ({ pageCourses }) => {
  return (
    <div className={styles.container}>
      {!pageCourses.length ? (
        <Loader />
      ) : (
        pageCourses.map((e) => <CourseCard key={e.id} data={e} />)
      )}
    </div>
  );
};

export default Courses;
