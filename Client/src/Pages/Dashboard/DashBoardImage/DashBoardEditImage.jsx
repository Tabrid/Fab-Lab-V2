import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { BounceLoader } from 'react-spinners';

const DashBoardEditImage = () => {
    const [people, setPeople] = useState({});
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    const { register, handleSubmit, formState: { errors } } = useForm();

    useEffect(() => {
        setLoading(true); 
        fetch(`https://fab-lab-server-production.up.railway.app/api/product/products/${id}`)
            .then(res => res.json())
            .then(data => {
                setPeople(data);
                setLoading(false); 
            });
    }, [id]);

    const onSubmit = (data) => {
        setLoading(true); 
        fetch(`https://fab-lab-server-production.up.railway.app/api/product/products/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                setLoading(false); 
            });
    };

    return (
        <div className='flex flex-col justify-center items-center '>
            <h1 className="font-bold text-3xl my-10">Update Image</h1>
            <div className="w-1/2">
                {loading ? ( 
                    <div className="flex justify-center items-center h-full">
                        <BounceLoader color="#2e3094" />
                    </div>
                ) : (
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 flex flex-col justify-center items-center">
                        <input type="url" {...register('image')} placeholder="image" className="border border-gray-300 rounded-md px-3 py-2 input input-bordered w-full max-w-x" defaultValue={people?.image} />
                        {errors.image && (
                            <p className="text-red-600">{errors.image?.message}</p>
                        )}
                        <br />
                        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default DashBoardEditImage;
