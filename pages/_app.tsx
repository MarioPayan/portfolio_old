import React, {useState} from "react"
import "../styles/globals.css"
import type {AppProps} from "next/app"
import {ThemeProvider} from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"

import {lightTheme, darkTheme} from "../styles/theme"

const App = ({Component, pageProps}: AppProps) => {
  const [theme, setTheme] = useState(lightTheme)
  const setLightTheme = () => setTheme(lightTheme)
  const setDarkTheme = () => setTheme(darkTheme)

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component
        {...pageProps}
        setLightTheme={setLightTheme}
        setDarkTheme={setDarkTheme}/>
    </ThemeProvider>
  )
}

export default App
