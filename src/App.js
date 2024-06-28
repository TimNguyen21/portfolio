import { Routes, Route } from "react-router-dom";
// import Main from './containers/main/Main';
// import Nav from './containers/nav/Nav';
import Home from './containers/home/Home';
import Navigation from './containers/navigation/Navigation';
import Projects from './containers/projects/Projects';
import Contact from './containers/contact/Contact';

import './App.scss';

function App() {
  return (
    <div className="App">
      <header>
        <Navigation />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route index path="about" element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
