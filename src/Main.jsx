import React, { useContext } from 'react'
import { Table } from 'react-bootstrap'
import { IoEyeSharp } from "react-icons/io5";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Modal } from 'antd'
import { test } from './App';
import { toast, ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from 'react-router-dom';

const Main = () => {
    
    const {employee,setemployee,IsModalOpen,setIsModalOpen,rows,setrows,viewModal,setviewModal,edit,setedit}=useContext(test)
    
    const showdelete=(item)=>{
        setrows(item)
        setIsModalOpen(true)
    }
    const handleCancel=()=>{
        setIsModalOpen(false)
        setviewModal(false)
    }
    const handleDelete=()=>{
        const updatedArray=employee.filter((row)=>row.id !== rows?.id)
        console.log(updatedArray);
        setemployee(updatedArray)
        
        setIsModalOpen(false)
        toast("Successfully deleted");
    }
    const view=(item)=>{
      setviewModal(true)
      setrows(item)
    }
    const handleok=()=>{
      setviewModal(false)
      
    }
    const navigate=useNavigate()
    const NavigateToEdit=(item)=>{
      setedit(item)
      navigate("/editform")
    }
    const NavigateToCreate=()=>{
      navigate("/create")
    }

  return (
    <div>
      <div style={{ textAlign: 'right' }}>
      <button onClick={NavigateToCreate} style={{backgroundColor:"blue", color:"white", width:"100px", margin:"25px 50px"}} >Create</button>
      </div>
        
            <Table striped bordered hover>
    <thead>
      <tr>
        <th>ID</th>
        <th>Title</th>
        <th>User ID</th>
        <th>Action</th>
      </tr>
    </thead>
    {
        employee.map((item)=>{
            return(
    <tbody>
      <tr>
        <td>{item.id}</td>
        <td>{item.title}</td>
        <td>{item.userId}</td>
        <td><IoEyeSharp  onClick={()=>view(item)}/> &nbsp; &nbsp;<FaEdit onClick={()=>NavigateToEdit(item)}/> &nbsp;&nbsp;<MdDelete  onClick={()=>showdelete(item)}/></td>
        
      </tr>
      
    </tbody>)})}
  </Table>
  <Modal title="Delete" visible={IsModalOpen}
   onOk={handleDelete} onCancel={handleCancel}
  >
        <p>Are you sure to want to delete?</p>
        
      </Modal>
      <Modal title="View" visible={viewModal}
   onOk={handleok} onCancel={handleCancel}
  >
        <h5>ID: {rows.id}</h5>
        <h5>Title: {rows.title}</h5>
        <h5>User ID: {rows.userId}</h5>
        
      </Modal><ToastContainer/></div>
  )
}

export default Main