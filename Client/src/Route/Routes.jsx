import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Contact from "../Pages/Contact/Contact";
import FabCharter from "../Pages/FabCharter/FabCharter";
import People from "../Pages/People/People";
import MembershipFacilities from "../Pages/MembershipFacilities/MembershipFacilities";

import News from "../Pages/News/News";
import Membership from "../Pages/Membership/Membership";
import Tools from "../Pages/Tools/Tools";
import Materials from "../Pages/Materials/Materials";
import Gallery from "../Pages/Gallery/Gallery";
import Idea from "../Pages/Idea/Idea";
import Rules from "../Pages/Rules/Rules";
import LabFacilities from "../Pages/LabFacilities/LabFacilities";
import Electronics from "../Pages/Tools/Electronics";
import HeavyMachineries from "../Pages/Tools/HeavyMachineries";
import PowerTools from "../Pages/Tools/PowerTools";
import OtherTools from "../Pages/Tools/OtherTools";
import Product from "../Pages/Product/Product";
import Project from "../Pages/Project/Project";
import ComingSoon from "../Pages/ComingSoon/ComingSoon";
import Events from "../Pages/Events/Events";
import Image from "../Pages/Image/Image";
import DashBoard from "../Layout/DashBoard";
import DashBoardPeople from "../Pages/Dashboard/DashBoardPeople/DashBoardPeople";
import Login from "../Pages/Login/Login";
import DashBoardAddPeople from "../Pages/Dashboard/DashBoardPeople/DashBoardAddPeople";
import DashBoardEditPeople from "../Pages/Dashboard/DashBoardPeople/DashBoardEditPeople";
import DashBoardMachine from "../Pages/Dashboard/DashBoardMachine/DashBoardMachine";
import DashBoardProject from "../Pages/Dashboard/DashBoardProject/DashBoardProject";
import DashBoardProduct from "../Pages/Dashboard/DashBoardProduct/DashBoardProduct";
import SingleEvent from "../Pages/Events/SingleEvent";
import SingleNews from "../Pages/News/SingleNews";
import DashBoardImage from "../Pages/Dashboard/DashBoardImage/DashBoardImage";
import DashBoardEvent from "../Pages/Dashboard/DashboardEvent/DashBoardEvent";
import DashBoardVideo from "../Pages/Dashboard/DashBoardVideo/DashBoardVideo";
import DashBoardOrder from "../Pages/Dashboard/DashBoardOrder/DashBoardOrder";
import DashBoardIdea from "../Pages/Dashboard/DashBoardIdea/DashBoardIdea";
import DashBoardMember from "../Pages/Dashboard/DashBoardMember/DashBoardMember";
import DashBoardAddMachine from "../Pages/Dashboard/DashBoardMachine/DashBoardAddMachine";
import DashBoardAddProject from "../Pages/Dashboard/DashBoardProject/DashBoardAddProject";
import DashBoardAddProduct from "../Pages/Dashboard/DashBoardProduct/DashBoardAddProduct";
import DashBoardMachineEdit from "../Pages/Dashboard/DashBoardMachine/DashBoardMachineEdit";
import DashBoardProjectEdit from "../Pages/Dashboard/DashBoardProject/DashBoardProjectEdit";
import DashBoardProductEdit from "../Pages/Dashboard/DashBoardProduct/DashBoardProductEdit";
import DashBoardAddVideo from "../Pages/Dashboard/DashBoardVideo/DashBoardAddVideo";
import DashBoardAddImage from "../Pages/Dashboard/DashBoardImage/DashBoardAddImage";
import DashBoardEditImage from "../Pages/Dashboard/DashBoardImage/DashBoardEditImage";
import DashBoardEditVideo from "../Pages/Dashboard/DashBoardVideo/DashBoardEditVideo";
import PrivateRoute from "./PrivateRoutes";
import SignUp from "../Pages/SignUp/SignUp";

 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/contact",
          element: <Contact></Contact>,
        },
        {
          path: "/fabCharter",
          element: <FabCharter></FabCharter>,
        },
        {
          path: "/people",
          element: <People></People>,
        },
        {
          path: "/membershipFacilities",
          element: <MembershipFacilities></MembershipFacilities>,
        },
        {
          path: "/product",
          element: <Product></Product>,
        },
        {
          path: "/news",
          element: <News></News>,
        },
        {
          path: "/membership",
          element: <Membership></Membership>,
        },
        {
          path: "/order",
          element: <Materials></Materials>,
        },
        {
          path: "/gallery",
          element: <Gallery></Gallery>,
        },
        {
          path: "/idea",
          element: <Idea></Idea>,
        },
        {
          path: "/rules",
          element: <Rules></Rules>,
        },
        {
          path: "/labFacilities",
          element: <LabFacilities></LabFacilities>,
        },
        {
          path: "/project",
          element: <Project></Project>,
        },
        {
          path: "/comingSoon",
          element: <ComingSoon ></ComingSoon>,
        },
        {
          path: "/events/:category",
          element: <Events ></Events>,
        },
        {
          path: "/image",
          element: <Image></Image>,
        },
        {
          path: "/login",
          element:<Login></Login>,
        },
        {
          path: "/event/:id",
          element:<SingleEvent></SingleEvent> ,
        },
        {
          path: "/news/:id",
          element: <SingleNews></SingleNews>,
        },
        {
          path: "/signup",
          element: <SignUp/> ,
        }

      ],
    },
    {
      path: "/machineries",
      element: <Tools></Tools>,
      children: [
        {
          path: "/machineries",
          element:<HeavyMachineries></HeavyMachineries>,
        },
        {
          path: "/machineries/electronics",
          element:<Electronics></Electronics>,
        },
        {
          path: "/machineries/powerTools",
          element: <PowerTools></PowerTools>,
        },
        {
          path: "/machineries/otherTools",
          element: <OtherTools></OtherTools>,
        },
      ],
      
    },
    {
      path: "/dashboard",
      element: <PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
      children: [
        {
          path: "/dashboard",
          element: <h1 className=" text-center text-3xl font-bold mt-20">Welcome To Dashboard</h1>,
        },
        {
          path: "/dashboard/people",
          element:<DashBoardPeople></DashBoardPeople>,
        },
        {
          path: "/dashboard/addpeople",
          element:<DashBoardAddPeople></DashBoardAddPeople>,
        },
        {
          path: "/dashboard/editpeople/:id",
          element:<DashBoardEditPeople></DashBoardEditPeople>,
        },
        {
          path: "/dashboard/machine",
          element:<DashBoardMachine></DashBoardMachine>,
        },
        {
          path: "/dashboard/project",
          element:<DashBoardProject></DashBoardProject>,
        },
        {
          path: "/dashboard/product",
          element:<DashBoardProduct></DashBoardProduct>,
        },
        {
          path: "/dashboard/image",
          element:<DashBoardImage></DashBoardImage>,
        },
        {
          path: "/dashboard/event",
          element:<DashBoardEvent></DashBoardEvent>,
        },
        {
          path: "/dashboard/video",
          element:<DashBoardVideo></DashBoardVideo>,
        },
        {
          path: "/dashboard/order",
          element:<DashBoardOrder></DashBoardOrder>,
        },
        {
          path: "/dashboard/idea",
          element:<DashBoardIdea></DashBoardIdea>,
        },
        {
          path: "/dashboard/member",
          element:<DashBoardMember></DashBoardMember>,
        },
        {
          path: "/dashboard/addmachine",
          element:<DashBoardAddMachine></DashBoardAddMachine>,
        },
        {
          path: "/dashboard/addproject",
          element:<DashBoardAddProject></DashBoardAddProject>,
        },
        {
          path: "/dashboard/addproduct",
          element:<DashBoardAddProduct></DashBoardAddProduct>,
        },
        {
          path: "/dashboard/editmachine/:id",
          element:<DashBoardMachineEdit></DashBoardMachineEdit>,
        },
        {
          path: "/dashboard/editproject/:id",
          element:<DashBoardProjectEdit></DashBoardProjectEdit>,
        },
        {
          path: "/dashboard/editproduct/:id",
          element:<DashBoardProductEdit></DashBoardProductEdit>,
        },
        {
          path: "/dashboard/addvideo",
          element:<DashBoardAddVideo></DashBoardAddVideo>,
        },
        {
          path: "/dashboard/addimage",
          element:<DashBoardAddImage></DashBoardAddImage>,
        },
        {
          path: "/dashboard/editimage/:id",
          element:<DashBoardEditImage></DashBoardEditImage>,
        },
        {
          path: "/dashboard/editvideo/:id",
          element:<DashBoardEditVideo></DashBoardEditVideo>,
        },
      ],
    } 
  ]);
  