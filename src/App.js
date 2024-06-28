import { Routes, Route } from "react-router-dom";
import Main from './containers/main/Main';
import Nav from './containers/nav/Nav';
import Projects from './containers/projects/Projects';
import Contact from './containers/contact/Contact';

import './App.scss';

function App() {
  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="projects" element={<Projects />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
