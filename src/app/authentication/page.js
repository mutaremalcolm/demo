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

      setError(validationError.errors[0].message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === '') {
      return;
    }
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6 mx-auto px-4 lg:px-8">
      <h1 className="text-4xl text-center lg:text-6xl">This is the Authentication Page</h1>
      <form onSubmit={handleSubmit} className="max-w-md w-full">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter your name"
          className="border border-gray-300 text-black rounded-lg px-4 py-2 w-full focus:outline-none focus:ring focus:border-blue-500"
        />
        {error && <div className="text-red-500">{error}</div>}
        <button
          type="submit"
          className="mt-2 text-lg font-semibold rounded-lg px-4 py-2 w-full bg-gradient-to-r from-green-400 to-blue-500 hover:-translate-y-1"
        >
          Submit
        </button>
      </form>
      {submitted ? (
        <p className="mt-4 text-xl">Name Valid!! Thank You</p>
      ) : (
        <p className="mt-4 text-xl text-center">Please enter your name (Numbers & Special Characters are not accepted) and click submit.</p>
      )}
    </main>
  );
}

export default Authentication;
