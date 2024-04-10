import { render, screen, fireEvent } from '@testing-library/react';
import Authentication from '../app/authentication/page';

describe('Authentication Component', () => {
  test('renders authentication page heading correctly', () => {
    render(<Authentication />);
    const heading = screen.getByText(/Authentication Page/i);
    expect(heading).toBeInTheDocument();
  });

  test('displays error message when invalid name is entered', () => {
    render(<Authentication />);
    const inputField = screen.getByPlaceholderText(/Enter your name/i);
    fireEvent.change(inputField, { target: { value: '123' } });
    fireEvent.submit(screen.getByRole('button', { name: /submit/i }));
    const errorMessage = screen.getByText(/Name must be at least 3 characters long/i);
    expect(errorMessage).toBeInTheDocument();
  });

  test('submits form and displays success message when valid name is entered', () => {
    render(<Authentication />);
    const inputField = screen.getByPlaceholderText(/Enter your name/i);
    fireEvent.change(inputField, { target: { value: 'John Doe' } });
    fireEvent.submit(screen.getByRole('button', { name: /submit/i }));
    const successMessage = screen.getByText(/Name Valid!! Please proceed to the Dashboard/i);
    expect(successMessage).toBeInTheDocument();
  });
});
