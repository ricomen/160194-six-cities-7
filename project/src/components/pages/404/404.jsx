import React from 'react';
import {Link} from 'react-router-dom';

function NotFound() {
  return (
    <>
      <h1>Page not found</h1>
      <Link to='/'>To main</Link>
    </>
  );
}

export default NotFound;
