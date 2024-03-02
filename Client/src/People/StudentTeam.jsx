const studentTeamData = [
  {
    id: 1,
        name: "Dipro Paul",
    img:"https://i.ibb.co/sgdrY3K/FB-IMG-1701979421983.jpg",
    varsityId: 221-15-5666,
    title: "Web Developer",
    department: "Computer Science & Engineering",
    description: "Description of Team A",
  },
  {
    id: 2,
      name: "Md Riyad Ali Mollick",
      varsityId: 221-15-5096,
      title: "Web Developer",
      img:"https://i.ibb.co/sgdrY3K/FB-IMG-1701979421983.jpg",
      department: "Computer Science & Engineering",
    description: "Description of Team B",
  },
];

const StudentTeam = () => {
  return (
    <div>
      {studentTeamData.map((team) => (
        <div className="card card-side bg-base-100 shadow-xl" key={team.id}>
          <figure>
            <img src={team.img} alt="Movie" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{team.title}</h2>
            <p>{team.description}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Watch</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StudentTeam;
