
import { fireEvent, render, screen } from '@testing-library/react';
import Tab from './Tab';
import "@testing-library/jest-dom/extend-expect";

jest.mock('@auth0/auth0-react', () => ({
  Auth0Provider: ({ children }) => children,
  withAuthenticationRequired: ((component, _) => component),
  useAuth0: () => {
    return {
      isLoading: false,
      user: { sub: "foobar" },
      isAuthenticated: true,
      loginWithRedirect: jest.fn()
    }
  }
}));


test('should have same heading', () => {
  render(<Tab />);
  const headingElement = screen.getAllByRole("button");
  expect(headingElement.length).toBe(4);
});
test('check explorer id', () => {
  render(<Tab />);
  const headingElement = screen.getByText(/add book/i);
  expect(headingElement).toBeInTheDocument();
});


test('has blinkist Logo', () => {
  render(<Tab />);
  const headingElement = screen.getByRole("img");
  expect(headingElement).toBeInTheDocument();
});

test('has search icon', () => {
  render(<Tab />);
  const headingElement = screen.getByTestId('searchId');
  fireEvent.click(headingElement);
});


test("explore button should be clicked",()=>{
  render(<Tab />)
  const explorer=screen.getByRole("button", { name: /My library/i} );
  fireEvent.click(explorer);
  expect(explorer).toBeInTheDocument();
})
test("form button should be clicked",()=>{
  render(<Tab />)
  const explorer=screen.getByRole("button", { name: /Add Book/i} );
  fireEvent.click(explorer);
  expect(explorer).toBeInTheDocument();
})

test("search input should enter value", async ()=>{
  render(<Tab/>)
  const headingElement = await screen.findByTestId('searchId');
  fireEvent.click(headingElement);
  const searchInput= await screen.findByPlaceholderText(/search/i);
  fireEvent.click(searchInput);
  fireEvent.change(searchInput, {target :{value: "How to Take"}});
  expect(searchInput.value).toBe("How to Take");
})
test("should show explore value", async ()=>{
  render(<Tab/>)
  
  const explorer=await screen.findByRole("button", { name: /explore/i} );
  fireEvent.click(explorer);
  const searchExplorer= await screen.findByRole("button",{name: /motivation/i});
  fireEvent.click(searchExplorer);  


})

