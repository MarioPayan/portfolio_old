import React, {useState} from 'react'
import type {AppProps} from 'next/app'
import Context from '../components/context'
import {ThemeProvider} from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

import {lightTheme, darkTheme} from '../styles/theme'

const App = ({Component, pageProps}: AppProps) => {
  const [theme, setTheme] = useState(lightTheme)
  const setLightTheme = () => setTheme(lightTheme)
  const setDarkTheme = () => setTheme(darkTheme)

  return (
    <Context.Provider value={{theme, setLightTheme, setDarkTheme}}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </Context.Provider>
  )
}

export default App
