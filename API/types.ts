export type SkillType =
  | "code"
  | "framework"
  | "html"
  | "css"
  | "database"
  | "git"
  | "test"
  | "os";
export type Skill = { label: string; type: SkillType };
export type SkillCard = ({
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

export type Experience = {
  company: string;
  from: string;
  to: string;
  position: string;
  achievements: string[];
};

export type TimeLine = ({
  id,
  experiences,
}: {
  id: string;
  experiences: Experience[];
}) => JSX.Element;

export type Section = { label: string };
export type TopBar = ({sections}: { sections: Section[] }) => JSX.Element;
