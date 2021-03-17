import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { configure, addDecorator } from '@storybook/react';
import theme from '../src/theme';

addDecorator((story) => (
  <ThemeProvider theme={theme}>
    {story()}
  </ThemeProvider>
));

// automatically import all files ending in *.stories.js
configure(require.context('../src/components/', true, /\.stories\.js$/), module);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}