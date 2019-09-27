import React from 'react';
import './App.css';

import Home from '../template/page/home/Home'
/*Page*/
import AdressContact from '../template/page/about/AdressContact'
import Languages from '../template/page/about/Languages'
import Qualifications from '../template/page/academic/Qualifications'
import Experiences from '../template/page/academic/Experiences'
import Courses from '../template/page/academic/Courses'
// import Languages from '../template/page/about/Languages'

export default props => {
  return (
    <div className="App">
      <Home />
      <AdressContact />
      <Languages />
      <Qualifications />
      <Experiences />
      <Courses />
    </div>
  )
}

