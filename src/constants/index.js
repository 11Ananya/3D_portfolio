import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Full-Stack Developer",
    icon: mobile,
  },
  {
    title: "AI/ML Engineer",
    icon: backend,
  },
  {
    title: "Python Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Data Science Executive",
    company_name: "UW Data Science Club",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Sept. 2024 - Dec. 2024",
    points: [
      "Managed and curated content for the club's LinkedIn, Discord and other platforms, implementing targeted engagement strategies that increased audience interaction by 10%.",
            
    ],
  },
  {
    title: "Software Developer Intern",
    company_name: "Technousa Consulting Services",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "May 2024 – August 2024",
    points: [
      "Reduced dashboard data fetch latency by designing normalized PostgreSQL schemas, building REST APIs in Node.js.",
      "Integrated WebSockets, Chart.js, and server-side pagination to handle 500+ records with real-time interactivity.",      
      "Enhanced load speed by 25% via lazy loading, code splitting, and API caching with Redis.",
      "Refactored legacy React components into modular, reusable hooks and services, reducing frontend code duplication."
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "Talent4Assure",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "May 2023 – August 2023",
    points: [
      "Designed and executed 50+ manual and automated test cases, debugging issues to enhance software quality.",
      "Developed Selenium-based test scripts for regression testing, ensuring 95% product reliability across multiple releases.", 
      "Conducted API testing using Postman and performed cross-browser testing using Selenium WebDriver.",
      "Used JIRA for bug tracking and collaborated with developers to resolve software defects efficiently.",

    ],
  },
  {
    title: "Tech crossword and Group Discussion Head",
    company_name: "XINO - eXtreme InNOvation",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Organized XINO'23, a hybrid technology symposium with 8 events and 80+ schools.",
      "Conducted a government-requested cybersecurity workshop for 2000+ participants.",
      "Won multiple IT/Tech Quizzes, Crosswords and Group Discussions.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  
];

const testimonials = [
  {
    testimonial:
      "Gained proficiency in Python programming concepts, including data structures and file manipulation. Designed a script to organize files in directories based on file type, applying knowledge of Python data structures and file handling.",
    name: "Python Data Structures",
    designation: "University of Michigan",
    company: "Coursera",
    image: "https://bjatta.bja.ojp.gov/sites/default/files/u-m_logo-hex_0.png",
  },
  
  
  {
   testimonial:
      "Developed a strong foundation in Python programming, including control structures, loops, functions and built practical applications of Python, such as data processing scripts.",
    name: "Python Programming",
    designation: "University of Michigan",
    company: "Coursera",
    image: "https://bjatta.bja.ojp.gov/sites/default/files/u-m_logo-hex_0.png",
  },
  
];

const projects = [
  {
    name: "WatSpot: UW Study Spaces",
    description:
      "WatSpot is a smart web application that helps students find their ideal study spots on campus. By considering personal preferences like noise levels, aesthetics, and nearby food options, WatSpot provides tailored recommendations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "Python",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/11Ananya/WatSpot",
  },
  {
    name: "GetGymFit",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "",
  },
  {
    name: "Law firm Management",
    description:
      "Developed to help law firms keep record of case details, lawyer details, and also allow the concerned client to keep a track of the progress of their case and lawyer. The software provides an easy-to-use menu-driven interface to perform various tasks.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "MySQL",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "",
  },
  
];

export { services, technologies, experiences, testimonials, projects };
