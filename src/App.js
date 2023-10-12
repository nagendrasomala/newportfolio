import React from "react";
import Navbar from './components/Navbar/Navbar';
import Banner from './components/banner/banner';
import Projects from './components/projects/projects';
import Resume from "./components/resume/resume";
import Contact from "./components/contact/Contact";


function App() {
  
  return (
     <div className="w-full h-auto bg-bodyColor text-lightText px-4">
      <div className="max-w-screen-2xl mx-auto px-16">
      <Navbar/>
      <Banner/>
      <Projects/>
      <Resume/>
      <Contact/>
      </div>
    </div>
  );
}

export default App;
