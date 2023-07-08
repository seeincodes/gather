// Importing necessary libraries and components
import { render, screen } from '@testing-library/react';
import User from './User';

// Test suite for User component
describe('User', () => {
  // Test case for rendering User component
  test('renders User component', () => {
    render(<User />);
    const linkElement = screen.getByText(/user/i);
    expect(linkElement).toBeInTheDocument();
  });

  // Test case for checking the presence of name property
  test('has a name property', () => {
    const user = new User('John Doe', 'New York', ['Reading'], 'Honesty', ['Football']);
    expect(user.name).toBe('John Doe');
  });

  // Test case for checking the presence of location property
  test('has a location property', () => {
    const user = new User('John Doe', 'New York', ['Reading'], 'Honesty', ['Football']);
    expect(user.location).toBe('New York');
  });

  // Test case for checking the presence of interests property
  test('has an interests property', () => {
    const user = new User('John Doe', 'New York', ['Reading'], 'Honesty', ['Football']);
    expect(user.interests).toEqual(['Reading']);
  });

  // Test case for checking the presence of values property
  test('has a values property', () => {
    const user = new User('John Doe', 'New York', ['Reading'], 'Honesty', ['Football']);
    expect(user.values).toBe('Honesty');
  });

  // Test case for checking the presence of hobbies property
  test('has a hobbies property', () => {
    const user = new User('John Doe', 'New York', ['Reading'], 'Honesty', ['Football']);
    expect(user.hobbies).toEqual(['Football']);
  });
});