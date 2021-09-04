import { render, screen } from '@testing-library/react';
import Header from './Header';

test('should have same heading', () => {
  render(<Header heading="Health"/>);
  const headingElement = screen.getByText(/health/i);
  expect(headingElement).toBeInTheDocument();
});


it('should have same heading passed in props', () => {
  render(<Header heading="Autobiography"/>);
  const headingElement = screen.getByTestId("head");
  expect(headingElement).toBeInTheDocument();
});


