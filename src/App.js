import logo from './logo.svg';
import './App.css';
import {useState,  useEffect} from 'react';
import UserList from './UserList';
import axios from "axios";


function App() {

  const [todos , SetTodos]= useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then((result)=> {SetTodos(result.data)})
  } , [])

  return (
    <div className="container">
      <h1> Liste des Utilisateurs</h1>
      { <UserList todos={todos}/> }
     
    </div>
  );
}

export default App;
