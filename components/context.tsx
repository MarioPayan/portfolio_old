import {createContext} from 'react'
import i18n from 'i18next'
import {Mode, Theme} from '../types/types'

/* eslint-disable */

const Context = createContext({
  i18n,
  t: (string: string, obj?: any) => string,
  setLanguage: (s: any) => {},
  setThemeMode: (s: any) => {},
  setMode: (s: any) => {},
  themeMode: 'dark' as Theme,
  mode: 'business' as Mode,
})

export default Context
