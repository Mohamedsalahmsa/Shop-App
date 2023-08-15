import './App.css'
import {Contact , Footer, Header} from './ExportToApp/Export'
import Container from './../Components/Container/Container';
import { HashRouter as  Router , Route , Routes} from 'react-router-dom';
import {Home , About , Shop , ContactNav} from '../Pages/ExportPage/Export'

function App() {
    return (
    <>
    <Router>
        <Contact/>
        <Header/>
        <Container>
         <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/Shop' element={<Shop/>}/>
            <Route path='/contact' element={<ContactNav/>}/>
         </Routes>
        </Container>
        <Footer/>

  </Router>
    </>
  )
}

export default App
/*

*/