import React, {useState} from 'react'
import {Skill, SkillChips as SkillChipsType} from '../types/types'
import {getKeyFromLabel} from '../utils/utils'
import {Grid, Tab, Tabs, Collapse, Tooltip, IconButton, Icon, Box} from '@mui/material'
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

type SelectableSkill = Skill & {selected: boolean}

const SkillChips: SkillChipsType = ({typeSkills}) => {
  const defaultFilterKey = 'all'
  const [filter, setFilter] = useState<string>(defaultFilterKey)

  const changeFilter = (event: React.SyntheticEvent, filter: string) => {
    event.preventDefault()
    setFilter(filter)
  }

  const filterSkills = (skills: SelectableSkill[]) => {
    let tmpSkills = []
    if (filter === defaultFilterKey) {
      tmpSkills = skills.map(skill => ({...skill, selected: true}))
    } else {
      tmpSkills = skills.map(skill => ({...skill, selected: skill.type === filter}))
    }
    return tmpSkills
  }

  const getIcon = (type: string, props: any = {}): JSX.Element => {
    let icon = <QuestionMark />
    const icons: {[type: string]: JSX.Element} = {
      code: <Code {...props} />,
      código: <Code {...props} />,
      frameworks: <IntegrationInstructions {...props} />,
      html: <Html {...props} />,
      css: <Css {...props} />,
      database: <Storage {...props} />,
      base_de_datos: <Storage {...props} />,
      git: <GitHub {...props} />,
      test: <BugReport {...props} />,
      pruebas: <BugReport {...props} />,
      os: <Computer {...props} />,
      languages: <Translate {...props} />,
      idiomas: <Translate {...props} />,
      personal: <SelfImprovement {...props} />,
      social: <Group {...props} />,
      methodical: <Engineering {...props} />,
      metódico: <Engineering {...props} />,
    }
    if (type in icons) icon = icons[type]
    return icon
  }

  const getSkillIcon = (skill: Skill): JSX.Element => {
    const IconSubIcon = (skill: Skill, className?: string) => (
      // label={skill.label}
      <IconButton
        aria-label={getKeyFromLabel(skill.label)}
        size='large'
        sx={{
          transition: 'transform .5s, box-shadow 1s',
          '&:hover': {
            transform: 'scale(1.2) perspective(0px)',
          },
        }}>
        {className ? (
          <Icon className={`devicon-${className}-plain`} sx={{fontSize: 80}} />
        ) : (
          getIcon(skill.type, {sx: {fontSize: 80}})
        )}
        <Box sx={{position: 'absolute', bottom: 0, left: 0, backgroundColor: 'rgba(0,0,0,0.5)', borderRadius: 10}}>
          {getIcon(skill.type)}
        </Box>
      </IconButton>
    )
    let className = ''
    const notInDevIcons = ['spanish', 'english', 'español', 'inglés', 'appium', 'osx', 'flexbox']
    const key = getKeyFromLabel(skill.label.split(' ')[0])
    if (!notInDevIcons.includes(key) && typeSkills === 'hardSkills') className = key
    return IconSubIcon(skill, className)
  }

  return (
    <Context.Consumer>
      {({t}) => (
        <Grid container item spacing={1} xs={12} md={8} sx={{justifyContent: 'center'}}>
          <Grid item display='flex' justifyContent='center' xs={12}>
            <Tabs
              variant='scrollable'
              allowScrollButtonsMobile
              value={filter}
              onChange={changeFilter}
              scrollButtons='auto'
              textColor='secondary'
              indicatorColor='secondary'>
              {[
                t('misc.label.all'),
                ...new Set((t(typeSkills, {returnObjects: true}) as unknown as Skill[]).map(skill => skill.type)),
              ].map((filter: string, i) => (
                <Tab
                  key={i !== 0 ? getKeyFromLabel(filter) : 'all'}
                  value={i !== 0 ? getKeyFromLabel(filter) : 'all'}
                  label={filter} // TODO: .replaceAll('_', ' ')
                  sx={{fontWeight: 'bold'}}/>
              ))}
            </Tabs>
          </Grid>
          <Grid container item justifyContent='center' xs={12}>
            {filterSkills(t(typeSkills, {returnObjects: true}) as unknown as SelectableSkill[]).map(skill => (
              <Collapse key={getKeyFromLabel(skill.label)} in={skill.selected} orientation='horizontal' timeout={750}>
                <Tooltip title={skill.description || t('misc.missing.description')}>{getSkillIcon(skill)}</Tooltip>
              </Collapse>
            ))}
          </Grid>
        </Grid>
      )}
    </Context.Consumer>
  )
}
export default SkillChips
