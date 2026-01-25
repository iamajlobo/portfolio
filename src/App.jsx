import {BrowserRouter,Routes, Route} from 'react-router';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Project from './pages/Project';
import './index.css';

export default function App() {
  return(
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/projects' element={<Project/>}/>
      </Routes>
    </BrowserRouter>
  );
}