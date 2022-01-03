import React from "react"
import "../styles/globals.css"
import type {AppProps} from "next/app"
import {ThemeProvider} from "@mui/material/styles"
import theme from "../API/theme"

const App = ({Component, pageProps}: AppProps) => (
  <ThemeProvider theme={theme}>
    <Component {...pageProps} />
  </ThemeProvider>
)

export default App
