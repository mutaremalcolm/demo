import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Home from '../app/page';

describe('Home component', () => {
  test('renders the main heading', () => {
    render(<Home />);
    const mainHeading = screen.getByRole('heading', { name: /Today's Menu/i });
    expect(mainHeading).toBeInTheDocument();
  });

  test('renders the documentation link', () => {
    render(<Home />);
    const docsLink = screen.getByRole('link', { name: /Docs/i });
    expect(docsLink).toBeInTheDocument();
    expect(docsLink).toHaveAttribute('href', 'https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app');
  });
});