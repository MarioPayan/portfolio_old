import React from "react"
import type {NextPage} from "next"
import Head from "next/head"
import {Stack} from "@mui/material"
import {
  landingCardData,
  sections,
  codeSkills,
  softSkills,
  experiences,
  education
} from "../API/data"
import LandingCard from "../components/landingCard"
import TopBar from "../components/topBar"
import SkillChips from "../components/skillChips"
import TimeLine from "../components/timeline"
// import LandingBackground from "../components/landingBackground"

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
        sx={{paddingTop: 8}}
        justifyContent="center">
        <LandingCard id="about" data={landingCardData} />
        <SkillChips id="skills" skills={codeSkills} />
        <SkillChips id="softSkills" skills={softSkills} />
        <TimeLine id="experience" items={experiences} />
        <TimeLine id="education" items={education} />
      </Stack>
    </>
  )
}

export default Home
