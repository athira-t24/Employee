import React, { useContext, useState } from 'react'
import { Form } from 'react-bootstrap'
import { test } from './App'
import { useNavigate } from 'react-router-dom'

const Edit = () => {
  const {edit,setedit,employee,setemployee}=useContext(test)
  const [data, setdata] = useState({
    id:edit.id,
    title:edit.title,
    userId:edit.userId}
  )
  const getInput=(e)=>{
    setdata({...data,[e.target.name]:e.target.value})
    console.log(data);

  }
  const navigate=useNavigate()
  // const Submit=(e)=>
  // {
    
      
  //     console.log(newarray);
  // }
  const Update=(e)=>{
    e.preventDefault()
    const newarray=[...employee]
    if(edit){
      const index=employee.findIndex(item=>item.id===edit.id)
      if(index!==-1){
        newarray[index]={...edit,...data}
      }
    }
      else{
        newarray.push(data)
      }
      setemployee(newarray)
    navigate("/")
  }
  return (
    <div><Form style={{width:"50%", margin:"auto"}} 
    // onSubmit={Submit}
    >
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Label>ID</Form.Label>
      <Form.Control type="text" defaultValue={edit.id} onChange={getInput} name="id" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Label>Title</Form.Label>
      <Form.Control type="text" defaultValue={edit.title} onChange={getInput} name="title" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Label>User ID</Form.Label>
      <Form.Control type="text" defaultValue={edit.userId} onChange={getInput} name="userId" />
    </Form.Group>
    
  </Form>
  <button style={{backgroundColor:"blue", color:"white", width:"100px"}} onClick={Update}>Update</button></div>
  )
}

export default Edit