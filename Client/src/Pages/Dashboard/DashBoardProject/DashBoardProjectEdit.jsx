import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { BounceLoader } from 'react-spinners';

const data = ["complete", "ongoing"];

const DashBoardProjectEdit = () => {
    const [project, setProject] = useState({});
    const { id } = useParams();
    const { register, handleSubmit, formState: { errors } } = useForm();

    useEffect(() => {
        fetch(`http://localhost:5000/api/project/projects/${id}`)
            .then(res => res.json())
            .then(data => {
                setProject(data);
            })
            .catch(error => {
                console.error('Error fetching project:', error);
            });
    }, [id]);

    const onSubmit = (formData) => {
        fetch(`http://localhost:5000/api/project/projects/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(result => {
            console.log('Project updated successfully:', result);
        })
        .catch(error => {
            console.error('Error updating project:', error);
        });
    };
<BounceLoader color="#2e3094" />
    return (
        <div className='flex flex-col justify-center items-center'>
            <h1 className="font-bold text-3xl my-10">Update Project</h1>
            <div className="w-1/2">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 flex flex-col justify-center items-center">
                    <input type="text" {...register('name')} placeholder="Name" className="border border-gray-300 rounded-md px-3 py-2 input input-bordered w-full max-w-x" defaultValue={project?.name || ''} />
                    {errors.name && (
                        <p className="text-red-600">{errors.name.message}</p>
                    )}
                    <br />
                    <input type="url" {...register('image')} placeholder="Image URL" className="border border-gray-300 rounded-md px-3 py-2 input input-bordered w-full max-w-x" defaultValue={project?.image || ''} />
                    {errors.image && (
                        <p className="text-red-600">{errors.image.message}</p>
                    )}
                    <br />
                    <select {...register('category')} className="border border-gray-300 rounded-md px-3 py-2 input input-bordered w-full max-w-x" defaultValue={project?.category || ''}>
                        <option value="">Select Category</option>
                        {data.map((category, index) => (
                            <option key={index} value={category}>{category}</option>
                        ))}
                    </select>
                    {errors.category && (
                        <p className="text-red-600">{errors.category.message}</p>
                    )}
                    <br />
                    <textarea {...register('description')} className="border h-44 border-gray-300 rounded-md px-3 py-2 input input-bordered w-full max-w-x" placeholder="Description" defaultValue={project?.description || ''} />
                    {errors.description && (
                        <p className="text-red-600">{errors.description.message}</p>
                    )}
                    <br />
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default DashBoardProjectEdit;
