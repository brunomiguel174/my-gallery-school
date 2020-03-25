import React from 'react';
import { Link } from 'react-router-dom';

const MinderaPage = () => {
  return (
    <div>
      <h1>Mindera Page</h1>
      <p>WE BUILD HIGH PERFORMANCE, RESILIENT AND SCALABLE SOFTWARE SYSTEMS TO ENABLE BUSINESSES ACROSS LOCATIONS.</p>
      <Link to="/galery">
        Go to my gallery
      </Link>
        <br></br>
      <Link to="/">
        Click me to go for home
      </Link>
    </div>
  )
};

export default MinderaPage;