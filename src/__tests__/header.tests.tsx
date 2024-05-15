import React from 'react';
import { render, screen } from '@testing-library/react';
import { Header } from '@/app/components/Header/Header';

describe('Header Component', () => {
  test('renders title correctly', () => {
    const title = 'Test Title';
    const subtitle = 'Test Subtitle';
    render(<Header title={title} subtitle={subtitle} />);
    const titleElement = screen.getByText(title);
    expect(titleElement).toBeInTheDocument();
  });

  test('renders subtitle correctly', () => {
    const title = 'Test Title';
    const subtitle = 'Test Subtitle';
    render(<Header title={title} subtitle={subtitle} />);
    const subtitleElement = screen.getByText(subtitle);
    expect(subtitleElement).toBeInTheDocument();
  });

  test('renders with the correct CSS classes', () => {
    const title = 'Test Title';
    const subtitle = 'Test Subtitle';
    render(<Header title={title} subtitle={subtitle} />);
    const headerElement = screen.getByRole('main');
    expect(headerElement).toHaveClass('flex', 'flex-col', 'items-center', 'justify-center');
  });
});
