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
import {getKeyFromLabel, openInNewTab} from "../API/utils"

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
          <Card sx={{width: 345}}>
            <CardMedia
              component="img"
              height="140"
              image={`/projects/${project.image}`}
              alt={`${project.label}`}/>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {project.label}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {project.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                disabled={!project.public}
                onClick={() => openInNewTab(project.link)}>
                Visit
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  )
}
export default ProjectCards
