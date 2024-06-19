"use client"; 

import React, { useState } from 'react';
import Form from '@/components/Form/Form';

const FormHandler: React.FC = () => {
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = () => {
    // Simulate form submission
    setTimeout(() => {
      setSuccessMessage('Post submitted successfully!');
      // Clear the success message after a delay
      setTimeout(() => setSuccessMessage(''), 2000);
    }, 1000);
  };

  return (
    <div className="container mx-auto">
      <Form handleSubmit={handleSubmit} />
      {successMessage && (
        <p className="text-green-500 text-center my-2">{successMessage}</p>
      )}
    </div>
  );
};

export default FormHandler;