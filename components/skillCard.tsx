import React from "react"
import {Box, Chip} from "@mui/material"
import {
  Code,
  IntegrationInstructions,
  Css,
  Html,
  Storage,
  GitHub,
  Computer,
  BugReport
} from "@mui/icons-material/"
import {SkillCard as SkillCardType, SkillType} from "../API/types"
import {getKeyFromLabel} from "../API/utils"

const SkillCard: SkillCardType = ({id = "", skills = []}) => {
  const getIcon = (type: SkillType): JSX.Element => {
    const icons = {
      code: <Code />,
      framework: <IntegrationInstructions />,
      html: <Html />,
      css: <Css />,
      database: <Storage />,
      git: <GitHub />,
      test: <BugReport />,
      os: <Computer />,
    }
    return icons[type]
  }
  return (
    <Box id={id}>
      {skills.map(skill => (
        <Chip
          key={getKeyFromLabel(skill.label)}
          label={skill.label}
          component="a"
          icon={getIcon(skill.type)}
          variant="outlined"
          clickable/>
      ))}
    </Box>
  )
}
export default SkillCard
