import './Footer.css'


import { FaEnvelope , FaPhone,FaFacebook , FaInstagram , FaTwitter , FaLinkedin } from "react-icons/fa"
import { IoLocationSharp} from "react-icons/io5"

function Footer() {
  return (
    <footer>
        <div className="footer">
        <div className="ZayShop">
            <h2>Zay Shop</h2>
            <h5 className='hr'></h5>
            <div className="textContactt">
                <p><span><IoLocationSharp/></span>123 Consectetur at ligula 10660</p>
                <p><span><FaPhone/></span>010-020-0340</p>
                <p><span><FaEnvelope/></span>info@Company.com</p>
            </div>
        </div>

        <div className="Text1">
            <h2>Products</h2>
            <h5 className='hr'></h5>
            <ul>
                <li>Luxury</li>
                <li>Sport Wear</li>
                <li>Men`s Shoes</li>
                <li>Woman`s Shoes</li>
                <li>popular Dress</li>
                <li>Gym Accessories</li>
                <li>Sport Shoes</li>
            </ul>
        </div>

        <div className="Text1">
            <h2>Further Info</h2>
            <h5 className='hr'></h5>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Shop Locations</li>
                <li>FAQs</li>
                <li>Contact</li>
            </ul>
        </div>
</div>

        <div className="lastIcon">
        <div className="containerLatest">
        <hr />  
        <div className="iconss">
             <span><FaFacebook/></span> 
            <span><FaInstagram/></span>
            <span><FaTwitter/></span>
            <span><FaLinkedin/></span>
        </div>


            <div className="input">
                <input type="text" className='Email' placeholder='Email Adress' /><span><button>Subscribe</button></span>
            </div>
            </div>
       </div>

    </footer>
  )
}

export default Footer

