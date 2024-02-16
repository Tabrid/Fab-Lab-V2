
import { Link, Outlet } from 'react-router-dom';
import Location from '../../Component/Location/Location';
import { RiArrowRightDoubleFill } from "react-icons/ri";
import Navbar from '../../Component/Navbar/Navbar';
import Footer from '../../Component/Footer/Footer';


const Tools = () => {
    const Data = {
        title: {
          label: 'Machineries',
          subLabel: null,
        
        },
        links: [
          { label: null, icon: null },
          { label: 'Machineries', icon: RiArrowRightDoubleFill, color: 'text-[#2e3094]' },
        ],
      };
    return (
        <div>
          <Navbar></Navbar>
            <Location {...Data}/>
            <div className='flex-row flex justify-center items-center gap-10'>
              <Link to='/machineries'><button className=" btn px-4 py-2 rounded-md border-blue-800">Heavy Machineries</button>
              </Link>
              <Link to='/machineries/electronics'><button className=" btn px-4 py-2 rounded-md border-blue-800">Electronics</button></Link>
              <Link to='/machineries/powerTools'><button className=" btn px-4 py-2 rounded-md border-blue-800">Power Tools</button></Link>
              <Link to='/machineries/otherTools'><button className=" btn px-4 py-2 rounded-md border-blue-800">Other Tools</button></Link>
            </div>
            <Outlet></Outlet>
            <Footer />
        </div>
    );
};

export default Tools;