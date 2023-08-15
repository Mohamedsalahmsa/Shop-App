import './ContainerShop.css'

function ContainerShop(props) {
  return (
    <div className='ContainerShop'>
        {props.children}
    </div>
  )
}

export default ContainerShop