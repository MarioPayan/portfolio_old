import React, {useState} from 'react'
import {
  Configurations as ConfigurationsType,
  Language,
  Theme
} from '../types/types'
import {
  Divider,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemText,
  SwipeableDrawer,
  ToggleButton,
  ToggleButtonGroup,
  Typography
} from '@mui/material'
import {DarkMode, LightMode, Settings} from '@mui/icons-material'
import Context from './context'
import {
  getLanguage,
  setTheme as setStorageTheme,
  setLanguage as setStorageLanguage
} from '../utils/cookies'

const Configurations: ConfigurationsType = () => {
  const [open, setOpen] = useState<boolean>(false)
  const [theme, setTheme] = useState<Theme>('dark') // TODO: fix getTheme() as Theme
  const [language, setLanguage] = useState<Language>(getLanguage() as Language)

  const toggleDrawer = (open = true) => setOpen(open)

  const changeTheme = (theme: Theme, setLightTheme: any, setDarkTheme: any) => {
    setTheme(theme)
    setStorageTheme(theme)
    if (theme === 'light') setLightTheme()
    if (theme === 'dark') setDarkTheme()
  }

  const changeLanguage = (
    language: Language,
    setEnglish: any,
    setSpanish: any
  ) => {
    setLanguage(language)
    setStorageLanguage(language)
    if (language === 'en') setEnglish()
    if (language === 'es') setSpanish()
  }

  const ThemeButtons = ({setLightTheme, setDarkTheme}: any) => (
    <ToggleButtonGroup
      value={theme}
      onChange={(_, value) => changeTheme(value, setLightTheme, setDarkTheme)}
      exclusive={true}>
      <ToggleButton value="light" key="light">
        <LightMode color={theme === 'light' ? 'secondary' : 'warning'} />
      </ToggleButton>
      <ToggleButton value="dark" key="dark">
        <DarkMode color={theme === 'dark' ? 'secondary' : 'warning'} />
      </ToggleButton>
    </ToggleButtonGroup>
  )

  const LanguageButtons = ({setEnglishLanguage, setSpanishLanguage}: any) => (
    <ToggleButtonGroup
      value={language}
      onChange={(_, value) => changeLanguage(value, setEnglishLanguage, setSpanishLanguage)
      }
      exclusive={true}>
      <ToggleButton value="en" key="en">
        <Typography sx={{fontWeight: 'bold'}}>EN</Typography>
      </ToggleButton>
      <ToggleButton value="es" key="es">
        <Typography sx={{fontWeight: 'bold'}}>ES</Typography>
      </ToggleButton>
    </ToggleButtonGroup>
  )

  const ListConfigItem = ({label, component}: any) => (
    <ListItem>
      <Grid
        item
        xs={6}
        sx={{height: 'inherit'}}
        display="flex"
        alignItems="center">
        <Typography variant="h5">{label}</Typography>
      </Grid>
      <Grid
        item
        xs={6}
        display="flex"
        justifyContent="center"
        sx={{height: 'inherit'}}>
        {component}
      </Grid>
    </ListItem>
  )

  return (
    <Context.Consumer>
      {({
        setLightTheme,
        setDarkTheme,
        setEnglishLanguage,
        setSpanishLanguage,
        t,
      }) => (
        <>
          <IconButton aria-label="Linked In" onClick={() => toggleDrawer()}>
            <Settings color="secondary" />
          </IconButton>
          <SwipeableDrawer
            anchor={'right'}
            open={open}
            onClose={() => toggleDrawer(false)}
            onOpen={() => toggleDrawer()}>
            <List
              sx={{p: 1, width: 270}}
              onClick={() => toggleDrawer(false)}
              onKeyDown={() => toggleDrawer(false)}>
              <ListItemText
                primary={
                  <Typography
                    display="flex"
                    justifyContent="center"
                    variant="h4">
                    {t('misc.label.configurations')}
                  </Typography>
                }></ListItemText>
              <Divider />
              <ListConfigItem
                label="Theme"
                component={
                  <ThemeButtons
                    setLightTheme={setLightTheme}
                    setDarkTheme={setDarkTheme}/>
                }></ListConfigItem>
              <ListConfigItem
                label="Language"
                component={
                  <LanguageButtons
                    setEnglishLanguage={setEnglishLanguage}
                    setSpanishLanguage={setSpanishLanguage}/>
                }></ListConfigItem>
              <Divider />
              <ListItem sx={{position: 'fixed', bottom: 0}}>
                <ListItemText
                  primary={
                    <Typography variant="h5">
                      {t('misc.label.underConstruction')}
                    </Typography>
                  }
                  secondary={
                    <Typography
                      display="flex"
                      sx={{width: 200}}
                      variant="subtitle1">
                      {t('misc.text.underConstruction')}
                    </Typography>
                  }></ListItemText>
              </ListItem>
            </List>
          </SwipeableDrawer>
        </>
      )}
    </Context.Consumer>
  )
}

export default Configurations
