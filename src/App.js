import logo from './logo.svg';
import './App.css';
import StudentForm from './components/User';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import User from './components/User';


const App=() =>{
  const [users,setUsers]=useState([]);
  useEffect(() => {
    fetchData();
  },[])

  const fetchData= async () => {
    await fetch('https://jsonplaceholder.typicode.com/users')
    .then((res)=>res.json())
    .then((data)=>setUsers(data))
    .catch((err)=>{
      console.log(err);
    })
  }
  console.log(users)
  return (
    <div className="App">
      <h1>React JS CRUD Operations</h1>
      <div>
        {
          users.map((user) =>(
            <User id={user.id} key={user.id} name={user.name} email={user.email}/>
          ))
        }
      </div>
    </div>
  );
}

export default App;
