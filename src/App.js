
import './App.css';
import {Header} from "./Header/Header"
import { Sidebar } from './Sidebar/Sidebar';
import { Main } from './Main/Main';

function App() {
  return (
    <div className="App">
      <Sidebar/>
      <Header />
      <Main />
    </div>
  );
}

export default App;
