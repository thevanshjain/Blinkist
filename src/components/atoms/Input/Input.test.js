import { fireEvent, render, screen } from '@testing-library/react';
import CustomInput from './CustomInput';

test('Input tag has value', () => {
  render(<CustomInput />);
  const inputElement = screen.getByRole("textbox")
  fireEvent.change(inputElement, {target : {value: "blinkist"}});
  expect(inputElement.value).toBe("blinkist");
});


