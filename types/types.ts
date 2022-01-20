export type Skill = { label: string; type: string };
export type LandingCardData = {
  name: string;
  title: string;
  subtitle: string;
  summary: string;
};
export type Project = {
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
export type Language = 'en' | 'es';
export type Section = { label: string; id: string };

export type SkillChips = (props: { typeSkills: string }) => JSX.Element;
export type TimeLine = (props: { typeItems: string }) => JSX.Element;
export type ProjectCards = (props: any) => JSX.Element;
export type Configurations = () => JSX.Element;
export type LandingCard = (props: any) => JSX.Element;
export type TopBar = (props: {
  sections: Section[];
  lastSectionActive: string;
}) => JSX.Element;
