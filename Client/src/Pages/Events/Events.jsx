import RecentEvent from "../../Component/RecentEvent/RecentEvent";
import { RiArrowRightDoubleFill } from "react-icons/ri";

import Location from '../../Component/Location/Location';
import { useParams } from "react-router-dom";

const Events = () => {
  const router = useParams();
  console.log(router.category);
    const Data = {
        title: {
          label: 'Complete Events',
          subLabel: null,
        },
        links: [
          { label: 'Events', icon: RiArrowRightDoubleFill},
          { label: 'Complete Events', icon: RiArrowRightDoubleFill, color: 'text-[#2e3094]' },
        ],
      };
    return (
        <div>
             <Location {...Data} />
            <div className="flex justify-center items-center">
            <RecentEvent/>
            </div>
        </div>
    );
};

export default Events;