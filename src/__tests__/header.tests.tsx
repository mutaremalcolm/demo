import React from 'react';
import { render, screen } from '@testing-library/react';
import { Header } from '../components/Header/Header';

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

  test('updates title and subtitle when props change', async () => {
    const initialTitle = 'Initial Title';
    const initialSubtitle = 'Initial Subtitle';
    const { rerender } = render(<Header title={initialTitle} subtitle={initialSubtitle} />);
    
    const newTitle = 'New Title';
    const newSubtitle = 'New Subtitle';
    rerender(<Header title={newTitle} subtitle={newSubtitle} />);

    expect(screen.queryByText(initialTitle)).not.toBeInTheDocument();
    expect(screen.queryByText(initialSubtitle)).not.toBeInTheDocument();
    expect(screen.getByText(newTitle)).toBeInTheDocument();
    expect(screen.getByText(newSubtitle)).toBeInTheDocument();
  });
});
