import React, {useEffect, useState} from 'react'
import type {AppProps} from 'next/app'
import Context from '../components/context'
import {Theme, ThemeProvider} from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import {createTheme} from '../styles/theme'
import i18n from 'i18next'
import {useTranslation, initReactI18next} from 'react-i18next'
import enData from '../API/en-data.json'
import esData from '../API/es-data.json'
import {initLanguage, initMode, initTheme} from '../utils/cookies'
import {Language, Mode, Theme as ThemeMode} from '../types/types'
import {setConfigFromParams} from '../utils/queryParams'

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
  const params = setConfigFromParams({
    theme: 'dark',
    language: 'en',
    mode: 'business',
  }) // TODO: use params
  const [theme, setTheme] = useState<Theme>(createTheme('dark')) // TODO: initTheme
  const [themeMode, setThemeMode] = useState<ThemeMode>('dark')
  const [mode, setMode] = useState<Mode>(initMode('business'))
  const setLanguage = (language: Language) => i18n.changeLanguage(language)
  const {t} = useTranslation()

  useEffect(() => {
    setTheme(createTheme(themeMode))
  }, [themeMode])

  return (
    <Context.Provider
      value={{
        i18n,
        t,
        setLanguage,
        setThemeMode,
        setMode,
        mode,
      }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </Context.Provider>
  )
}

export default App
