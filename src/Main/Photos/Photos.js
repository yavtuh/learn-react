import "./Photos.css";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export function Photos(){
    const { id } = useParams();
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(
                    `https://jsonplaceholder.typicode.com/photos`
                );
                const json = await response.json();
                const filterPhotos = json.filter(item => Number(item.albumId) === Number(id));
                setPhotos(filterPhotos);
            } catch (e) {
                console.log(e);
            }
        };
        fetchData();
    }, []);
    return (
        <section className="home-section">
            <div className="home-content">
                <div className="text">Photo album - {id}</div>
                <div className="photo-list">
                    {photos.map((photo) => (
                        <div className='photo-item'>
                            <img src={photo.thumbnailUrl} alt={photo.title} />
                            
                        </div>
                    ))}
                </div>
            </div>
        </section>
        );
}