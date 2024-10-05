import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div className="flex flex-col">
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
          <h2 className="text-lg text-center">{technology.name}</h2>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
