import React from "react";
import {Tilt} from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion"; 
import SocialMedia from "./SocialMedia";

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
        <h2 className={styles.sectionHeadText}>WHAT I DO? </h2>
        <SocialMedia />
        <div className= 'rounded-full flex'>
        <p className={`${styles.sectionSubText} `} style={{color:'#ec008c'}}><li className="font-bold text-red-600">Web Development</li> <li>MERN Stack </li><li> Frontend </li><li>  Backend </li></p>
        <p className={`${styles.sectionSubText} mx-5`} style={{color:'#ec008c'}}><li className="font-bold text-red-600"> DSA : Problem Solver</li><li>C </li><li> C++ </li><li> Java </li><li> OOPS </li></p>
        </div>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
       I have a good background in the MERN (MongoDB, Express.js, React, Node.js) stack, with several projects showcasing my proficiency in web development. Additionally, I have gained valuable experience through the previous internships as a Web developer, honing my skills further.I have strong problem solving skills and love to solve algorithmic problems. Also, I am proficient in C/C++, Java and OOPS.
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
