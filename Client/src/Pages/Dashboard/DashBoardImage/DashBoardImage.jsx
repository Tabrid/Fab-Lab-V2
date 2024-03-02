import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BounceLoader } from "react-spinners";
import swal from "sweetalert";

const DashBoardImage = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true); 
    const navigate = useNavigate();

    useEffect(() => {
        setLoading(true); 
        fetch("https://fab-lab-server-production.up.railway.app/api/images")
            .then((res) => res.json())
            .then((data) => {
                setData(data);
                setLoading(false); 
                console.log(data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
                setLoading(false); 
            });
    }, []);

    const handleEdit = (id) => {
        navigate(`/dashboard/editimage/${id}`);
    };

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/api/images/${id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((result) => {
                swal("Image Deleted Successfully!")
            });
    };

    return (
        <div>
            <div className="mx-14 flex justify-center my-10 items-center">
                <Link to="/dashboard/addimage">
                    <button className="btn btn-sm bg-[#2e3094] hover:bg-[#2e3094] text-white">Add</button>
                </Link>
            </div>
            <div className="flex justify-center">
                <div className="foo grid grid-cols-3 gap-5 my-5">
                    {loading ? ( 
                        <div className="flex justify-center items-center w-full h-full">
                            <BounceLoader color="#2e3094" />
                        </div>
                    ) : (
                        data?.map((item) => (
                            <div key={item._id} className="card border border-black p-5">
                                <img src={item.image} alt="" />
                                <div className="flex justify-center w-full mb-5">
                                    <div className="flex gap-5 mt-5">
                                        <button onClick={() => handleEdit(item._id)} className="btn btn-sm bg-[#2e3094] hover:bg-[#2e3094] text-white">Edit</button>
                                        <button onClick={() => handleDelete(item._id)} className="btn btn-sm bg-[#2e3094] hover:bg-[#2e3094] text-white">Delete</button>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default DashBoardImage;
