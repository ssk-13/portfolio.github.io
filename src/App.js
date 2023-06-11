
import './App.css';

import Navbar from './components/Navbar';
import About from './components/About';
import Tech from './components/Tech';
import Experiences from './components/Experiences';
import Project from './components/Project';
import Contact from './components/Contact';
function App() {  
  return (
    <div className="App">
   
    <Navbar/>
    <About/>
    <Tech/>
    <Experiences/>
    <Project/>
    <Contact/>
    </div>
  );
}

export default App;
