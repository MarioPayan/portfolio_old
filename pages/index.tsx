import React, {LegacyRef, useEffect, useState} from 'react'
import {NextPage} from 'next'
import Head from 'next/head'
import {useInView} from 'react-intersection-observer'
import LandingCard from '../components/landingCard'
import TopBar from '../components/topBar'
import SkillChips from '../components/skillChips'
import TimeLine from '../components/timeline'
import LandingBackground from '../components/landingBackground'
import ProjectCards from '../components/projectCards'
import {Grid, Grow, Stack} from '@mui/material'
import Context from '../components/context'
import {Section} from '../types/types'

const Home: NextPage = () => {
  const inViewOptions = {triggerOnce: true, fallbackInView: true}
  const [aboutRef, aboutInView] = useInView(inViewOptions)
  const [hardSkillsRef, hardSkillsInView] = useInView(inViewOptions)
  const [softSkillsRef, softSkillsInView] = useInView(inViewOptions)
  const [experienceRef, experienceInView] = useInView(inViewOptions)
  const [projectsRef, projectsInView] = useInView(inViewOptions)
  const [educationRef, educationInView] = useInView(inViewOptions)

  const [aboutShowed, setAboutShowed] = useState(aboutInView)
  const [hardSkillShowed, setCodeSkillShowed] = useState(hardSkillsInView)
  const [softSkillShowed, setSoftSkillShowed] = useState(softSkillsInView)
  const [experienceShowed, setExperienceShowed] = useState(experienceInView)
  const [projectsShowed, setProjectsShowed] = useState(projectsInView)
  const [educationShowed, setEducationShowed] = useState(educationInView)

  useEffect(() => {
    // TODO: Fix
    if (aboutInView) setAboutShowed(true)
  }, [aboutInView])
  useEffect(() => {
    if (hardSkillsInView) setCodeSkillShowed(true)
  }, [hardSkillsInView])
  useEffect(() => {
    if (softSkillsInView) setSoftSkillShowed(true)
  }, [softSkillsInView])
  useEffect(() => {
    if (experienceInView) setExperienceShowed(true)
  }, [experienceInView])
  useEffect(() => {
    if (projectsInView) setProjectsShowed(true)
  }, [projectsInView])
  useEffect(() => {
    if (educationInView) setEducationShowed(true)
  }, [educationInView])

  const growComponent = (
    Component: (props: any) => JSX.Element,
    props: { [key: string]: unknown },
    id: string,
    ref: LegacyRef<HTMLDivElement>,
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
        <div id={id} ref={ref} style={invisibleStyle}></div>
        <Grow in={inView}>
          <Grid container style={{...styleInherit, marginTop: '80px'}}>
            <Component {...props} />
          </Grid>
        </Grow>
      </>
    )
  }

  const lastSectionVisible = (): string => {
    if (aboutInView) return 'about'
    if (hardSkillsInView) return 'hardSkills'
    if (softSkillsInView) return 'softSkills'
    if (experienceInView) return 'experience'
    if (projectsInView) return 'projects'
    if (educationInView) return 'education'
    return ''
  }

  return (
    <Context.Consumer>
      {({t}) => (
        <>
          <Head>
            <title>{t('personal.name')}</title>
          </Head>
          <TopBar
            sections={
              t('sections', {returnObjects: true}) as unknown as Section[]
            }
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
            {growComponent(LandingCard, {}, 'about', aboutRef, aboutShowed)}
            {growComponent(
              SkillChips,
              {typeSkills: 'hardSkills'},
              'hardSkills',
              hardSkillsRef,
              hardSkillShowed
            )}
            {growComponent(
              SkillChips,
              {typeSkills: 'softSkills'},
              'softSkills',
              softSkillsRef,
              softSkillShowed
            )}
            {growComponent(
              TimeLine,
              {typeItems: 'experiences'},
              'experience',
              experienceRef,
              experienceShowed
            )}
            {growComponent(
              ProjectCards,
              {},
              'projects',
              projectsRef,
              projectsShowed
            )}
            {growComponent(
              TimeLine,
              {typeItems: 'education'},
              'education',
              educationRef,
              educationShowed
            )}
          </Stack>
        </>
      )}
    </Context.Consumer>
  )
}

export default Home
