import { Container } from "@material-ui/core";
import MyLibrary from "./components/organisms/Library/MyLibrary.js";

function App() {
  return (
//     'lg'
// | 'md'
// | 'sm'
// | 'xl'
// | 'xs'
    <Container maxWidth="md" style={{marginLeft: "220px"}}>
      <MyLibrary />
       </Container>
  );
}

export default App;







