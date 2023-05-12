import "./Album.css"
import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export function Album(){
    const { id } = useParams();
    const [albums, setAlbums] = useState([]);


    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(
                    `https://jsonplaceholder.typicode.com/albums`
                );
                const json = await response.json();
                const filterAlbums = json.filter(item => Number(item.userId) === Number(id));
                setAlbums(filterAlbums);
            } catch (e) {
                console.log(e);
            }
        };
        fetchData();
    }, []);
    return (
    <section className="home-section">
        <div className="home-content">
            <div className="text">Album user - {id}</div>
            {albums.map((album) => (
                <div className=''>
                    {album.title}
                    <Link to={`/users/photos/${album.id}`} >Фото</Link>
                </div>
                
            ))}
        </div>
    </section>
    );
}