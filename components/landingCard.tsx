import React from "react"
import Image from "next/image"
import Grid from "@mui/material/Grid"
import {Box, Button, Paper, Stack, Typography} from "@mui/material"
import {Facebook, Instagram, GitHub} from "@mui/icons-material"
import {LandingCard as LandingCardType} from "../API/types"

const LandingCard: LandingCardType = ({id = "", data}) => {
  return (
    <Grid item id={id} xs={12} md={9}>
      <Paper elevation={3} sx={{justifyContent: "center"}}>
        <Grid container spacing={2} sx={{padding: "40px"}}>
          <Grid item xs={12} lg={4}>
            <Box display="flex" sx={{justifyContent: "center"}}>
              <Image src={"/profile.jpg"} width={300} height={300} />
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
                <Facebook />
                <Instagram />
                <GitHub />
              </Stack>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  )
}

export default LandingCard
