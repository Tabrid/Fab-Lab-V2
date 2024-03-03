import  { useState } from 'react';

const Research = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [authors, setAuthors] = useState([{ name: '', image: '', designation: '' }]);
  const [category, setCategory] = useState('');
  const [deadline, setDeadline] = useState('');
  const [publishedDate, setPublishedDate] = useState('');

  const handleAuthorChange = (index, event) => {
    const { name, value } = event.target;
    const newAuthors = [...authors];
    newAuthors[index][name] = value;
    setAuthors(newAuthors);
  };

  const handleAddAuthor = () => {
    setAuthors([...authors, { name: '', image: '', designation: '' }]);
  };

  const handleRemoveAuthor = (index) => {
    const newAuthors = [...authors];
    newAuthors.splice(index, 1);
    setAuthors(newAuthors);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can handle form submission here
  };

  return (
    <div className="max-w-md mx-auto my-10">
      <h1 className="text-2xl font-bold mb-4">Research Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            type="text"
            id="title"
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            id="description"
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>

        <div className="mb-4">
          <label htmlFor="category" className="block text-sm font-medium text-gray-700">
            Category
          </label>
          <select
            id="category"
            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Select Category</option>
            <option value="ongoing">Ongoing</option>
            <option value="complete">Complete</option>
          </select>
        </div>

        {/* Add authors */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Authors</label>
          {authors.map((author, index) => (
            <div key={index} className="mt-1 grid grid-cols-3 gap-4">
              <input
                type="text"
                placeholder="Name"
                className="col-span-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                value={author.name}
                onChange={(e) => handleAuthorChange(index, e)}
              />
              <input
                type="text"
                placeholder="Image URL"
                className="col-span-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                value={author.image}
                onChange={(e) => handleAuthorChange(index, e)}
              />
              <input
                type="text"
                placeholder="Designation"
                className="col-span-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                value={author.designation}
                onChange={(e) => handleAuthorChange(index, e)}
              />
              {index > 0 && (
                <button
                  type="button"
                  onClick={() => handleRemoveAuthor(index)}
                  className="text-red-500 hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  Remove
                </button>
              )}
            </div>
          ))}
          <button
            type="button"
            onClick={handleAddAuthor}
            className="mt-2 inline-flex items-center px-3 py-1 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Add Author
          </button>
        </div>

        <div className="mb-4">
          <label htmlFor="deadline" className="block text-sm font-medium text-gray-700">
            Deadline
          </label>
          <input
            type="date"
            id="deadline"
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="publishedDate" className="block text-sm font-medium text-gray-700">
            Published Date
          </label>
          <input
            type="date"
            id="publishedDate"
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            value={publishedDate}
            onChange={(e) => setPublishedDate(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="mt-4 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Research;
