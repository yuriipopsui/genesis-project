import axios from "axios";
import "../config/axios"

export const getCourses = (page) => {
  return axios
    .get(
      `/core/preview-courses?token=${import.meta.env.VITE_TOKEN}`
    )
    .then((res) => {
      return res.data.courses
    });
};

export const getCourseById = (id) => {
  return axios.get(`/core/preview-courses/${id}?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIwOGU0ZWI2ZS0wYjBlLTQ1ZmEtYTkwMC01YzNlZWEzNmI0ZmMiLCJwbGF0Zm9ybSI6InN1YnNjcmlwdGlvbnMiLCJpYXQiOjE2NzkwNzkwNjAsImV4cCI6MTY3OTk3OTA2MH0.HfmesBGqoaYf_imerqZR18xO_ga7UkI8LteWrPooUIs`).then((res) => {
    return res.data;
  });
};
