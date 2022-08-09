import React, {useEffect, useState} from 'react'
import Configurations from './configurations'
import {TopBar as TopBarType} from '../types/types'
import {AppBar, Box, Collapse, Tab, Tabs} from '@mui/material'
import Context from './context'

const TopBar: TopBarType = ({sections = [], lastSectionActive = ''}) => {
  const [section, setSection] = useState<string>(sections.length > 0 ? sections[0].id : '')

  useEffect(() => {
    lastSectionActive && setSection(lastSectionActive)
  }, [lastSectionActive])

  const changeSection = (event: React.SyntheticEvent, section: string) => {
    event.preventDefault()
    setSection(section)
    const htmlSection = document.getElementById(section)
    htmlSection && htmlSection.scrollIntoView({behavior: 'smooth', block: 'start'})
  }

  return (
    <Context.Consumer>
      {({mode}) => (
        <AppBar position='sticky'>
          <Box display='flex' justifyContent='space-between'>
            <Box />
            <Collapse in={mode === 'business'}>
              <Tabs
                variant='scrollable'
                allowScrollButtonsMobile
                scrollButtons='auto'
                value={section}
                onChange={changeSection}
                textColor='secondary'
                indicatorColor='secondary'>
                {sections.map(section => (
                  <Tab
                    key={section.id}
                    value={section.id}
                    label={section.label}
                    sx={{fontWeight: 'bold', color: 'white'}}/>
                ))}
              </Tabs>
            </Collapse>
            <Configurations />
          </Box>
        </AppBar>
      )}
    </Context.Consumer>
  )
}
export default TopBar
