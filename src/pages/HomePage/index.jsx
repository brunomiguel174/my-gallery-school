import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <p>This is the home page</p>
      <Link to="/mindera">
        Click me to go for mindera
      </Link>
      <br></br>
      <Link to="/gallery">
        Go to my gallery
      </Link>
    </div>
  )
};

export default HomePage;