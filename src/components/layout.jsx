import React from "react";
import { Footer } from "./footer/Footer";
import { Header } from "./header/Header";
import { SectionBestAudio } from "../components/studiosBest/StudiosBest";
import '../components/header/header.scss';

function Layout({ children }) {
  return (
    <div>
      <Header />
      {children}
      <SectionBestAudio />
      <Footer />
    </div>
  );
}

export default Layout;
