import { Link, useNavigate } from "react-router-dom";

const DashBoardImage = () => {
    const data = [
        {
            id: 1,
            img: "https://i.ibb.co/zxxnfb2/image.png"
        },
        {
            id: 2,
            img: "https://i.ibb.co/WKSSDhz/image.png"
        },
        {
            id: 3,
            img: "https://i.ibb.co/Rg4Wb5v/image.png"
        },
        {
            id: 4,
            img: "https://i.ibb.co/x8vX5cF/image.png"
        },
    ]
    const navigate = useNavigate();
    const handleEdit = (id) => {
        navigate(`/dashboard/editimage/${id}`)

    }
    const handleDelete = (id) => {
        fetch(`http://localhost:5000/api/person/delete/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            });
    }
    return (
        <div>
            <div className="mx-14 flex justify-center my-10 items-center">
                <Link to='/dashboard/addimage'><button className="btn btn-sm bg-[#2e3094] hover:bg-[#2e3094] text-white">Add</button></Link>
            </div>
            <div className='flex justify-center'>


                <div className="foo grid grid-cols-3 gap-5 my-5">
                    {data.map((item, index) => (

                        <div key={index} className="card border border-black p-5">
                            <img key={index} src={item.img} alt="" />
                            <div className=" flex justify-center w-full mb-5">
                                <div className=" flex gap-5 mt-5">
                                    <button onClick={() => handleEdit(item._id)} className="btn btn-sm bg-[#2e3094] hover:bg-[#2e3094] text-white">Edit</button>
                                    <button onClick={() => handleDelete(item._id)} className="btn btn-sm bg-[#2e3094] hover:bg-[#2e3094] text-white">Delete</button>
                                </div>
                            </div>
                        </div>

                    ))}
                </div>

            </div>
        </div>
    );
};

export default DashBoardImage;