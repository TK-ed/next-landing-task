import React from "react";
import Typewriter from "typewriter-effect";

function Type({className}) {
  return (
    <div className={`${className}`}>
      <Typewriter
        options={{
          strings: [
            `For the Developers`,
            "To the Developers",
            "By the Developers",
          ],
          autoStart: true,
          typeSpeed: 7,
          loop: true,
          deleteSpeed: 69,
        }}
      />
    </div>
  );
}

export default Type;
