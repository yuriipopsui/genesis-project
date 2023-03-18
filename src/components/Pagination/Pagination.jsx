import React from "react";
import styles from "./Pagination.module.scss";
import classnames from "classnames";

const Pagination = ({ page, setPage, courses }) => {
  const maxPages = Math.ceil(courses.length / 10);
  const pages = [];

  for (let i = 1; i < maxPages + 1; i++) {
    pages.push(i); // getting all pages like [1, 2, 3 etc...]
  }

  return (
    <div className={styles.pagination}>
      <button
        className={styles.pagination__left}
        onClick={() => {
          page !== 1 && setPage(page - 1);
        }}
      >
        {"<"}
      </button>
      {pages.map(
        (
          e // e = number of page
        ) => (
          <button
            key={e}
            className={classnames(
              styles.pagination__page,
              e === page && styles["pagination--active"]
            )}
            onClick={() => {
              setPage(e);
              console.log(page === e);
            }}
          >{`${e} `}</button>
        )
      )}
      <button
        className={styles.pagination__right}
        onClick={() => {
          page !== maxPages && setPage(page + 1);
        }}
      >
        {">"}
      </button>
    </div>
  );
};

export default Pagination;
