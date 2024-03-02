import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";


const DashBoardVideo = () => {
  const [video, setVideo] = useState([]);
  fetch('https://fab-lab-server-production.up.railway.app/api/videos')
    .then(res => res.json())
    .then(data => {
      setVideo(data);
      console.log(data);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
  
  const navigate = useNavigate();
  const handleedit = (id) => {
    navigate(`/dashboard/editvideo/${id}`)
  }

  const handleDelete = (id) => {
    fetch(`https://fab-lab-server-production.up.railway.app/api/videos/${id}`, {
      method: 'DELETE',
    })
      .then(res => res.json())
      .then(result => {
        console.log(result);
        swal({ title: "Good job!", text: `video is successfully deleted`, icon: "success", button: "DONE", });
      });
  }


  return (
    <div>
      <div className="mx-14 flex justify-center my-10 items-center">
        <Link to='/dashboard/addvideo'><button className="btn btn-sm bg-[#2e3094] hover:bg-[#2e3094] text-white">Add</button></Link>
      </div>
      <div className='flex justify-center'>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10">
          {
            video.map((item, index) => (
              <div key={index} className="card border border-black p-5">
                <iframe key={index} width="400" height="315" src={item.url} title="YouTube video player" allow=" " allowfullscreen></iframe>
                <div className=" flex justify-center w-full mb-5">
                  <div className=" flex gap-5 mt-5">
                    <button onClick={()=>handleedit(item._id)} className="btn btn-sm bg-[#2e3094] hover:bg-[#2e3094] text-white">Edit</button>
                    <button onClick={()=>handleDelete(item._id)} className="btn btn-sm bg-[#2e3094] hover:bg-[#2e3094] text-white">Delete</button>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default DashBoardVideo;