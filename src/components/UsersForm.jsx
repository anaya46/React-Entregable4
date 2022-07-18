import React from 'react';
import { useState, useEffect } from 'react'
import axios from 'axios'
import pastel from "../assets/images/pastel.png"
import mail from "../assets/images/mail.png"
import user from "../assets/images/user.png"
import pad from "../assets/images/pad.png"

const UsersForm = ({getUsers, userSelected, deselectUser}) => {

    const[firstName, setFirstName]= useState("");
    const[lastName, setLastName]= useState("");
    const[email, setEmail]= useState("");
    const[password, setPassword]= useState("");
    const[birthday, setBirthday]= useState("");

    useEffect(()=>{
        if(userSelected !== null){
            setFirstName(userSelected.first_name)
            setLastName(userSelected.last_name)
            setEmail(userSelected.email)
            setPassword(userSelected.password)
            setBirthday(userSelected.birthday)
        
        }
        
    }, [userSelected]);

    const submit= e =>{
        e.preventDefault ();
      
        const userForm = {
            first_name:firstName,
            last_name:lastName,
            email:email,
            password:password,
            birthday:birthday,
        };

    if(userSelected !==null){
        //   actualizando 
      alert("actualizando...")
      axios
      .put(`https://users-crud1.herokuapp.com/users/${userSelected.id}/`, userForm )
      .then(()=>{
        getUsers();
        reset();
        deselectUser();
       } )  
    }else{
        
        axios
        .post("https://users-crud1.herokuapp.com/users/", userForm)
        .then(()=>{
            getUsers();
            reset();
           } )  
        .catch((error) => console.log(error.response));
    };
    const reset = () => {
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setBirthday("");
      };


}
    return (
        <form onSubmit={submit} className="container__form">
            <h1 className='title__form'>New User</h1>
            <div className='input__container'>
                <label htmlFor="first_name">
                <img  className='icon'   src={user} style={{width:"1.5rem"}}    alt="" />
                </label>
                <input 
                    type="text" 
                    id="first_name" 
                    placeholder='First Name'
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)} />
            
            
                <label htmlFor="last_name"> </label>
                <input 
                    type="text" 
                    id="last_name" 
                    placeholder='Last Name'
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                    />
            </div>
            <div className='input__container'>
                <label htmlFor="email">
                <img className='icon' src={mail} style={{width:"1.5rem"}}    alt="" />
                </label>
                <input 
                    type="text" 
                    id="email" 
                    placeholder='e-mail'
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    />
            </div>
            <div className='input__container'>
                <label htmlFor="password"> 
                <img className='icon' src={pad} style={{width:"1.5rem"}}    alt="" />
                </label>
                <input 
                    type="password" 
                    id="password" 
                    placeholder='password'
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    />
            </div>
            <div className='input__container'>
                <label htmlFor="birthday"> 
                <img className='icon' src={pastel} style={{width:"1.5rem"}}    alt="" />
                </label>
                <input 
                    type="date" 
                    id="birthday"
                    placeholder='mm/dd/yyyy'
                    value={birthday}
                    onChange={e => setBirthday(e.target.value)}
                    />
            </div>
            <button className='upload'>Upload</button>


        </form>
    );
};

export default UsersForm;