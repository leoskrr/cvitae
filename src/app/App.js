import React from 'react';
import './App.css';

import Home from '../template/page/home/Home'
/*Page*/
import AdressContact from '../template/page/about/AdressContact'
import Languages from '../template/page/about/Languages'
import Qualifications from '../template/page/academic/Qualifications'
import Experiences from '../template/page/academic/Experiences'
import Courses from '../template/page/academic/Courses'
import Experience from '../template/page/professional/Experience';
import Interesting from '../template/page/professional/Interesting';
import Pets from '../template/page/curiosities/Pets';
import Team from '../template/page/curiosities/Team';
import Heroes from '../template/page/curiosities/Heroes';
import Dream from '../template/page/curiosities/Dream';
import School from '../template/page/curiosities/School';
import Music from '../template/page/curiosities/Music';
import Videos from '../template/page/curiosities/Videos'
export default props => {
  return (
    <div className="App">
      <Home />
      <AdressContact />
      <Languages />
      <Qualifications />
      <Experiences />
      <Courses />
      <Experience />
      <Interesting />
      <Pets />
      <Team />
      <Heroes />  
      <Music />
      <Videos />
      <Dream />
      <School />
    </div>
  )
}

