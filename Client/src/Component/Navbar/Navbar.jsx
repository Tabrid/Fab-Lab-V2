import { Link } from "react-router-dom";
import { BsImage } from "react-icons/bs";
import { FaBoxOpen, FaPhotoVideo } from "react-icons/fa";
import { FcIdea, FcRules } from "react-icons/fc";
import { FiBox } from "react-icons/fi";
import { FaCaretDown } from "react-icons/fa";
import { FaTrophy } from "react-icons/fa";
const Navbar = () => {

    return (
        <div className="navbar bg-base-100 sticky z-20 top-0  px-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    <Link to='/'><li className="text-base font-semibold hover:bg-base-100"><a>Home</a></li></Link>
                    <Link to='/aboutus'><li className="text-base font-semibold hover:bg-base-100 hover:ml-2"><a>About Us</a></li></Link>
                                <Link to='/fabCharter'><li className="text-base font-semibold hover:bg-base-100 hover:ml-2"><a>FAQ</a></li></Link>
                        <Link to='/contact'><li className="text-base font-semibold hover:bg-base-100 hover:ml-2"><a>Contact</a></li></Link>
                        <Link to='/people/Advisory-Panel'><li className="text-base font-semibold hover:bg-base-100 hover:ml-2"><a>Advisory Panel</a></li></Link>
                                <Link to='/people/Management-Committee'><li className="text-base font-semibold hover:bg-base-100 hover:ml-2"><a>Managory Panel</a></li></Link>
                        <Link to='/people/Student-Team'><li className="text-base font-semibold hover:bg-base-100 hover:ml-2"><a>Team</a></li></Link>
                        <Link to='/membershipFacilities'><li className="text-base font-semibold hover:bg-base-100 hover:ml-2"><a>Membership Facilities</a></li></Link>
                                <Link to='/machineries'><li className="text-base font-semibold hover:bg-base-100 hover:ml-2"><a>Machineries</a></li></Link>
                        <Link to='/our-activities'><li className="text-base font-semibold hover:bg-base-100 hover:ml-2"><a>Our Activites</a></li></Link>
                        <Link to='/project/complete'><li className="text-base font-semibold hover:bg-base-100 hover:ml-2"><a>Complete Project</a></li></Link>
                        <Link to='/project/ongoing'><li className="text-base font-semibold hover:bg-base-100 hover:ml-2"><a>Ongoing Project</a></li></Link>
                        <Link to='/events/complete'><li className="text-base font-semibold hover:bg-base-100 hover:ml-2"><a>Completed Events</a></li></Link>
                                <Link to='/events/upcoming'><li className="text-base font-semibold hover:bg-base-100 hover:ml-2"><a>Upcoming Events</a></li></Link>
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost">
                    <figure ><img className='h-[50px] w-full ' src="https://i.ibb.co/DL5Pzm0/fablab-logo.png" alt="logo" /></figure>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <Link to='/'><li className="text-base font-semibold hover:bg-base-100"><a>Home</a></li></Link>

                    <li className="group relative cursor-pointer  bg-white hover:bg-white">
                        <a
                            className="flex  items-center gap-[2px] text-base font-semibold"
                        >
                            About
                            <span>
                                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                            </span>
                        </a>
                        <div className="absolute mt-10 hover:bg-white hidden w-52 rounded-md h-20  p-2 text-black group-hover:block ">
                            <ul className=" bg-white w-52  -ml-2 hover:bg-white ">
                                

                                <Link to='/aboutus'><li className="text-base font-semibold hover:bg-base-100 hover:ml-2"><a>About Us</a></li></Link>
                                <Link to='/fabCharter'><li className="text-base font-semibold hover:bg-base-100 hover:ml-2"><a>FAQ</a></li></Link>
                                <Link to='/contact'><li className="text-base font-semibold hover:bg-base-100 hover:ml-2"><a>Contact</a></li></Link>
                            </ul>
                        </div>
                    </li>
                    <li className="group relative cursor-pointer  bg-white hover:bg-white">
                        <a
                            className="flex  items-center gap-[2px] text-base font-semibold"
                        >
                            People
                            <span>
                                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                            </span>
                        </a>
                        <div className="absolute mt-10 hover:bg-white  hidden  rounded-md h-20  p-2 text-black group-hover:block ">
                            <ul className=" bg-white w-72  -ml-2">
                                <Link to='/people/Advisory-Panel'><li className="text-base font-semibold hover:bg-base-100 hover:ml-2"><a>Advisory Panel</a></li></Link>
                                <Link to='/people/Management-Committee'><li className="text-base font-semibold hover:bg-base-100 hover:ml-2"><a>Managory Panel</a></li></Link>
                                <Link to='/people/Student-Team'><li className="text-base font-semibold hover:bg-base-100 hover:ml-2"><a>Team</a></li></Link>
                            </ul>
                        </div>
                    </li>
                    <li className="group relative cursor-pointer  bg-white hover:bg-white">
                        <a
                            className="flex  items-center gap-[2px] text-base font-semibold"
                        >
                            Facilities
                            <span>
                                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                            </span>
                        </a>
                        <div className="absolute mt-10 hover:bg-white  hidden w-52 rounded-md h-20  p-2 text-black group-hover:block ">
                            <ul className=" bg-white w-52  -ml-2">
                                <Link to='/membershipFacilities'><li className="text-base font-semibold hover:bg-base-100 hover:ml-2"><a>Membership Facilities</a></li></Link>
                                <Link to='/machineries'><li className="text-base font-semibold hover:bg-base-100 hover:ml-2"><a>Machineries</a></li></Link>
                                <Link to='/our-activities'><li className="text-base font-semibold hover:bg-base-100 hover:ml-2"><a>Our Activites</a></li></Link>
                            </ul>
                        </div>
                    </li>
                    <li className="group relative cursor-pointer  bg-white hover:bg-white">
                        <a
                            className="flex  items-center gap-[2px] text-base font-semibold"
                        >
                            Projects
                            <span>
                                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                            </span>
                        </a>
                        <div className="absolute mt-10 hover:bg-white hidden w-52 rounded-md h-20  p-2 text-black group-hover:block ">
                            <ul className=" bg-white w-52  -ml-2">
                                <Link to='/project/complete'><li className="text-base font-semibold hover:bg-base-100 hover:ml-2"><a>Completed Project</a></li></Link>
                                <Link to='/project/ongoing'><li className="text-base font-semibold hover:bg-base-100 hover:ml-2"><a>Ongoing Project</a></li></Link>
                            </ul>
                        </div>
                    </li>
                    <li className="group relative cursor-pointer  bg-white hover:bg-white">
                        <a
                            className="flex  items-center gap-[2px] text-base font-semibold"
                        >
                            Research
                            <span>
                                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                            </span>
                        </a>
                        <div className="absolute mt-10 hover:bg-white  hidden  rounded-md h-20  p-2 text-black group-hover:block ">
                            <ul className=" bg-white w-72  -ml-2">
                                <Link to='/research/published'><li className="text-base font-semibold hover:bg-base-100 hover:ml-2"><a>Published Research Paper</a></li></Link>
                                <Link to='/research/ongoing'><li className="text-base font-semibold hover:bg-base-100 hover:ml-2"><a>Ongoing Research Paper</a></li></Link>
                            </ul>
                        </div>
                    </li>
                    <li className="group relative cursor-pointer  bg-white hover:bg-white">
                        <a
                            className="flex  items-center gap-[2px] text-base font-semibold"
                        >
                            Events
                            <span>
                                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                            </span>
                        </a>
                        <div className="absolute mt-10 hover:bg-white hidden w-52 rounded-md h-20  p-2 text-black group-hover:block ">
                            <ul className=" bg-white w-52  -ml-2">
                                <Link to='/events/complete'><li className="text-base font-semibold hover:bg-base-100 hover:ml-2"><a>Completed Events</a></li></Link>
                                <Link to='/events/upcoming'><li className="text-base font-semibold hover:bg-base-100 hover:ml-2"><a>Upcoming Events</a></li></Link>
                            </ul>
                        </div>
                    </li>

                </ul>
            </div>
            <div className="navbar-end">
                <div className="flex gap-28">
                    <Link to='/membership'><button className=" bg-[#2e3094] py-3 px-4 text-white rounded-xl sm:hidden">MEMBERSHIP</button></Link>
                    <div className=" dropdown dropdown-bottom  dropdown-end sm:ml-5">
                        <button tabIndex={0}>
                            <img className='h-[40px] w-[40px] ' src="https://i.ibb.co/QM8qsK3/menu.png" alt="logo" />
                        </button>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu   rounded-box ">
                            <div>
                                <div className="card bg-base-100  w-80">
                                    <div className="card-body grid grid-cols-2 gap-10">
                                        <Link to='/award'>
                                            <div className="btn -ml-6 bg-white border-0 hover:bg-white">
                                                <FaTrophy />
                                                <h2 className="font-bold text-lg">Awards &<br /> Recognition</h2>
                                            </div></Link>
                                        <Link to='/image'>
                                            <div className="btn bg-white border-0 hover:bg-white">
                                                <BsImage />
                                                <h2 className="font-bold text-lg">image</h2>
                                            </div>
                                        </Link>

                                        <Link to='/order'>
                                            <div className="btn  bg-white border-0 hover:bg-white">
                                                <FaBoxOpen />
                                                <h2 className="font-bold text-lg">Make Order</h2>
                                            </div>
                                        </Link>
                                        <Link to='/idea'>
                                            <div className="btn bg-white border-0 hover:bg-white">
                                                <FcIdea />
                                                <h2 className="font-bold text-lg">Give Idea</h2>
                                            </div>
                                        </Link>
                                        <Link to='/rules'>
                                            <div className="btn bg-white border-0 hover:bg-white">
                                                <FcRules />
                                                <h2 className="font-bold text-lg">Lab Rules</h2>
                                            </div>
                                        </Link>
                                        <Link to='/gallery'>
                                            <div className="btn mt-5 bg-white border-0 hover:bg-white">
                                                <FaPhotoVideo />
                                                <h2 className="font-bold text-lg">Video</h2>
                                            </div>
                                        </Link>
                                        <Link to='/product'>
                                            <div className="btn mt-5 bg-white border-0 hover:bg-white">
                                                <FiBox />
                                                <h2 className="font-bold text-lg">Our Product</h2>
                                            </div></Link>

                                        <Link className="w-10">

                                        </Link>
                                    </div>
                                </div>
                            </div>

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;