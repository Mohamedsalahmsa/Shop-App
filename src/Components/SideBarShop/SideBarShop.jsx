import { useState } from 'react'
import './SideBarShop.css'
import {IoIosArrowDropdownCircle,IoIosArrowDropupCircle} from 'react-icons/io'

export default function SideBarShop() {


    const [hideUl , setHideUl] = useState(false)
    const [hideSale , sethideSale] = useState(false)
    const [hideProd , sethideProd] = useState(false)

    const ShowUl = () => {
      hideUl ? setHideUl(false) : setHideUl(true)
    }
    const ShowSale = () => {
      hideSale ? sethideSale(false) : sethideSale(true)
    }
    const ShowProd = () => {
      hideProd ? sethideProd(false) : sethideProd(true)
    }

  return (
      <div className="sideCategory">
        <nav>
          <li><h2>Category</h2></li>
          <li>
            <h4 onClick={ShowUl}>General <span>{hideUl ? <IoIosArrowDropupCircle/> : <IoIosArrowDropdownCircle/>}</span></h4>
           {hideUl 
           ?( <ul>
            <li>Men</li>
            <li>Woman</li>
            </ul>)
            : ("")
           }
            </li>

            <li>
            <h4 onClick={ShowSale}>Sale <span>{hideSale ? <IoIosArrowDropupCircle/> : <IoIosArrowDropdownCircle/>}</span></h4>
            {hideSale 
           ?( <ul>
            <li>Sport</li>
            <li>Luxury</li>
            </ul>)
            : ("")
           }
            </li>

            <li>
            <h4 onClick={ShowProd}>Product <span>{hideProd ? <IoIosArrowDropupCircle/> : <IoIosArrowDropdownCircle/>}</span></h4>
            {hideProd 
           ?( <ul>
            <li>Bag</li>
            <li>Sweather</li>
            <li>SunGlass</li>
            </ul>)
            : ("")
           }
            </li>
        </nav>
      </div>
  )
}
