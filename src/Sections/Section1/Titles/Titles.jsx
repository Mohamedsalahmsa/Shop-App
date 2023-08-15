import './Title.css'

function Titles(props) {
  return (
    <div className="con">
    <div className="text">
    <h2><em>{props.em}</em> <br />{props.Title}</h2>
    <p>{props.prag}</p>
    </div>
    </div>
  )
}

export default Titles