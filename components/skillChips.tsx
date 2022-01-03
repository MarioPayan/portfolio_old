import React, {useState} from "react"
import {Chip, Grid, Tab, Tabs, Zoom} from "@mui/material"
import {
  Code,
  IntegrationInstructions,
  Css,
  Html,
  Storage,
  GitHub,
  Computer,
  BugReport,
  QuestionMark
} from "@mui/icons-material/"
import {Skill, SkillChips as SkillChipsType} from "../API/types"
import {getKeyFromLabel} from "../API/utils"

const SkillChips: SkillChipsType = ({id = "", skills = []}) => {
  const defaultFilter = "all"
  const filters: string[] = [defaultFilter,
    ...new Set(skills.map(skill => skill.type))]
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
    }
    if (type in icons) icon = icons[type]
    return icon
  }
  return (
    <Grid
      container
      id={id}
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
          <Zoom in={[defaultFilter, skill.type].includes(filter)}>
            <Chip
              label={skill.label}
              component="a"
              icon={getIcon(skill.type)}
              variant="outlined"
              // sx={{color: "red", borderWidth: 2, borderColor: "red"}}
              clickable/>
          </Zoom>
        </Grid>
      ))}
    </Grid>
  )
}
export default SkillChips
