
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import Masterlayout from './components/Masterlayout';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<Masterlayout children={<Home />} />} />
        <Route path='/about' element={<Masterlayout children={<About />} />} />
        <Route path='/contact' element={<Masterlayout children={<Contact />} />} />
      </Routes>
    </div>
  );
}

export default App;
