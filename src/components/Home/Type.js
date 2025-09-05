import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Engineer",
          "Software Developer",
          "AI/ML Engineer",
          "Data Scientist",
          "Full Stack Developer",
          "Data Analyst",
          "Devops Engineer"
          ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
