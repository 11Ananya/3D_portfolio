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
    title: "AI/ML",
    icon: backend,
  },
  {
    title: "Data Science Exec",
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
    title: "Executive Waterloo, Ontario",
    company_name: "UW Data Science Club",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Sept. 2024 - Dec. 2024",
    points: [
      "Managed and curated content for the club's LinkedIn, Instagram, and Discord platforms, implementing targeted engagement strategies that increased audience interaction by 10%.",
      "anything else?",
      "anything else?",      
      "anything else?",      
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "Talent4Assure",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Collaborated with the team to develop and deliver projects across diverse platforms, utilizing technologies such as Struts 2,Spring, Hibernate, Android, and iOS. Also gained hands-on experience in testing, and quality assurance processes..",
      "anything else?",
      "anything else?",      
      "anything else?",
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
  {
    title: "pls give experience",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "pls take me",
      "i will do work",
      "i will take no breaks and work 24/7 ",
      "type shi",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful, but ananya proved me wrong.",
    name: "Elon Musk",
    designation: "CFO",
    company: "Tesla",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "i love ananya",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "i am your mom!",
    name: "Your mom",
    designation: "CTO",
    company: "I love",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
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
    source_code_link: "https://github.com/",
  },
  {
    name: "Law firm Management",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "one more proj",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };