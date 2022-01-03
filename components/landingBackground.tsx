import React from "react"
import Particles from "react-tsparticles"
import {Box} from "@mui/material"
import Image from "next/image"

const LandingBackground = () => {
  return (
    <Box sx={{position: "absolute", width: "100%", zIndex: -10}}>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "50vh", // TODO: 100
        }}>
        <Image src={"/landing-image.png"} layout="fill" />
        <Particles
          id="tsparticles"
          options={{
            background: {
              color: {
                value: "#0d47a1",
              },
              opacity: 0,
            },
            fpsLimit: 90,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                bubble: {
                  distance: 400,
                  duration: 2,
                  opacity: 0.8,
                  size: 40,
                },
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#ffffff",
              },
              links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              collisions: {
                enable: true,
              },
              move: {
                direction: "none",
                enable: true,
                outMode: "bounce",
                random: false,
                speed: 1,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 80,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                random: true,
                value: 5,
              },
            },
            detectRetina: true,
          }}/>
      </Box>
    </Box>
  )
}

export default LandingBackground
