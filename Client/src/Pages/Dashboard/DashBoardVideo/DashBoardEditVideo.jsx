import  { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import swal from 'sweetalert';


const DashBoardEditVideo = () => {
    const [people, setPeople] = useState({});
    const { id } = useParams();
    const { register, handleSubmit, formState: { errors } } = useForm();
    console.log(id);
    useEffect(() => {
        fetch(`https://fab-lab-server-production.up.railway.app/api/videos/${id}`)
            .then(res => res.json())
            .then(data => {
                setPeople(data);
                console.log(data);

            });
    }, [id]);
    const onSubmit = (data) => {
        fetch(`https://fab-lab-server-production.up.railway.app/api/videos/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                swal({ title: "Good job!", text: `video is successfully updated`, icon: "success", button: "DONE", });
            });
    };
    return (
        <div className='flex flex-col justify-center items-center '>
            <h1 className="font-bold text-3xl my-10">Update Video</h1>
            <div className="w-1/2">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 flex flex-col justify-center items-center">
                    
                    <input type="url" {...register('url')} placeholder="video" className="border border-gray-300 rounded-md px-3 py-2 input input-bordered w-full max-w-x" defaultValue={people?.url} />
                    {errors.url && (
                        <p className="text-red-600">{errors.url?.message}</p>
                    )}
                    <br />
                    
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default DashBoardEditVideo;
