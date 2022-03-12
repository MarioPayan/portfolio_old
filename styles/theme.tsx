import {
  createTheme as createThemeMUI,
  responsiveFontSizes,
  ThemeOptions
} from '@mui/material/styles'
import {Theme} from '../types/types'

const purple = {
  main: '#4527a0',
  light: '#7953d2',
  dark: '#000070',
}

const jade = {
  main: '#26c6da',
  light: '#6ff9ff',
  dark: '#0095a8',
}

export const themeOptions = (theme: Theme): ThemeOptions => ({
  palette: {
    mode: theme,
    primary: purple,
    secondary: jade,
    error: {
      main: '#f44336',
    },
  },
  spacing: 8,
  shape: {
    borderRadius: 4,
  },
})

export const createTheme = (theme: Theme) => responsiveFontSizes(createThemeMUI(themeOptions(theme)))
