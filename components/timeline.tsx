import React from 'react'

import {Language, TimeLine as TimeLineType, TimeLineItem} from '../types/types'
import {getKeyFromLabel} from '../utils/utils'
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent
} from '@mui/lab'
import {List, ListItem, ListItemIcon, ListItemText, Typography} from '@mui/material'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import Context from './context'
import {getLanguage} from '../utils/cookies'

const toDate = (date: string, t: any): string => {
  if (!date) return t('misc.time.current')
  return new Date(date).toLocaleString(getLanguage() as Language, {
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  })
}

const dateDiff = (dateA: string, dateB: string, t: any): string => {
  const getTime = (date: string): number => (date ? new Date(date).getTime() : new Date().getTime())
  const daysDiff = Math.floor((getTime(dateB) - getTime(dateA)) / (1000 * 60 * 60 * 24))
  let timeDiff = t('misc.time.justStarted')
  const years = Math.floor(daysDiff / 365)
  const yearsDiff = years >= 1 ? `${years} ${years === 1 ? t('misc.time.year') : t('misc.time.years')}` : ''
  const months = Math.ceil(daysDiff / 30) % 12
  const monthsDiff = months >= 1 ? `${months} ${months === 1 ? t('misc.time.month') : t('misc.time.months')}` : ''
  if (yearsDiff && monthsDiff) timeDiff = `${yearsDiff}, ${monthsDiff}`
  else if (yearsDiff || monthsDiff) timeDiff = `${yearsDiff}${monthsDiff}`
  return `(${timeDiff})`
}

const sortFrom = (a: TimeLineItem, b: TimeLineItem): number => {
  return new Date(b.from).getTime() - new Date(a.from).getTime()
}

const TimeLine: TimeLineType = ({typeItems}) => {
  return (
    <Context.Consumer>
      {({t}) => (
        <Timeline>
          {(t(typeItems, {returnObjects: true}) as unknown as TimeLineItem[]).sort(sortFrom).map(item => (
            <TimelineItem key={getKeyFromLabel(`${item.from}-${item.to}`)}>
              <TimelineOppositeContent color='text.secondary' sx={{mt: -0.5}}>
                <Typography variant='h6' component='p'>
                  {item.where}
                </Typography>
                <Typography variant='subtitle1' component='p'>
                  {toDate(item.from, t)} - {toDate(item.to, t)}
                </Typography>
                <Typography variant='subtitle2' component='p'>
                  {dateDiff(item.from, item.to, t)}
                </Typography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{mb: 2}}>
                <Typography variant='h5' component='h5' sx={{mt: -0.5, pb: 1}}>
                  {item.position}
                </Typography>
                <List>
                  {item.achievements.map((achievement, i) => (
                    <ListItem key={i} disablePadding>
                      <ListItemIcon
                        sx={{
                          height: '24px',
                          width: '24px',
                          minWidth: '30px',
                        }}>
                        <PlayArrowIcon />
                      </ListItemIcon>
                      <ListItemText primary={achievement} />
                    </ListItem>
                  ))}
                </List>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      )}
    </Context.Consumer>
  )
}
export default TimeLine
