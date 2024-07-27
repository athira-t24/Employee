import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './Main';
import { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import Edit from './Edit';
import CreateForm from './CreateForm';

const test=createContext()

function App() {
  const [employee, setemployee] = useState([])
    const [IsModalOpen, setIsModalOpen] = useState(false)
    const [viewModal, setviewModal] = useState(false)
    const [rows, setrows] = useState([])
    const [edit, setedit] = useState([])
  const api='https://jsonplaceholder.typicode.com/todos/';
    useEffect(() => {
      axios.get(api).then(res=>{
        
        setemployee(res.data)}
        )
    }, [])
  return (
    <div className="App">
      <test.Provider value={{employee,setemployee,IsModalOpen,setIsModalOpen,rows,setrows,viewModal,setviewModal,edit,setedit}}>
     <BrowserRouter>
     {/* <Main/> */}
     <Routes>
     <Route path="/" element={<Main/>}/>
     <Route path="/editform" element={<Edit/>}/>
     <Route path="/create" element={<CreateForm/>}/>
     </Routes>
     </BrowserRouter>
     </test.Provider>
    </div>
  );
}

export default App;
export {test}