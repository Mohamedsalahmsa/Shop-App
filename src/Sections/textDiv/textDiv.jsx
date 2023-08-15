import './textDiv.css'


function textDiv(props) {
  return (
    <>
    <div className="textDiv">
        {props.children}
    </div>
    </>
  )
}

export default textDiv