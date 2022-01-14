import React, {useEffect, useState} from "react"
import {AppBar, Container, Tab, Tabs} from "@mui/material"
import {TopBar as TopBarType} from "../API/types"

const TopBar: TopBarType = ({sections = [], lastSectionActive = ""}) => {
  const [section, setSection] = useState(
    sections.length > 0 ? sections[0].id : ""
  )

  useEffect(() => {
    lastSectionActive && setSection(lastSectionActive)
  }, [lastSectionActive])

  const changeSection = (event: React.SyntheticEvent, section: string) => {
    event.preventDefault()
    setSection(section)
    const htmlSection = document.getElementById(section)
    htmlSection && htmlSection.scrollIntoView({behavior: "smooth", block: "start"})
  }

  return (
    <AppBar position="sticky">
      <Container>
        <Tabs
          value={section}
          onChange={changeSection}
          textColor="secondary"
          indicatorColor="secondary">
          {sections.map(section => (
            <Tab
              key={section.id}
              value={section.id}
              label={section.label}
              sx={{fontWeight: "bold"}}/>
          ))}
        </Tabs>
      </Container>
    </AppBar>
  )
}
export default TopBar
