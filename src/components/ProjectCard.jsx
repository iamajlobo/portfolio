import defaultImg from '../assets/placeholder.jpg';

const ProjectCard = ({ project }) => {
  const { img, title, description, date, link } = project;

  const handleOnclick = (drivePath) => {
    window.open(drivePath,'_blank');
  }

  return (
    <div className="group bg-white w-full md:max-w-60 rounded-sm overflow-hidden shadow-md hover:shadow-lg relative cursor-pointer">
      
      <img
        className="h-50 w-full object-cover"
        src={img || defaultImg}
        alt={title}
      />

      <div className="p-5 text-start">
        <h4 className="font-semibold">{title}</h4>
        <p className="text-sm text-justify text-gray-600 leading-4 py-1">
          {description}
        </p>
        <p className="text-gray-500 text-[12px] py-1 font-light">{date}</p>
      </div>

      {/* Overlay */}
      <div
        onClick={()=>handleOnclick(link)}
        className="
          absolute inset-0
          flex justify-center items-center
          bg-black/10
          opacity-0
          group-hover:opacity-100
          transition-opacity duration-300
        "
      >
        <p className="text-white text-md font-semibold tracking-wider">
          CLICK TO VIEW
        </p>
      </div>

    </div>
  );
};

export default ProjectCard;
