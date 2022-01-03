import React from "react"
import Image from "next/image"
import Grid from "@mui/material/Grid"
import {Button, Paper, Stack, Typography} from "@mui/material"
import FacebookIcon from "@mui/icons-material/Facebook"
import InstagramIcon from "@mui/icons-material/Instagram"
import GitHubIcon from "@mui/icons-material/GitHub"

type LandingCard = ({id, data}: { id: string; data: any }) => JSX.Element;

const LandingCard: LandingCard = ({
  id = "",
  data = {},
}: {
  id: string;
  data: any;
}) => {
  return (
    <Paper
      id={id}
      elevation={3}
      sx={{width: "75%", justifyContent: "center"}}>
      <Grid container spacing={2} sx={{padding: "40px"}}>
        <Grid item xs={4}>
          <Image src={"/profile.jpg"} width={300} height={300} />
        </Grid>
        <Grid container item xs={8} spacing={2}>
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
              alignItems="center"
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
              alignItems="right"
              justifyContent="right">
              <FacebookIcon></FacebookIcon>
              <InstagramIcon></InstagramIcon>
              <GitHubIcon></GitHubIcon>
            </Stack>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default LandingCard
