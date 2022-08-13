import React, {useState} from 'react'

import {Language, TimeLine as TimeLineType, TimeLineItem} from '../types/types'
import {Grid, List, ListItem, ListItemIcon, ListItemText, Tab, Tabs, Typography, useMediaQuery} from '@mui/material'
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
  const [currentTab, setCurrentTab] = useState<number>(0)
  const moreThanMd = useMediaQuery('(min-width:1000px)')

  const changeTab = (event: React.SyntheticEvent, tab: number) => {
    event.preventDefault()
    setCurrentTab(tab)
  }

  const TabPanel = (item: TimeLineItem, show: boolean, t: any, index: number) => {
    if (!show) return undefined

    return (
      <Grid container item xs={12} key={index}>
        <Grid item xs={12}>
          <Typography variant='h2'>{item.position}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant='h4'>{item.where}</Typography>
        </Grid>
        <Grid container item xs={12} alignItems='center'>
          <Grid item>
            <Typography variant='h6'>
              {toDate(item.from, t)} - {toDate(item.to, t)}
            </Typography>
          </Grid>

          <Grid item sx={{paddingLeft: 2}}>
            <Typography variant='body1'>{dateDiff(item.from, item.to, t)}</Typography>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <List>
            {item.achievements.map((achievement, i) => (
              <ListItem key={i} disablePadding>
                <ListItemIcon>
                  <PlayArrowIcon />
                </ListItemIcon>
                <ListItemText primary={achievement} primaryTypographyProps={{variant: 'h6'}} />
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>
    )
  }

  return (
    <Context.Consumer>
      {({t}) => (
        <Grid container item xs={12} display='flex' justifyContent='center'>
          <Grid item display='flex' xs={!moreThanMd ? 12 : undefined} width={200}>
            <Tabs
              variant='scrollable'
              allowScrollButtonsMobile
              scrollButtons='auto'
              onChange={changeTab}
              textColor='secondary'
              indicatorColor='secondary'
              orientation={moreThanMd ? 'vertical' : 'horizontal'}
              value={currentTab}>
              {(t(typeItems, {returnObjects: true}) as unknown as TimeLineItem[]).sort(sortFrom).map((item, i) => (
                <Tab key={i} value={i} label={`${item.where} ${item.from.split('-')[0]}`} sx={{fontWeight: 'bold'}} />
              ))}
            </Tabs>
          </Grid>
          <Grid item sx={{width: 700, paddingLeft: 7}}>
            {(t(typeItems, {returnObjects: true}) as unknown as TimeLineItem[])
              .sort(sortFrom)
              .map((item, i) => TabPanel(item, currentTab === i, t, i))}
          </Grid>
        </Grid>
      )}
    </Context.Consumer>
  )
}
export default TimeLine
