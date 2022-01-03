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

type Experience = {
  key: string;
  company: string;
  from: string;
  to: string;
  position: string;
  achievements: string[];
};

type TimeLine = ({
  id,
  experiences,
}: {
  id: string;
  experiences: Experience[];
}) => JSX.Element;

const TimeLine: TimeLine = ({
  id = "",
  experiences = [],
}: {
  id: string;
  experiences: Experience[];
}) => {
  return (
    <Timeline id={id}>
      {experiences.map(experience => (
        <TimelineItem key={experience.key}>
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
