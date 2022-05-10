import React, { useState } from 'react';
import {Prompt, useHistory } from 'react-router-dom';
import {Formik,Form,Field} from 'formik';
import axios from 'axios';

  
const AddUsers = () => {
  const [filled,setfilled] = useState(false);
  const history = useHistory();
    return(
        
         <div className='border'>
              <Prompt 
         when={filled===false}
         message={"Are you sure?"}/>
             <Formik initialValues={{firstName:'',lastName:'',dateOfBirth:'',phoneNumber:'',pinCode:''}}
             onSubmit={(values)=>{
                 let baseurl="http://localhost:3001/users";
                 axios.post(baseurl,values).then((res)=>{
                     console.log(res.data);
                 }).then(setfilled(true));
                 history.push("/Users");
                 
             }}>
         <Form>
         <div className='style'>
         <label>Firstname</label>
         <Field type='text' 
         name='firstName' id='firstname'/>
         </div>

         <div>
         <label>Lastname</label>
         <Field type='text'
         name='lastName' id='lastname'/>
         </div>

         <div >
         <label>Date of Birth</label>
         <Field type='date'
         name='dateOfBirth' id='dob'/>

         </div>

         <div >
         <label >phone</label>
         <Field type='text'
         name='phoneNumber' id='phone'/>
         </div>

         <div>
         <label>pincode</label>
         <Field type='text'
         name='pinCode' id='pincode'/>
         </div>

         <button type='submit' className='submit'>submit</button>
        
         </Form>
         </Formik>
         
         </div>   
    );
}



export default AddUsers;