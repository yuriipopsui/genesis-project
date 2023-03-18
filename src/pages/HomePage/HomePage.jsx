import React from 'react';
import { Navigate } from 'react-router-dom';
import urls from '../../config/urls';

const HomePage = () => {
  return (
    <Navigate to={urls.courses} replace={true} /> // navigating user to courses by default
  );
};

export default HomePage;