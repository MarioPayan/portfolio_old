export type Skill = { label: string; type: string };
export type LandingCardData = {
  name: string;
  title: string;
  subtitle: string;
  summary: string;
};
export type Projects = {
  label: string;
  description: string;
  image: string;
  link: string;
  public: boolean;
};
export type TimeLineItem = {
  where: string;
  from: string;
  to: string;
  position: string;
  achievements: string[];
};
export type Theme = 'light' | 'dark';
export type Section = { label: string; id: string };

export type SkillChips = (props: { skills: Skill[] }) => JSX.Element;
export type TimeLine = (props: { items: TimeLineItem[] }) => JSX.Element;
export type ProjectCards = (props: { projects: Projects[] }) => JSX.Element;
export type Configurations = () => JSX.Element;
export type LandingCard = (props: { data: LandingCardData }) => JSX.Element;
export type TopBar = (props: {
  sections: Section[];
  lastSectionActive: string;
}) => JSX.Element;
