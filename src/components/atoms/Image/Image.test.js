import { render, screen } from '@testing-library/react';
import Image from './Image';
import {img} from './Image.png';

test('should have image tag', () => {
  render(<Image alt="testingLogo" src={img}/>);
  const imageElement = screen.getByRole("img")
  expect(imageElement).toBeInTheDocument();
});




