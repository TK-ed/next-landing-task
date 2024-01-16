"use client";
import Type from "./Type";
import styles from "./content.module.css";
// import Picture from "./Picture";
// import { FaQuestion } from "react-icons/fa";

const Content = () => {
  return (
    <>
      <section className="body-font">
        <div className="container flex flex-col items-center justify-center px-5 py-24 mx-auto ">
          <div className="w-full text-center lg:w-2/3">
            <h1 className={styles.content}>
              Delivering excellence in every aspect
            </h1>
            <pre className="mb-8 text-xl leading-relaxed">
              There is something mysterious about the life of a{" "}
              <pre className="text-orange-500 font-exxtrabold">DEVELOPER</pre>{" "}
              <pre className="text-2xl">
                Ready to experience the BEST??
                {/* <FaQuestion color="white" size={20} /> */}
                <p className="text-xl">
                  Sign up now and start enjoying the benefits.
                </p>
              </pre>
            </pre>
            <div>
              <Type className="text-4xl " />
            </div>{" "}
            <br />
            {/* <p className={styles.p}>Innovation begins with lines of code.</p> */}
            {/* <Picture /> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Content;
