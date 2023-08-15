import './Sec1About.css'

import aboutHeroImg from '../../assets/images/about-hero.png'

function Sec1About() {
  return (
    <>  
        <div className="Sec1About">
            <div className="Txt">
                <h2>About Us</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>

            <div className="imageTo">
                <img src={aboutHeroImg} alt="aboutHeroImg" />
            </div>
        </div>
    </>
  )
}

export default Sec1About