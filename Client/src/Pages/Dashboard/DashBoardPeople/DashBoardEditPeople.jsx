import  { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';

const data = ["Management-Committee", "Student-Team", "Researchers", "Advisory-Panel", "General-Members"];

const DashBoardEditPeople = () => {
    const [people, setPeople] = useState({});
    const { id } = useParams();
    const { register, handleSubmit, formState: { errors } } = useForm();

    useEffect(() => {
        fetch(`https://fab-lab-server-production.up.railway.app/api/person/get/${id}`)
            .then(res => res.json())
            .then(data => {
                setPeople(data.data);

            });
    }, [id]);

    const onSubmit = (data) => {
        fetch(`https://fab-lab-server-production.up.railway.app/api/person/update/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            });
    };

    return (
        <div className='flex flex-col justify-center items-center '>
            <h1 className="font-bold text-3xl my-10">Update People</h1>
            <div className="w-1/2">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 flex flex-col justify-center items-center">
                    <input type="text" {...register('name')} placeholder="Name" className="border border-gray-300 rounded-md px-3 py-2 input input-bordered w-full max-w-x" defaultValue={people?.name} />
                    {errors.name && (
                        <p className="text-red-600">{errors.name?.message}</p>
                    )}
                    <br />
                    <input type="text" {...register('department')} placeholder="Department" className="border border-gray-300 rounded-md px-3 py-2 input input-bordered w-full max-w-x" defaultValue={people?.department} />
                    {errors.department && (
                        <p className="text-red-600">{errors.department?.message}</p>
                    )}
                    <br />
                    <input type="text" {...register('role')} placeholder="Role" className="border border-gray-300 rounded-md px-3 py-2 input input-bordered w-full max-w-x"
                        defaultValue={people?.role} />
                    {errors.role && (
                        <p className="text-red-600">{errors.role?.message}</p>
                    )}
                    <br />
                    <input type="text" {...register('designation')} placeholder="Designation" className="border border-gray-300 rounded-md px-3 py-2 input input-bordered w-full max-w-x" defaultValue={people?.designation} />
                    {errors.designation && (
                        <p className="text-red-600">{errors.designation?.message}</p>
                    )}
                    <br />
                    <select {...register('category')} className="border border-gray-300 rounded-md px-3 py-2 input input-bordered w-full max-w-x" defaultValue={people?.category}>
                        <option value="">Select Category</option>
                        {data.map((category, index) => (
                            <option key={index} value={category}>{category}</option>
                        ))}
                    </select>
                    {errors.category && (
                        <p className="text-red-600">{errors.category?.message}</p>
                    )}
                    <br />
                    <input type="text" {...register('image')} className="border border-gray-300 rounded-md px-3 py-2 input input-bordered w-full max-w-x" placeholder="Enter your picture" defaultValue={people?.image} />
                    {errors.image && (
                        <p className="text-red-600">{errors.image?.message}</p>
                    )}
                    <br />
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default DashBoardEditPeople;
