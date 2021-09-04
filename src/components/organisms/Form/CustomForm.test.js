import { fireEvent, render, screen } from '@testing-library/react';
import CustomForm from './CustomForm';



it('book name in form', async () => {
  render(<CustomForm openForm={true}/>)
  const formNameElement =  screen.getByText(/book Name/i);
  expect(formNameElement).toBeInTheDocument();
 
});

const handleForm = (data) => {
console.log(data);
}

const closeForm = () =>{
  console.log("Form Closed");
}
it('submit form handle', async () => {
  render(<CustomForm openForm="true" closeForm={closeForm} formData={(data)=>handleForm(data)}/>)
  const formNameElement =  screen.getByText(/submit/i);
  fireEvent.click(formNameElement);
  expect(formNameElement).toBeTruthy();
 
});


test("fill data in form", async ()=>{
  render(<CustomForm openForm="true" closeForm={closeForm} formData={(data)=>handleForm(data)}/>)
  const inputUrl=screen.getByRole("textbox", { name: /url/i} );
  const inputName=screen.getByRole("textbox",{name: /book name/i});
  const inputAuthor=screen.getByRole("textbox",{name: /author/i});
  const inputTotalReads=screen.getByRole("spinbutton",{name: /total reads/i});
  const inputReadingTime=screen.getByRole("spinbutton",{name: /reading time/i});
  fireEvent.change(inputUrl, {target: {value:"https://www.google.com"}});
  fireEvent.change(inputName, {target: {value:"Secret SuperStar"}});
  fireEvent.change(inputAuthor, {target: {value:"Vansh Jain"}});
  fireEvent.change(inputReadingTime, {target: {value:"14"}});
  fireEvent.change(inputTotalReads, {target: {value:"14"}});
 
  const formNameElement =  screen.getByText(/submit/i);
  fireEvent.click(formNameElement);
  expect(formNameElement).toBeTruthy();


})


// test('Input tag has value', () => {
//   render(<CustomInput />);
//   const inputElement = screen.getByRole("textbox")
//   fireEvent.change(inputElement, {target : {value: "blinkist"}});
//   expect(inputElement.value).toBe("blinkist");
// });
