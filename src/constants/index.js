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
  java,
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
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
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
    title: "RISC V Developer",
    company_name: "Electronics Ict Academy, Indian Institute Of Technology, Guwahati",
    icon: "",
    iconBg: "",
    date: "July 2020 - August 2020",
    points: [
      "Developed a 32-bit subtractor using carry look ahead adder using digital transistor level gates.",
    ],
  },
  {
    title: "Cybersecurity Intern",
    company_name: "NIELIT Guwahati",
    icon: "",
    iconBg: "",
    date: "March 2021",
    points: [
      "Monitored organization's networks for security breaches and investigated violations.",
      "Prepared reports documenting security breaches and the extent of damage caused by them.",
    ],
  },
  {
    title: "Cloud Service Intern",
    company_name: "NIELIT Guwahati",
    icon: "",
    iconBg: "",
    date: "June 2021 - July 2021",
    points: [
      "Studied and gained knowledge of cloud computing and IaaS/PaaS cloud providers services, such as Amazon Web Services, Google Compute Platform, and Microsoft Azure.",
    ],
  },
  {
    title: "IoT Intern",
    company_name: "Exposys Data Labs",
    icon: "",
    iconBg: "",
    date: "July - August 2021",
    points: [
      "Developed an Arduino-based soil moisture checker for easier watering of plants.",
    ],
  },
  {
    title: "AI and Machine Learning Intern",
    company_name: "Academy Of Skill Development",
    icon: "",
    iconBg: "",
    date: "May - July 2021",
    points: [
      "Prototyped machine learning applications and quickly determined application viability.",
      "Created customized applications to make critical predictions, automate reasoning and decisions, and calculate optimization algorithms.",
      "Transformed raw data to conform to assumptions of machine learning algorithms.",
      "Developed Stock Market Prediction and Forecasting using LSTM.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Synoriq",
    icon: java,
    iconBg: "#E6DEDD",
    date: "Oct 2022 - Jan 2023",
    points: [
      "Worked on projects from scratch to build a Loan Management System.",
    ],
  },
];

experiences.sort((a, b) => {
  const dateA = new Date(a.date.split(" - ")[0]);
  const dateB = new Date(b.date.split(" - ")[0]);
  return dateA - dateB;
});

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
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
    name: "Job IT",
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
    name: "Trip Guide",
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
