import React, {useState} from 'react'
import {Skill, SkillChips as SkillChipsType} from '../types/types'
import {getKeyFromLabel} from '../utils/utils'
import {Chip, Grid, Tab, Tabs, Grow} from '@mui/material'
import {
  Code,
  IntegrationInstructions,
  Css,
  Html,
  Storage,
  GitHub,
  Computer,
  BugReport,
  QuestionMark,
  Translate,
  SelfImprovement,
  Engineering,
  Group
} from '@mui/icons-material/'
import Context from './context'

const SkillChips: SkillChipsType = ({typeSkills}) => {
  const defaultFilterKey = 'all'
  const [filter, setFilter] = useState<string>(defaultFilterKey) // TODO: update type

  const changeFilter = (event: React.SyntheticEvent, filter: string) => {
    event.preventDefault()
    setFilter(filter)
  }

  const filterSkills = (skills: Skill[]) => {
    if (filter === defaultFilterKey) {
      return skills
    } else {
      return skills.filter(skill => skill.type === filter)
    }
  }

  const getIcon = (type: string): JSX.Element => {
    let icon = <QuestionMark />
    const icons: { [type: string]: JSX.Element } = {
      code: <Code />,
      código: <Code />,
      frameworks: <IntegrationInstructions />,
      html: <Html />,
      css: <Css />,
      database: <Storage />,
      base_de_datos: <Storage />,
      git: <GitHub />,
      test: <BugReport />,
      pruebas: <BugReport />,
      os: <Computer />,
      languages: <Translate />,
      idiomas: <Translate />,
      personal: <SelfImprovement />,
      social: <Group />,
      methodical: <Engineering />,
      metódico: <Engineering />,
    }
    if (type in icons) icon = icons[type]
    return icon
  }

  return (
    <Context.Consumer>
      {({t}) => (
        <Grid
          container
          item
          spacing={1}
          xs={12}
          md={8}
          sx={{justifyContent: 'center'}}>
          <Grid item display="flex" justifyContent="center" xs={12}>
            <Tabs
              variant="scrollable"
              allowScrollButtonsMobile
              value={filter}
              onChange={changeFilter}
              scrollButtons="auto"
              textColor="secondary"
              indicatorColor="secondary">
              {[
                t('misc.label.all'),
                ...new Set(
                  (
                    t(typeSkills, {returnObjects: true}) as unknown as Skill[]
                  ).map(skill => skill.type)
                ),
              ].map((filter, i) => (
                <Tab
                  key={i !== 0 ? getKeyFromLabel(filter) : 'all'}
                  value={i !== 0 ? getKeyFromLabel(filter) : 'all'}
                  label={filter.replaceAll('_', ' ')}
                  sx={{fontWeight: 'bold'}}/>
              ))}
            </Tabs>
          </Grid>

          {filterSkills(
            t(typeSkills, {returnObjects: true}) as unknown as Skill[]
          ).map(skill => (
            <Grid item key={getKeyFromLabel(skill.label)}>
              <Grow in={[defaultFilterKey, skill.type].includes(filter)}>
                <Chip
                  label={skill.label}
                  component="a"
                  icon={getIcon(skill.type)}
                  variant="outlined"
                  sx={{fontSize: 16, borderWidth: 2, borderColor: 'gray'}}
                  clickable/>
              </Grow>
            </Grid>
          ))}
        </Grid>
      )}
    </Context.Consumer>
  )
}
export default SkillChips
