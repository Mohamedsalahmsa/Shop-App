import './Sec1ShopProd.css'
import {FaStar , FaRegStar} from 'react-icons/fa'
function Sec1ShopProd(props) {
  return (
    <div className="card5">
    <img src={props.img} alt="" />
    <div className="text5">
      <p className='title'>{props.title}</p>
      <p className='size'>{props.prag1}</p>
    </div>
    <div className="fot">
      <span style={{"color": "#ede861"}}><FaStar/></span>
      <span style={{"color": "#ede861"}}><FaStar/></span>
      <span style={{"color": "#ede861"}}><FaStar/></span>
      <span><FaRegStar/></span>
      <span><FaRegStar/></span>
      <p>{props.prag2}</p>
    </div>
</div>
  )
}

export default Sec1ShopProd