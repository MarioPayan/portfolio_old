import React, {useState} from 'react'
import {Configurations as ConfigurationsType, Theme} from '../types/types'
import {
  Divider,
  Grid,
  IconButton,
  List,
  ListItem,
  SwipeableDrawer,
  ToggleButton,
  ToggleButtonGroup,
  Typography
} from '@mui/material'
import {DarkMode, LightMode, Settings} from '@mui/icons-material'

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
  return (
    <Context.Consumer>
      {({setLightTheme, setDarkTheme}) => (
        <>
          <IconButton aria-label="Linked In" onClick={() => toggleDrawer()}>
            <Settings />
          </IconButton>
          <SwipeableDrawer
            anchor={'right'}
            open={open}
            onClose={() => toggleDrawer(false)}
            onOpen={() => toggleDrawer()}>
            <List
              sx={{p: 1}}
              onClick={() => toggleDrawer(false)}
              onKeyDown={() => toggleDrawer(false)}>
              <ListItem>
                <Typography variant="h4">Configurations</Typography>
              </ListItem>
              <Divider />
              <ListItem>
                <Grid
                  item
                  xs={6}
                  sx={{height: 'inherit'}}
                  display="flex"
                  alignItems="center">
                  <Typography variant="h5">Theme</Typography>
                </Grid>
                <Grid
                  item
                  xs={6}
                  display="flex"
                  justifyContent="center"
                  sx={{height: 'inherit'}}>
                  <ToggleButtonGroup
                    value={mode}
                    onChange={(_, value) => changeTheme(value, setLightTheme, setDarkTheme)
                    }
                    exclusive={true}>
                    <ToggleButton value="light" key="light">
                      <LightMode
                        color={mode === 'light' ? 'secondary' : 'warning'}/>
                    </ToggleButton>
                    <ToggleButton value="dark" key="dark">
                      <DarkMode
                        color={mode === 'dark' ? 'secondary' : 'warning'}/>
                    </ToggleButton>
                  </ToggleButtonGroup>
                </Grid>
              </ListItem>
            </List>
          </SwipeableDrawer>
        </>
      )}
    </Context.Consumer>
  )
}

export default Configurations
