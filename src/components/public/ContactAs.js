import React from 'react'
import logo_agentfree from '../../images/logo_agentfree.jpeg';
import Navbar from '../common/Navbar';
import Footer from '../common/Footer';
import { FaPhoneAlt } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoLocation } from "react-icons/io5";
import { CgMail } from "react-icons/cg";

const ContactAs = () => {
  return (
    <>
    <Navbar/>
    <div class="container text-center p-5">
        <img src={logo_agentfree} width="280px" height="180px"/>
    </div>
    <div class="container  p-3">
    <h3>Contact us</h3><br/>

        <a id="linktagsincontactas" href=""><FaPhoneAlt />&nbsp;&nbsp;&nbsp;+91 - 9497 811 259</a><br/><br/>
        <a id="linktagsincontactas" href=""><FaPhoneAlt />&nbsp;&nbsp;&nbsp;+91 - 9048 224 630</a><br/><br/>
        <a id="linktagsincontactas" href=""><IoLogoWhatsapp />&nbsp;&nbsp;&nbsp;+91 - 8289 844 344</a><br/><br/>
        <a id="linktagsincontactas" href=""><CgMail />&nbsp;&nbsp;&nbsp;virtunerealtors@gmail.com</a><br/><br/>
        <a id="linktagsincontactas" href=""><IoLocation />&nbsp;&nbsp;&nbsp;Kochi, Kerala, India</a><br/> <br/>
 
    </div> 
    <Footer/>
    </>
  )
}

export default ContactAs