import './Section3.css'

// import icons'

import Cardsprop from './Cardsprop/Cardsprop'
import CardData from './CardData/CardData'

function Section3() {

  let Cards2 = CardData.map(function(card) {
    return <Cardsprop key={card.id} salary={card.salary} img={card.img} alt={card.alt} title={card.title} paragraph={card.paragraph} Reviews={card.Reviews}/>
  })

  return (
    <div className="container2">


    <div className="textDiv">
      <h2>Featured Product</h2>
      <p>Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla <br /> pariatur. Excepteur sint occaecat cupidatat non proident.</p>
    </div>


      <div className="cards">
          {Cards2}
      </div>


    </div>
 
  )
}

export default Section3