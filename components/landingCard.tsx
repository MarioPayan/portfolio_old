import React from 'react'
import Image from 'next/image'
import {LandingCard as LandingCardType, Mode} from '../types/types'
import {cvPdf} from '../utils/assets'
import {openInNewTab} from '../utils/utils'
import Grid from '@mui/material/Grid'
import {Box, Button, Paper, Typography} from '@mui/material'
import {SocialMediaIcons} from './socialMediaIcons'
import Context from './context'
import {profile, pixelProfile} from '../utils/assets'

const LandingCard: LandingCardType = () => {
  const getSocialMediaItems = (mode: Mode): string[] => ({
    business: ['linkedin', 'github', 'email'],
    fun: ['linkedin', 'whatsapp', 'github', 'email', 'instagram', 'facebook'],
  }[mode])

  return (
    <Context.Consumer>
      {({t, i18n, mode}) => (
        <Grid item xs={12} md={9}>
          <Paper elevation={3} sx={{justifyContent: 'center'}}>
            <Grid container spacing={2} sx={{padding: '40px'}}>
              <Grid item xs={12} lg={4}>
                <Box display="flex" sx={{justifyContent: 'center'}}>
                  <Image
                    src={{business: profile, fun: pixelProfile}[mode as Mode]}
                    className="profile-picture"
                    width={300}
                    height={300}/>
                  <style>{`
                    .profile-picture {
                      border-radius: 50%;
                      border-style: solid !important;
                      border-color: grey !important;
                      border-width: 4px !important;
                    }
                  `}</style>
                </Box>
              </Grid>
              <Grid container item xs={12} lg={8} spacing={2}>
                <Grid item xs={12}>
                  <Typography variant="h1" component="h1">
                    {t('personal.name')}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h3" component="h2">
                    {t('personal.title')}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h5" component="h5">
                    {t('personal.subtitle')}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="body1" component="p">
                    {t('personal.summary')}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Grid
                    container
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    spacing={1}>
                    <Grid item>
                      <Button
                        color="primary"
                        variant="contained"
                        sx={{fontWeight: 'bold'}}>
                        {t('misc.button.main')}
                      </Button>
                    </Grid>
                    <Grid item>
                      <Button
                        color="secondary"
                        variant="contained"
                        sx={{fontWeight: 'bold'}}
                        onClick={() => openInNewTab(cvPdf)}>
                        {t('misc.button.download_cv')}
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  {SocialMediaIcons(
                    {t, i18n, tKey: 'personal.social'},
                    getSocialMediaItems(mode as Mode)
                  )}
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      )}
    </Context.Consumer>
  )
}

export default LandingCard
