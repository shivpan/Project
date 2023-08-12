import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import { AboutNav } from './AboutNav';
import { Banner } from './Banner';
import { Footer } from './Footer';
import Home from './pages/pages/index';

function ShowAbout (){
  return (
    <div>
      <AboutNav />
      <Banner />
      <Footer />
        {/* <Home /> */}
    </div>
    );
  }
export default ShowAbout;
