import React from "react"
import type {NextPage} from "next"
import Head from "next/head"
import {Box, Stack, Zoom} from "@mui/material"
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
import LandingBackground from "../components/landingBackground"

const Home: NextPage = () => {
  // const [showElements, setShowElements] =
  // useState({codeSkills: false, softSkills: false, experience: false, education: false})

  // const onScroll = () => {
  //   const elements: string[] = Object.keys(showElements)
  //   elements.forEach(element => {
  //     const elementY = document.getElementById(element)?.getBoundingClientRect().top || 0
  //     if(elementY - window.innerHeight < -30 && !showElements[element as keyof typeof showElements]) {
  //       setShowElements({...showElements, [element]: true})
  //     }
  //   });
  // };

  // useEffect(() => {
  //   window.onscroll = () => onScroll()
  // }, []);

  const showElements = {
    codeSkills: true,
    softSkills: true,
    experience: true,
    education: true,
  }

  return (
    <>
      <Head>
        <title>{landingCardData.name}</title>
      </Head>
      <TopBar sections={sections} />
      <LandingBackground />
      <Stack
        direction="column"
        spacing={20}
        padding={3}
        display="flex"
        alignItems="center"
        justifyContent="center">
        <LandingCard id="about-me" data={landingCardData} />
        <Zoom in={showElements.codeSkills}>
          <Box display="flex" alignItems="center" justifyContent="center">
            <SkillChips id="skills" skills={codeSkills} />
          </Box>
        </Zoom>
        <Zoom in={showElements.softSkills}>
          <Box display="flex" alignItems="center" justifyContent="center">
            <SkillChips id="softSkills" skills={softSkills} />
          </Box>
        </Zoom>
        <Zoom in={showElements.experience}>
          <Box display="flex" alignItems="center" justifyContent="center">
            <TimeLine id="experience" items={experiences} />
          </Box>
        </Zoom>
        <Zoom in={showElements.education}>
          <Box display="flex" alignItems="center" justifyContent="center">
            <TimeLine id="education" items={education} />
          </Box>
        </Zoom>
      </Stack>
    </>
  )
}

export default Home
