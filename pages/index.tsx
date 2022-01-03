import React from "react"
import type {NextPage} from "next"
import Head from "next/head"
import {Stack} from "@mui/material"
import {landingCardData, sections, skills, experiences} from "../API/data"
import LandingCard from "../components/landingCard"
import TopBar from "../components/topBar"
import SkillCard from "../components/skillCard"
import TimeLine from "../components/timeline"
import LandingBackground from "../components/landingBackground"

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>{landingCardData.name}</title>
      </Head>
      <TopBar sections={sections} />
      {/* <LandingBackground /> */}
      <Stack
        direction="column"
        spacing={20}
        padding={3}
        display="flex"
        alignItems="center"
        justifyContent="center">
        <LandingCard id="about-me" data={landingCardData} />
        <SkillCard id="skills" skills={skills} />
        <TimeLine id="experience" experiences={experiences} />
      </Stack>
    </>
  )
}

export default Home
