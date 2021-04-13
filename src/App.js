import logo from './logo.svg';
import './App.css';
//import {Greet} from './Components/Greet' // without default export 
import Greet from './Components/Greet' // with default export
import Welcome from './Components/Welcome'
import Hello from './Components/Hello'

function App() {
  return (
    <div className="App">
     <Greet></Greet>
     <Welcome></Welcome>
     <Hello/>
    </div>
  );
}

export default App;
