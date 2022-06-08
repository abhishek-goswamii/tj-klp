import React from 'react'
import Header from './components/header/header';
import Homepage from './components/homepage/homepage';
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Depository from './components/depository/depository';
import PanCard from './components/pan_card/pan_card';
import GeneralInsurance from './components/general insurance/general_insurance';
import ContactUs from './components/contactUs/contactUs';
import Blog from './components/blog/blog';

const App = () => {

  return (
    <BrowserRouter>

      <Header />

      <>
        <Routes>

          <Route path="/" element={<Homepage />} />
          <Route path="/depository" element={<Depository />} />
          <Route path="/pancard" element={<PanCard />} />
          <Route path="/generalinsurance" element={<GeneralInsurance />} />
          <Route path="/contactus" element={<ContactUs/>} />
          <Route path="/blog" element={<Blog/>} />
          
        </Routes>
      </>

    </BrowserRouter>
  )
}

export default App