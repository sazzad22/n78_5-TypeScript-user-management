import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Components/Counter';
import User from './Components/User';
import Users from './Components/Users';


let num = 2;
num = 5

interface User{
  name: string,
  age: number,
}
const user: User  = {
  name: 'abraham',
  age: 3,
}

console.log(user);

function App() {
  return (
    <div className="App">
      <h2>num :{num}</h2>
      <h2>user :{user.age}</h2>
      <Counter></Counter>
      <Users></Users>
    </div>
  );
}

export default App;
