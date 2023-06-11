import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Create User link', () => {
  render(<App />);
  const linkElements = screen.getAllByText(/Create User/i);
  expect(linkElements.length).toBeGreaterThan(0);
});
