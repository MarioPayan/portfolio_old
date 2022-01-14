export type Skill = { label: string; type: string };
export type SkillChips = (props: { skills: Skill[] }) => JSX.Element;

export type LandingCardData = {
  name: string;
  title: string;
  subtitle: string;
  summary: string;
};
export type LandingCard = (props: { data: LandingCardData }) => JSX.Element;

export type TimeLineItem = {
  where: string;
  from: string;
  to: string;
  position: string;
  achievements: string[];
};

export type TimeLine = (props: { items: TimeLineItem[] }) => JSX.Element;

export type Section = { label: string; id: string };
export type TopBar = (props: {
  sections: Section[];
  lastSectionActive: string;
}) => JSX.Element;
