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
import {
  Facebook,
  Instagram,
  GitHub,
  WhatsApp,
  Email,
  LinkedIn
} from "@mui/icons-material"
import {LandingCard as LandingCardType} from "../API/types"
import {openInNewTab} from "../API/utils"
import {cvPdf, social} from "../API/data"

const LandingCard: LandingCardType = ({data}) => {
  return (
    <Grid item xs={12} md={9}>
      <Paper elevation={3} sx={{justifyContent: "center"}}>
        <Grid container spacing={2} sx={{padding: "40px"}}>
          <Grid item xs={12} lg={4}>
            <Box display="flex" sx={{justifyContent: "center"}}>
              <Image
                src={"/profile.jpg"}
                className="profile-picture"
                width={300}
                height={300}/>
              <style jsx>{`
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
                {data.name}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h3" component="h2">
                {data.title}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h5" component="h5">
                {data.subtitle}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1" component="p">
                {data.summary}
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
                    sx={{fontWeight: "bold"}}>
                    Contact me
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    color="secondary"
                    variant="contained"
                    sx={{fontWeight: "bold"}}
                    onClick={() => openInNewTab(cvPdf)}>
                    Download CV
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Stack
                direction="row"
                spacing={1}
                flexWrap="wrap"
                display="flex"
                justifyContent="right">
                <IconButton
                  aria-label="Linked In"
                  onClick={() => openInNewTab(social.linkedin)}>
                  <LinkedIn />
                </IconButton>
                <IconButton
                  aria-label="Whatsapp"
                  onClick={() => openInNewTab(social.whatsapp)}>
                  <WhatsApp />
                </IconButton>
                <IconButton
                  aria-label="Git Hub"
                  onClick={() => openInNewTab(social.github)}>
                  <GitHub />
                </IconButton>
                <IconButton
                  aria-label="Email"
                  onClick={() => openInNewTab(social.email)}>
                  <Email />
                </IconButton>
                <IconButton
                  aria-label="Instagram"
                  onClick={() => openInNewTab(social.instagram)}>
                  <Instagram />
                </IconButton>
                <IconButton
                  aria-label="Facebook"
                  onClick={() => openInNewTab(social.facebook)}>
                  <Facebook />
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
