import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import Authentication from '../app/authentication/page';

test('renders authentication page with input field and submit button', () => {
  render(<Authentication />);
  const inputElement = screen.getByPlaceholderText('Enter your text');
  expect(inputElement).toBeInTheDocument();
  const submitButton = screen.getByText('Submit');
  expect(submitButton).toBeInTheDocument();
});

test('submits form when valid text is entered', () => {
  render(<Authentication />);
  const inputElement = screen.getByPlaceholderText('Enter your text');
  fireEvent.change(inputElement, { target: { value: 'Valid text' } });
  fireEvent.submit(screen.getByRole('button', { name: 'Submit' }));
  const successMessage = screen.getByText('Text submitted! Thank You');
  expect(successMessage).toBeInTheDocument();

});