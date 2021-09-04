import { fireEvent, render, screen } from '@testing-library/react';
import StatusTabs from './StatusTabs';

test('should render status tabs', async () => {
  render(<StatusTabs explorerStatus="null" search="null"/>)

 const statusElement = screen.getByTestId('cardInStatus');

  expect(statusElement).toBeInTheDocument();
});




test('should change status from current to finish', async () => {
  render(<StatusTabs explorerStatus="" search=""/>)

 const statusElement = await screen.findAllByText(/finished reading/i);
 fireEvent.click(statusElement[0]);

});








test('should change status from finish to current', async () => {
  render(<StatusTabs explorerStatus="" search=""/>)

 const statusElement = await screen.findByText(/Finished/i);
  fireEvent.click(statusElement);
  const finishedElement = await screen.findAllByText(/read again/i);
  fireEvent.click(finishedElement[0]);
  // expect(clickReadAgainButton.length).toBe(6);

});
