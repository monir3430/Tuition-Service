import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Header/Header';
import Home from './Home/Home';
import NotFound from './NotFound/NotFound';
import Services from './Services/Services';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
      <Route path='/' element = {<Home></Home>}></Route>
        <Route path='/Home' element = {<Home></Home>}></Route>
        <Route path='/Services' element = {<Services></Services>}></Route>
        <Route path='*' element = {<NotFound></NotFound>}></Route>
      </Routes>
      
    
     
    </div>
  );
}

export default App;
