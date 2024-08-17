import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { styles } from "../styles";
import { volunteerExperience, experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { NSSlogo } from "../assets";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";


const VolunteerExperience = () => {
  return (
    <div className="mt-14">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Extra Curricular Activities</p>
        <h2 className={styles.sectionHeadText}>Volunteer Experience </h2>
      </motion.div>
      
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:griid-cols-3 gap-2">
          {
         volunteerExperience.map((data, index)=>{
            return <>
            <Card
            className="mt-6 w-96 p-4"
            style={{ backgroundColor: "rgb(29, 24, 54)" }}
          >
            <div className="header flex flex-col justify-center items-center">
            <div className="flex justify-center items-center mx-2">
              <img
                src={data.image}
                // alt={data.image}
                className="w-[80%] h-[80%] object-contain"
                style={{borderRadius:'50%'}}
              />
            </div>
    
            <div>
              <h3 className="text-white text-[24px] font-bold">
                {data.title}
              </h3>
              <p
                className="text-secondary text-[16px] font-semibold"
                style={{ margin: 0 }}
              >
                {data.company_name}
              </p>
              <p
                className="text-secondary text-[16px] font-semibold"
                style={{ margin: 0 }}
              >
                {data.date}
              </p>
            </div>
            </div>
            
            <CardBody>
              <Typography>
              <ul className='mt-5 list-disc ml-5 space-y-2'>
                  {data.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className='text-white-100 text-[14px] pl-1 tracking-wider'
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </Typography>
            </CardBody>
          </Card>
          </>
        })
      }
        </div>
      
    </div>
  );
};

export default SectionWrapper(VolunteerExperience, "volunteerexperience");
