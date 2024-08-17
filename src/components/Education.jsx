import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { educationData } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const Education = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        {/* <p className={styles.sectionSubText}>Education</p> */}
        <h2 className={`${styles.sectionHeadText} mb-10`}>Education </h2>
      </motion.div>

      {educationData.map((ed, index) => (
        <div className="container flex  mb-20 justify-start pl-[13vw]">
          <div className="mt-2">
            <div className="logo" style={{ alignItems: "center" }}>
              <img
                src={ed.image}
                alt={index}
                srcset=""
                style={{ height: "100px", width: "120px", borderRadius: "100%" }}
              />
            </div>
          </div>

          <div className="info mx-12 flex flex-col justify-between align-top w-[100%]">
            <div className="name" style={{ fontSize: "1.5rem" }}>
              <span>{ed.name}</span>
            </div>
            <div className="branch" style={{ fontSize: "1.25rem" }}>
              {ed.branch}
            </div>
            <div
              className="year flex justify-between"
              style={{ fontSize: "1rem" }}
            >
              <h2>{ed.date}</h2>
              <h2 className="font-bold text-2xl text-red-500">{ed.cgpa}</h2>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default SectionWrapper(Education, "education");
