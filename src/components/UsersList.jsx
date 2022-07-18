import React from 'react';
import { useState, useEffect } from 'react'
import axios from 'axios'
import pastel from "../assets/images/pastel.png"
import mail from "../assets/images/mail.png"
import pencil from "../assets/images/pencil.png"
import trash from "../assets/images/trash.png"

const UsersList = ({users, selectUser, deleteUser}) => {

    
    return (
        <ul className='container__card'>
           {
                users.map (user => (
                    <li key ={user.id } className="card">
                        <h4 className='item__card'>{user.first_name} {user.last_name}</h4> 
                        <div className='item__card'>
                        <img className='icon' src={mail} style={{width:"1rem"}}    alt="" />
                            {user.email}
                        </div>
                        <div className='item__card'>
                            <img className='icon' src={pastel} style={{width:"1rem"}}    alt="" />
                            {user.birthday}
                        </div>
                        
                        <button className="pencil" onClick={()=> selectUser(user)}><img style={{width:"1rem"}}  src={pencil} alt="" /></button>

                        <button type="button" onClick={()=> deleteUser(user.id)} className="trash" ><img style={{width:"1rem"}}  src={trash} alt="" /></button>
                    </li>

                ))
            }
        </ul>
    );
};

export default UsersList;