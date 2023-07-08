import { render, screen } from '@testing-library/react';
import App from '../src/App';
import User from '../src/User';
import Match from '../src/Match';
import Calendar from '../src/Calendar';

// Test for App component
test('renders App component', () => {
  render(<App />);
  const appElement = screen.getByTestId('app');
  expect(appElement).toBeInTheDocument();
});

// Test for User component
test('renders User component', () => {
  const user = new User('John Doe', 'New York', ['Reading'], 'Honesty', ['Football']);
  expect(user).toBeDefined();
});

// Test for Match component
test('renders Match component', () => {
  const user1 = new User('John Doe', 'New York', ['Reading'], 'Honesty', ['Football']);
  const user2 = new User('Jane Doe', 'New York', ['Writing'], 'Kindness', ['Basketball']);
  const match = new Match(user1, user2);
  expect(match).toBeDefined();
});

// Test for Calendar component
test('renders Calendar component', () => {
  const calendar = new Calendar();
  expect(calendar).toBeDefined();
});