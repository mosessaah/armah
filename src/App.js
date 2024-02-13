import './App.scss';
import Layout from './components/Layouts';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Home/Resume/resume';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element = {<Home />}/>
        </Route>
        <Route path = 'About' element = {<About />}/><Route/>
        <Route path = 'Portfolio' element = {<Portfolio />}/> <Route/> 
        <Route path = "/contact" element={<Contact />} />
        <Route path = 'Resume' element = {<Resume />}/> <Route/> 
      </Routes>
    </>
  );
}

export default App;