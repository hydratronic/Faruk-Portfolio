import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
       I'm a passionate and dedicated software engineer with expertise in full-stack development. I have a strong foundation in programming languages such as Java, Springboot, React JS, Node.js, C/C++, HTML/CSS, JavaScript, and SQL. I am proficient in building both frontend and backend components of web applications. On the frontend, I have experience with React JS, HTML, CSS, and JavaScript, creating interactive and user-friendly interfaces. On the backend, I have worked with Java, Springboot, Node.js, and MongoDB to develop robust and scalable server-side applications. I have a deep understanding of RESTful API design and have implemented various backend functionalities using Node.js and MongoDB for efficient data storage and retrieval. Additionally, I am well-versed in version control systems like Git and have experience collaborating with teams using Agile methodologies. Apart from technical skills, I have excellent problem-solving abilities and a strong attention to detail. With a continuous learning mindset, I stay updated with the latest trends and technologies in full-stack development. I am eager to take on new challenges and contribute to the development of innovative and impactful software solutions.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
