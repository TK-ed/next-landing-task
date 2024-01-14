import React from "react";
import Button from "./components/button/button";
import Content from "./components/Content/content";
import Navbar  from "./components/navbar/navbar";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Content />
      <Button />
      <Footer />
    </>
  );
}
