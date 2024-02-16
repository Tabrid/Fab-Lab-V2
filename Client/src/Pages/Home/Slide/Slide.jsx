import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Slide.css'; // Import your CSS file

const Slide = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [data, setData] = useState({});
    fetch('http://localhost:5000/api/event/all')
        .then(response => response.json())
        .then(data => {
            if (Array.isArray(data) && data.length > 0) {
                setData(data[0]);
                // Do whatever you need with the first object
                
            } else {
                console.log("No data or empty array received");
            }
        })
        .catch(error => console.error('Error fetching data:', error));
    return (
        <div>
            <div className='w-full bg-base-200 fixed z-10'>
                <Link to={`/event/${data._id}`} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                    <h1 className={isHovered ? 'animation-paused text-blue-800 underline mt-4' : 'animation text-blue-800 underline mt-4'}>
                        {data.title}
                    </h1>
                </Link>
            </div>
        </div>
    );
};

export default Slide;
