import {createTheme, ThemeOptions} from '@mui/material/styles'
import {Theme} from '../types/types'

export const themeOptions = (theme: Theme): ThemeOptions => ({
  palette: {
    mode: theme,
    primary: {
      main: '#4527a0',
      light: '#7953d2',
      dark: '#000070',
    },
    secondary: {
      main: '#26c6da',
      light: '#6ff9ff',
      dark: '#0095a8',
    },
    error: {
      main: '#f44336',
    },
  },
  spacing: 8,
  shape: {
    borderRadius: 4,
  },
})

export const lightTheme = createTheme(themeOptions('light'))
export const darkTheme = createTheme(themeOptions('dark'))
