import React from 'react';
import { Link } from 'react-router-dom';

export default function Terms() {
  return (
    <div>
      <h2>Terms and conditions</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora in
        eligendi repudiandae nemo cumque reprehenderit aliquam repellat porro
        alias libero.
        <p>
          Go Back To <Link to="/register">Register</Link>
        </p>
      </p>
    </div>
  );
}
