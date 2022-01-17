import {createContext} from 'react'
import {lightTheme} from '../styles/theme'

const Context = createContext({
  theme: lightTheme,
  setLightTheme: () => {}, // eslint-disable-line @typescript-eslint/no-empty-function
  setDarkTheme: () => {}, // eslint-disable-line @typescript-eslint/no-empty-function
})

export default Context
