import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className="error-page section">
      <div className="error-container">
        <h1>oops! It's a dead end</h1>
        <Link to="/" className="btn btn-primary">
          Back home
        </Link>
      </div>
    </div>
  );
};

export default Error;
