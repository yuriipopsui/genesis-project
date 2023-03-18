import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCourseById } from "../../services/courses.service";
import Lessons from "../../components/Lessons/Lessons";
import styles from "./CoursePage.module.scss";

const CoursePage = () => {
  const [data, setData] = useState({});
  const { courseId } = useParams();

  const getById = async () => {
    setData(await getCourseById(courseId));
  };

  useEffect(() => {
    getById();
  }, []);

  return (
    <div className={styles.course}>
      <img
        src={
          !data.previewImageLink // setting a hollow image while loading a normal
            ? "https://wisey.app/assets/images/web/lessons-covers/lack-of-motivation-how-to-overcome-it/lesson-4/lesson-4.webp"
            : `${data.previewImageLink}/cover.webp`
        }
        alt="course image"
        className={styles.course__image}
      />
      <div className={styles.course__info_wrapper}>
        <h3 className={styles.course__title}>{data.title}</h3>
        <h3 className={styles.course__description}>{data.description}</h3>
      </div>
      <div className={styles.course__lessons_wrapper}>
        <Lessons data={data.lessons}></Lessons>
      </div>
    </div>
  );
};

export default CoursePage;
