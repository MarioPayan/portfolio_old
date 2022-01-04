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
import {topBarTargetStyles} from "../styles/theme"

const TimeLine: TimeLineType = ({id = "", items = []}) => {
  return (
    <Timeline id={id} sx={topBarTargetStyles}>
      {items.map(item => (
        <TimelineItem key={getKeyFromLabel(`${item.from}-${item.to}`)}>
          <TimelineOppositeContent color="text.secondary">
            {item.from} - {item.to}
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{py: "12px", px: 2}}>
            <Typography variant="h6" component="span">
              {item.position}
            </Typography>
            {item.achievements.map((achievement, i) => (
              <Typography key={i}>{achievement}</Typography>
            ))}
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  )
}
export default TimeLine
