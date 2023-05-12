
import './App.css';
import {Header} from "./Header/Header"
import { Sidebar } from './Sidebar/Sidebar';
import {Smiles} from './Main/Smiles/Smiles';
import { Todos } from './Main/Todos/Todos';
import {Route, Routes, BrowserRouter} from "react-router-dom";
import { Main } from './Main/Main';
import { SendForm } from './Main/Formik/Formik';
import { Users } from './Main/Users/Users';
import { Album } from './Main/Album/Album';
import { Photos } from './Main/Photos/Photos';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Sidebar/>
      <Header/>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/smiles' element={<Smiles/>}/>
        <Route path='/todos' element={<Todos/>}/>
        <Route path='/formik' element={<SendForm/>}/>
        <Route path='/users' element={<Users/>}/>
        <Route path='/users/album/:id' element={<Album/>}/>
        <Route path='/users/photos/:id' element={<Photos/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
