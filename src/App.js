import { Router } from '@reach/router'
import './App.css';
import Home from './Components/Home';
import Word from './Components/Word';
import InputTest from './Components/InputTest';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="container mt-5 text-center">
      <Router>
        <Home path = "/home" />
        
        <InputTest path="/:myInput" />
        <Word path="/:myInput/:color1/:color2" />
      </Router>
    </div>
  );
}

export default App;
