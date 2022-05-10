import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom';
import { getallUsers } from '../API/api';

export default function Users(){
const [output,setoutput] = useState([])

useEffect(()=>{
    getUsers();
},[]);
const getUsers = async()=>{
    const response= await getallUsers();
    setoutput(response.data);
}
return(
    <div className='sp'>
     <h3>Users List</h3>
     <table className='center'>
         <tr>
             <td>
                Firstname
             </td>
             <td>Lastname</td>
             <td>Date of Birth</td>
             <td>pincode</td>
             <td>phone</td>
         </tr>
         <tbody>
             {output.map((e)=>
             {
                 return  <tr key={e.userId}>
                     <td>{e.firstName}</td>
                     <td>{e.lastName}</td>
                     <td>{e.dateOfBirth}</td>
                     <td>{e.pinCode}</td>
                     <td>{e.phoneNumber}</td>
                   <td> <button style={{color:'green'}} ><Link to={`/edit/${e.userId}`}>Edit</Link></button></td>
                 </tr>

             })}
         </tbody>
     </table>
     <button><Link to="/AddUsers">Add Users</Link></button> 

    </div>
)








}