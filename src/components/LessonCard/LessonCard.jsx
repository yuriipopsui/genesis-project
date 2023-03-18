import React, { useEffect, useState, useRef } from "react";
import styles from "./LessonCard.module.scss";
import ReactHlsPlayer from "@ducanh2912/react-hls-player";

function str_pad_left(string, pad, length) {
  return (new Array(length + 1).join(pad) + string).slice(-length);
}

const LessonCard = ({ data }) => {
  const [progress, setProgress] = useState(0);
  const videoRef = useRef(null);

  let time = data.duration;
  const minutes = Math.floor(time / 60);
  const seconds = time - minutes * 60;
  const hours = Math.floor(time / 3600);
  time = time - hours * 3600;
  const finalTime =
    str_pad_left(minutes, "0", 2) + ":" + str_pad_left(seconds, "0", 2);

  useEffect(() => {
    const savedProgress = localStorage.getItem(`vid_progress${data.id}`);
    if (savedProgress) {
      setProgress(savedProgress);
      if (videoRef.current) {
        videoRef.current.currentTime = progress;
      }
    }
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = localStorage.getItem(
        `vid_progress${data.id}`
      );
    }
  }, [videoRef.current]);

  return (
    <div className={styles.lesson}>
      {data.status === "locked" ? (
        <img
          src={`${data.previewImageLink}/lesson-${data.order}.webp`}
          alt="lesson preview"
          className={styles.lesson__image}
        />
      ) : (
        <ReactHlsPlayer
          src={`${data.link}`}
          autoPlay={false}
          controls
          width="100%"
          height="auto"
          playerRef={videoRef}
          onTimeUpdate={() => {
            localStorage.setItem(
              `vid_progress${data.id}`,
              videoRef.current.currentTime - 5 // so the user can remember what the video was about (last 5 seconds)
            );
            setProgress(videoRef.current.currentTime - 5);
          }}
          className={styles.leson__image}
        />
      )}
      <h3 className={styles.lesson__title}>
        Lesson {data.order}: {data.title}
      </h3>
      <p className={styles.lesson__info}>
        {" "}
        <span>{finalTime}</span>{" "}
        <span>Status: {data.status.toUpperCase()}</span>
      </p>
    </div>
  );
};

export default LessonCard;
