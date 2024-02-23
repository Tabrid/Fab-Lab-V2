import Location from "../../Component/Location/Location";
import {
    RiArrowRightDoubleFill,
} from "react-icons/ri";
import { FaArrowsToDot } from "react-icons/fa6";
import { TbCircleDotFilled } from "react-icons/tb";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BounceLoader } from "react-spinners";
const SingleEvent = () => {
    const [event , setEvent]=useState();
    const { id } = useParams();
    useEffect(() => {
        fetch(`http://localhost:5000/api/event/${id}`)
            .then(res => res.json())
            .then(data => {
                setEvent(data);
            });
    }, [id]);
    console.log(event);
    
    const Data = {
        title: {
            label: "Event",
            subLabel: null,
        },
        links: [
            { label: "Facilities", icon: RiArrowRightDoubleFill },
            {
                label: "Event",
                icon: RiArrowRightDoubleFill,
                color: "text-[#2e3094]",
            },
        ],
    };
    <BounceLoader color="#2e3094" />
    return (
        <div>
            <Location {...Data} />
            <div className="container mx-auto p-4">

                <h1 className="text-3xl font-bold mb-4">{event?.title}</h1>
                {event?.image && <img src={event?.image} alt={event?.title} className="mb-4 rounded-lg w-full" />}
                <p><strong>Organized By:</strong> {event?.organizedBy}</p>
                <p><strong>Venue:</strong> {event?.venue}</p>
                <div className="mt-4">
                    <h2 className="text-xl font-semibold mb-2">Descriptions:</h2>
                    {event?.descriptions.map((desc, index) => (
                        <div key={index} className="mb-2">
                            <p className="font-semibold flex gap-2 items-center "><FaArrowsToDot />{desc?.keypoint}</p>
                            <ul>
                                {desc?.tasks.map((task, taskIndex) => (
                                    <li className="mt-3 flex gap-2 items-center " key={taskIndex}><TbCircleDotFilled />{task}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SingleEvent;