import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Slide.css'; // Import your CSS file

const Slide = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div>
            <div className='w-full bg-base-200 fixed z-10'>
                <Link onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                    <h1 className={isHovered ? 'animation-paused text-blue-800 underline mt-4' : 'animation text-blue-800 underline mt-4'}>
                        A WORKSHOP ON “DIGITAL FABRICATION FACILITIES FOR ADVANCE RESEARCH” WAS....
                    </h1>
                </Link>
            </div>
        </div>
    );
};

export default Slide;
