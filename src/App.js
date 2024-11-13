import logo from './logo.svg';
import './App.css';
import StudentList from './components/StudentList';
import StudentForm from './components/StudentForm';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';


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
    </div>
  );
}

export default App;
