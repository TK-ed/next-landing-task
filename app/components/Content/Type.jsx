import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          `For the Developers`,
          "To the Developers",
          "By the Developers",
        ],
        autoStart: true,
        typeSpeed: 10,
        loop: true,
        deleteSpeed: 69,
      }}
    />
  );
}

export default Type;