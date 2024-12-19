import axios from "axios";
import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
let Getusers=()=>{
    let [head,setHead]=useState([]);
    let [state,setState]=useState({users:[]});
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/add');
    };
    useEffect(()=>{
    // axios.get("https://jsonplaceholder.typicode.com/users")
    // .then(res=>{
    //   setState({users:res.data})
    //   setHead(Object.keys(res.data[0]).slice(0,4))
    axios.get("http://localhost:5050/users")
    .then(res=>{
      setState({users:res.data})
      setHead(Object.keys(res.data[0]).slice(0,4));
    })
  });
  let delUser=(id)=>{
    axios.delete("http://localhost:5050/users/"+id)
    .then(()=>{navigate("/");
      alert("data deleted success")})
    .catch((err)=>console.log("deletion failed"))
  }
      // console.log(state.users);
    // console.log(state.users[0]);
  return (
    <>
    <div className="App">
      <center><h1 style={{color:"black"}}>Employee Database</h1></center>
      <button onClick={handleClick}>Add User</button>
      <table style={{border:"1px solid black",borderCollapse:"collapse"}}>
        <thead>
          <tr>
            {head.map((val,index) => (
              <th style={{ border: "1px solid black", borderCollapse: "collapse" }} key={index}>{val}</th>
            ))}
            <th style={{ border: "1px solid black", borderCollapse: "collapse" }} colSpan={2}>Modify</th>
          </tr>
        </thead>
        <tbody>
        {state.users.map((val,index)=>{
          return(
             <tr key={index}>
              <td style={{border:"1px solid black",borderCollapse:"collapse"}}>{val.id}</td>
              <td style={{border:"1px solid black",borderCollapse:"collapse"}}>{val.name}</td>
              {/* <td style={{border:"2px solid black",borderCollapse:"collapse"}}>{val.age}</td> */}
              <td style={{border:"1px solid black",borderCollapse:"collapse"}}>{val.username}</td>
              <td style={{border:"1px solid black",borderCollapse:"collapse"}}>{val.email}</td>
              <td style={{border:"1px solid black",borderCollapse:"collapse"}}><button onClick={()=>navigate(`/edit/${val.id}`)}>Update</button></td>
              <td style={{border:"1px solid black",borderCollapse:"collapse"}}><button onClick={()=>delUser(val.id)}>Delete</button></td>
            </tr>
          )
        })}
        </tbody>
      </table>
    </div>
    </>
  );
}
export default Getusers;