import './Contact.css'
import { FaEnvelope , FaPhone , FaFacebook , FaInstagram , FaTwitter , FaLinkedin } from "react-icons/fa"



function Contact() {
  return (
    <div className='container-contact'>
    <div className="contact">
      <p> <span><FaEnvelope/></span>info@company.com</p>
      <p> <span><FaPhone/></span>010-020-0340</p>
    </div>

    <div className="soctial">
      <span><FaFacebook/></span>
      <span><FaInstagram/></span>
      <span><FaTwitter/></span>
      <span><FaLinkedin/></span>
    </div>

  </div>
  )
}

export default Contact

/*
import { FaBeer } from "react-icons/fa";

function Question() {
  return (
    <h3>
      Lets go for a <FaBeer />?
    </h3>
  );
}
*/