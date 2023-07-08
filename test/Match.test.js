// Importing necessary libraries and components
import { render, screen } from '@testing-library/react';
import Match from './Match';

// Test suite for Match component
describe('Match', () => {
  // Test case for rendering Match component without crashing
  test('renders Match component', () => {
    render(<Match />);
    const linkElement = screen.getByText(/match/i);
    expect(linkElement).toBeInTheDocument();
  });

  // Test case for checking if Match component displays user details correctly
  test('displays user details correctly', () => {
    const user1 = { name: 'John', location: 'New York', interests: ['Reading', 'Traveling'], values: ['Honesty', 'Kindness'], hobbies: ['Gardening'] };
    const user2 = { name: 'Jane', location: 'New York', interests: ['Reading', 'Cooking'], values: ['Honesty', 'Compassion'], hobbies: ['Baking'] };
    render(<Match user1={user1} user2={user2} />);
    expect(screen.getByText(/John/i)).toBeInTheDocument();
    expect(screen.getByText(/Jane/i)).toBeInTheDocument();
  });

  // Test case for checking if Match component displays match time correctly
  test('displays match time correctly', () => {
    const matchTime = new Date();
    render(<Match matchTime={matchTime} />);
    expect(screen.getByText(/matchTime/i)).toBeInTheDocument();
  });

  // Test case for checking if Match component displays match status correctly
  test('displays match status correctly', () => {
    const status = 'Within 48 hours';
    render(<Match status={status} />);
    expect(screen.getByText(/Within 48 hours/i)).toBeInTheDocument();
  });
});