import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoLocation } from "react-icons/io5";
import { CgMail } from "react-icons/cg";

function Footer() {
  return (
    <div class="footer mx-auto p-2">  
          <div class="container">
            <div class="row">
              <div class="col-lg-3 col-md-3 col-sm-12 mx-auto p-3">
                <h4>VirtuneRealtors</h4> <br/>
                <p>A realestate company with more than 10 years of experience and satisfied customers from all over the world, which will help you to find your dream home in an easy way</p>
              </div> 
              <div class="col-lg-3 col-md-3 col-sm-12 mx-auto p-3">
                  <h4>Mapsite</h4><br/>
                  <a id="linktagsinfooter" href="">Home</a><br/>
                  <a id="linktagsinfooter" href="">About us</a><br/>
                  <a id="linktagsinfooter" href="">Ernakulam</a><br/>
                  <a id="linktagsinfooter" href="">Thrissur</a><br/>
                  <a id="linktagsinfooter" href="">Advertise</a><br/>
                  <a id="linktagsinfooter" href="">Become Our Franchisee</a><br/>
                  <a id="linktagsinfooter" href="">Contact us</a>
              </div> 
              <div class="col-lg-3 col-md-3 col-sm-12 mx-auto p-3">
                  <h4>Contact</h4><br/>
                  <a id="linktagsinfooter" href=""><FaPhoneAlt />&nbsp;&nbsp;&nbsp;+91 - 9497 811 259</a><br/>
                  <a id="linktagsinfooter" href=""><FaPhoneAlt />&nbsp;&nbsp;&nbsp;+91 - 9048 224 630</a><br/>
                  <a id="linktagsinfooter" href=""><IoLogoWhatsapp />&nbsp;&nbsp;&nbsp;+91 - 8289 844 344</a><br/>
                  <a id="linktagsinfooter" href=""><CgMail />&nbsp;&nbsp;&nbsp;virtunerealtors@gmail.com</a><br/>
                  <a id="linktagsinfooter" href=""><IoLocation />&nbsp;&nbsp;&nbsp;Kochi, Kerala, India</a><br/> 
              </div> 
              <div class="col-lg-3 col-md-3 col-sm-12 mx-auto p-3">
                <h4 class="feature-touch">Subscribe</h4>
                <br/>
                <h6>Get our newsletter</h6>
                <div class="form-group">
                  <input type="email" class="form-control" placeholder="Enter Email Address" name="email" />
                </div>
                <input type="submit" class="btn btn-secondary btn-block" value="Submit" name=""></input>
              </div>
            </div>
          </div>
          <div className="row mx-auto p-3 text-center" >
            <div className="col-md"> 
            </div>
            <div className="col-md"> 
              <h6 id="copyrightid">© Copyright 2025 VirtuneRealtors - All rights reserved.</h6>   
            </div>
            <div className="col-md"> 
            </div>
          </div> 
        </div>
  )
}

export default Footer