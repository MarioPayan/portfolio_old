import React from "react"
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button
} from "@mui/material"
import {ProjectCards as ProjectCardsType} from "../API/types"
import {getKeyFromLabel, image404, openInNewTab} from "../API/utils"
import Lock from "@mui/icons-material/Lock"

const ProjectCards: ProjectCardsType = ({projects = []}) => {
  return (
    <Grid
      container
      item
      spacing={1}
      xs={12}
      md={8}
      sx={{justifyContent: "center"}}>
      {projects.map(project => (
        <Grid item key={getKeyFromLabel(project.label)}>
          <Card sx={{width: 345, height: 300}}>
            <CardMedia
              component="img"
              height="140"
              image={project.image ? project.image : image404}
              alt={`${project.label}`}/>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {project.label}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: 2,
                  overflow: "hidden",
                  height: 35,
                }}>
                {project.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                disabled={!project.public}
                variant="contained"
                sx={{fontWeight: "bold"}}
                onClick={() => openInNewTab(project.link)}>
                Visit {!project.public && <Lock />}
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  )
}
export default ProjectCards
