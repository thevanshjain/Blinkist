import { fireEvent, render, screen } from '@testing-library/react';
import SearchLogo from './SearchLogo';


const mockClick= jest.fn();
test('search icon has clicked', () => {
  render(<SearchLogo onClick={mockClick}/>);
  const searchElement = screen.getByTestId('searchId');
  fireEvent.click(searchElement);
  expect(mockClick).toBeCalled();
});


