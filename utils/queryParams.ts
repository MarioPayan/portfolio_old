// import {useRouter} from 'next/router'
// import {ConfigOptions, Language, Mode, Theme} from '../types/types'
// import {setLanguage, setMode, setTheme} from './cookies'

// export const getConfigParams = (): ConfigOptions => {
//   const router = useRouter()
//   const params = router.asPath.match(new RegExp(/(\w+=\w+)/gi)) || []
//   const paramOptions = {theme: '', mode: '', language: ''}
//   params.forEach(param => {
//     const [key, value] = param.split('=')
//     if (['theme', 't'].includes(key)) {
//       if (['dark', 'd'].includes(value)) paramOptions.theme = 'dark'
//       if (['light', 'l'].includes(value)) paramOptions.theme = 'light'
//     } else if (['mode', 'm'].includes(key)) {
//       if (['business', 'b'].includes(value)) paramOptions.mode = 'business'
//       if (['fun', 'f'].includes(value)) paramOptions.mode = 'fun'
//     } else if (['language', 'lng', 'l'].includes(key)) {
//       if (['en', 'e'].includes(value)) paramOptions.language = 'en'
//       if (['es', 's'].includes(value)) paramOptions.language = 'es'
//     }
//   })
//   if (paramOptions.theme) {
//     setTheme(paramOptions.theme as Theme)
//   }
//   if (paramOptions.mode) {
//     setMode(paramOptions.mode as Mode)
//   }
//   if (paramOptions.language) {
//     setLanguage(paramOptions.language as Language)
//   }
//   return paramOptions as ConfigOptions
// }
