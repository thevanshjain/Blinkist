import { Auth0Provider } from '@auth0/auth0-react';
import { fireEvent, render, screen } from '@testing-library/react';
import BarButton from './BarButton';
import CustomButton from './CustomButton';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

describe("Testing Button", ()=>{
  it('should have same value in bar button', () => {
    render(<BarButton  value="Click me"/>);
    const barButtonElement = screen.getByRole("button");
    expect(barButtonElement.textContent).toBe("Click me");
  });


  const mockClicking=jest.fn();
  test('custom button should be clickable',()=>{
      render(<CustomButton click={mockClicking} value="Custom"/>)
      const customButtonClicked= screen.getByRole("button");
      fireEvent.click(customButtonClicked);
      expect(mockClicking).toBeCalled();

  });
  const logoutAuth= () => {
    return(
      <Auth0Provider>
        <LogoutButton />
      </Auth0Provider>
    );
  }
  describe("testing log in/out button",()=>{
    it('login in button has value', () => {
      render(<LoginButton />);
      const loginButtonElement = screen.getByRole("button");
      expect(loginButtonElement.textContent).toBe("Log In");
    });

    test('login  button has clicked', () => {
      render(<LoginButton click={mockClicking}/>)
      const loginButtonElement = screen.getByRole("button");
      fireEvent.click(loginButtonElement);
      expect(mockClicking).toHaveBeenCalled();
    });
    
    test('login out button has value', () => {
      render(<LogoutButton />);
      const logoutButtonElement = screen.getByRole("button");
      expect(logoutButtonElement.textContent).toBe("Log Out");
    });


    test('logout button has clicked', () => {
      render(<LogoutButton click={mockClicking}/>)
      const logoutButtonElement = screen.getByRole("button");
      fireEvent.click(logoutButtonElement);
      expect(mockClicking).toHaveBeenCalled();
    });





  })
  
})



