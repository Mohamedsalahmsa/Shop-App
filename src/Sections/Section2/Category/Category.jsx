import './Category.css'



function Category(props) {
  return (
    <>
          <div className="images">
            <img src={props.img} alt={props.alt} />
            <h2>{props.Title}</h2>
            <button>Go Shop</button>
        </div>
    </>
  )
}

export default Category