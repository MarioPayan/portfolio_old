import React, {useState} from "react"
import {AppBar, Container, Tab, Tabs} from "@mui/material"

type Section = { key: string; label: string };
type TopBar = ({sections}: { sections: Section[] }) => JSX.Element;

const TopBar: TopBar = ({sections = []}: { sections: Section[] }) => {
  const [section, setSection] = useState(
    sections.length > 0 ? sections[0].key : ""
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
              key={section.key}
              value={section.key}
              label={section.label}
              href={section.key}/>
          ))}
        </Tabs>
      </Container>
    </AppBar>
  )
}
export default TopBar
