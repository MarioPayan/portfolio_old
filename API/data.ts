import {TimeLineItem, LandingCardData, Skill, Section} from "./types"

export const landingCardData: LandingCardData = {
  name: "Mario Payan",
  title: "Software Developer",
  subtitle: "Full Stack Engineer | Javascript & Python | Django & React",
  summary:
    "Fullstack developer with focus on software development, algorithms design, software as a service and clean code. Challenge driven, always willing to learn, passionate about new technologies, teamwork and code writing.",
}

export const social = {
  facebook: "https://www.facebook.com/Mario.A.Payan.V",
  instagram: "https://www.instagram.com/mario.a.payan/",
  github: "https://github.com/marioPayan",
}

export const projects = [
  {
    label: "Under degree project",
    description:
      "Application of Augmented Reality for the Communication of Information related to the self-assessment process of the System Engineering Academic Program",
    image: "uv.png",
    link: "",
    public: true,
  },
  {
    label: "Deft website",
    description: "Landing page for Deft Soluciones company",
    link: "https://deftsoluciones.com/",
    public: true,
  },
  {
    label: "Placa y Cédula (Android)",
    description:
      "Android app to know when you can go outside during the pandemic situation in Colombia",
    image: "pyc_android.webp",
    link: "https://play.google.com/store/apps/details?id=com.herokuapp.placa_y_cedula.twa",
    public: true,
  },
  {
    label: "Placa y Cédula (Web)",
    description:
      "Web app to know when you can go outside during the pandemic situation in Colombia",
    image: "pyc_web.png",
    link: "https://placa-y-cedula.herokuapp.com/",
    public: true,
  },
  {
    label: "SVG Learning Tool",
    description:
      "A simple tool to understand how SVG works that I made in my free time to help some mates",
    image: "svg.png",
    link: "https://mariopayan.github.io/SvgLearningTool/",
    public: true,
  },
  {
    label: "This website",
    description: "Website I built for fun",
    link: "https://www.mariopayan.com/",
    public: true,
  },
  {
    label: "Survey Tool",
    description: "Survey tool that TODO",
    image: "wp.png",
    link: "https://app.wellplayedresearch.com/",
    public: false,
  },
]

export const languages = [
  {label: "Español", level: "Native"},
  {label: "English", level: "Professional working proficiency"},
]

export const sections: Section[] = [
  {label: "About", id: "about"},
  {label: "Code Skills", id: "codeSkills"},
  {label: "Soft Skills", id: "softSkills"},
  {label: "Experience", id: "experience"},
  {label: "Projects", id: "projects"},
  {label: "Education", id: "education"},
]

export const codeSkills: Skill[] = [
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

export const softSkills: Skill[] = [
  {label: "Willingness to Learn", type: "nose"},
  {label: "Problem solving", type: "nose"},
  {label: "Proactivity", type: "nose"},
  {label: "Communication", type: "nose"},
  {label: "Teamwork", type: "nose"},
  {label: "Adaptability", type: "nose"},
  {label: "Clean Code", type: "nose"},
]

export const experiences: TimeLineItem[] = [
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

export const education: TimeLineItem[] = [
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

export const cvPdf = "Mario Payan CV.pdf"
