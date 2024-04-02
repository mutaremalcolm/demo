"use client"

import * as z from "zod";
import React, { useState } from 'react';

const inputSchema = z.string().min(3).max(16).regex(/^[A-Za-z\s]+$/);

function Authentication() {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    validateInput(value);
  };

  const validateInput = (value) => {
    try {
      inputSchema.parse(value);
      setError(null);
    } catch (validationError) {
      console.error('Validation failed:', validationError.errors);
      setError(validationError.errors[0].message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted value:', inputValue);
    setSubmitted(true);
  };

  return (
    <>
      <main className="h-[80vh] flex flex-col items-center justify-center gap-6 mx-auto">
        <h1 className="text-4xl">This is the Authentication Page</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Enter your text"
            className="border border-gray-300 text-black rounded-lg px-4 py-2 focus:outline-none focus:ring focus:border-blue-500"
          />
          {error && <div className="text-red-500">{error}</div>}
          <button
            type="submit"
            className="text-lg font-semibold rounded-lg px-4 py-2 bg-gradient-to-r from-green-400 to-blue-500 hover:-translate-y-1"
          >
            Submit
          </button>
        </form>
        {submitted ? (
          <p className="mt-4 text-xl">Text submitted! Thank You</p>
        ) : (
          <p className="mt-4 text-xl">Please enter text above (Numbers & Special Characters are not accepted) and click submit.</p>
        )}
      </main>
    </>
  );
}

export default Authentication;
