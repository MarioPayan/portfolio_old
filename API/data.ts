import {TimeLineItem, LandingCardData, Skill} from "./types"

const landingCardData: LandingCardData = {
  name: "Mario Payan",
  title: "Software Developer",
  subtitle: "Full Stack Engineer | Javascript & Python | Django & React",
  summary:
    "Fullstack developer with focus on software development, algorithms design, software as a service and clean code. Challenge driven, always willing to learn, passionate about new technologies, teamwork and code writing.",
}

const sections = [
  {label: "About"},
  {label: "Skills"},
  {label: "Experience"},
  {label: "Education"},
]

const codeSkills: Skill[] = [
  {label: "Javascript", type: "code"},
  {label: "Typescript", type: "code"},
  {label: "Python", type: "code"},
  {label: "ReactJS", type: "code"},
  {label: "Django", type: "framework"},
  {label: "Django REST", type: "framework"},
  {label: "Angular", type: "framework"},
  {label: "HTML5", type: "html"},
  {label: "CSS3", type: "css"},
  {label: "Bootstrap", type: "css"},
  {label: "Material UI", type: "css"},
  {label: "PostgreSQL", type: "database"},
  {label: "SQLite", type: "database"},
  {label: "Git", type: "git"},
  {label: "GitHub", type: "git"},
  {label: "GitLab", type: "git"},
  {label: "BitBucket", type: "git"},
  {label: "Shell", type: "code"},
  {label: "Jasmine", type: "test"},
  {label: "Puppeteer", type: "test"},
  {label: "Appium", type: "test"},
  {label: "Linux", type: "os"},
  {label: "OSx", type: "os"},
]

const softSkills: Skill[] = [
  {label: "Willingness to Learn", type: "nose"},
  {label: "Problem solving", type: "nose"},
  {label: "Proactivity", type: "nose"},
  {label: "Communication", type: "nose"},
  {label: "Teamwork", type: "nose"},
  {label: "Adaptability", type: "nose"},
  {label: "Clean Code", type: "nose"},
]

const experiences: TimeLineItem[] = [
  {
    where: "Alert Logic",
    from: "2017-01",
    to: "2017-07",
    position: "Web Developer (Internship)",
    achievements: [
      "Increase the test coverage of PHP application",
      "Support application defects/feature request of JavaScript, jQuery and PHP code",
      "Improvement of UI and performance of web applications",
      "Software development using scrum agile methodology",
    ],
  },
  {
    where: "Alert Logic",
    from: "2017-10",
    to: "2018-11",
    position: "Back-End Developer",
    achievements: [
      "Internal services automation",
      "Provide and support internal tools for analysts",
      "Support and maintain Linux nodes with chef",
    ],
  },
  {
    where: "Alert Logic",
    from: "2018-11",
    to: "2019-11",
    position: "Full-Stack Developer",
    achievements: [
      "SCRUM master developer",
      "Help to implement continuous integration and continuous delivery pipelines",
      "Implement End-to-end software testing methodology and architecture",
      "Build new UI experience for one of the most used products",
    ],
  },
  {
    where: "Alert Logic",
    from: "2019-11",
    to: "2021-07",
    position: "Mobile Developer",
    achievements: [
      "Worked on the implementation of a iOS mobile application",
      "Build from scratch an android mobile application",
    ],
  },
  {
    where: "Network Redux",
    from: "2021-07",
    to: "",
    position: "Tech-Lead Developer",
    achievements: [],
  },
  {
    where: "CIER-Sur",
    from: "2016-01",
    to: "2016-06",
    position: "Web Content Developer",
    achievements: [
      "Build learning objects based on Javascript code ith CSS",
      "Help to build a framework to reuse existing code on new learning objects",
    ],
  },
]

const education: TimeLineItem[] = [
  {
    where: "Universidad del Valle",
    from: "2012-01",
    to: "2017-01",
    position: "B.S. Systems Engineering and Computer Science",
    achievements: [
      "National Awarded Academic Scholarship: Bachilleres por Colombia Mario Galán Gómez, award given to the 70 best students in the country",
      "Awarded Academic Scholarships for being at the top of the class",
    ],
  },
]

export {
  landingCardData,
  sections,
  codeSkills,
  softSkills,
  experiences,
  education
}
