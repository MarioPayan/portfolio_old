import {createTheme, ThemeOptions} from "@mui/material/styles"

export const themeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: "#7c4dff",
    },
    secondary: {
      main: "#26c6da",
    },
    error: {
      main: "#f44336",
    },
  },
  shape: {
    borderRadius: 4,
  },
  spacing: 8,
}

const theme = createTheme(themeOptions)

export const topBarTargetStyles = {scrollMarginTop: "5rem"}

export default theme
