
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Masterlayout from './components/Masterlayout';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<Masterlayout children={<Home />} />} />
      </Routes>
    </div>
  );
}

export default App;
