export type Skill = { label: string; type: string };
export type SkillChips = ({
  id,
  skills,
}: {
  id: string;
  skills: Skill[];
}) => JSX.Element;

export type LandingCardData = {
  name: string;
  title: string;
  subtitle: string;
  summary: string;
};
export type LandingCard = ({
  id,
  data,
}: {
  id: string;
  data: LandingCardData;
}) => JSX.Element;

export type TimeLineItem = {
  where: string;
  from: string;
  to: string;
  position: string;
  achievements: string[];
};

export type TimeLine = ({
  id,
  items,
}: {
  id: string;
  items: TimeLineItem[];
}) => JSX.Element;

export type Section = { label: string };
export type TopBar = ({sections}: { sections: Section[] }) => JSX.Element;
