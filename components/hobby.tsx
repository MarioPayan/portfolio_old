import React from 'react'
import Carousel from 'react-material-ui-carousel'
import Context from './context'
import {Box, Grid, Typography, CardMedia} from '@mui/material'
import {SocialMediaIcons} from './socialMediaIcons'

const Hobby = ({section}: any): JSX.Element => {
  const settings: any = {
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

  const cardImageSize: React.CSSProperties = {
    height: 400,
    // width: 400,
  }
  const cardImageBorder: React.CSSProperties = {
    borderRadius: 2,
    border: 'solid',
  }

  const Item = (image: any, title: string, BottomBar: any): JSX.Element => (
    <Grid item xs={12}>
      <CardMedia
        image={image}
        title={title}
        sx={{...cardImageSize, ...cardImageBorder}}>
        <Box display="flex" sx={{height: 1}}>
          <Box
            display="flex"
            sx={{
              backgroundColor: 'rgba(0,0,0,0.8)',
              alignSelf: 'flex-end',
              width: 1,
              justifyContent: 'center',
            }}>
            {BottomBar()}
          </Box>
        </Box>
      </CardMedia>
    </Grid>
  )

  return (
    <Context.Consumer>
      {({t, i18n}) => (
        <Grid container width={9 / 10} spacing={5}>
          <Typography variant="h4" sx={{pb: 5}}>
            {t(`hobbies.${section}.description`)}
          </Typography>
          {(
            t(`hobbies.${section}.sections`, {
              returnObjects: true,
            }) as unknown as any[]
          ).map((ss: any, i: number) => (
            <Grid
              item
              container
              key={i}
              xs={12}
              md={6}
              display="flex"
              spacing={1}
              direction="row"
              paddingBottom={5}>
              <Grid
                item
                display="flex"
                direction="column"
                md={6}
                xs={12}
                padding={2}>
                <Typography variant="h2">{ss.title}</Typography>
                <Typography variant="h5">{ss.description}</Typography>
              </Grid>
              <Grid item md={6} xs={12} sx={cardImageSize}>
                <Carousel sx={cardImageSize} {...settings}>
                  {ss.images.map((item: any) => Item(item, ss.title, () => SocialMediaIcons({
                    t,
                    i18n,
                    tKey: `hobbies.${section}.sections.${i}.social`,
                  })
                  )
                  )}
                </Carousel>
              </Grid>
            </Grid>
          ))}
        </Grid>
      )}
    </Context.Consumer>
  )
}

export default Hobby
