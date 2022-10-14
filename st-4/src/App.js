import './App.css';
import { Fragment, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Adduser from './components/Adduser';
import Viewuser from './components/Viewuser';
import Edituser from './components/Edituser';

function App() {
  const[id,setId] = useState(-1)
  return (
    <div className="color">
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/viewUsers" element={<Viewuser changeId={setId}></Viewuser>}></Route>
          <Route path="/addUser" element={<Adduser></Adduser>}></Route>
          <Route path="/editUser" element={<Edituser userId={id}></Edituser>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
