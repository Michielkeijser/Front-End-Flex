import './App.css';
import Container from './components/Container'
import NavBar from "./components/NavBar"
import About from "./components/About"
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'


function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Route path='/' exact component={Container} />
        <Route path='/about' component={About} />
      </div>
      </Router>
  );
}

export default App;
