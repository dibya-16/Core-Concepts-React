import React,{useState, useEffect} from 'react';

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
const names=["Dibya","Farhan","Pritom"]
const products=[{name:"Photoshop",price:"90$"},
{name:"Illustrator",price:"70$"},
{name:"PDF reader",price:"60$"}
]

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
        <Users></Users>
        <Counter></Counter>
        <ul>
          {
             names.map(allName =><li>{allName}</li>)

          }
          {
            products.map(allProducts=><li>{allProducts.name}</li>)
          }
         
        </ul>
        {
        products.map(allProducts=><Product product1={allProducts}></Product>)
        }
        <Product product1={products[0]}></Product>
        <Product product1={products[1]}></Product>
        
        <Person></Person>
        <Person></Person>
        <Person2 name={names[0]} profession="Software Engineer"></Person2>
        <Person2 name={names[1]} profession="Software Engineer"></Person2>
      </header>
      
    </div>
  );
 
}
function Users(){
  const [user,setUser]=useState([]);
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res=>res.json())
    .then(data=>setUser(data));
  },[]);
  return(
    <div>
      <h1>Dynamic Data Load with useState and useEffect</h1>
      <h3>Dynamic Users={user.length}</h3>
      {
        user.map(userName=><li>{userName.name}</li>)
      }
    </div>
    
  );
}

function Counter(){
  const [count,setCount]=useState(5);
  const numberIncrease = ()=>{
       setCount(count+1);
  };
  return(
    <div>
      <h1>UseState Use</h1>
        <h3>Count:{count}</h3>
    <button onClick={()=>setCount(count-1)}>Decrease</button>
    <button onClick={numberIncrease}>Increase</button>
    </div>
   
  );
}
function Product(props){
  const productStyle={
    border:"3px solid red",
    borderRadius:"6px",
    backgroundCOlor:"gray",
    margin:"2px",
    height:"300px",
    width:"200px",
    float:"float"
  }
  const {name,price}= props.product1;
  return(
    <div style={productStyle}>
      <h2>{name}</h2>
      <h1>{props.product1.price}</h1>
      <button>Buy Now</button>
    </div>
  );
}
function Person(){
  const personStyle={
    border:"5px solid red",
    margin:"30px"
  }
  return (
    <div style={personStyle}>
      <h1>Hei bro,I am Dibya Jyoti Hore</h1>
    <h3>I am a web developer</h3>
    </div>
    
  );
}
function Person2(props){
  var style={
    border:"3px dotted blue",
    margin: "6px"
  }
  return(
    <div style={style}>
      <h1>Name:{props.name}</h1>
      <h3>Profession:{props.profession}</h3>
    </div>
  );
}


export default App;
