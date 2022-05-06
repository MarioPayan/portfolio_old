import React, {useState} from 'react'
import {ProjectCards as ProjectCardsType, Project} from '../types/types'
import {getKeyFromLabel, openInNewTab} from '../utils/utils'
import {image404} from '../utils/assets'
import {Grid, Card, CardMedia, CardContent, Typography, CardActions, Button, Collapse, Link} from '@mui/material'
import Lock from '@mui/icons-material/Lock'
import Context from './context'

const ProjectCards: ProjectCardsType = () => {
  const [seeMore, setSeeMore] = useState<any>({})

  const getTextVersion = (text: string, key: string, t: any) => {
    const TextComponent = (component: JSX.Element) => (
      <Typography variant='body2' color='text.secondary'>
        {component}
      </Typography>
    )

    const LinkComponent = () => (
      <Link
        underline='none'
        sx={{cursor: 'pointer'}}
        color='secondary'
        onClick={() => {
          setSeeMore({...seeMore, [key]: !seeMore[key]})
        }}>
        {t(`misc.label.${seeMore[key] ? 'seeLess' : 'seeMore'}`)}
      </Link>
    )

    const maxLength = 55
    if (text.length < maxLength) return TextComponent(<>{text}</>)
    if (seeMore[key])
      return TextComponent(
        <>
          {text + ' '}
          {LinkComponent()}
        </>
      )
    const textArray = text.split(' ')
    let currentLength = 0
    for (let i = 0; i < textArray.length; i++) {
      if (textArray[i].length + currentLength > maxLength) {
        return TextComponent(
          <>
            {textArray.splice(0, i + 1).join(' ') + '... '} {LinkComponent()}
          </>
        )
      } else {
        currentLength += textArray[i].length
      }
    }
  }

  return (
    <Context.Consumer>
      {({t}) => (
        <Grid container item spacing={1} xs={12} md={8} sx={{justifyContent: 'center'}}>
          {(t('projects', {returnObjects: true}) as unknown as Project[]).map(project => (
            <Grid item key={getKeyFromLabel(project.label)}>
              <Card sx={{width: 345}}>
                <CardMedia
                  component='img'
                  height='140'
                  image={project.image ? project.image : image404}
                  alt={`${project.label}`}/>
                <CardContent sx={{pb: 1}}>
                  <Typography gutterBottom variant='h5' component='div'>
                    {project.label}
                  </Typography>
                  <Collapse
                    orientation='vertical'
                    in={seeMore[getKeyFromLabel(project.label)] || false}
                    collapsedSize={40}>
                    {getTextVersion(project.description, getKeyFromLabel(project.label), t)}
                  </Collapse>
                </CardContent>
                <CardActions sx={{display: 'flex', justifyContent: 'flex-end'}}>
                  <Button
                    disabled={!project.public}
                    variant='contained'
                    sx={{fontWeight: 'bold'}}
                    onClick={() => openInNewTab(project.link)}>
                    {t('misc.button.visit')} {!project.public && <Lock />}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Context.Consumer>
  )
}
export default ProjectCards
