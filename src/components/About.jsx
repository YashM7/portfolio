import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon}) => {
  return (
    <Tilt
        tiltMaxAngleX={25}
        tiltMaxAngleY={25}
        scale={1.1}
        transitionSpeed={450}
        className='xs:w-[250px] w-full'
    >
      
      <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>

          <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[250px] flex justify-evenly items-center flex-col">
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
    
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Introduction</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I'm a software engineer with experience in Java and
        JavaScript, and expertise in frameworks like Spring Boot, React, and Node.js.
        I'm a quick learner and I have a strong passion for continuously expanding my 
        knowledge and enhancing my skill set by actively seeking new opportunities to 
        learn about emerging technologies and techniques. Let's work together to bring
        your ideas to life!
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>

    </>
  )
}
export default SectionWrapper(About, "about")