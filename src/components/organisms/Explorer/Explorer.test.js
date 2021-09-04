import { fireEvent, render, screen } from '@testing-library/react';
import Explorer from './Explorer';
import { act } from 'react-dom/test-utils';

it('explorer menu should have religion', async () => {
  render(<Explorer addBook={null}/>)
  const categoryElement =  await screen.findAllByText(/religion/i);
  expect(categoryElement.length).toBe(1);
});


const explorerValue = (data)=> {
  console.log(data);
}
test("explorer button clicked", ()=>{
  render(<Explorer addBook={null} exploredValue={(data)=>explorerValue(data)}/>)
  const explore=screen.getByText("Explore");
  fireEvent.click(explore);
  fireEvent.click(screen.getByText(/nature/i))
  fireEvent.click(screen.getByText(/entrepreneurship/i))
  fireEvent.click(screen.getByText(/religion/i))
  fireEvent.click(screen.getByText(/money & investment/i))
  fireEvent.click(screen.getByText(/Motivation/i))
  fireEvent.click(screen.getByText(/biography/i))
  
})

const explorerStatus={
  "data":{
    "author":"Chetan",
    "category":"Drama",
    "name":"3 mistakes ",
    "id":"1",
    "url":"http://www.google.com",
    "status":"Already in Library",
  },
  "category":"nature"
}
const addBook = {
  "author":"Chetan",
    "category":"Drama",
    "name":"3 mistakes ",
    "id":"1",
    "url":"http://www.google.com",
    "status":"Already in Library",
}

test("render explorer data", async ()=>{
  render(<Explorer addBook={null} exploredValue={(data)=>explorerValue(data)} explorerStatus={explorerStatus}/>);
  const explore= await screen.findByText(/explore/i);
  expect(explore).toBeInTheDocument();
})
test("should add book to library", async ()=>{
  render(<Explorer addBook={addBook} exploredValue={(data)=>explorerValue(data)} explorerStatus={explorerStatus}/>);
  const explore= await screen.findByText(/explore/i);
  expect(explore).toBeInTheDocument();
})


test("fetch all categories", async()=>{
  act(() => {
  render(<Explorer addBook={null} explorerValue={null} exploredValue={()=>explorerValue()}/>);
  });
  const explore=await screen.findByText(/Explore/i);
  fireEvent.click(explore);
  const entrepreneurship=await screen.findByText(/entrepreneurship/i);
  fireEvent.click(entrepreneurship);

  fireEvent.click(explore);
  const nature=await screen.findByText(/nature/i);
  fireEvent.click(nature);
  fireEvent.click(explore);
  const motivation=await screen.findByText(/motivation/i);
  fireEvent.click(motivation);

})