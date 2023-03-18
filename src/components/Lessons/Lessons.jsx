import React, { useEffect, useRef } from "react";
import styles from "./Lessons.module.scss";
import LessonCard from "../LessonCard/LessonCard";
import Loader from "../Loader/Loader";

const Lessons = ({ data }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    const handleTimeUpdate = () => {
      localStorage.setItem("video_progress", video.currentTime);
      setProgress(video.currentTime);
    };
    video.addEventListener("timeupdate", handleTimeUpdate);
    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, []);

  return (
    <div className={styles.lessons} ref={videoRef}>
      {!data ? (
        <Loader />
      ) : (
        data.map((e) => {
          return <LessonCard key={e.id} data={e} />;
        })
      )}
    </div>
  );
};

export default Lessons;
