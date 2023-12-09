import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Search from './pages/Search';
import Country from './pages/Country';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/search' element={<Search />}></Route>
      <Route path='/country' element={<Country />}></Route>
      <Route path='*' element={<NotFound />}></Route>
    </Routes>
  );
}

export default App;
