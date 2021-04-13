import logo from './logo.svg';
import './App.css';
//import {Greet} from './Components/Greet' // without default export 
import Greet from './Components/Greet' // with default export
import Welcome from './Components/Welcome'
import Hello from './Components/Hello'
import Message from './Components/Message'

function App() {
  return (
    <div className="App">
     {/* <Greet name="Bruce" heroName="Batman">
       <p>This is just the children of first greet component.</p>
       <p>This is just the children of first omponent.</p>
     </Greet>
     <Greet name="Clark" heroName="Superman">
       <button>Action</button>
     </Greet>
     <Greet name="Diana" heroName="Wonder woman"></Greet>

     <Welcome name="Bruce" heroName="Batman"></Welcome>
     <Welcome name="Clark" heroName="Superman"></Welcome>
     <Welcome name="Diana" heroName="Wonder woman">
       <button>Diana</button>
     </Welcome>
     <Hello/> */
     
      <Message></Message>
     }
    </div>
  );
}

export default App;
 