import  { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';


const DashBoardEditVideo = () => {
    const [people, setPeople] = useState({});
    const { id } = useParams();
    const { register, handleSubmit, formState: { errors } } = useForm();
    console.log(id);
    useEffect(() => {
        fetch(`http://localhost:5000/api/product/products/${id}`)
            .then(res => res.json())
            .then(data => {
                setPeople(data);

            });
    }, [id]);
    const onSubmit = (data) => {
        fetch(`http://localhost:5000/api/product/products/${id}`, {
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
            <h1 className="font-bold text-3xl my-10">Update Video</h1>
            <div className="w-1/2">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 flex flex-col justify-center items-center">
                    
                    <input type="url" {...register('video')} placeholder="video" className="border border-gray-300 rounded-md px-3 py-2 input input-bordered w-full max-w-x" defaultValue={people?.video} />
                    {errors.video && (
                        <p className="text-red-600">{errors.video?.message}</p>
                    )}
                    <br />
                    
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default DashBoardEditVideo;
