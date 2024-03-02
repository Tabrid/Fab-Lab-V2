import { useState } from 'react';
import { Link } from 'react-router-dom';

import { BounceLoader } from 'react-spinners';
import Marquee from "react-fast-marquee";
const Slide = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [data, setData] = useState({});
    fetch('https://fab-lab-server-production.up.railway.app/api/event/all')
        .then(response => response.json())
        .then(data => {
            if (Array.isArray(data) && data.length > 0) {
                const eventData = data.reverse();
                setData(eventData[0]);
                // Do whatever you need with the first object

            } else {
                console.log("No data or empty array received");
            }
        })
        .catch(error => console.error('Error fetching data:', error));
    <BounceLoader color="#2e3094" />
    return (
        <div className='bg-base-200 sticky z-10 top-[72px]'>
            <Marquee gradient={false} speed={40} pauseOnHover={true}>
                <Link to={`/event/${data._id}`} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                    <h1 className={isHovered ? ' text-blue-800 underline my-4' : ' text-blue-800  my-4'}>
                        {data.title}
                    </h1>
                </Link>

            </Marquee>
        </div>
    );
};

export default Slide;
