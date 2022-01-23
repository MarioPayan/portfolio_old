import {createContext} from 'react'
import i18n from 'i18next'

/* eslint-disable */

const Context = createContext({
  i18n,
  t: (string: string, obj?: any) => string,
  setLanguage: (s: any) => {},
  setThemeMode: (s: any) => {},
  setMode: (s: any) => {},
  mode: "business",
});

export default Context
