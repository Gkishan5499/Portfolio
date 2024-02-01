import './App.css';
import Header from './components/Header';
import {Route , Routes} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App bg-gray-800 font-primary">
     <Header/>
    
     
    <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/project' element={<Project/>}/>
          <Route path='/contact' element={<Contact/>}/>

     </Routes> 
    </div>
  );
}

export default App;
