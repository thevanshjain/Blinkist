import { render, screen } from '@testing-library/react';
import AvatarOnBar from './AvatarOnBar';

const user={
  given_name: "Vansh"
}

test('Avatar testing', () => {
  render(<AvatarOnBar />);
  const avatarElement = screen.getByText(/avatar/i)
  expect(avatarElement).toBeInTheDocument();
});

test('Avatar branch testing if user exist', () => {
  render(<AvatarOnBar user={user}/>);
  const avatarElement = screen.getByText(/avatar/i)
  expect(avatarElement).toBeInTheDocument();
});


test('Avatar branch testing if user  not exist', () => {
  render(<AvatarOnBar user="undefined"/>);
  const avatarElement = screen.getByText(/avatar/i)
  expect(avatarElement).toBeInTheDocument();
});




