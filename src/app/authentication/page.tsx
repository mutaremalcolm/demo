"use client";

import * as z from "zod";
import toast, { Toaster } from 'react-hot-toast';
import { useState, ChangeEvent, FormEvent } from 'react';

interface InputChangeEvent extends ChangeEvent<HTMLInputElement> {}

type ValidationMessage = string | null;

const inputSchema = z.string()
  .min(3, { message: "Name must be at least 3 characters long" })
  .max(16, { message: "Name must be at most 16 characters long" })
  .regex(/^[A-Za-z\s]+$/, { message: "Name can only contain letters and spaces" });


function Authentication() {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState<ValidationMessage>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: InputChangeEvent) => {
    const value = e.target.value;
    setInputValue(value);
    validateInput(value);
  };

  const validateInput = (value: string) => {
    try {
      inputSchema.parse(value);
      setError(null);
    } catch (validationError) {
      if (validationError instanceof z.ZodError) {
        setError(validationError.errors[0].message);
      }
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (inputValue.trim() === '') {
      return;
    }
    setSubmitted(true);
    toast.success("Name Valid!! Please proceed to the Dashboard")
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
          className="border border-gray-300 text-black rounded-lg px-4 py-2 w-full focus:outline-none 
          focus:ring focus:border-blue-500"
        />
        {error && <div className="text-red-500">{error}</div>}
        <button
          type="submit"
          className="mt-2 text-lg font-semibold rounded-lg px-4 py-2 w-full bg-gradient-to-r from-green-400
           to-blue-500"
        >
          Submit
        </button>
      </form>
      {submitted ? (
        <p className="mt-4 text-xl">Name Valid!! Please proceed to the Dashboard</p>
      ) : (
        <p className="mt-4 text-xl text-center">Please enter your name (Numbers & Special Characters are not accepted) and click submit.</p>
      )}
    </main>
  );
}

export default Authentication;
