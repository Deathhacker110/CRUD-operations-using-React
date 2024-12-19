import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams,useNavigate } from "react-router-dom";
let Edituser=()=>{
    let [values,setValues]=useState({name:"",username:"",email:""});
    let change=(e)=>{
        setValues({...values,[e.target.name]:e.target.value});
    };
    let navigate=useNavigate();
    const {id}=useParams();
    useEffect(()=>{
        axios.get("http://localhost:5050/users/"+id)
        .then(res=>setValues(res.data));
    },[]);
    function doEdit(e){
        e.preventDefault();
        axios.put("http://localhost:5050/users/"+id,values)
        .then(_=>{
            alert("user Updated");
            navigate("/")
        })
    }
    return(
        <div className="container">
            <form>
            <div className="card">
                <div className="card-image">	
                    <h2 className="card-heading">
                        Update Your Details
                    </h2>
                </div>
                <form className="card-form">
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
                        <button className="action-button" onClick={doEdit}>Update User</button>
                    </div>
                </form>
            </div>
            </form>
        </div>
    )
}
export default Edituser;