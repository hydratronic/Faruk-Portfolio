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
  faruk1,
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
    title: "Software Engineer",
    company_name: "Synoriq",
    icon: javascript,
    iconBg: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
    date: "Oct 2022 - Jan 2023",
    points: [
      "Worked on projects from scratch to build a Loan Management System.",
    ],
  },
  {
    title: "RISC V Developer",
    company_name: "Electronics Ict Academy, Indian Institute Of Technology, Guwahati",
    icon: mobile,
    iconBg: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
    date: "July 2020 - August 2020",
    points: [
      "Developed a 32-bit subtractor using carry look ahead adder using digital transistor level gates.",
    ],
  },
  {
    title: "Cybersecurity Intern",
    company_name: "NIELIT Guwahati",
    icon:web,
    iconBg: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
    date: "March 2021",
    points: [
      "Monitored organization's networks for security breaches and investigated violations.",
      "Prepared reports documenting security breaches and the extent of damage caused by them.",
    ],
  },
  {
    title: "Cloud Service Intern",
    company_name: "NIELIT Guwahati",
    icon: backend,
    iconBg:`#${Math.floor(Math.random() * 16777215).toString(16)}`,
    date: "June 2021 - July 2021",
    points: [
      "Studied and gained knowledge of cloud computing and IaaS/PaaS cloud providers services, such as Amazon Web Services, Google Compute Platform, and Microsoft Azure.",
    ],
  },
  {
    title: "IoT Intern",
    company_name: "Exposys Data Labs",
    icon:   figma,
    
    iconBg:`#${Math.floor(Math.random() * 16777215).toString(16)}`,
    date: "July - August 2021",
    points: [
      "Developed an Arduino-based soil moisture checker for easier watering of plants.",
    ],
  },
  {
    title: "AI and Machine Learning Intern",
    company_name: "Academy Of Skill Development",
    icon: mongodb,
    iconBg: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
    date: "May - July 2021",
    points: [
      "Prototyped machine learning applications and quickly determined application viability.",
      "Created customized applications to make critical predictions, automate reasoning and decisions, and calculate optimization algorithms.",
      "Transformed raw data to conform to assumptions of machine learning algorithms.",
      "Developed Stock Market Prediction and Forecasting using LSTM.",
    ],
  },
  
 
 
  
];

const testimonials = [
  {
    testimonial:
      "My ambition is to contribute to advanced technology and artificial intelligence (AI) in a way that enhances the well-being of humanity in the future. I aspire to work on cutting-edge projects and innovations that leverage technology to address significant challenges and make a positive impact on society. By combining my passion for AI with a focus on serving humanity, I aim to develop and apply AI solutions in areas such as healthcare, sustainability, education, or any other domain where technology can bring about meaningful improvements and advancements for the betterment of people's lives.",
    name: "Faruk Ahmed",
    
    image: faruk1,
  },
];

const projects = [
  {
    name: "Real Estate  Viewing App",
    description:
      " Developed a comprehensive dashboard application using MongoDB, Express.js, React.js, and Node.js, showcasing proficiency in the MERN stack. Implemented CRUD operations, authentication, pagination, sorting, and filtering, providing a robust and functional platform for viewing real estate properties.Utilized Material UI to enhance the user interface, creating a modern and visually appealing design for the application.Leveraged TypeScript to ensure type safety and improve code quality, enhancing the development process.",
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
    source_code_link: "https://github.com/hydratronic/yariga",
  },
  {
    name: "Habit Matrix",
    description:
      "A habit tracker app using Redux enables users to define and track daily habits like reading or exercising. It manages habit states (done, not done, or none) through Redux actions and reducers. Users can add, track, and toggle habit statuses for the current and past 7 days. The app displays a list of habits, supports habit details, and offers seamless state management with React. With Redux's single source of truth, users can effortlessly establish and maintain positive habits.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/hydratronic/Habit-Matrix",
  },
  {
    name: "Reviewfy",
    description:
      "Reviewfy is a web application built using Node.js and EJS that enables managers or supervisors to conduct employee performance reviews. It provides a platform for evaluating employees, giving feedback, and tracking their progress. The app includes features such as user authentication, data storage in MongoDB, and various routes and views for managing employee records and review data. Reviewfy offers an efficient and effective solution for streamlining the employee review process and promoting continuous improvement in the workplace.",
    tags: [
      {
        name: "nodeJs",
        color: "blue-text-gradient",
      },
      {
        name: "expressJs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/hydratronic/Reviewfy",
  },
  {
    name: "Issue Tracker",
    description:
      "The Issue Tracker app is a centralized platform for managing and tracking project issues. Users can create projects, view comprehensive lists of project issues, and filter/search for specific issues. It supports efficient collaboration and communication among team members, streamlines issue tracking for improved project management, and serves as a documentation tool for capturing issue details and resolutions. With its focus on organization, resolution, and efficient communication, the Issue Tracker app enhances project management and facilitates effective issue tracking in a streamlined manner.",
    tags: [
      {
        name: "nodeJs",
        color: "blue-text-gradient",
      },
      {
        name: "expressJs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: meta,
    source_code_link: "https://github.com/hydratronic/Reviewfy",
  },
  {
    name: "iPod",
    description:
      "The iPod project is a React-based virtual music player that replicates the classic iPod experience. Users can navigate through options using a click wheel and select Music to access a list of songs. Features like play, pause, previous track, next track, and a progress bar enhance the playback experience. It allows users to enjoy music, create playlists, explore artists and albums, and control song playback. With a nostalgic interface, the virtual iPod provides a convenient and immersive way to listen to music, capturing the essence of the original device in a virtual environment.",
    tags: [
      {
        name: "ReactJs",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: starbucks,
    source_code_link: "https://github.com/hydratronic/Reviewfy",
  },
  {
    name: "ToDo App",
    description:
      "In this React Todo App, users can manage their tasks efficiently. The app allows adding, deleting, editing, and marking tasks as completed. It fetches initial data from an API and updates the server through API requests. The useState hook is used to manage the state of the task list. Loading indicators enhance the user experience. The app's components are structured for easy development and maintenance. With CSS styling, the Todo App has a visually appealing interface. This tutorial covers all the essential features and concepts needed to build a functional Todo App with React, making it suitable for beginners and intermediate developers.",
    tags: [
      {
        name: "ReactJs",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tesla,
    source_code_link: "https://github.com/hydratronic/Reviewfy",
  },
];

export { services, technologies, experiences, testimonials, projects };
