import { Container, ThemeProvider } from "@material-ui/core";
import Tab from "./components/organisms/TabBar/Tab.js";
import { Theme } from "./Theme/Theme";
function App() {
  return (
    //     'lg'
    // | 'md'
    // | 'sm'
    // | 'xl'
    // | 'xs'

// npx json-server --watch data/db.json --port 8008
    <ThemeProvider theme={Theme}>
      <Container data-testid="appContainer" maxWidth="md" style={{ marginLeft: "220px" }}>
        <Tab />
      </Container>
    </ThemeProvider>
  );
}

export default App;
