import classnames from "classnames";
import React from "react";
import styles from "./CourseCard.module.scss";
import { useNavigate } from "react-router-dom";

const CourseCard = ({ data }) => {
  const navigate = useNavigate();

  const onClickHandler = () => {
    return navigate(`/course/${data.id}`);
  };

  return (
    <div className={styles.card} onClick={onClickHandler}>
      <img
        src={data.previewImageLink + "/cover.webp"}
        alt="course image"
        className={styles.card__image}
      />
      <h3 className={styles.card__title}>{data.title}</h3>
      <div className={styles.card__text_wrapper}>
        <p className={styles.card__info}>
          Lessons:{" "}
          <span
            className={classnames(
              styles["card__info--rating"],
              data.lessonsCount >= 10
                ? styles["card__info--red"]
                : data.rating >= 5
                  ? styles["card__info--yellow"]
                  : styles["card__info--green"]
            )}
          >
            {data.lessonsCount}
          </span>{" "}
          Rating:{" "}
          <span
            className={classnames(
              styles["card__info--rating"],
              data.rating >= 4
                ? styles["card__info--green"]
                : data.rating >= 2.5
                  ? styles["card__info--yellow"]
                  : styles["card__info--red"]
            )}
          >
            {data.rating}
          </span>{" "}
        </p>
        <span className={styles["card__info--skill_title"]}>Skills: </span>
        {data.meta.skills.map((skill, i, { length }) => {
          if (length - 1 === i) {
            return (
              <span key={i} className={styles["card__info--skills"]}>{skill}</span>
            );
          }

          return (
            <span key={i} className={styles["card__info--skills"]}>{skill}, </span>
          );
        })}
      </div>
    </div>
  );
};

export default CourseCard;
