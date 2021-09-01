import { Container, ThemeProvider} from "@material-ui/core";
import MyLibrary from "./components/organisms/Library/MyLibrary.js";
import {Theme} from "./Theme/Theme";
function App() {
  return (
//     'lg'
// | 'md'
// | 'sm'
// | 'xl'
// | 'xs'
<ThemeProvider theme={Theme}>
    <Container maxWidth="md" style={{marginLeft: "220px"}}>
      <MyLibrary />
       </Container>
       </ThemeProvider>
  );
}

export default App;







