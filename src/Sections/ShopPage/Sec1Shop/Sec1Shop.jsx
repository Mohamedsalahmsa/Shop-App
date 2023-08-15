import './Sec1Shop.css'
import Sec1ShopData from '../Sec1ShopData/Sec1ShopData'
import Sec1ShopProd from './Sec1ShopProd/Sec1ShopProd'

function Sec1Shop() {

  const products = Sec1ShopData.map(function(product) {
    return <Sec1ShopProd key={product.id} img={product.img} title={product.title} prag1={product.prag1} prag2={product.prag1}/>
  })

  return (
    <div className="Sec1Shop">
      <div className="cards4">

        <div className="NabCo">
      <div className="nav1"  style={{"display": "none"}}>
        <ul>
          <li><h2>All</h2></li>
          <li><h2>Men`s</h2></li>
          <li><h2>Womans</h2></li>
        </ul>
        <div className="inputs1">
           
      <div className="btn-group">
      <button type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
      Featured
      </button>
      <ul className="dropdown-menu dropdown-menu-lg-end">
    <li><button className="dropdown-item" type="button">Featured</button></li>
    <li><button className="dropdown-item" type="button">A To Z</button></li>
    <li><button className="dropdown-item" type="button">Item</button></li>
      </ul>
      </div>
     
          </div>
      </div>
      </div>
      {products}
      </div>
    </div>
  )
}

export default Sec1Shop