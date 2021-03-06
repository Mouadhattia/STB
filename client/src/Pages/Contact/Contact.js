import React, { useState } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import FaxIcon from "@mui/icons-material/Fax";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "./Contact.css";
import MainLayout from "../../MainLayout/MainLayout";
import HeaderBackground from "../../Components/HeaderBackground/HeaderBackground";
import { Link } from "react-router-dom";
import LeafletMap from "../../Components/Leaflet/LeafletMap";
import axios from "axios";
import { toast } from "react-toastify";
import load1 from "./load2.gif";


const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [banner, setBanner] = useState("");
  const [bool, setBool] = useState(false);
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };
  const submitForm = async (e) => {
    e.preventDefault();
    try {
      let data = {
        name,
        email,
        message,
      };
      setBool(true);
      const res = await axios.post(`/contact`, data);
      if (name.length === 0 || email.length === 0 || message.length === 0) {
        setBanner(res.data.msg);
        toast.error(res.data.msg);
        setBool(false);
      } else if (res.status === 200) {
        setBanner(res.data.msg);
        toast.success(res.data.msg);
        setBool(false);

        setName("");
        setEmail("");
        setMessage("");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <MainLayout>
        <HeaderBackground />
        <div className="contact">
          <div>
            <h2>Contactez-Nous</h2>
          </div>
          <div className="central-form">
            <div className="col">
              <h2>
                Vous pouvez nous contacter pour toute information compl??mentaire
                ????.
              </h2>

              <div className="cordonnes__container">
                <div className="cordonnes">
                  <div>
                    <LocationOnIcon />
                    <h5>
                      {" "}
                      Si??ge social, Imm. El Emtiez. Centre Urbain Nord, 1003,
                      Tunis.
                    </h5>
                  </div>
                  <div>
                    <LocalPhoneIcon />
                    <h5>+216 71 238 729 - +216 71 233342</h5>
                  </div>
                  <div>
                    <FaxIcon />
                    <h5>+216 71 234 411</h5>
                  </div>

                  <div>
                    <MailOutlineIcon />
                    <h5>info@stbsicar.com.tn</h5>
                  </div>
                </div>
              </div>
              <div className="media__link">
                <Link to="/" className="socialLink">
                  <FacebookIcon />
                </Link>

                <Link to="/" className="socialLink">
                  <LinkedInIcon />
                </Link>

                <Link to="/" className="socialLink">
                  <TwitterIcon />
                </Link>
                <Link to="/" className="socialLink">
                  <YouTubeIcon />
                </Link>
              </div>
            </div>
            <div className="back-form">
              <form onSubmit={submitForm}>
                <p>{banner}</p>
                <label htmlFor="name">Nom et Pr??nom</label>
                <input type="text" onChange={handleName} value={name} />

                <label htmlFor="email">Email</label>
                <input type="email" onChange={handleEmail} value={email} />

                <label htmlFor="message">Message</label>
                <textarea
                  type="text"
                  onChange={handleMessage}
                  value={message}
                />

                <div className="send-btn">
                <button type="submit">
                envoyer
                
                {bool ? (
                  <b className="load">
                    <img src={load1} alt="image not responding" />
                  </b>
                ) : (
                  ""
                )}
              </button>
                </div>
              </form>
            </div>
          </div>
          <div className="map">
            <LeafletMap />
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default Contact;
