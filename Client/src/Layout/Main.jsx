import { Outlet } from "react-router-dom";
import Navbar from "../Component/Navbar/Navbar";
import Footer from "../Component/Footer/Footer";
import Slide from "../Pages/Home/Slide/Slide";


const Main = () => {
    return (
        <div >
            <Navbar></Navbar>
            <Slide/>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;