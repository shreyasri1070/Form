import React from 'react'
import { useLocation } from 'react-router-dom';

function Success() {
    const location = useLocation();
    const { formData } = location.state || {};
    return (
      <div>
        <h2>Success!</h2>
        <p>Submitted Data:</p>
        <pre>{JSON.stringify(formData, null, 2)}</pre>
      </div>
    );
  }
  
  export default Success;