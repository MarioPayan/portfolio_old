import React from "react"
import type {NextPage} from "next"
import Head from "next/head"
import Image from "next/image"
import {Stack} from "@mui/material"
import Box from "@mui/material/Box"
import {data, sections, skills, experiences} from "../API/data"
import LandingCard from "../components/landingCard"
import TopBar from "../components/topBar"
import SkillCard from "../components/skillCard"
import TimeLine from "../components/timeline"

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>{data.name}</title>
      </Head>
      <TopBar sections={sections} />
      <Box sx={{position: "absolute", width: "100%", zIndex: -10}}>
        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: "75vh",
          }}>
          <Image src={"/landing-image.png"} layout="fill" />
        </Box>
      </Box>

      <Stack
        direction="column"
        spacing={20}
        padding={3}
        display="flex"
        alignItems="center"
        justifyContent="center">
        <LandingCard id="about-me" data={data} />
        <SkillCard id="skills" skills={skills} />
        <TimeLine id="experience" experiences={experiences} />
      </Stack>
    </>
  )
}

export default Home
