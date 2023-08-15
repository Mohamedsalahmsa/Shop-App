import './Cardsprop.css'


import {FaStar,FaRegStar} from 'react-icons/fa'
function Cardsprop(props) {
  return (
    <div className="card">
    <img src={props.img} alt={props.alt}/>


    <div className="icons">
    <div className="ico">
  <span style={{"color": "#ede861"}}><FaStar/></span> 
   <span style={{"color": "#ede861"}}><FaStar/></span> 
   <span style={{"color": "#ede861"}}><FaStar/></span> 
   <span><FaRegStar/></span> 
   <span><FaRegStar/></span> 
    </div>

   <p>{props.salary}</p>
    </div>

    <div className="textss">
      <h2>{props.title}</h2>
      <p>{props.paragraph}</p>
      <span>{props.Reviews}</span>
    </div>


  </div>
  )
}

export default Cardsprop