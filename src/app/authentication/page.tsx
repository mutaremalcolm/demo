"use client";

import * as z from "zod";
import toast, { Toaster } from 'react-hot-toast';
import { useState, ChangeEvent, FormEvent } from 'react';
import { Header } from "../../components/Header/Header";
import { Card, CardHeader } from "@/components/ui/card";

interface InputChangeEvent extends ChangeEvent<HTMLInputElement> {}

type ValidationMessage = string | null;

const emailSchema = z.string()
  .email({ message: "Invalid email format" });

const passwordSchema = z.string()
  .min(6, { message: "Password must be at least 6 characters long" })
  .max(16, { message: "Password must be at most 16 characters long" })
  .regex(/^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]+$/, { 
    message: "Password must contain at least one uppercase letter, one number, and one special character" 
  });

function Authentication() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState<ValidationMessage>(null);
  const [passwordError, setPasswordError] = useState<ValidationMessage>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleEmailChange = (e: InputChangeEvent) => {
    const value = e.target.value;
    setEmail(value);
    validateEmail(value);
  };

  const handlePasswordChange = (e: InputChangeEvent) => {
    const value = e.target.value;
    setPassword(value);
    validatePassword(value);
  };

  const validateEmail = (value: string) => {
    try {
      emailSchema.parse(value);
      setEmailError(null);
    } catch (validationError) {
      if (validationError instanceof z.ZodError) {
        setEmailError(validationError.errors[0].message);
      }
    }
  };

  const validatePassword = (value: string) => {
    try {
      passwordSchema.parse(value);
      setPasswordError(null);
    } catch (validationError) {
      if (validationError instanceof z.ZodError) {
        setPasswordError(validationError.errors[0].message);
      }
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (email.trim() === '' || password.trim() === '') {
      return;
    }
    setSubmitted(true);
    toast.success("Authentication successful! Proceeding to the Dashboard")
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6 mx-auto px-4 lg:px-8 bg-white">
      <Card className="border-sky-600">
        <section className="mt-20 mb-10 ml-20 mr-20">
          <Header
            title="Authentication page"
            subtitle="This page demonstrates how to handle input validation during the authentication"
          />
        </section> 
        <div className="flex justify-center">
          <Card className="w-full max-w-md mt-5 mb-5 rounded-lg bg-sky-600">
            <form onSubmit={handleSubmit} className="p-6">
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Enter your email"
                className="border border-gray-300 text-black rounded-lg px-4 py-2 w-full focus:outline-none focus:ring focus:border-blue-500"
              />
              {emailError && <div className="text-red-500">{emailError}</div>}
              <input
                type="password"
                value={password}
                onChange={handlePasswordChange}
                placeholder="Enter your password"
                className="border border-gray-300 text-black rounded-lg px-4 py-2 w-full focus:outline-none focus:ring focus:border-blue-500 mt-2"
              />
              {passwordError && <div className="text-red-500">{passwordError}</div>}
              <button
                type="submit"
                className="mt-2 text-lg font-semibold rounded-lg px-4 py-2 w-full bg-gradient-to-r from-green-400 to-blue-500
                hover:bg-sky-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-11 duration-300"
              >
                Submit
              </button>
            </form>
            {submitted ? (
              <p className="mt-4 text-lg"></p>
            ) : (
              <p className="mt-2 text-sm text-center mb-3">Please enter your email and password</p>
            )}
          </Card>
        </div>
      </Card>
    </main>
  );
}

export default Authentication;
