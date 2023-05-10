import './Sidebar.css';
import { NavLink} from "react-router-dom";
export function Sidebar() {
return (
    <div className="sidebar">
    <div className="logo-details">
      <span className="logo_name">Sidebar</span>
    </div>

    <ul className="nav-links">
      <li>
        <NavLink  className={({ isActive }) => 'link_name' + ( isActive ? ' active' : '')} to={'/'} >Dashboard</NavLink>
      </li>
      <li>
        <NavLink  className={({ isActive }) => 'link_name' + ( isActive ? ' active' : '')} to={'/smiles'} >Smiles</NavLink>
      </li>
      <li>
        <NavLink  className={({ isActive }) => "link_name" + ( isActive ? ' active' : '')} to={'/todos'} >Todos</NavLink>
      </li>
      <li>
        <NavLink  className={({ isActive }) => "link_name" + ( isActive ? ' active' : '')} to={'/formik'} >Formik</NavLink>
      </li>
    </ul>

  </div>
    
);
}
