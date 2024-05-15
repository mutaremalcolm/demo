import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import UseEffectDemo from '@/app/useEffect/page';

describe('UseEffectDemo Component', () => {
  test('renders page title correctly', () => {
    render(<UseEffectDemo />);
    const title = screen.getByText(/This is the useEffect Page/i);
    expect(title).toBeInTheDocument();
  });

  test('renders page subtitle correctly', () => {
    render(<UseEffectDemo />);
    const subtitle = screen.getByText(/This page demonstrates how useEffect works in React!!!/i);
    expect(subtitle).toBeInTheDocument();
  });

  test('renders color-changing button correctly', () => {
    render(<UseEffectDemo />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });
  });

