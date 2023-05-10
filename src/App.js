
import './App.css';
import {Header} from "./Header/Header"
import { Sidebar } from './Sidebar/Sidebar';
import {Smiles} from './Main/Smiles/Smiles';
import { Todos } from './Main/Todos/Todos';
import {Route, Routes, BrowserRouter} from "react-router-dom";
import { Main } from './Main/Main';
import { SendForm } from './Main/Formik/Formik';
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
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
