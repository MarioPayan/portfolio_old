import React, {useState} from 'react'
import {Configurations as ConfigurationsType, Theme} from '../types/types'
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
  GTranslateSharp,
  LanguageSharp,
  LightMode,
  Settings
} from '@mui/icons-material'

import Context from './context'

const Configurations: ConfigurationsType = () => {
  const [open, setOpen] = useState<boolean>(false)
  const [mode, setMode] = useState<Theme>('light')

  const toggleDrawer = (open = true) => setOpen(open)

  const changeTheme = (
    newMode: Theme,
    setLightTheme: any,
    setDarkTheme: any
  ) => {
    setMode(newMode)
    if (newMode === 'light') setLightTheme()
    if (newMode === 'dark') setDarkTheme()
  }

  const ThemeButtons = ({setLightTheme, setDarkTheme}: any) => (
    <ToggleButtonGroup
      value={mode}
      onChange={(_, value) => changeTheme(value, setLightTheme, setDarkTheme)}
      exclusive={true}>
      <ToggleButton value="light" key="light">
        <LightMode color={mode === 'light' ? 'secondary' : 'warning'} />
      </ToggleButton>
      <ToggleButton value="dark" key="dark">
        <DarkMode color={mode === 'dark' ? 'secondary' : 'warning'} />
      </ToggleButton>
    </ToggleButtonGroup>
  )

  const LanguageButtons = ({setSpanish, setEnglish}: any) => (
    <ToggleButtonGroup
      value="english"
      onChange={() => alert('This is not implemented yet, sorry :c')}
      exclusive={true}>
      <ToggleButton value="english" key="english">
        <LanguageSharp color="warning" />
      </ToggleButton>
      <ToggleButton value="spanish" key="spanish">
        <GTranslateSharp color="secondary" />
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
      {({setLightTheme, setDarkTheme}) => (
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
                    Configurations
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
                    setLightTheme={setLightTheme}
                    setDarkTheme={setDarkTheme}/>
                }></ListConfigItem>
              <Divider />
              <ListItem sx={{position: 'fixed', bottom: 0}}>
                <ListItemText
                  primary={
                    <Typography variant="h5">Under Construction</Typography>
                  }
                  secondary={
                    <Typography
                      display="flex"
                      sx={{width: 200}}
                      variant="subtitle1">
                      Hey, thanks for visiting my website, this site is under
                      construction yet but feel free to visit it and check it
                      whenever you want
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
