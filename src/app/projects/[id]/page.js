import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import ProjectDetail from "@/components/Projects/ProjectsDetail/ProjectsDetail";
import Head from "next/head";
import React from "react";

export default await function page() {
  return (
    <>
      <Header />
      <ProjectDetail />
      <Footer />
    </>
  );
};
