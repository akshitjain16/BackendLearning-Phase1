import React, { useEffect, useState } from 'react'
import "../adduser/add.css";
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';
import toast from 'react-hot-toast';

const Edit = () => {

    const users = {
        fname: "",
        lname: "",
        email: "",
        Phone_Number: "",
        Hobbies: ""
    }

const {id} = useParams();
const navigate = useNavigate();
const [user, setUser]= useState(users);

const inputChangeHandler = (e) =>{
    const{name, value} = e.target;
    setUser({...user ,[name] :value}) ;
    console.log(user);
}

useEffect(()=>{
    axios.get(`http://localhost:8000/api/getone/${id}`)
    .then((response)=>{
        setUser(response.data)
    })
    .catch(error => {console.log("Error")});
},[id])

const submitForm = async(e) =>{
    e.preventDefault();
    await axios.put(`http://localhost:8000/api/update/${id}`, user) 
    .then((response) =>{
        toast.success(response.data.msg, {position:'top-right'})
        navigate("/")
    })
    .catch(error => console.log(error))
}

  return (
    <div className='addUser'>
        <Link to={"/"}>Back</Link>
        <h3>Update user</h3>
        <form className='addUserForm' onSubmit={submitForm}>
            <div className='inputGroup'>
                <label htmlFor="fname">First name</label>
                <input type="text" value={user.fname} onChange={inputChangeHandler} id='fname' name='fname' autoComplete='off' placeholder='First name'/>
            </div>
            <div className='inputGroup'>
                <label htmlFor="lname">Last name</label>
                <input type="text" value={user.lname} onChange={inputChangeHandler} id='lname' name='lname' autoComplete='off' placeholder='Last name'/>
            </div>
            <div className='inputGroup'>
                <label htmlFor="email">E-Mail</label>
                <input type="email" value={user.email} onChange={inputChangeHandler} id='email' name='email' autoComplete='off' placeholder='E-Mail'/>
            </div>
            <div className='inputGroup'>
                <label htmlFor="Phone_Number">Phone Number</label>
                <input type="number" value={user.Phone_Number} onChange={inputChangeHandler} id='Phone_Number' name='Phone_Number' autoComplete='off' placeholder='your number'/>
            </div>
            <div className='inputGroup'>
                <label htmlFor="Hobbies">Hobbies</label>
                <input type="text" value={user.Hobbies} onChange={inputChangeHandler} id='Hobbies' name='Hobbies' autoComplete='off' placeholder='Hobbies'/>
            </div>
            <div className='inputGroup'>
                <button type="submit">UPDATE USER</button>
            </div>
        </form>
    </div>
  )
}

export default Edit