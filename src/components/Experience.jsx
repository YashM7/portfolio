import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { UIC, motorola } from "../assets";

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Work Experience</h2>
      </motion.div>

      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="July 2022 - May 2023"
          iconStyle={{ background: 'rgb(255, 255, 255)', color: '#fff' }}
          icon={
            <div>
              <img src={motorola} alt="logo" />
            </div>
          }
        >
          <h3 className="vertical-timeline-element-title">Software Engineer</h3>
          <h4 className="vertical-timeline-element-subtitle">Motorola Mobility, LLC</h4>
          <h4 className="vertical-timeline-element-subtitle">Chicago, IL</h4>

          <p>
            Developed and implemented an Android feature that detects a noisy environment and activates vibration for every incoming call until the user exits the noisy environment.
          </p>
          <p>
            Collaborated with Dreamscape and Verizon to configure a 5G-enabled VR demo using an Edge server, HMD, and 5G neckbands, significantly advancing commercial VR gaming capabilities. Presented the technology to executives from companies like Meta, Microsoft, Verizon, and Qualcomm.
          </p>

        </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
        date="Jan 2022 - May 2022"
        iconStyle={{ background: 'rgb(255, 255, 255)', color: '#fff' }}
        icon={
          <div>
            <img src={UIC} alt="logo" />
          </div>
          }
      >
        <h3 className="vertical-timeline-element-title">Undergraduate TA for Database Systems</h3>
        <h4 className="vertical-timeline-element-subtitle">Department of Computer Science UIC</h4>
        <h4 className="vertical-timeline-element-subtitle">Chicago, IL</h4>
        <p>
          Conducted labs and oral examinations to help students understand key concepts like Spring MVC architecture and CRUD functionality.
        </p>
        <p>
          Structured office hours to assist students in understanding concepts, and resolving bugs.
        </p>
      </VerticalTimelineElement>
    </VerticalTimeline>
    </>
  )
}

export default SectionWrapper(Experience, "work")
