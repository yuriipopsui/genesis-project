import React from "react";
import Courses from "../../components/Courses/Courses";
import Pagination from "../../components/Pagination/Pagination";

const CoursesPage = ({page, setPage, courses, setCourses, pageCourses}) => {

  return (
    <div>
      <Courses page={page} setPage={setPage} courses={courses} setCourses={setCourses} pageCourses={pageCourses}/>
      <Pagination page={page} setPage={setPage} courses={courses} setCourses={setCourses}/>
    </div>
  );
};

export default CoursesPage;
