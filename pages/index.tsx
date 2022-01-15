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
  projects,
  education
} from "../API/data"
import {useInView} from "react-intersection-observer"
import LandingCard from "../components/landingCard"
import TopBar from "../components/topBar"
import SkillChips from "../components/skillChips"
import TimeLine from "../components/timeline"
import LandingBackground from "../components/landingBackground"
import ProjectCards from "../components/projectCards"

const Home: NextPage = () => {
  const inViewOptions = {threshold: 0}
  const [aboutRef, aboutInView] = useInView(inViewOptions)
  const [codeSkillsRef, codeSkillsInView] = useInView(inViewOptions)
  const [softSkillsRef, softSkillsInView] = useInView(inViewOptions)
  const [experienceRef, experienceInView] = useInView(inViewOptions)
  const [projectsRef, projectsInView] = useInView(inViewOptions)
  const [educationRef, educationInView] = useInView(inViewOptions)

  const [aboutShowed, setAboutShowed] = useState(aboutInView)
  const [codeSkillShowed, setCodeSkillShowed] = useState(codeSkillsInView)
  const [softSkillShowed, setSoftSkillShowed] = useState(softSkillsInView)
  const [experienceShowed, setExperienceShowed] = useState(experienceInView)
  const [projectsShowed, setProjectsShowed] = useState(projectsInView)
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
    projectsInView && setProjectsShowed(true)
  }, [projectsInView])
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
      scrollMarginTop: "3rem",
      padding: "0px",
    }
    return (
      <>
        <div id={id} ref={ref} style={invisibleStyle}></div>
        <Grow in={inView}>
          <div style={{display: "contents"}}>
            <Component {...props} />
          </div>
        </Grow>
      </>
    )
  }

  const lastSectionVisible = (): string => {
    if (aboutInView) return "about"
    if (codeSkillsInView) return "codeSkills"
    if (softSkillsInView) return "softSkills"
    if (experienceInView) return "experience"
    if (projectsInView) return "projects"
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
          ProjectCards,
          {projects: projects},
          "projects",
          projectsRef,
          projectsShowed
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
