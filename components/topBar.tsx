import React, {useState} from "react"
import {AppBar, Container, Tab, Tabs} from "@mui/material"
import {TopBar as TopBarType} from "../API/types"
import {getKeyFromLabel} from "../API/utils"

const TopBar: TopBarType = ({sections = []}) => {
  const [section, setSection] = useState(
    sections.length > 0 ? getKeyFromLabel(sections[0].label) : ""
  )

  const handleChange = (event: React.SyntheticEvent, section: string) => {
    setSection(section)
    const htmlSection = document.getElementById(section)
    event.preventDefault()
    htmlSection &&
      htmlSection.scrollIntoView({behavior: "smooth", block: "start"})
  }

  return (
    <AppBar position="sticky">
      <Container>
        <Tabs
          value={section}
          onChange={handleChange}
          textColor="secondary"
          indicatorColor="secondary">
          {sections.map(section => (
            <Tab
              key={getKeyFromLabel(section.label)}
              value={getKeyFromLabel(section.label)}
              label={section.label}
              sx={{fontWeight: "bold"}}/>
          ))}
        </Tabs>
      </Container>
    </AppBar>
  )
}
export default TopBar
