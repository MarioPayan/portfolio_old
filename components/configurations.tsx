import React, {useState} from 'react'
import {
  Configurations as ConfigurationsType,
  Language,
  Mode,
  SetLanguage,
  SetMode,
  SetTheme,
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
import {
  DarkMode,
  LightMode,
  Settings,
  Business,
  Coffee
} from '@mui/icons-material'
import Context from './context'
import {
  getLanguage,
  setTheme as setStorageTheme,
  setLanguage as setStorageLanguage,
  setMode as setStorageMode,
  getTheme,
  getMode
} from '../utils/cookies'

const Configurations: ConfigurationsType = () => {
  const [open, setOpen] = useState<boolean>(false)
  const [theme, setTheme] = useState<Theme>('dark') // getTheme() as Theme
  const [language, setLanguage] = useState<Language>(getLanguage() as Language)
  const [mode, setMode] = useState<Mode>(getMode() as Mode)

  const toggleDrawer = (open = true) => setOpen(open)

  const changeTheme = (themeMode: Theme, setAppTheme: SetTheme) => {
    if (!themeMode) return
    setTheme(themeMode)
    setStorageTheme(themeMode)
    setAppTheme(themeMode)
  }

  const changeLanguage = (language: Language, setAppLanguage: SetLanguage) => {
    if (!language) return
    setLanguage(language)
    setStorageLanguage(language)
    setAppLanguage(language)
  }

  const changeMode = (mode: Mode, setAppMode: SetMode) => {
    if (!mode) return
    setMode(mode)
    setStorageMode(mode)
    setAppMode(mode)
  }

  const ThemeButtons = ({setAppTheme}: { setAppTheme: SetTheme }) => (
    <ToggleButtonGroup
      value={theme}
      onChange={(_, value) => changeTheme(value, setAppTheme)}
      exclusive={true}>
      <ToggleButton value="light" key="light">
        <LightMode color={theme === 'light' ? 'secondary' : 'warning'} />
      </ToggleButton>
      <ToggleButton value="dark" key="dark">
        <DarkMode color={theme === 'dark' ? 'secondary' : 'warning'} />
      </ToggleButton>
    </ToggleButtonGroup>
  )

  const LanguageButtons = ({
    setAppLanguage,
  }: {
    setAppLanguage: SetLanguage;
  }) => (
    <ToggleButtonGroup
      value={language}
      onChange={(_, value) => changeLanguage(value, setAppLanguage)}
      exclusive={true}>
      <ToggleButton value="en" key="en">
        <Typography sx={{fontWeight: 'bold'}}>EN</Typography>
      </ToggleButton>
      <ToggleButton value="es" key="es">
        <Typography sx={{fontWeight: 'bold'}}>ES</Typography>
      </ToggleButton>
    </ToggleButtonGroup>
  )

  const ModeButtons = ({setAppMode}: { setAppMode: SetMode }) => (
    <ToggleButtonGroup
      value={mode}
      onChange={(_, value) => changeMode(value, setAppMode)}
      exclusive={true}>
      <ToggleButton value="business" key="business">
        <Business color={mode === 'business' ? 'secondary' : 'warning'} />
      </ToggleButton>
      <ToggleButton value="fun" key="fun">
        <Coffee color={mode === 'fun' ? 'secondary' : 'warning'} />
      </ToggleButton>
    </ToggleButtonGroup>
  )

  const ListConfigItem = ({
    label,
    component,
  }: {
    label: string;
    component: JSX.Element;
  }) => (
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
      {({setThemeMode, setLanguage, setMode, t}) => (
        <>
          <IconButton
            onClick={() => toggleDrawer()}
            size="large"
            sx={{minWidth: 50}}>
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
                component={<ThemeButtons setAppTheme={setThemeMode} />}></ListConfigItem>
              <ListConfigItem
                label="Language"
                component={<LanguageButtons setAppLanguage={setLanguage} />}></ListConfigItem>
              <ListConfigItem
                label="Mode"
                component={<ModeButtons setAppMode={setMode} />}></ListConfigItem>
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
