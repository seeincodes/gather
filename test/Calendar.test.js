import { render, screen } from '@testing-library/react';
import Calendar from './Calendar';

// Test suite for Calendar component
describe('Calendar', () => {
  // Test case for rendering Calendar component
  it('renders Calendar component', () => {
    render(<Calendar />);
    const linkElement = screen.getByText(/calendar/i);
    expect(linkElement).toBeInTheDocument();
  });

  // Test case for checking if Calendar component is interacting with the API
  it('interacts with the API', () => {
    const calendar = new Calendar();
    const openTime = calendar.findOpenTime();
    expect(openTime).toBeDefined();
  });

  // Test case for checking if Calendar component is finding an open time for users to meet
  it('finds an open time for users to meet', () => {
    const calendar = new Calendar();
    const openTime = calendar.findOpenTime();
    expect(openTime).toBeGreaterThan(Date.now());
  });
});