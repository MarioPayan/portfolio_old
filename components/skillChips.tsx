import React, {useState} from "react"
import {Chip, Grid, Tab, Tabs, Grow} from "@mui/material"
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
} from "@mui/icons-material/"
import {Skill, SkillChips as SkillChipsType} from "../API/types"
import {getKeyFromLabel} from "../API/utils"

const SkillChips: SkillChipsType = ({skills = []}) => {
  const defaultFilter = "all"
  const filters: string[] = [
    defaultFilter,
    ...new Set(skills.map(skill => skill.type)),
  ]
  const [filter, setFilter] = useState(defaultFilter)
  const [filteredSkills, setFilteredSkills] = useState<Skill[]>(skills)

  const changeFilter = (event: React.SyntheticEvent, filter: string) => {
    event.preventDefault()
    setFilter(filter)
    setFilteredSkills([])
    if (filter === defaultFilter) {
      setFilteredSkills(skills)
    } else {
      setFilteredSkills(skills.filter(skill => skill.type === filter))
    }
  }

  const getIcon = (type: string): JSX.Element => {
    let icon = <QuestionMark />
    const icons: { [type: string]: JSX.Element } = {
      code: <Code />,
      framework: <IntegrationInstructions />,
      html: <Html />,
      css: <Css />,
      database: <Storage />,
      git: <GitHub />,
      test: <BugReport />,
      os: <Computer />,
      languages: <Translate />,
      personal: <SelfImprovement />,
      social: <Group />,
      methodical: <Engineering />,
    }
    if (type in icons) icon = icons[type]
    return icon
  }
  return (
    <Grid
      container
      item
      spacing={1}
      xs={12}
      md={8}
      sx={{justifyContent: "center"}}>
      <Grid item display="flex" justifyContent="center" xs={12}>
        <Tabs
          variant="scrollable"
          allowScrollButtonsMobile
          value={filter}
          onChange={changeFilter}
          scrollButtons="auto"
          textColor="secondary"
          indicatorColor="secondary">
          {filters.map(filter => (
            <Tab
              key={getKeyFromLabel(filter)}
              value={getKeyFromLabel(filter)}
              label={filter}
              sx={{fontWeight: "bold"}}/>
          ))}
        </Tabs>
      </Grid>

      {filteredSkills.map(skill => (
        <Grid item key={getKeyFromLabel(skill.label)}>
          <Grow in={[defaultFilter, skill.type].includes(filter)}>
            <Chip
              label={skill.label}
              component="a"
              icon={getIcon(skill.type)}
              variant="outlined"
              sx={{fontSize: 16, borderWidth: 2, borderColor: "gray"}}
              clickable/>
          </Grow>
        </Grid>
      ))}
    </Grid>
  )
}
export default SkillChips
