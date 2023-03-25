
import './App.css';
import { useState } from "react";
import Cards from "./components/Cards";
import SearchBar from './components/SearchBar';

function App() {
const [users,setUsers] = useState([]);

const searchUser = (id) =>{
  fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
  .then( (res) => res.json())
  .then( data => setUsers(...users,data))// data es el objeto del usuario
}

  return (
    <div className='App'>
      <SearchBar onSearch={searchUser}/>
      <Cards users={users}/>
    </div>
    
  )
}

export default App;
