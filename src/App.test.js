import { render, screen } from '@testing-library/react';
import App from './App';

test('should have id appContainer', () => {
  render(<App />)
  const headingElement = screen.getByTestId("appContainer");
  expect(headingElement).toBeInTheDocument();
});

