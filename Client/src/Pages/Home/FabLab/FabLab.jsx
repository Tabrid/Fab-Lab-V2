import { Link } from "react-router-dom";
import { BsCalendar2Event } from "react-icons/bs";
import { IoMdArrowDropright } from "react-icons/io";
import { useState } from "react";
const FabLab = () => {
    const [data, setData] = useState([]);
    fetch('http://localhost:5000/api/event/all')
        .then(response => response.json())
        .then(data => {
            if (Array.isArray(data) && data.length > 0) {
                const firstSixObjects = data.slice(0, 6);
                // Do whatever you need with the first six objects
                setData(firstSixObjects);
            } else {
                console.log("No data or empty array received");
            }
        })
        .catch(error => console.error('Error fetching data:', error));

    return (
        <div className="hero  bg-base-100 flex ">
            <div className="hero-content flex-col w-1/2 mx-5">
                <div className="w-full">
                    <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/dGCxYXLfoi4?si=0d9AE6ANe05dKxKT" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <div className="w-full">
                    <h1 className="text-5xl font-bold"><span className="text-[#2e3094]">FABLAB</span> DIU</h1>
                    <p className="py-6 text-lg">To ensure learners&rsquo; engagement in corporate workflows from concept, design, prototyping, fabrication and marketing, DIU has set up a Multi-Disciplinary Fabrication Laboratory in 2020 to provide a clear idea of product creation through the application of &ldquo;learning-by-doing&rdquo; and &ldquo;hands-on&rdquo; activities.Moreover, the DIU FabLab aims to develop and implement a set of training programs with some modules, based on the latest modern technologies.
                    </p>

                </div>
            </div>
            <div className="w-1/2 mx-5">
                <div className="card w-full bg-base-100  flex-col items-center justify-center">
                    <h1 className="text-5xl font-bold flex gap-5"><BsCalendar2Event className="text-[#2e3094]" /> NEWS</h1>
                    <div className="card-body">
                        {
                            data.map((event, index) => (
                                <Link  key={index} className="flex gap-3">
                                    <Link to={`/event/${event._id}`}>
                                        <p className="border-black border-spacing-1 border px-3 py-2 hover:underline flex gap-2"><IoMdArrowDropright className="text-[#2e3094] text-3xl" />{event.title}</p>
                                    </Link>
                                </Link>
                            ))
                        }


                    </div>

                </div>
            </div>
        </div>
    );
};

export default FabLab;