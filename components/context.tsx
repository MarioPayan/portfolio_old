import {createContext} from 'react'
import {lightTheme} from '../styles/theme'

import i18n from 'i18next'

const Context = createContext({
  i18n,
  t: (string: string, obj?: any) => string,
  setSpanishLanguage: () => {}, // eslint-disable-line @typescript-eslint/no-empty-function
  setEnglishLanguage: () => {}, // eslint-disable-line @typescript-eslint/no-empty-function
  theme: lightTheme,
  setLightTheme: () => {}, // eslint-disable-line @typescript-eslint/no-empty-function
  setDarkTheme: () => {}, // eslint-disable-line @typescript-eslint/no-empty-function
})

export default Context
