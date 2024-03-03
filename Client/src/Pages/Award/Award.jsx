import { RiArrowRightDoubleFill } from "react-icons/ri";
import Location from "../../Component/Location/Location";

const Award = () => {
    const Data = {
        title: {
          label: 'Awards & Recognition',
          subLabel: null,
        },
        links: [
          { label: null , icon: null },
          { label: 'Awards & Recognition', icon: RiArrowRightDoubleFill, color: 'text-[#2e3094]' },
        ],
      };
    return (
        <div>
             <Location {...Data} />
            <div>
                
            </div>
        </div>
    );
};

export default Award;