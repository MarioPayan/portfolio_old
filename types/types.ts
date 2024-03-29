export type Skill = {label: string; type: string; description: string}
export type LandingCardData = {
  name: string
  title: string
  subtitle: string
  summary: string
}
export type Project = {
  label: string
  description: string
  image: string
  link: string
  public: boolean
}
export type TimeLineItem = {
  where: string
  from: string
  to: string
  position: string
  achievements: string[]
}
export type Theme = 'light' | 'dark'
export type Language = 'en' | 'es'
export type Mode = 'business' | 'fun'
export type Section = {label: string; id: string}
export type ConfigOptions = {theme: Theme; mode: Mode; language: Language}

export type SkillChips = (props: {typeSkills: string}) => JSX.Element
export type TimeLine = (props: {typeItems: string}) => JSX.Element
export type ProjectCards = (props: any) => JSX.Element
export type Configurations = () => JSX.Element
export type LandingCard = (props: any) => JSX.Element
export type TopBar = (props: {sections: Section[]; lastSectionActive: string}) => JSX.Element

export type SetTheme = (theme: Theme) => void
export type SetLanguage = (theme: Language) => void
export type SetMode = (theme: Mode) => void
