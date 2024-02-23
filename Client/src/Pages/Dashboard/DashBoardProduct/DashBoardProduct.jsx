import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BounceLoader } from 'react-spinners';
const DashBoardProduct = () => {

    const [Product, setProduct] = useState([]);
    fetch('http://localhost:5000/api/product/products')
        .then(res => res.json())
        .then(data => {
            setProduct(data);
        });

    const navigate = useNavigate();
    const handleEdit = (id) => {
        navigate(`/dashboard/editproduct/${id}`)

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
    <BounceLoader color="#2e3094" />
    return (
        <div className='mb-10'>
            <div className="mx-14 flex justify-between mb-10 items-center">
                <input className="w-1/2 h-10 rounded-[35px] mt-5 px-5 border border-black" type="text" placeholder="Search" />
                <Link to='/dashboard/addproduct'><button className="btn btn-sm bg-[#2e3094] hover:bg-[#2e3094] text-white">Add</button></Link>
            </div>
            <div className='grid grid-cols-2 my-5 gap-10'>
                {
                    Product.map((item) => (
                        <button key={item.id} className="card w-96 bg-base-100 shadow-xl">
                            <figure><img src={item.image} alt=" " /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{item.name}</h2>
                                <p>{item.description}</p>

                            </div>
                            <div className=" flex justify-center w-full mb-5">
                                <div className=" flex gap-5">
                                    <button onClick={() => handleEdit(item._id)} className="btn btn-sm bg-[#2e3094] hover:bg-[#2e3094] text-white">Edit</button>
                                    <button onClick={() => handleDelete(item._id)} className="btn btn-sm bg-[#2e3094] hover:bg-[#2e3094] text-white">Delete</button>
                                </div>
                            </div>
                        </button>
                    ))
                }
            </div>

        </div>
    );
};

export default DashBoardProduct;