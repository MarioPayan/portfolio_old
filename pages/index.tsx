import React, {useEffect, useState} from 'react'
import {NextPage} from 'next'
import Head from 'next/head'
import {useInView} from 'react-intersection-observer'
import LandingCard from '../components/landingCard'
import TopBar from '../components/topBar'
import SkillChips from '../components/skillChips'
import TimeLine from '../components/timeline'
import LandingBackground from '../components/landingBackground'
import ProjectCards from '../components/projectCards'
import {default as data} from '../API/en-data.json'
import {Grid, Grow, Stack} from '@mui/material'

const Home: NextPage = () => {
  const inViewOptions = {threshold: 0}
  const [aboutRef1, aboutInView1] = useInView(inViewOptions)
  const [aboutRef2, aboutInView2] = useInView(inViewOptions)
  const [hardSkillsRef1, hardSkillsInView1] = useInView(inViewOptions)
  const [hardSkillsRef2, hardSkillsInView2] = useInView(inViewOptions)
  const [softSkillsRef1, softSkillsInView1] = useInView(inViewOptions)
  const [softSkillsRef2, softSkillsInView2] = useInView(inViewOptions)
  const [experienceRef1, experienceInView1] = useInView(inViewOptions)
  const [experienceRef2, experienceInView2] = useInView(inViewOptions)
  const [projectsRef1, projectsInView1] = useInView(inViewOptions)
  const [projectsRef2, projectsInView2] = useInView(inViewOptions)
  const [educationRef1, educationInView1] = useInView(inViewOptions)
  const [educationRef2, educationInView2] = useInView(inViewOptions)

  const [aboutShowed, setAboutShowed] = useState(aboutInView1 || aboutInView2)
  const [hardSkillShowed, setCodeSkillShowed] = useState(
    hardSkillsInView1 || hardSkillsInView2
  )
  const [softSkillShowed, setSoftSkillShowed] = useState(
    softSkillsInView1 || softSkillsInView2
  )
  const [experienceShowed, setExperienceShowed] = useState(
    experienceInView1 || experienceInView2
  )
  const [projectsShowed, setProjectsShowed] = useState(
    projectsInView1 || projectsInView2
  )
  const [educationShowed, setEducationShowed] = useState(
    educationInView1 || educationInView2
  )

  useEffect(() => {
    if (aboutInView1 || aboutInView2) setAboutShowed(true)
  }, [aboutInView1, aboutInView2])
  useEffect(() => {
    if (hardSkillsInView1 || hardSkillsInView2) setCodeSkillShowed(true)
  }, [hardSkillsInView1, hardSkillsInView2])
  useEffect(() => {
    if (softSkillsInView1 || softSkillsInView2) setSoftSkillShowed(true)
  }, [softSkillsInView1, softSkillsInView2])
  useEffect(() => {
    if (experienceInView1 || experienceInView2) setExperienceShowed(true)
  }, [experienceInView1, experienceInView2])
  useEffect(() => {
    if (projectsInView1 || projectsInView2) setProjectsShowed(true)
  }, [projectsInView1, projectsInView2])
  useEffect(() => {
    if (educationInView1 || educationInView2) setEducationShowed(true)
  }, [educationInView1, educationInView2])

  const growComponent = (
    Component: any,
    props: { [key: string]: any },
    id: string,
    refs: any[],
    inView: boolean
  ) => {
    const styleInherit = {
      display: 'inherit',
      alignItems: 'inherit',
      justifyContent: 'inherit',
    }
    const invisibleStyle = {
      width: '0px',
      height: '0px',
      margin: '0px',
      scrollMarginTop: '3rem',
      padding: '0px',
    }
    return (
      <>
        <div id={id} ref={refs[0]} style={invisibleStyle}></div>
        <Grow in={inView}>
          <Grid container style={{...styleInherit, marginTop: '80px'}}>
            <Component {...props} />
          </Grid>
        </Grow>
        <div id={id} ref={refs[1]} style={invisibleStyle}></div>
      </>
    )
  }

  const lastSectionVisible = (): string => {
    if (aboutInView1 && aboutInView2) return 'about'
    if (hardSkillsInView1 && hardSkillsInView2) return 'hardSkills'
    if (softSkillsInView1 && softSkillsInView2) return 'softSkills'
    if (experienceInView1 && experienceInView2) return 'experience'
    if (projectsInView1 && projectsInView2) return 'projects'
    if (educationInView1 && educationInView2) return 'education'
    return ''
  }

  return (
    <>
      <Head>
        <title>{data.personal.name}</title>
      </Head>
      <TopBar
        sections={data.sections}
        lastSectionActive={lastSectionVisible()}/>
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
          {},
          'about',
          [aboutRef1, aboutRef2],
          aboutShowed
        )}
        {growComponent(
          SkillChips,
          {typeSkills: 'hardSkills'},
          'hardSkills',
          [hardSkillsRef1, hardSkillsRef2],
          hardSkillShowed
        )}
        {growComponent(
          SkillChips,
          {typeSkills: 'softSkills'},
          'softSkills',
          [softSkillsRef1, softSkillsRef2],
          softSkillShowed
        )}
        {growComponent(
          TimeLine,
          {typeItems: 'experiences'},
          'experience',
          [experienceRef1, experienceRef2],
          experienceShowed
        )}
        {growComponent(
          ProjectCards,
          {},
          'projects',
          [projectsRef1, projectsRef2],
          projectsShowed
        )}
        {growComponent(
          TimeLine,
          {typeItems: 'education'},
          'education',
          [educationRef1, educationRef2],
          educationShowed
        )}
      </Stack>
    </>
  )
}

export default Home
