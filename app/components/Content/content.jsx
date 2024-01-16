"use client";
import Type from "./Type";
import styles from "./content.module.css";
// import Picture from "./Picture";
// import { FaQuestion } from "react-icons/fa";

const Content = () => {
  return (
    <>
      <section className="body-font">
        <div className="container flex flex-col items-center justify-center px-5 py-24 mx-auto h-[100%]">
          <div className="w-full text-center lg:w-2/3">
            <h1 className={styles.content}>
              Delivering excellence in every aspect
            </h1>
            <p className="mb-8 text-xl leading-relaxed">
              There is something mysterious about the life of a{" "}
              <span className="text-orange-500 font-exxtrabold">DEVELOPER</span>{" "}
              <span className="block text-2xl">
                Ready to experience the BEST??
                {/* <FaQuestion color="white" size={20} /> */}
                <span className="block text-xl">
                  Sign up now and start enjoying the benefits.
                </span>
              </span>
            </p>
            <div>
              <Type className="text-4xl " />
            </div>
            <br />
            <div style={{ display: "flex", alignItems: "center" }}>
              <div
                style={{ flex: 1, backgroundColor: "#FFA500", height: "3px" }}
              />

              <h1 style={{ margin: "0 10px" }}>Innovation begins with lines of code.</h1>

              <div
                style={{ flex: 1, backgroundColor: "#FFA500", height: "3px" }}
              />
            </div>
            {/* <p className={styles.p}>Innovation begins with lines of code.</p> */}
            {/* <Picture /> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Content;
