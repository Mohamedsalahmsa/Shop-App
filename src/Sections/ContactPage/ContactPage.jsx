import './Contact.css'

function ContactPage() {
  return (
    <>
      <div className="containersr">
        <div className="headerText">
          <h2>Contact Us</h2>
          <p>Proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet.</p>
        </div>

        <form action="#">
          <label htmlFor="name">Name</label>
          <input type="text" id='name' placeholder='Name'/>

          <label htmlFor="email">Email</label>
          <input type="email" id='email' placeholder='Email'/>

          <label htmlFor="Subject">Subject</label>
          <input type="text" id='Subject' placeholder='Subject'/>

          <label htmlFor="textArea">Message</label>
         <textarea placeholder='Message'  id="textArea"></textarea>

        <div className="buttons">
        <button className='btnn'>Let`s Talk</button>
        </div>
       
       
        </form>
      </div>
    </>
  )
}

export default ContactPage