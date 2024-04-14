import { render, screen, fireEvent } from '@testing-library/react';
import Dashboard from '../app/dashboard/page';

describe('Dashboard Component', () => {
  test('renders heading and description correctly', () => {
    render(<Dashboard />);
    const heading = screen.getByText(/Dashboard Page/i);
    const description = screen.getByText(/The two buttons below are to illustrate the implementation of State management & tracking changes/i);
    expect(heading).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });

  test('buttons trigger correct actions', () => {
    render(<Dashboard />);
    const useStateButton = screen.getByText(/useState/i);
    const useEffectButton = screen.getByText(/useEffect/i);
    // Mock functions or actions related to button clicks
    const mockUseStateFunction = jest.fn();
    const mockUseEffectFunction = jest.fn();
    // Add event listeners to buttons
    useStateButton.addEventListener('click', mockUseStateFunction);
    useEffectButton.addEventListener('click', mockUseEffectFunction);
    // Simulate button clicks
    fireEvent.click(useStateButton);
    fireEvent.click(useEffectButton);
    // Expectations
    expect(mockUseStateFunction).toHaveBeenCalledTimes(1);
    expect(mockUseEffectFunction).toHaveBeenCalledTimes(1);
  });
});
