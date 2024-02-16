import Location from "../../Component/Location/Location";
import {
    RiArrowRightDoubleFill,
} from "react-icons/ri";
import { FaArrowsToDot } from "react-icons/fa6";
import { TbCircleDotFilled } from "react-icons/tb";
const SingleEvent = () => {
    const event = {
        "title": "Event Title",
        "image": "https://www2.kuet.ac.bd/fablab/wp-content/uploads/2022/09/banner-3-01-300x200.png",
        "organizedBy": "Organizer Name",
        "venue": "Event Venue",
        "descriptions": [
            {
                "keypoint": "Key Point 1",
                "tasks": [
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit possimus, culpa ratione eveniet ipsam animi mollitia placeat. Rem accusantium commodi doloribus, explicabo est minus. Perferendis dolorum natus quidem ut!",
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit possimus, culpa ratione eveniet ipsam animi mollitia placeat. Rem accusantium commodi doloribus, explicabo est minus. Perferendis dolorum natus quidem ut!"
                ]
            },
            {
                "keypoint": "Key Point 2",
                "tasks": [
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit possimus, culpa ratione eveniet ipsam animi mollitia placeat. Rem accusantium commodi doloribus, explicabo est minus. Perferendis dolorum natus quidem ut!",
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit possimus, culpa ratione eveniet ipsam animi mollitia placeat. Rem accusantium commodi doloribus, explicabo est minus. Perferendis dolorum natus quidem ut!"
                ]
            }
        ]
    }

    const Data = {
        title: {
            label: "Intra University Idea",
            subLabel: null,
        },
        links: [
            { label: "Facilities", icon: RiArrowRightDoubleFill },
            {
                label: "Intra University",
                icon: RiArrowRightDoubleFill,
                color: "text-[#2e3094]",
            },
        ],
    };
    return (
        <div>
            <Location {...Data} />
            <div className="container mx-auto p-4">

                <h1 className="text-3xl font-bold mb-4">{event.title}</h1>
                {event.image && <img src={event.image} alt={event.title} className="mb-4 rounded-lg w-full" />}
                <p><strong>Organized By:</strong> {event.organizedBy}</p>
                <p><strong>Venue:</strong> {event.venue}</p>
                <div className="mt-4">
                    <h2 className="text-xl font-semibold mb-2">Descriptions:</h2>
                    {event.descriptions.map((desc, index) => (
                        <div key={index} className="mb-2">
                            <p className="font-semibold flex gap-2 items-center "><FaArrowsToDot />{desc.keypoint}</p>
                            <ul>
                                {desc.tasks.map((task, taskIndex) => (
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