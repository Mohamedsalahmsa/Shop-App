import './Section.css'



import CategoryDataa from './CategoryData/CategoryData'
import Category from './Category/Category'


function Section2() {
  
  const cards = CategoryDataa.map(function(card) {
  return  <Category key={card.id} Title={card.Title} img={card.img} alt={card.alt}/>
  })


  return (
    <>
     <div className="textDiv">
     <h2>Categories of The Month</h2>
      <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
       

    <div className="imageDiv">
        {cards}
    </div>

    </>
  )
}

export default Section2