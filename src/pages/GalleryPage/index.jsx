import React from 'react';
import { Link } from 'react-router-dom';

const GalleryPage = () => {
  return (
    <div>
      <h1>Gallery Page</h1>
      😀😃😁😆😂😊
      <br></br>
      <Link to="/">
        Click me to go for home
      </Link>
      <br></br>
      <Link to="/mindera">
        Click me to go for mindera
      </Link>
    </div>
  )
};

export default GalleryPage;