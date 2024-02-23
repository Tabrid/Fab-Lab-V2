import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { BounceLoader } from 'react-spinners';

const DashBoardProductEdit = () => {
    const [product, setProduct] = useState({});
    const { id } = useParams();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        fetch(`https://fab-lab-server-production.up.railway.app/api/product/products/${id}`)
            .then(res => res.json())
            .then(data => {
                setProduct(data);
                setLoading(false);
            });
    }, [id]);

    const onSubmit = (data) => {
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
            });
    };

    return (
        <div className='flex flex-col justify-center items-center '>
            <h1 className="font-bold text-3xl my-10">Update Product</h1>
            <div className="w-1/2">
             
                {loading ? (
                    <div className="flex justify-center">
                        <BounceLoader color="#2e3094" />
                    </div>
                ) : (
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 flex flex-col justify-center items-center">
                        <input type="text" {...register('name')} placeholder="Name" className="border border-gray-300 rounded-md px-3 py-2 input input-bordered w-full max-w-x" defaultValue={product?.name} />
                        {errors.name && (
                            <p className="text-red-600">{errors.name?.message}</p>
                        )}
                        <br />
                        <input type="url" {...register('image')} placeholder="image" className="border border-gray-300 rounded-md px-3 py-2 input input-bordered w-full max-w-x" defaultValue={product?.image} />
                        {errors.image && (
                            <p className="text-red-600">{errors.image?.message}</p>
                        )}
                        <br />
                        <textarea type="text" {...register('description')} className="border h-44 border-gray-300 rounded-md px-3 py-2 input input-bordered w-full max-w-x" placeholder="description" defaultValue={product?.description} />
                        {errors.description && (
                            <p className="text-red-600">{errors.description?.message}</p>
                        )}
                        <br />
                        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default DashBoardProductEdit;
