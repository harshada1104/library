
import './App.css';
import Home from './Pages/Home';
import {Routes,Route} from 'react-router-dom'
import Trending from './Pages/Trending';
function App() {
  return (
    <>
    <Routes>

    <Route path="/" element={<Home/>}/>
    <Route path="/trending" element={<Trending/>}/>

  </Routes>
  </>
  );
}

export default App;
