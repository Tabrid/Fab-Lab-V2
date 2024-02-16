import  { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';

const data = ["Heavy-Machineries", "Electronics", "Power-Tools", "Other-Tools"];

const DashBoardMachineEdit = () => {
    const [people, setPeople] = useState({});
    const { id } = useParams();
    const { register, handleSubmit, formState: { errors } } = useForm();

    useEffect(() => {
        fetch(`http://localhost:5000/api/machine/machineries/${id}`)
            .then(res => res.json())
            .then(data => {
                setPeople(data);

            });
    }, [id]);

    const onSubmit = (data) => {
        fetch(`http://localhost:5000/api/machine/machineries/${id}`, {
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
            <h1 className="font-bold text-3xl my-10">Update Machine</h1>
            <div className="w-1/2">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 flex flex-col justify-center items-center">
                    <input type="text" {...register('name')} placeholder="Name" className="border border-gray-300 rounded-md px-3 py-2 input input-bordered w-full max-w-x" defaultValue={people?.name} />
                    {errors.name && (
                        <p className="text-red-600">{errors.name?.message}</p>
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

export default DashBoardMachineEdit;
