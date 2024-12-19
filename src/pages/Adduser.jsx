import React,{useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
let Adduser=()=>{
    let navigate=useNavigate();
    let [values,setValues]=useState({name:"",username:"",email:""});
    let [rowsid,setrowsid]=useState([]);            
    let change=(e)=>{
        setValues({...values,[e.target.name]:e.target.value});
    };
    useEffect(() => {                               
        axios.get("http://localhost:5050/users")    
            .then(res => {                          
                setrowsid(res.data);                
            });                                     
    }, []);                                         
    function lastId(){                              
        let last=0;                                 
        rowsid.forEach(user => {                    
            if (parseInt(user.id) > last) {         
                last =parseInt(user.id);            
            }                                       
        });                                         
        return String(last+1);                      
    }                                               
    function addUser(e){
        let newId = lastId();                       
        console.log(newId);                         
        let newUser={...values,id:newId};
        console.log(newUser)                        
        e.preventDefault();
        // axios.post("http://localhost:5050/users",values)
        axios.post("http://localhost:5050/users",newUser) 
        .then(()=>{
            navigate("/");
            alert("data added successfully")
        })
        .catch((err)=>{
            console.log("data is not added")
        })
    };
    return(
        <>
        <div className="container">
                <div className="card">
                <div className="card-image">	
                    <h2 className="card-heading">
                        Add Your Details
                    </h2>
                </div>
                <form className="card-form" onSubmit={addUser}>
                    <div className="input">
                        <input type="text"  name="name" className="input-field" value={values.name} onChange={change} required/>
                        <label className="input-label">Full name</label>
                    </div>
                    <div className="input">
                        <input type="text"  name="username" className="input-field" value={values.username} onChange={change} required/>
                        <label className="input-label">Username</label>
                    </div>
                    <div className="input">
                        <input type="email"  name="email" className="input-field" value={values.email} onChange={change} required/>
                        <label className="input-label">Email</label>
                    </div>
                    <div className="action">
                        <button className="action-button">Add User</button>
                    </div>
                </form>
            </div>
        </div>

        </>
    )
}
export {Adduser};