import { useState, useEffect } from 'react'
import logo from './logo.svg'
import './App.css'
import axios from 'axios'
import UsersList from './components/UsersList'
import styles from "./assets/css/styles.css"
import UsersForm from './components/UsersForm'
import pastel from "./assets/images/pastel.png"
import pad from "./assets/images/pad.png"

function App() {
  const [users, setUsers] = useState([]);
  const [userSelected, setUserSelected] = useState(null);

  useEffect(()=>{
      axios
      .get("https://users-crud1.herokuapp.com/users/")
      .then(res=> setUsers(res.data));
  }, [])

  const getUsers = () =>{
    axios
      .get("https://users-crud1.herokuapp.com/users/")
      .then(res=> setUsers(res.data));
  };

  const deleteUser = (id) => {
    alert(id);
    axios.delete(`https://users-crud1.herokuapp.com/users/${id}/`)
    .then(res=> getUsers(res.data));
  }

  const selectUser = (user) => {
    setUserSelected(user);
  }
  const deselectUser = ()=> setUserSelected(null)
  

  return (
    <div className="App">
      
      <UsersList 
        users={users} 
        selectUser={selectUser}
        deleteUser={deleteUser}
        />
      <UsersForm 
        getUsers={getUsers} 
        userSelected={userSelected}
        deselectUser={deselectUser}
        />
    </div>
  )
}

export default App
