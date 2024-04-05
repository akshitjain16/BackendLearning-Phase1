import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import "./add.css"
import toast from 'react-hot-toast';

const Add = () => {
    const users = {
        fname:"",
        lname:"",
        email: "",
        password:"",
        phone: "",
        Hobbies:""
    }
    const [user, setUser] = useState(users);
    const navigate = useNavigate();
    const inputHandler=(e) =>{
        const {name, value} = e.target;
        setUser({...user, [name]:value});
    }

    const submitForm = async(e) =>{
        e.preventDefault();
        await axios.post("http://localhost:8000/api/create", user) 
        .then((response) =>{
            toast.success(response.data.msg, {position:'top-right'})
            navigate("/")
        })
        .catch(error => console.log(error))
    }
     
  return (
    <div className='addUser'>
        <Link to={"/"}>Back</Link>
        <h3>Add new user</h3>
        <form className='addUserForm' onSubmit={submitForm}>
            <div className='inputGroup'>
                <label htmlFor="fname">First name</label>
                <input type="text"  onChange={inputHandler} id='fname' name='fname' autoComplete='off' placeholder='First name'/>
            </div>
            <div className='inputGroup'>
                <label htmlFor="lname">Last name</label>
                <input type="text" onChange={inputHandler} id='lname' name='lname' autoComplete='off' placeholder='Last name'/>
            </div>
            <div className='inputGroup'>
                <label htmlFor="email">E-Mail</label>
                <input type="email" onChange={inputHandler} id='email' name='email' autoComplete='off' placeholder='E-Mail'/>
            </div>
            <div className='inputGroup'>
                <label htmlFor="password">Password</label>
                <input type="password" onChange={inputHandler} id='password' name='password' autoComplete='off' placeholder='password'/>
            </div>
            <div className='inputGroup'>
                <label htmlFor="Phone_Number">Phone Number</label>
                <input type="number" onChange={inputHandler} id='Phone_Number' name='Phone_Number' autoComplete='off' placeholder='your number'/>
            </div>
            <div className='inputGroup'>
                <label htmlFor="Hobbies">Hobbies</label>
                <input type="text" onChange={inputHandler} id='Hobbies' name='Hobbies' autoComplete='off' placeholder='Hobbies'/>
            </div>
            <div className='inputGroup'>
                <button type="submit">ADD USER</button>
            </div>
        </form>
    </div>
  )
}

export default Add