import { ThemeProvider } from "@material-ui/styles";
import { Theme } from "../src/Theme/Theme";
import {addDecorator} from '@storybook/react';

addDecorator(story=> <ThemeProvider theme={Theme}>{story()}</ThemeProvider> )

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  } 
}

