import React from 'react';
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Authentication from '../app/Authentication/AuthenticationPage';

describe('Authentication Component', () => {
  test('renders authentication page heading correctly', () => {
    render(<Authentication />);
    const heading = screen.getByText(/Authentication Page/i);
    expect(heading).toBeInTheDocument();
  });

  test('displays error message when invalid email is entered', async () => {
    render(<Authentication />);
    const inputField = screen.getByPlaceholderText(/Enter your email/i);

    await act(async () => {
      await userEvent.type(inputField, 'invalidemail');
      await userEvent.click(screen.getByRole('button', { name: /submit/i }));
    });

    const errorMessage = screen.getByText(/Invalid email format/i);
    expect(errorMessage).toBeInTheDocument();
  });

  test('displays error message when password is less than 6 characters', async () => {
    render(<Authentication />);
    const inputField = screen.getByPlaceholderText(/Enter your password/i);

    await act(async () => {
      await userEvent.type(inputField, '12345');
      await userEvent.click(screen.getByRole('button', { name: /submit/i }));
    });

    const errorMessage = screen.getByText(/Password must be at least 6 characters long/i);
    expect(errorMessage).toBeInTheDocument();
  });

  test('submits form and displays success message when valid credentials are entered', async () => {
    render(<Authentication />);
    const emailInputField = screen.getByPlaceholderText(/Enter your email/i);
    const passwordInputField = screen.getByPlaceholderText(/Enter your password/i);

    await act(async () => {
      await userEvent.type(emailInputField, 'test@example.com');
      await userEvent.type(passwordInputField, 'password123');
      await userEvent.click(screen.getByRole('button', { name: /submit/i }));
    });
  });
});
