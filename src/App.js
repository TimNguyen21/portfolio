import Main from './containers/main/Main';
import Nav from './containers/nav/Nav';

import './App.scss';

function App() {
  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <Main />
    </div>
  );
}

export default App;
