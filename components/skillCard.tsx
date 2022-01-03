import React from "react"
import {Box, Chip} from "@mui/material"

type Skill = { key: string; label: string; icon: JSX.Element };
type SkillCard = ({
  id,
  skills,
}: {
  id: string;
  skills: Skill[];
}) => JSX.Element;

const SkillCard: SkillCard = ({
  id = "",
  skills = [],
}: {
  id: string;
  skills: Skill[];
}) => {
  return (
    <Box id={id}>
      {skills.map(skill => (
        <Chip
          key={skill.key}
          label={skill.label}
          component="a"
          icon={skill.icon}
          variant="outlined"
          clickable/>
      ))}
    </Box>
  )
}
export default SkillCard
