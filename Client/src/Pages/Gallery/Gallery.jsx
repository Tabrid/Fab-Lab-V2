import Location from '../../Component/Location/Location';
import { RiArrowRightDoubleFill } from "react-icons/ri";

const Gallery = () => {
    const Data = {
        title: {
          label: 'Gallery',
          subLabel: null,
        
        },
        links: [
          { label: null, icon: null },
          { label: 'Gallery', icon: RiArrowRightDoubleFill, color: 'text-[#2e3094]' },
        ],
      };

      const video = [
        {
          id: 1,
          link: 'https://www.youtube-nocookie.com/embed/dGCxYXLfoi4?si=Ql6hgg-Gbxu5566q',
        },
        {
          id: 1,
          link: 'https://www.youtube.com/embed/BLVmLNnf8gw?si=eBZtdqSy8DUOgGHu',
        },
      ]
    return (
        <div className='mb-10'>
           <Location {...Data}/>

           <div className='flex justify-center'>
           <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10">
            {
              video.map((item, index) => (
                <iframe key={index} width="560" height="315" src={item.link} title="YouTube video player"  allow=" " allowfullscreen></iframe>
              ))
            }
            </div>
           </div>
        </div>
    );
};

export default Gallery;