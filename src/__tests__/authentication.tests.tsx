import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Authentication from '../app/authentication/page';

describe('Authentication Component', () => {
  test('renders authentication page heading correctly', () => {
    render(<Authentication />);
    const heading = screen.getByText(/Authentication Page/i);
    expect(heading).toBeInTheDocument();
  });

  test('displays error message when invalid email is entered', () => {
    render(<Authentication />);
    const inputField = screen.getByPlaceholderText(/Enter your email/i);
    fireEvent.change(inputField, { target: { value: 'invalidemail' } });
    fireEvent.submit(screen.getByRole('button', { name: /submit/i }));
    const errorMessage = screen.getByText(/Invalid email format/i);
    expect(errorMessage).toBeInTheDocument();
  });

  test('displays error message when password is less than 6 characters', () => {
    render(<Authentication />);
    const inputField = screen.getByPlaceholderText(/Enter your password/i);
    fireEvent.change(inputField, { target: { value: '12345' } });
    fireEvent.submit(screen.getByRole('button', { name: /submit/i }));
    const errorMessage = screen.getByText(/Password must be at least 6 characters long/i);
    expect(errorMessage).toBeInTheDocument();
  });

  test('submits form and displays success message when valid credentials are entered', () => {
    render(<Authentication />);
    const emailInputField = screen.getByPlaceholderText(/Enter your email/i);
    const passwordInputField = screen.getByPlaceholderText(/Enter your password/i);
    fireEvent.change(emailInputField, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInputField, { target: { value: 'password123' } });
    fireEvent.submit(screen.getByRole('button', { name: /submit/i }));
  });
});
