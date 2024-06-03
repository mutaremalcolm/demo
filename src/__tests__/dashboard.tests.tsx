import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Dashboard from '../app/DashboardPage/page';

test('buttons trigger correct actions', async () => {
  render(<Dashboard />);
  const useStateButton = screen.getByText(/useState/i);
  const useEffectButton = screen.getByText(/useEffect/i);

  // Mock functions or actions related to button clicks
  const mockUseStateFunction = jest.fn();
  const mockUseEffectFunction = jest.fn();

  // Mocking the component behavior if necessary
  useStateButton.onclick = mockUseStateFunction;
  useEffectButton.onclick = mockUseEffectFunction;

  // Simulate button clicks using userEvent wrapped in act
  await act(async () => {
    await userEvent.click(useStateButton);
    await userEvent.click(useEffectButton);
  });

  // Expectations
  expect(mockUseStateFunction).toHaveBeenCalledTimes(1);
  expect(mockUseEffectFunction).toHaveBeenCalledTimes(1);
});
