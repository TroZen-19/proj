import React, { useState } from "react";
import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GooglePlay from "../../../Image/Footer/google-play-black.svg";
import AppStore from "../../../Image/Footer/app-store-black.svg";
import "./Footer.css";


 const footSocial = [
   {
     id: 1,
     icon: <FacebookIcon className="facebook_icon" fontSize="large" />,
     path: "",
   },
   
   {
     id: 3,
     icon: <InstagramIcon className="insta_icon" fontSize="large" />,
     path: "https://www.instagram.com/p/CrDzrm9L_Ey/",
   },
   
 ];



const Footer = () => {
  const [subValue, setSubValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubValue("");
    alert("Thankyou, you are subscribed to receive our daily newsletter");
  };

  const currYear = new Date().getFullYear();

  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="wrapper_footer footer_wrapper ">
            <div className="foot_about foot1">
              <div className="foot_logo">
                <Link to="/" style={{ textDecoration: "none" }}>
                  <img
                    src={require("../../../Image/Footer/tamalogo.jpeg")}
                    alt="Tama Fashion Wear logo"
                  />
                  <h1 className="Foot_heading">""</h1>
                </Link>
              </div>

              <div className="foot_subs">
                <h5>Newsletter</h5>
                <form onSubmit={handleSubmit} className="foot_form">
                  <input
                    type="email"
                    className="input_field_footer"
                    placeholder="Email Address*"
                    required
                    value={subValue}
                    onChange={(e) => setSubValue(e.target.value)}
                  />
                  <p>
                    By submitting your email address you agree to the{" "}
                    <Link to="/terms/conditions" className="foot_subs_text">
                      Terms & Conditions
                    </Link>
                  </p>
                  <button type="submit" className="btnFooter">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>

            

            
          </div>
        </div>

        <div className="separatorFooter"></div>

        <div className="sub_footer_root">
          <div className="container_Footer">
            <div className="sub_footer_wrapper">
              <div className="foot_policyLink">
                <ul>
                  <li className="subfoot_link_text1">
                    <Link to="/policy/privacy">
                      <p className="foot_policyLink_p">Privacy Policy</p>
                    </Link>
                  </li>
                  <li className="subfoot_link_text2">
                    <Link to="/terms/conditions">
                      <p className="foot_policyLink_p">TERMS & CONDITIONS</p>
                    </Link>
                  </li>
                  <li className="subfoot_link_text3">
                    <Link to="/policy/Terms">
                      <p className="foot_policyLink_p">TERMS OF USE</p>
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="foot_copyright">
                <p>
                  &copy; {currYear} | Tamafashion Wear, All Rights Reserved.
                  <span>
                     | Rehol Khatiwada
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;