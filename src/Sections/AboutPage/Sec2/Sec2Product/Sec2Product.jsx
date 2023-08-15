import './Sec2Product.css'

function Sec2Product(props) {
    return (
    <div className="card2">
    <span className='iconMd'>{props.icon}</span>
    <p>{props.title}</p>
    </div>
  )
}

export default Sec2Product