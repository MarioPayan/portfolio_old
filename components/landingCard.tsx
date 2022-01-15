import React from "react"
import Image from "next/image"
import Grid from "@mui/material/Grid"
import {
  Box,
  Button,
  IconButton,
  Paper,
  Stack,
  Typography
} from "@mui/material"
import {Facebook, Instagram, GitHub} from "@mui/icons-material"
import {LandingCard as LandingCardType} from "../API/types"
import {openInNewTab} from "../API/utils"
import {social} from "../API/data"

const LandingCard: LandingCardType = ({data}) => {
  return (
    <Grid item xs={12} md={9}>
      <Paper elevation={3} sx={{justifyContent: "center"}}>
        <Grid container spacing={2} sx={{padding: "40px"}}>
          <Grid item xs={12} lg={4}>
            <Box display="flex" sx={{justifyContent: "center"}}>
              <Image
                src={"/profile2.jpg"}
                className="profile-picture"
                width={300}
                height={300}/>
              <style jsx global>{`
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
              <Typography noWrap variant="h1" component="h1">
                {data.name}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography noWrap variant="h3" component="h2">
                {data.title}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography noWrap variant="h5" component="h5">
                {data.subtitle}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1" component="p">
                {data.summary}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Stack
                direction="row"
                spacing={1}
                flexWrap="wrap"
                display="flex"
                justifyContent="center">
                <Button color="primary" variant="contained">
                  Contact me
                </Button>
                <Button color="secondary" variant="contained">
                  Download CV
                </Button>
              </Stack>
            </Grid>
            <Grid item xs={12}>
              <Stack
                direction="row"
                spacing={1}
                flexWrap="wrap"
                display="flex"
                justifyContent="right">
                <IconButton
                  aria-label="Facebook"
                  onClick={() => openInNewTab(social.facebook)}>
                  <Facebook />
                </IconButton>
                <IconButton
                  aria-label="Facebook"
                  onClick={() => openInNewTab(social.instagram)}>
                  <Instagram />
                </IconButton>
                <IconButton
                  aria-label="Facebook"
                  onClick={() => openInNewTab(social.github)}>
                  <GitHub />
                </IconButton>
              </Stack>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  )
}

export default LandingCard
