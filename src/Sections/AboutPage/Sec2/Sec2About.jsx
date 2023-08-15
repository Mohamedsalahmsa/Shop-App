import './Sec2About.css'
import Sec2Product from './Sec2Product/Sec2Product'

import Sec2Data from './Sec2Data/Sec2Data'

function Sec2About() {

    const cards = Sec2Data.map(function(card) {
      return <Sec2Product id={card.id} icon={card.icon} title={card.title} />
    })

  return (
    <>
        <div className="Sec2">
            <div className="Sec2Text">
                <h2>Our Services</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod Lorem ipsum dolor sit amet.</p>
            </div>

            <div className="Concard2">
                {cards}
            </div>
        </div>
    </>
  )
}

export default Sec2About