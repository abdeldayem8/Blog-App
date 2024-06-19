
"use client"; 

import React, { useState } from 'react';

// define props that component expects
interface FormProps {
  handleSubmit: (title: string, body: string) => void;
}

const Form: React.FC<FormProps> = ({ handleSubmit }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  
  
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    // submit the form and clear inputs
    event.preventDefault();
    handleSubmit(title, body);
    setTitle('');
    setBody('');
  };

  return (
    // form and inputs
    <form id="form" method="post" onSubmit={onSubmit} className="max-w-lg mx-auto p-4 bg-white rounded shadow-md">
      <div className="mb-4">
        <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Add Title"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="body" className="block text-gray-700 text-sm font-bold mb-2">
          Body
        </label>
        <textarea
          id="body"
          name="body"
          placeholder="Add Body"
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
        />
      </div>
      
      <button type="submit" className="w-full bg-indigo-500 text-white py-2 rounded hover:bg-indigo-600">
        Submit
      </button>
    </form>
  );
};

export default Form;

