import React, { useContext, useState } from 'react'
import { Form } from 'react-bootstrap'
import { test } from './App'
import { useNavigate } from 'react-router-dom'

const CreateForm = () => {
  const {employee,setemployee}=useContext(test)
  const [create, setcreate] = useState({
    id:"",
    title:"",
    userId:""
  })
  const getInput=(e)=>{
    setcreate({...create,[e.target.name]:e.target.value})
  }
  const navigate=useNavigate()
  const Submit=(e)=>{
    e.preventDefault();
    const newArray=[...employee,create]
    setemployee(newArray)
    navigate("/")
  }

  return (
    <div><Form style={{width:"50%", margin:"auto"}}>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Label>ID</Form.Label>
      <Form.Control type="text" onChange={getInput} name="id"  />
    </Form.Group>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Label>Title</Form.Label>
      <Form.Control type="text" onChange={getInput} name="title"  />
    </Form.Group>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Label>User ID</Form.Label>
      <Form.Control type="text" onChange={getInput} name="userId"  />
    </Form.Group>
    
  </Form>
  <button style={{backgroundColor:"blue", color:"white", width:"100px"}} onClick={Submit}>Submit</button></div>
  )
}

export default CreateForm