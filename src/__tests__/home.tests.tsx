import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../app/page';
import { RouterContext } from 'next/dist/shared/lib/router-context.shared-runtime';

describe('Home Component', () => {
  test('renders welcome message', () => {
    render(<Home />);
    const welcomeMessage = screen.getByText(/Welcome to my React Fundamentals Application/i);
    expect(welcomeMessage).toBeInTheDocument();
  });

  test('renders application description', () => {
    render(<Home />);
    const appDescription = screen.getByText(/This Application is designed to showcase the usage of basic React features/i);
    expect(appDescription).toBeInTheDocument();
  });

  test('renders start button with correct text', () => {
    render(
      <RouterContext.Provider value={{}}>
        <Home />
      </RouterContext.Provider>
    );
    const startButton = screen.getByText(/Start/i);
    expect(startButton).toBeInTheDocument();
  });

  test('redirects to authentication page when start button is clicked', () => {
    const pushMock = jest.fn();
    render(
      <RouterContext.Provider value={{ push: pushMock }}>
        <Home />
      </RouterContext.Provider>
    );
    const startButton = screen.getByText(/Start/i);
    startButton.click();
    expect(pushMock).toHaveBeenCalledWith('/authentication');
  });
});

