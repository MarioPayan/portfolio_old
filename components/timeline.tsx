import React from "react"
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent
} from "@mui/lab"
import {Typography} from "@mui/material"
import {TimeLine as TimeLineType} from "../API/types"
import {getKeyFromLabel} from "../API/utils"

const TimeLine: TimeLineType = ({id = "", experiences = []}) => {
  return (
    <Timeline id={id}>
      {experiences.map(experience => (
        <TimelineItem
          key={getKeyFromLabel(`${experience.from}-${experience.to}`)}>
          <TimelineOppositeContent color="text.secondary">
            {experience.from} - {experience.to}
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{py: "12px", px: 2}}>
            <Typography variant="h6" component="span">
              {experience.position}
            </Typography>
            {experience.achievements.map((achievement, i) => (
              <Typography key={i}>{achievement}</Typography>
            ))}
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  )
}
export default TimeLine
