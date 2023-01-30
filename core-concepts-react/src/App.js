import logo from './logo.svg';
import './App.css';

function App() {
  var person1="Dibya";
  var person2={
    name:"Salman",
    age:"21"  
}
var style1={
  color:"red",
  backgroundColor:"green"
}

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h2 style={style1} >My name is:{" "}{ person1}</h2>
        <h2 style={{backgroundColor:"red",color:"cyan"}}>My name is: {person2.name} And Age is: {person2.age}</h2>
        

        <h3>Total Number:{2+3}</h3>
      </header>
      
    </div>
  );
}

export default App;
