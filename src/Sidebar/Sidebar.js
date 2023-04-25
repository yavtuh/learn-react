import './Sidebar.css';

export function Sidebar() {
return (
    <div className="sidebar">
    <div className="logo-details">
      <span className="logo_name">Sidebar</span>
    </div>
    <ul className="nav-links">
      <li>
          <span className="link_name">Dashboard</span>
      </li>
      <li>
            <span className="link_name">Category</span>
      </li>
      <li>
            <span className="link_name">Posts</span>
      </li>
    </ul>
  </div>
    
);
}
