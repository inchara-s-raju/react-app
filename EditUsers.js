import React, {useEffect,useState} from "react";
import {editUsers, getallUsers} from '../API/api'
import { useHistory,useParams} from 'react-router-dom';

const initialValue={
    firstName:"",
    lastName:"",
    dateOfBirth:"",
    pinCode:"",
    phoneNumber:"",
}
export default function EditUsers() {
  const [data, setdata] = useState(initialValue);
  const {firstName,lastName,dateOfBirth,pinCode,phoneNumber}=data;
  const {id}=useParams();
  useEffect(()=>{
      loadUserData();
  });
  const loadUserData=async ()=>{
    const response=await getallUsers(id);
    setdata(response.data);
  }
  const history=useHistory();
  const onvalueChange=(e)=>{
      setdata({...data,[e.target.name]:e.target.value});
      console.log(data);
  }
  const editUserDetails=async()=>{
       editUsers(id,data);
      return history.push("/Users");
     
  }
    return (
    <div style={{border:"solid 1px black", width:"200px",}}>
        <form>
            <label>Firstname</label>
            <input type={'text'} name="firstName" value={firstName} onChange={(e)=>onvalueChange(e)}/>
            <label>Lastname</label>
            <input type={'text'} name="lastName" value={lastName} onChange={(e)=>onvalueChange(e)}/>
            <label>Date of Birth</label>
            <input type={'date'} name="dateOfBirth" value={dateOfBirth} onChange={(e)=>onvalueChange(e)}/>
            <label>Pincode</label>
            <input type={'text'} name="pinCode" value={pinCode} onChange={(e)=>onvalueChange(e)}/>
            <input type={'text'} name="phoneNumber" value={phoneNumber} onChange={(e)=>onvalueChange(e)}/>
            <button onClick={()=>editUserDetails()}>Edit User</button>
            <button onClick={()=>history.push("/Users")}>Cancel</button>
   
        </form>
    </div>
  )
}