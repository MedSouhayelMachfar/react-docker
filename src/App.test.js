import { render, screen } from '@testing-library/react';
import App from './App';

test('check for word Hello inside the App component', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hello/i);
  expect(linkElement).toBeInTheDocument();
});

test('check for word World inside the App component', () => {
  render(<App />);
  const linkElement = screen.getByText(/World/i);
  expect(linkElement).toBeInTheDocument();
});