import './Section1.css'

import img1 from '../../assets/images/banner_img_01.jpg'
import img2 from '../../assets/images/banner_img_02.jpg'
import img3 from '../../assets/images/banner_img_03.jpg'
import Titles from './Titles/Titles'


function Section1() {
  return (

    <div className="section1">

    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
 
 
  <div className="carousel-inner">
    
    <div className="carousel-item active item1">

        <div className="con">
            <div className="text">
                <Titles em="Zay eCommerce" Title="Tiny and Perfect eCommerce Template" prag="Zay Shop is an eCommerce HTML5 CSS template with latest version of Bootstrap 5 (beta 1). This template is 100% free provided by TemplateMo website. Image credits go to Freepik Stories, Unsplash and Icons 8."/>
        </div>

        <img src={img1} className="d-block wid" alt="..."/>
        </div>


    </div>

    <div className="carousel-item">

        <div className="con">
        <div className="text">
        <Titles em="Proident occaecat" Title="Aliquip ex ea commodo consequat" prag="You are permitted to use this Zay CSS template for your commercial websites. You are not permitted to re-distribute the template ZIP file in any kind of template collection websites."/>
        </div>

        <img src={img2} className="d-block wid" alt="..."/>
        </div>


    </div>


    <div className="carousel-item">
        <div className="con">
        <div className="text">
        <Titles em="Repr in voluptate" Title=" Ullamco laboris nisi ut" prag="We bring you 100% free CSS templates for your websites. If you wish to support TemplateMo, please make a small contribution via PayPal or tell your friends about our website. Thank you."/>
        </div>

        <img src={img3} className="d-block wid" alt="..."/>
        </div>
        
    </div>



  </div>


  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>
  )
}

export default Section1