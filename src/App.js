
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import DetailsNews from './components/DetailsNews/DetailsNews';
import Home from './components/Home/Home';
import Masterlayout from './components/Masterlayout';
import News from './components/News/News';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<Masterlayout children={<Home />} />} />
        <Route path='/about' element={<Masterlayout children={<About />} />} />
        <Route path='/contact' element={<Masterlayout children={<Contact />} />} />
        <Route path='/news' element={<Masterlayout children={<News />} />} />
        <Route path='/detailsNews/:id' element={<Masterlayout children={<DetailsNews />} />} />
      </Routes>
    </div>
  );
}

export default App;
