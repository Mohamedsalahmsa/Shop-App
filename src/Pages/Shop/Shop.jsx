import './Shop.css'

import Sec1Shop from '../../Sections/ShopPage/Sec1Shop/Sec1Shop'
import SideBarShop from '../../Components/SideBarShop/SideBarShop'
import FilterShop from '../../Components/FilterShop/FilterShop'
import ContainerShop from "../../Components/ContainerShop/ContainerShop"

function Shop() {
  return (
    <>
    <ContainerShop>
    <SideBarShop/>
    <FilterShop/> 
    </ContainerShop>

    
    <Sec1Shop/>
    </>

  )
}

export default Shop