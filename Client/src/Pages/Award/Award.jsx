import { RiArrowRightDoubleFill } from "react-icons/ri";
import Location from "../../Component/Location/Location";

const Award = () => {
  const Data = {
    title: {
      label: 'Awards & Recognition',
      subLabel: null,
    },
    links: [
      { label: null, icon: null },
      { label: 'Awards & Recognition', icon: RiArrowRightDoubleFill, color: 'text-[#2e3094]' },
    ],
  };
  const data = [
    {
      "id": "1`",
      "picture": "https://i.ibb.co/9WyR3kD/image.png",
      "title": "Robo Tech Olympiad-2023",
      "description": "Winner, 1st Runner Up and 4th Runner Up in Robo Tech Olympiad-2023"
    },
    {
      "id": "2`",
      "picture": "https://i.ibb.co/GscnPvP/image.png",
      "title": "BIM-2023",
      "description": "1st Runner Up in Product Design & Idea Competition- Collocated Events of 2nd International Conference of Big Data, IoT and Machine Learning (BIM-2023)"
    },
    {
      "id": "3`",
      "picture": "https://i.ibb.co/Bq8Vz71/image.png",
      "title": "BIM-2023",
      "description": "Champion in Product Design & Idea Competition- Collocated Events of and International Conference of Big Data, IoT and Machine Learning (BIM-2023)"
    },
    {
      "id": "4`",
      "picture": "https://i.ibb.co/CwKFbZz/image.png",
      "title": "IoT Fest - 2023",
      "description": "1st Runner Up and 2nd Runner Up in IoT Fest - 2023"
    }
  ]
  return (
    <div>
      <Location {...Data} />
      <div className="w-full flex justify-center items-center my-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {
            data.map((item, index) => (
              <div key={index} className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={item.picture} alt="image" className="h-[250px] w-full"/></figure>
                <div className="card-body">
                  <h2 className="card-title">{item.title}</h2>
                  <p>{item.description}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Award;