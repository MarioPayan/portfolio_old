import React, {useState} from 'react'
import type {AppProps} from 'next/app'
import Context from '../components/context'
import {ThemeProvider} from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import {lightTheme, darkTheme} from '../styles/theme'
import i18n from 'i18next'
import {useTranslation, initReactI18next} from 'react-i18next'
import enData from '../API/en-data.json'
import esData from '../API/es-data.json'
import {initTheme, initLanguage} from '../utils/cookies'

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: enData,
    },
    es: {
      translation: esData,
    },
  },
  lng: initLanguage('en'),
  fallbackLng: 'en',
  preload: ['es', 'en'],
  interpolation: {
    escapeValue: false,
  },
})

const App = ({Component, pageProps}: AppProps) => {
  const [theme, setTheme] = useState(
    initTheme('dark') === 'dark' ? darkTheme : lightTheme
  )
  const setLightTheme = () => setTheme(lightTheme)
  const setDarkTheme = () => setTheme(darkTheme)
  const setEnglishLanguage = () => i18n.changeLanguage('en')
  const setSpanishLanguage = () => i18n.changeLanguage('es')
  const {t} = useTranslation()

  return (
    <Context.Provider
      value={{
        i18n,
        t,
        setEnglishLanguage,
        setSpanishLanguage,
        theme,
        setLightTheme,
        setDarkTheme,
      }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </Context.Provider>
  )
}

export default App
