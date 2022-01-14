import React, {useEffect, useState} from "react"
import type {NextPage} from "next"
import Head from "next/head"
import {Grow, Stack} from "@mui/material"
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

import {useInView} from "react-intersection-observer"

const Home: NextPage = () => {
  const inViewOptions = {threshold: 0}
  const [aboutRef, aboutInView] = useInView(inViewOptions)
  const [codeSkillsRef, codeSkillsInView] = useInView(inViewOptions)
  const [softSkillsRef, softSkillsInView] = useInView(inViewOptions)
  const [experienceRef, experienceInView] = useInView(inViewOptions)
  const [educationRef, educationInView] = useInView(inViewOptions)

  const [aboutShowed, setAboutShowed] = useState(aboutInView)
  const [codeSkillShowed, setCodeSkillShowed] = useState(codeSkillsInView)
  const [softSkillShowed, setSoftSkillShowed] = useState(softSkillsInView)
  const [experienceShowed, setExperienceShowed] = useState(experienceInView)
  const [educationShowed, setEducationShowed] = useState(educationInView)

  useEffect(() => {
    aboutInView && setAboutShowed(true)
  }, [aboutInView])
  useEffect(() => {
    codeSkillsInView && setCodeSkillShowed(true)
  }, [codeSkillsInView])
  useEffect(() => {
    softSkillsInView && setSoftSkillShowed(true)
  }, [softSkillsInView])
  useEffect(() => {
    experienceInView && setExperienceShowed(true)
  }, [experienceInView])
  useEffect(() => {
    educationInView && setEducationShowed(true)
  }, [educationInView])

  const growComponent = (
    Component: any,
    props: { [key: string]: any },
    id: string,
    ref: any,
    inView: boolean
  ) => {
    const invisibleStyle = {
      width: "0px",
      height: "0px",
      margin: "0px",
      padding: "24px 0px 24px 0px",
    }
    const inheritStyle = {
      display: "inherit",
      alignItems: "inherit",
      justifyContent: "inherit",
    }
    return (
      <div style={{...inheritStyle, flexDirection: "column", margin: 0}}>
        <div id={id} ref={ref} style={invisibleStyle}></div>
        <Grow style={inheritStyle} in={inView}>
          <div>
            <Component {...props} />
          </div>
        </Grow>
      </div>
    )
  }

  const lastSectionVisible = (): string => {
    if (aboutInView) return "about"
    if (codeSkillsInView) return "codeSkills"
    if (softSkillsInView) return "softSkills"
    if (experienceInView) return "experience"
    if (educationInView) return "education"
    return ""
  }

  return (
    <>
      <Head>
        <title>{landingCardData.name}</title>
      </Head>
      <TopBar sections={sections} lastSectionActive={lastSectionVisible()} />
      <LandingBackground />
      <Stack
        direction="column"
        spacing={20}
        padding={3}
        display="flex"
        alignItems="center"
        sx={{paddingTop: 8}}
        justifyContent="center">
        {growComponent(
          LandingCard,
          {data: landingCardData},
          "about",
          aboutRef,
          aboutShowed
        )}
        {growComponent(
          SkillChips,
          {skills: codeSkills},
          "codeSkills",
          codeSkillsRef,
          codeSkillShowed
        )}
        {growComponent(
          SkillChips,
          {skills: softSkills},
          "softSkills",
          softSkillsRef,
          softSkillShowed
        )}
        {growComponent(
          TimeLine,
          {items: experiences},
          "experience",
          experienceRef,
          experienceShowed
        )}
        {growComponent(
          TimeLine,
          {items: education},
          "education",
          educationRef,
          educationShowed
        )}
      </Stack>
    </>
  )
}

export default Home
