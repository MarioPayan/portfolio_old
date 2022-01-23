import {setCookies, removeCookies, getCookie} from 'cookies-next'
import {Language, Mode, Theme} from '../types/types'

const languageKey = 'language'
const themeKey = 'theme'
const modeKey = 'mode'

export const setLanguage = (language: Language): void => setCookies(languageKey, language + '')
export const getLanguage = (): Language | null => getCookie(languageKey) as Language
export const clearLanguage = (): void => removeCookies(languageKey)
export const initLanguage = (defaultLanguage: Language): Language => {
  const language = getLanguage()
  if (language) return language
  setLanguage(defaultLanguage)
  return defaultLanguage
}

export const setTheme = (theme: Theme): void => setCookies(themeKey, theme)
export const getTheme = (): Theme | null => getCookie(themeKey) as Theme
export const clearTheme = (): void => removeCookies(themeKey)
export const initTheme = (defaultTheme: Theme): Theme => {
  const theme = getTheme()
  if (theme) return theme
  setTheme(defaultTheme)
  return defaultTheme
}

export const setMode = (mode: Mode): void => setCookies(modeKey, mode)
export const getMode = (): Mode | null => getCookie(modeKey) as Mode
export const clearMode = (): void => removeCookies(modeKey)
export const initMode = (defaultMode: Mode): Mode => {
  const mode = getMode()
  if (mode) return mode
  setMode(defaultMode)
  return defaultMode
}
