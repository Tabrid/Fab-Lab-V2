
import { FaUser } from 'react-icons/fa';
import Location from '../../Component/Location/Location';
import { RiArrowRightDoubleFill, RiMessage2Fill } from "react-icons/ri";

const News = () => {
  const Data = {
    title: {
      label: 'News',
      subLabel: null,

    },
    links: [
      { label: null, icon: null },
      { label: 'News', icon: RiArrowRightDoubleFill, color: 'text-[#2e3094]' },
    ],
  };
  return (
    <div>
      <Location {...Data} />

      <div className='flex gap-5 p-5'>
        <div className='flex justify-center'>
          <div className=" bg-base-200   flex gap-2">
            <div className='w-1/2'>
              <figure ><img className='h-[300px] ' src="https://www2.kuet.ac.bd/fablab/wp-content/uploads/2018/05/news-730x340.jpg" alt="Album" /></figure>

              <div className='w-1/2 flex items-center justify-center text-white -mt-10'>
                <h1 className='bg-[#2e3094] py-2 px-5'> 10 jun - 2021</h1>
              </div>

            </div>
            <div className=" w-1/2 ml-2">
              <h2 className=" mb-2 font-semibold">A WORKSHOP ON “DIGITAL FABRICATION FACILITIES FOR ADVANCE RESEARCH” WAS.... </h2>
              <p>A workshop on “Digital Fabrication Facilities for Advance Research” was successfully held at FABLAB KUET last day. This workshop was mainly on technical sites and advanced research areas related to CNC Milling Machine & 3D Printer....</p>
              <div className='flex justify-around mt-4'>
                <span className="icon flex items-center gap-2"><FaUser />admin </span>
                <span className="icon flex items-center gap-2"><RiMessage2Fill /> no comment </span>
              </div>
            </div>
          </div>
        </div>
        <div className='flex justify-center'>
          <div className=" bg-base-200   flex gap-2">
            <div className='w-1/2'>
              <figure><img className='h-[300px] w-[400]' src="https://www2.kuet.ac.bd/fablab/wp-content/uploads/2018/05/news-730x340.jpg" alt="Album" /></figure>
              <div className='w-1/2 flex items-center justify-center text-white -mt-10'>
                <h1 className='bg-[#2e3094] py-2 px-5'> 10 jun - 2021</h1>
              </div>
            </div>
            <div className=" w-1/2 ml-2">
              <h2 className=" mb-2 font-semibold">A WORKSHOP ON “DIGITAL FABRICATION FACILITIES FOR ADVANCE RESEARCH” WAS.... </h2>
              <p>A workshop on “Digital Fabrication Facilities for Advance Research” was successfully held at FABLAB KUET last day. This workshop was mainly on technical sites and advanced research areas related to CNC Milling Machine & 3D Printer....</p>
              <div className='flex justify-around mt-4'>
                <span className="icon flex items-center gap-2"><FaUser />admin </span>
                <span className="icon flex items-center gap-2"><RiMessage2Fill /> no comment </span>
              </div>
            </div>
          </div>
        </div>
      </div>





    </div>
  );
};

export default News;