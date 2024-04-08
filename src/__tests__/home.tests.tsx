import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Authentication from '@/app/authentication/page';

describe('Authentication Component', () => {
  it('renders correctly', () => {
    const { getByText, getByPlaceholderText } = render(<Authentication />);
    
    expect(getByText('Authentication Page')).toBeInTheDocument();
    expect(getByPlaceholderText('Enter your name')).toBeInTheDocument();
    expect(getByText('Submit')).toBeInTheDocument();
    expect(getByText('Please enter your name')).toBeInTheDocument();
  });

  it('displays error message for invalid input', () => {
    const { getByText, getByPlaceholderText } = render(<Authentication />);
    const input = getByPlaceholderText('Enter your name');
    
    fireEvent.change(input, { target: { value: '123' } }); // Invalid input
    
    fireEvent.click(getByText('Submit'));
    
    expect(getByText('Name must be at least 3 characters long')).toBeInTheDocument();
  });

  it('submits form with valid input', () => {
    const { getByText, getByPlaceholderText } = render(<Authentication />);
    const input = getByPlaceholderText('Enter your name');
    
    fireEvent.change(input, { target: { value: 'John Doe' } }); // Valid input
    
    fireEvent.click(getByText('Submit'));
    
    expect(getByText('Name Valid!! Please proceed to the Dashboard')).toBeInTheDocument();
  });
});
