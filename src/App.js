import { Route, Routes } from 'react-router-dom';
import About from './About/About';
import './App.css';
import Blogs from './Blogs/Blogs';
import Contact from './../src/Contact/Contact';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Home from './Home/Home';
import Login from './Login/Login';
import NotFound from './NotFound/NotFound';
import Services from './Services/Services';
import Signup from './Signup/Signup';
import RequiredAuth from './RequiredAuth/RequiredAuth';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
      <Route path='/' element = {<Home></Home>}></Route>
        <Route path='/Home' element = {<Home></Home>}></Route>
        <Route path='/Services' element = {<Services></Services>}></Route>
        <Route path='/Contact' element = {<Contact></Contact>}></Route>
        <Route path='/Services' element = {

          <RequiredAuth>
            <Services></Services>
          </RequiredAuth>
        }>

        </Route>
       
  
        <Route path='/Blogs' element = {<Blogs></Blogs>}></Route>
        <Route path='/About' element = {<About></About>}></Route>
        <Route path='/Login' element = {<Login></Login>}></Route>
        <Route path='/Signup' element = {<Signup></Signup>}></Route>
        <Route path='*' element = {<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      
    
     
    </div>
  );
}

export default App;
