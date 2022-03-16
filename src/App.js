import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const number = 5555;
const singer = { name: "Mahfuz", job: "singer" };
const singer2 = { name: "Evana", address: "Dhaka" }

const singerStyle = {
  color: "blue",
  backgroundColor: "gray",
  padding: "10px",
  borderRadius: "10px",
};


function App() {
  const nayoks = ["Rubel", "Sakib", "Kuber", "Jashim", "Razzak"];
  const products = [
    {name: "laptop", price:50000},
    {name: "phone", price:25000},
    {name: "watch", price:5000},
    {name: "tablet", price:33000},
  ]

  return (
    <div className="App">
      {
        nayoks.map(nayok => <li>{nayok}</li>)
      }
      {
        nayoks.map(nayok => <Person name={nayok}></Person>)
       
      }
      {/* <Person name={nayoks[0]} nayika="Mousumi"></Person>
      <Person name={nayoks[1]} nayika="Shabnur"></Person>
      <Person name={nayoks[2]} nayika="Kopila"></Person> */}
      <h4>New Component</h4>
      <Friend movie="Singam" phone="01777"></Friend>
      <Friend movie="Kalho Na Ho" phone="01999"></Friend>
     {
       products.map(product => <Products name={product.name} price={product.price}></Products>)
     }
     <Counter></Counter>
    </div>
    
  );
}

function Person(props) {
  return (
    <div class="contianer2">
      <h1>{props.name}</h1>
      <h2>{props.nayika}</h2>
    </div>
  )
}

function Friend(props) {
  return (
    <div className='container'>
      <h1>Movie: {props.movie}</h1>
      <h3>Phone: {props.phone}</h3>
    </div>
  )
}


function Products(props) {
  return (
    <div>
      <h3>Name: {props.name}</h3>
      <p>Price: {props.price}</p>
    </div>
  )
}


// state: ata change hote pare user jodi change kore
function Counter(){
  const [count, setCount] = useState(33);

  // shortcut
  const increaseCount = () => setCount( count + 1);
  const decreaseCount = () => setCount(count - 1);

  // const increaseCount = () => {
  //   const newCount = count + 1;
  //   setCount(newCount);
  // }

  return (
    <div class="counter">
      <h1>Count:{count} </h1>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
    </div>
  )
}

export default App;
