import { Link } from 'react-router-dom';
import './Users.css';
import { useEffect, useState } from 'react';

export function Users() {

const [users, setUsers] = useState([]);


useEffect(() => {
    async function fetchData() {
        try {
            const response = await fetch(
                `https://jsonplaceholder.typicode.com/users`
            );
            const json = await response.json();
            setUsers(json);
        } catch (e) {
            console.log(e);
        }
    };
    fetchData();
}, []);


return (
    <section className="home-section">
        <div className='user-box'>
            {users.map((user, index) => (
                <div>
                    {user.name}
                    <Link to={`/users/album/${user.id}`} >Альбом</Link>
                </div>
            ))}
        </div>
    </section>
);
}
