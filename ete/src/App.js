// import logo from './logo.svg';
import './css/App.css';
import {Routes,Route} from 'react-router-dom'
import Home from './component/Home'
import About from './component/About'
import Contact from './component/Contact'
import Nomatch from './component/Nomatch'
import Nav_bar from './component/Nav_bar';
import Login from './component/Login';
import Sigin from './component/Sigin';
import Create from './component/Create';
import Read from './component/Read';
import Update from './component/Update';
function App() {
  return (

    <div className="App">
      <Nav_bar/>
      {/* <Create/> */}
      {/* <Read/> */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Add_user' element={<Create/>}/>
        <Route path='/display_user' element={<Read/>}/>
        <Route path='/update' element={<Update/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Sigin' element={<Sigin/>}/>
        <Route path='*' element={<Nomatch/>}/>
      </Routes>
    </div>
  );
}

export default App;
