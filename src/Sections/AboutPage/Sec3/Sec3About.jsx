import './Sec3About.css'

import Levis    from    '../../../assets/images/brand_01.png'
import Adidas   from    '../../../assets/images/brand_02.png'
import Nike     from    '../../../assets/images/brand_03.png'
import HM       from    '../../../assets/images/brand_04.png'

function Sec3About() {
  return (
    <>
            <div className="Sec3">
                <div className="Sec3Text">
                    <h2>Our Brands</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod Lorem ipsum dolor sit amet.</p>
                </div>
            

    <div className="sliderContainerr">
  <div id="carouselExampleControls" className="carousel slide ss" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active coImg">
        <div className="imCo">
          <img src={Levis} className="d-block wi" alt="..."/>
         <img src={Adidas} className="d-block wi" alt="..."/>
         <img src={Nike} className="d-block wi" alt="..."/>
         <img src={HM} className="d-block wi" alt="..."/>
        </div>
    </div>
    <div className="carousel-item coImg">
    <div className="imCo">
        <img src={Adidas} className="d-block wi" alt="..."/>
        <img src={Levis} className="d-block wi" alt="..."/>
        <img src={Nike} className="d-block wi" alt="..."/>
        <img src={HM} className="d-block wi" alt="..."/>
      </div>
    </div>
    <div className="carousel-item coImg">
    <div className="imCo">
        <img src={Nike} className="d-block wi" alt="..."/>
        <img src={Levis} className="d-block wi" alt="..."/>
        <img src={Adidas} className="d-block wi" alt="..."/>
        <img src={HM} className="d-block wi" alt="..."/>
    </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
    </div>
    </div>
    </div>
    </>
  )
 
}

export default Sec3About