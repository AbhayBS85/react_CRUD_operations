import logo from './logo.svg';
import './App.css';
import StudentForm from './components/User';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import User from './components/User';
import AddUser from './components/AddUser';


const App=() =>{
  const [users,setUsers]=useState([]);
  const [editingUser,setEditingUser]=useState(null);

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

  const onAdd = async(name,email) => {
    await fetch('https://jsonplaceholder.typicode.com/users', {
      method:'POST',
      body:JSON.stringify({
        name:name,
        email:email,
      }),
      headers:{
        "Content-type": "application/json; charset=UTF-8",
      }
    })
    .then((res) => {
      if(res.status !== 201){
        return
      }else{
        return res.json();
      }
    })
    .then((data) => {
      setUsers((users) => [...users,data]);
    })
    .catch((err) => {
      console.log(err);
    })
  }

  const onDelete = async (id) =>{
    await fetch('https://jsonplaceholder.typicode.com/users/${id}',{
      method:'DELETE',
    })
    .then((res) => {
      if(res.status !==200){
        return
      }else{
        return setUsers(users.filter((user) => {
          return user.id !==id;
        }))
      }
    })
    .catch((err) => {
      console.log(err);
    });
  };
  const onEdit = async (id, updatedName, updatedEmail) => {
    await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        name: updatedName,
        email: updatedEmail,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
    .then((res) => res.json())
      .then((updatedUser) => {
        setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
        setEditingUser(null); 
      })
      .catch((err) => {
        console.log(err);
      });
    };

  console.log(users)
  return (
    <div className="App">
      <h1>React JS CRUD Operations</h1>
      <br></br>
      <AddUser onAdd={onAdd}/>
      <div>
        {
          users.map((user) =>(
            <User 
            id={user.id} 
            key={user.id} 
            name={user.name} 
            email={user.email} 
            onDelete={onDelete}
            onEdit={onEdit} />
          ))}
      </div>
    </div>
  );
}

export default App;
