import axios from 'axios';
const url="https://localhost:3001/users";

export const getallUsers = async(id)=>{
    id=id||'';
    return await axios.get(`${url}/${id}`);
}
export const getAll = async()=>{
  return await axios.get(`$(url)`);
}
export const addUsers = async(users)=>{
    return await axios.post(url,users);
}
export const editUsers = async(id,users)=>{
    return await axios.put(`${url}/${id}`,users);
}