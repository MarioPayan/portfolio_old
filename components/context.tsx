import {createContext} from 'react'
import i18n from 'i18next'

const Context = createContext({
  i18n,
  t: (string: string, obj?: any) => string,
  setLanguage: (s: any) => {}, // eslint-disable-line @typescript-eslint/no-empty-function
  setThemeMode: (s: any) => {}, // eslint-disable-line @typescript-eslint/no-empty-function
  setMode: (s: any) => {}, // eslint-disable-line @typescript-eslint/no-empty-function
  mode: 'business',
})

export default Context
