import './FilterShop.css'

function FilterShop() {
  return (
    <div className="filterShopContainer">
      <div className="nav">
        <ul>
          <li><h2>All</h2></li>
          <li><h2>Men`s</h2></li>
          <li><h2>Womans</h2></li>
        </ul>
        <div className="inputs">
           
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
  )
}

export default FilterShop