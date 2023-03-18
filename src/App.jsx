import { Suspense, useState, useEffect } from "react";
import Loader from "./components/Loader/Loader";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import { routes } from "./config/router";
import { getCourses } from "./services/courses.service";

function App() {
  const [courses, setCourses] = useState([]);
  const [pageCourses, setPageCourses] = useState([]);
  const [page, setPage] = useState(1);

  const fetchCourses = async () => {
    const res = await getCourses().then((res) => res);
    const filtered = res.slice(
      page === 1 ? 0 : (page - 1) * 10,
      page === 1 ? 10 :  (page -1) * 10 + 10
    );  
    setCourses(res)
    setPageCourses(filtered)
  };

  useEffect(() => {
    fetchCourses();
  }, [page]);

  return (
    <>
      <Suspense fallback={<Loader />}>
        {/* <Header></Header> */}
        <Routes>
          {routes.map(({ Component, ...route }) => (
            <Route
              {...route}
              element={
                <Component
                  page={page}
                  setPage={setPage}
                  courses={courses}
                  setCourses={setCourses}
                  pageCourses={pageCourses}
                />
              }
            />
          ))}
        </Routes>
        {/* <Footer></Footer> */}
      </Suspense>
    </>
  );
}

export default App;
