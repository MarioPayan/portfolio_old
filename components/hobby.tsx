import React from 'react'
import Carousel from 'react-material-ui-carousel'
import Context from './context'
import {Box, Grid, Typography, CardMedia} from '@mui/material'
import {SocialMediaIcons} from './socialMediaIcons'

const Hobby: any = ({section}: any) => {
  const settings = {
    autoPlay: true,
    animation: 'fade' as 'slide' | 'fade',
    indicators: false,
    duration: 500,
    navButtonsAlwaysVisible: false,
    navButtonsAlwaysInvisible: false,
    cycleNavigation: true,
    fullHeightHover: true,
    swipe: true,
  }

  const cardImageSize = {height: 400, maxWidth: '90vw', maxHeight: '90vw'}

  const Item = (image: any, title: string) => (
    <Grid item xs={12}>
      <CardMedia image={image} title={title} sx={cardImageSize}>
        <Box display="flex" sx={{height: 1}}>
          <Box
            display="flex"
            sx={{
              backgroundColor: 'rgba(0,0,0,0.8)',
              alignSelf: 'flex-end',
              width: 1,
              justifyContent: 'center',
            }}>
            <Typography variant="h2" color="white">
              {title}
            </Typography>
          </Box>
        </Box>
      </CardMedia>
    </Grid>
  )

  return (
    <Context.Consumer>
      {({t, i18n}) => (
        <Grid
          container
          xs={12}
          display="flex"
          sx={{width: '80vw'}}
          spacing={1}>
          {(
            t(`hobbies.${section}.sections`, {
              returnObjects: true,
            }) as unknown as any[]
          ).map((ss: any, i: number) => (
            <>
              <Grid
                item
                display="flex"
                direction="column"
                md={8}
                xs={12}
                padding={2}>
                <Typography variant="h4">{ss.title}</Typography>
                <Typography variant="h5">{ss.description}</Typography>
                <Box sx={{marginTop: 'auto'}}>
                  {SocialMediaIcons({
                    t,
                    i18n,
                    tKey: `hobbies.${section}.sections.${i}.social`,
                  })}
                </Box>
              </Grid>
              <Grid item md={4} xs={12} sx={cardImageSize}>
                <Carousel sx={cardImageSize} {...settings}>
                  {ss.images.map((item: any) => Item(item, ss.title))}
                </Carousel>
              </Grid>
            </>
          ))}
        </Grid>
      )}
    </Context.Consumer>
  )
}

export default Hobby
