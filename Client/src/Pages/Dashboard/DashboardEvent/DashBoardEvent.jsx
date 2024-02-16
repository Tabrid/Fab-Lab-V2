import { useState } from "react";

const DashBoardEvent = () => {
    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const [organizedBy, setOrganizedBy] = useState('');
    const [venue, setVenue] = useState('');
    const [descriptions, setDescriptions] = useState([{ keypoint: '', tasks: [''] }]);
    const [category, setCategory] = useState('upcoming'); // Initialize category state

    const handleDescriptionChange = (index, key, value) => {
        const updatedDescriptions = [...descriptions];
        updatedDescriptions[index][key] = value;
        setDescriptions(updatedDescriptions);
    };

    const handleTaskChange = (descIndex, taskIndex, value) => {
        const updatedDescriptions = [...descriptions];
        updatedDescriptions[descIndex].tasks[taskIndex] = value;
        setDescriptions(updatedDescriptions);
    };

    const addDescription = () => {
        setDescriptions([...descriptions, { keypoint: '', tasks: [''] }]);
    };

    const addTask = (descIndex) => {
        const updatedDescriptions = [...descriptions];
        updatedDescriptions[descIndex].tasks.push('');
        setDescriptions(updatedDescriptions);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log({ title, image, organizedBy, venue, descriptions, category }); 
      
            fetch('http://localhost:5000/api/event/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ title, image, organizedBy, venue, descriptions, category }),
            })
            .then((response) => response.json())
            .then((data) => console.log(data))
        
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-4 p-4 border border-gray-300 rounded-lg">
            <div className="mb-4">
                <label className="block mb-1">Title:</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full p-2 border border-gray-300 rounded-md" />
            </div>
            <div className="mb-4">
                <label className="block mb-1">Image:</label>
                <input type="text" value={image} onChange={(e) => setImage(e.target.value)} className="w-full p-2 border border-gray-300 rounded-md" />
            </div>
            <div className="mb-4">
                <label className="block mb-1">Organized by:</label>
                <input type="text" value={organizedBy} onChange={(e) => setOrganizedBy(e.target.value)} className="w-full p-2 border border-gray-300 rounded-md" />
            </div>
            <div className="mb-4">
                <label className="block mb-1">Venue:</label>
                <input type="text" value={venue} onChange={(e) => setVenue(e.target.value)} className="w-full p-2 border border-gray-300 rounded-md" />
            </div>
            <div className="mb-4">
                <label className="block mb-1">Category:</label>
                <select value={category} onChange={(e) => setCategory(e.target.value)} className="w-full p-2 border border-gray-300 rounded-md">
                    <option value="upcoming">Upcoming</option>
                    <option value="complete">Complete</option>
                </select>
            </div>
            <div className="mb-4">
                <button type="button" onClick={addDescription} className="bg-blue-500 text-white px-4 py-2 rounded-md">Add Description</button>
            </div>
            {descriptions.map((desc, descIndex) => (
                <div key={descIndex} className="mb-4">
                    <label className="block mb-1">Description {descIndex + 1}</label>
                    <input
                        type="text"
                        value={desc.keypoint}
                        onChange={(e) => handleDescriptionChange(descIndex, 'keypoint', e.target.value)}
                        placeholder="Key Point"
                        className="w-full p-2 border border-gray-300 rounded-md mb-2"
                    />
                    {desc.tasks.map((task, taskIndex) => (
                        <input
                            key={taskIndex}
                            type="text"
                            value={task}
                            onChange={(e) => handleTaskChange(descIndex, taskIndex, e.target.value)}
                            placeholder={`Task ${taskIndex + 1}`}
                            className="w-full p-2 border border-gray-300 rounded-md mb-2"
                        />
                    ))}
                    <button type="button" onClick={() => addTask(descIndex)} className="bg-blue-500 text-white px-4 py-2 rounded-md">Add Task</button>
                </div>
            ))}
            <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-md">Submit</button>
        </form>
    );
};

export default DashBoardEvent;