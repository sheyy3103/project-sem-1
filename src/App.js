
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Cart from './components/Cart/Cart';
import Contact from './components/Contact/Contact';
import DetailsNews from './components/DetailsNews/DetailsNews';
import DetailsProduct from './components/DetailsProduct/DetailsProduct';
import Filter from './components/Filter/Filter';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Masterlayout from './components/Masterlayout';
import News from './components/News/News';
import Register from './components/Register/Register';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<Masterlayout children={<Home />} />} />
        <Route path='/about' element={<Masterlayout children={<About />} />} />
        <Route path='/contact' element={<Masterlayout children={<Contact />} />} />
        <Route path='/news' element={<Masterlayout children={<News />} />} />
        <Route path='/shop' element={<Masterlayout children={<Shop />} />} />
        <Route path='/login' element={<Masterlayout children={<Login />} />} />
        <Route path='/register' element={<Masterlayout children={<Register />} />} />
        <Route path='/detailsNews/:id' element={<Masterlayout children={<DetailsNews />} />} />
        <Route path='/detailsProduct/:id' element={<Masterlayout children={<DetailsProduct />} />} />
        <Route path='/filter/:id' element={<Masterlayout children={<Filter />} />} />
        <Route path='/cart' element={<Masterlayout children={<Cart />} />} />
      </Routes>
    </div>
  );
}

export default App;
