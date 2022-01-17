import React, {useEffect, useState} from "react"
import {
  AppBar,
  Grid,
  Tab,
  Tabs,
  ToggleButton,
  ToggleButtonGroup
} from "@mui/material"
import {DarkMode, LightMode} from "@mui/icons-material"
import {TopBar as TopBarType} from "../API/types"

const TopBar: TopBarType = ({
  sections = [],
  lastSectionActive = "",
  setLightTheme,
  setDarkTheme,
}) => {
  const [section, setSection] = useState(
    sections.length > 0 ? sections[0].id : ""
  )
  const [mode, setMode] = React.useState("light")

  useEffect(() => {
    lastSectionActive && setSection(lastSectionActive)
  }, [lastSectionActive])

  const changeSection = (event: React.SyntheticEvent, section: string) => {
    event.preventDefault()
    setSection(section)
    const htmlSection = document.getElementById(section)
    htmlSection && htmlSection.scrollIntoView({behavior: "smooth", block: "start"})
  }

  const changeTheme = (
    event: React.MouseEvent<HTMLElement>,
    newMode: string
  ) => {
    setMode(newMode)
    if (newMode === "light") setLightTheme()
    if (newMode === "dark") setDarkTheme()
  }

  return (
    <AppBar position="sticky">
      <Grid container display="flex">
        <Grid item display="flex" flexGrow={1} justifyContent="center">
          <Grid item>
            <Tabs
              variant="scrollable"
              allowScrollButtonsMobile
              scrollButtons="auto"
              value={section}
              onChange={changeSection}
              textColor="secondary"
              indicatorColor="secondary">
              {sections.map(section => (
                <Tab
                  key={section.id}
                  value={section.id}
                  label={section.label}
                  sx={{fontWeight: "bold", color: "white"}}/>
              ))}
            </Tabs>
          </Grid>
        </Grid>
        <Grid item>
          <ToggleButtonGroup
            value={mode}
            onChange={changeTheme}
            exclusive={true}>
            <ToggleButton value="light" key="light">
              <LightMode color={mode === "light" ? "secondary" : "warning"} />
            </ToggleButton>
            <ToggleButton value="dark" key="dark">
              <DarkMode color={mode === "dark" ? "secondary" : "warning"} />
            </ToggleButton>
          </ToggleButtonGroup>
        </Grid>
      </Grid>
    </AppBar>
  )
}
export default TopBar
