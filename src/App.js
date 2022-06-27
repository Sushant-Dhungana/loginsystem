import './App.css';
import Navbar from './components/Navbar';
import Register from './components/Register';
import {Routes, Route} from 'react-router-dom'
import Login from "./components/Login";
import Dashboard from './components/Dashboard'
import PageNotFound from './components/PageNotFound';

function App() {
  return (
    <div className="App">
      <Navbar/>
    <Routes>
      <Route path='/' element={<Register/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/dashboard' element={<Dashboard/>}></Route>
      <Route path='/*' element={<PageNotFound/>}></Route>

    </Routes>
    </div>
  );
}

export default App;
