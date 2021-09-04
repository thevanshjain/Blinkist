
import { createTheme } from '@material-ui/core/styles';

export const Theme = createTheme({
  palette: {
    primary: {
      main: '#22C870'
    },
  },
  overrides:{
    
    MuiTab:{
      root:{
        width: "210px",
      }
    }
    
  },
  typography:{
    fontFamily: 'raleway'
  }
});


