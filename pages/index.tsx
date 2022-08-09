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
import UnderConstruction from '../components/underConstruction'
import {Grid, Stack} from '@mui/material'
import Context from '../components/context'
import {Mode, Section} from '../types/types'
import {favicon} from '../utils/assets'
import Hobby from '../components/hobby'

const Home: NextPage = () => {
  const [activeSection, setActiveSection] = useState('')
  const inViewOptions = {
    threshold: (typeof window !== 'undefined' && window.innerHeight) < 1000 ? 0.1 : 0.6,
    fallbackInView: true,
  }
  const [aboutRef, aboutInView] = useInView(inViewOptions)
  const [hardSkillsRef, hardSkillsInView] = useInView(inViewOptions)
  const [softSkillsRef, softSkillsInView] = useInView(inViewOptions)
  const [experienceRef, experienceInView] = useInView(inViewOptions)
  const [projectsRef, projectsInView] = useInView(inViewOptions)
  const [educationRef, educationInView] = useInView(inViewOptions)

  useEffect(() => {
    lastSectionVisible()
  }, [aboutInView, hardSkillsInView, softSkillsInView, experienceInView, projectsInView, educationInView])

  const growComponent = (
    Component: (props: any) => JSX.Element,
    props: {[key: string]: unknown},
    id: string,
    ref: LegacyRef<HTMLDivElement>
  ) => {
    const styleInherit: React.CSSProperties = {
      display: 'flex',
      alignItems: 'inherit',
      justifyContent: 'inherit',
      position: 'relative',
    }
    const invisibleStyle: React.CSSProperties = {
      display: 'flex',
      width: '1px',
      height: '100%',
      margin: '0',
      padding: '0',
      position: 'absolute',
      scrollMarginTop: '4rem',
    }
    return (
      <>
        <Grid container style={{...styleInherit}}>
          <div id={id} ref={ref} style={invisibleStyle}></div>
          <Component {...props} />
        </Grid>
      </>
    )
  }

  const lastSectionVisible = (): void => {
    if (aboutInView) setActiveSection('about')
    else if (hardSkillsInView) setActiveSection('hardSkills')
    else if (softSkillsInView) setActiveSection('softSkills')
    else if (experienceInView) setActiveSection('experience')
    else if (educationInView) setActiveSection('education')
    else if (projectsInView) setActiveSection('projects')
    else setActiveSection('')
  }

  const businessStack = () => (
    <Stack
      direction='column'
      spacing={10}
      padding={3}
      display='flex'
      alignItems='center'
      sx={{paddingTop: 8}}
      justifyContent='center'>
      {growComponent(LandingCard, {}, 'about', aboutRef)}
      {growComponent(SkillChips, {typeSkills: 'hardSkills'}, 'hardSkills', hardSkillsRef)}
      {growComponent(SkillChips, {typeSkills: 'softSkills'}, 'softSkills', softSkillsRef)}
      {growComponent(TimeLine, {typeItems: 'experiences'}, 'experience', experienceRef)}
      {growComponent(ProjectCards, {}, 'projects', projectsRef)}
      {growComponent(TimeLine, {typeItems: 'education'}, 'education', educationRef)}
    </Stack>
  )

  const funStack = () => (
    <Stack
      direction='column'
      spacing={10}
      padding={3}
      display='flex'
      alignItems='center'
      sx={{paddingTop: 8}}
      justifyContent='center'>
      {growComponent(LandingCard, {}, 'about', aboutRef)}
      {growComponent(Hobby, {section: 'music'}, 'music', null)}
      {growComponent(Hobby, {section: 'traveling'}, 'traveling', null)}
      {growComponent(Hobby, {section: 'dogs'}, 'dogs', null)}
      {growComponent(Hobby, {section: 'geek'}, 'geek', null)}
      {growComponent(Hobby, {section: 'roles'}, 'roles', null)}
      {growComponent(Hobby, {section: 'random'}, 'random', null)}
      {growComponent(Hobby, {section: 'films'}, 'films', null)}
      {growComponent(Hobby, {section: 'sports'}, 'sports', null)}
    </Stack>
  )

  return (
    <Context.Consumer>
      {({t, mode}) => (
        <>
          <Head>
            <title>{t('personal.name')}</title>
            <link rel='shortcut icon' href={favicon} />
            <link rel='stylesheet' href='https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css' />
          </Head>
          <TopBar
            sections={t('sections', {returnObjects: true}) as unknown as Section[]}
            lastSectionActive={activeSection}/>
          <LandingBackground />
          {{business: businessStack, fun: funStack}[mode as Mode]()}
          <UnderConstruction></UnderConstruction>
        </>
      )}
    </Context.Consumer>
  )
}

export default Home
