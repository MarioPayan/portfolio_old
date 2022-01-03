import React from "react"
import CodeIcon from "@mui/icons-material/Code"
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService"
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions"
import CssIcon from "@mui/icons-material/Css"
import HtmlIcon from "@mui/icons-material/Html"
import StorageIcon from "@mui/icons-material/Storage"
import GitHubIcon from "@mui/icons-material/GitHub"
import ComputerIcon from "@mui/icons-material/Computer"
import BugReportIcon from "@mui/icons-material/BugReport"

const data = {
  name: "Mario Payan",
  title: "Software Developer",
  subtitle: "Full Stack Engineer | Javascript & Python | Django & React",
  summary:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
}

const sections = [{key: "about-me", label: "About Me"},
  {key: "skills", label: "Skills"},
  {key: "experience", label: "Experience"},
  {key: "education", label: "Education"}]

const skills = [{key: "javascript", label: "Javascript", icon: <CodeIcon />},
  {key: "typescript", label: "Typescript", icon: <CodeIcon />},
  {key: "python", label: "Python", icon: <CodeIcon />},
  {key: "react", label: "ReactJS", icon: <CodeIcon />},
  {key: "django", label: "Django", icon: <HomeRepairServiceIcon />},
  {
    key: "django-rest",
    label: "Django REST",
    icon: <IntegrationInstructionsIcon />,
  },
  {key: "angular", label: "Angular", icon: <IntegrationInstructionsIcon />},
  {key: "html5", label: "HTML5", icon: <HtmlIcon />},
  {key: "css3", label: "CSS3", icon: <CssIcon />},
  {key: "bootstrap", label: "Bootstrap", icon: <CssIcon />},
  {key: "material-ui", label: "Material UI", icon: <CssIcon />},
  {key: "postgresql", label: "PostgreSQL", icon: <StorageIcon />},
  {key: "sqlite", label: "SQLite", icon: <StorageIcon />},
  {key: "git", label: "Git", icon: <GitHubIcon />},
  {key: "github", label: "GitHub", icon: <GitHubIcon />},
  {key: "gitlab", label: "GitLab", icon: <GitHubIcon />},
  {key: "bitbucket", label: "BitBucket", icon: <GitHubIcon />},
  {key: "shell", label: "Shell", icon: <CodeIcon />},
  {key: "jasmine", label: "Jasmine", icon: <BugReportIcon />},
  {key: "puppeteer", label: "Puppeteer", icon: <BugReportIcon />},
  {key: "appium", label: "Appium", icon: <BugReportIcon />},
  {key: "Linux", label: "Linux", icon: <ComputerIcon />},
  {key: "OSx", label: "OSx", icon: <ComputerIcon />}]

const experiences = [{
  key: "1",
  company: "Alert Logic",
  from: "Jan2017",
  to: "July2017",
  position: "WebDeveloper,Internship",
  achievements: ["Increase the test coverage of PHP application",
    "Support application defects/feature request of JavaScript, jQuery and PHP code",
    "Improvement of UI and performance of web applications",
    "Software development using scrum agile methodology"],
},
{
  key: "2",
  company: "Alert Logic",
  from: "Oct 2017",
  to: "Nov 2018",
  position: "",
  achievements: ["Internal services automation",
    "Provide and support internal tools for analysts",
    "Support and maintain Linux nodes with chef"],
},
{
  key: "3",
  company: "Alert Logic",
  from: "Nov 2018",
  to: "Nov 2019",
  position: "",
  achievements: ["SCRUM master developer",
    "Help to implement continuous integration and continuous delivery pipelines",
    "Implement End-to-end software testing methodology and architecture",
    "Build new UI experience for one of the most used products"],
},
{
  key: "4",
  company: "Alert Logic",
  from: "Nov 2019",
  to: "Current",
  position: "",
  achievements: ["Worked on the implementation of a iOS mobile application",
    "Build from scratch an android mobile application"],
}]

export {data, sections, skills, experiences}
