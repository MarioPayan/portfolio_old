import {useRouter} from 'next/router'
import {ConfigOptions, Language, Mode, Theme} from '../types/types'
import {initTheme, setTheme, initLanguage, setLanguage, initMode, setMode} from './cookies'

export const setConfigFromParams = (defaultConfig: ConfigOptions): ConfigOptions => {
  const router = useRouter()
  const params = router.asPath.match(new RegExp(/(\w+=\w+)/gi)) || []
  const keys = {
    theme: {
      main: ['theme', 't'],
      dark: ['dark', 'd'],
      light: ['light', 'l'],
    },
    mode: {
      main: ['mode', 'm'],
      business: ['business', 'b'],
      fun: ['fun', 'f'],
    },
    language: {
      main: ['language', 'lng', 'l'],
      english: ['english', 'en', 'e'],
      spanish: ['spanish', 'es', 's'],
    },
  }
  const paramOptions = {theme: '', mode: '', language: ''}
  params.forEach(param => {
    const [key, value] = param.split('=')
    if (keys.theme.main.includes(key)) {
      if (keys.theme.dark.includes(value)) paramOptions.theme = 'dark'
      if (keys.theme.light.includes(value)) paramOptions.theme = 'light'
    } else if (keys.mode.main.includes(key)) {
      if (keys.mode.business.includes(value)) paramOptions.mode = 'business'
      if (keys.mode.fun.includes(value)) paramOptions.mode = 'fun'
    } else if (keys.language.main.includes(key)) {
      if (keys.language.english.includes(value)) paramOptions.language = 'en'
      if (keys.language.spanish.includes(value)) paramOptions.language = 'es'
    }
  })
  if (paramOptions.theme) {
    setTheme(paramOptions.theme as Theme)
  } else {
    paramOptions.theme = initTheme(defaultConfig.theme)
  }
  if (paramOptions.mode) {
    setMode(paramOptions.mode as Mode)
  } else {
    paramOptions.mode = initMode(defaultConfig.mode)
  }
  if (paramOptions.language) {
    setLanguage(paramOptions.language as Language)
  } else {
    paramOptions.language = initLanguage(defaultConfig.language)
  }
  return paramOptions as ConfigOptions
}
