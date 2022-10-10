import React from 'react'
import Logo from "../media/CompanyLogo.png"
import Store from "../media/ApplStore.png"
import { BsFillTelephoneFill, BsInstagram } from "react-icons/bs";
import { AiTwotoneMail } from "react-icons/ai";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai";
const Footer = () => {
    return (
        <div>
            <footer className="footer">
                <div className="footer-left">
                    <img src={Logo} alt="" style={{ borderRadius: "50%", width: "60px", height: "60px", marginRight: "600px" }} />
                    <div style={{ marginLeft: "70px", marginTop: "-50px" }}>
                        <p classNameName="about">
                            <span>being the</span>
                        </p>
                        <p style={{ marginTop: "-20px" }}>parent</p></div>
                </div>
                <div className="footer-center" style={{ marginRight: "-280px" }}>
                    <div>
                        <p style={{ color: "#a5a8a5" }}>Pages</p>
                    </div>
                    <div>

                        <p><a style={{ color: "#575957" }}>Services</a></p>
                    </div>
                    <div>

                        <p><a style={{ color: "#575957" }}>Resources</a></p>
                    </div>
                    <div>

                        <p><a style={{ color: "#575957" }}>FAQs</a></p>
                    </div>
                    <div>

                        <p><a style={{ color: "#575957" }}>Know More</a></p>
                    </div>
                </div>
                <div className="footer-center" style={{ marginRight: "-300px" }}>
                    <div>

                        <p style={{ color: "#a5a8a5" }}>Contact</p>
                    </div>
                    <div>  <BsFillTelephoneFill />
                        <p><a style={{ color: "#575957" }}>9897654326</a></p>
                    </div>
                    <div>
                        <AiTwotoneMail />
                        <p><a style={{ color: "#575957" }}>support@beingtheparent.com</a></p>
                    </div>
                    <div>
                        <FaMapMarkerAlt />
                        <p ><a style={{ color: "#575957" }}>2972 Westheimer Rd. Santa Ana, lllinois 85486</a></p>
                    </div>

                </div>

                <div className="footer-center" style={{ marginLeft: "460px" }}>
                      <div id="navcontainer"  style={{ marginRight: "-50px" }}>
                    <div >
                        <p style={{ color: "#a5a8a5",marginRight:"-100px" }}>Our Media Channel</p>
                    </div>
                    <ul >
                        <li><a href="#"><BsFacebook /></a></li>
                        <li><a href="#"><AiFillTwitterCircle /></a></li>
                        <li><a href="#"><AiFillLinkedin /></a></li>
                        <li><a href="#"><BsInstagram /></a></li>
                    </ul>
                </div>
                </div>
                <div className="footer-right col-md-2 col-sm-3" style={{marginTop:"40px"}}>
                    <h3 style={{ color: "black" }}>Download our app<span> logo</span></h3>
                    <img src={Store} alt="" style={{ borderRadius: "23px", width: "200px" }} />
                </div>
            </footer>
        </div>
    )
}

export default Footer
