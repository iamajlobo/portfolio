import defaultImg from '../assets/placeholder.jpg';

const ProjectCard = ({project}) => {
    const { img, title, description, date } = project;
    return (
        <div className='bg-white w-full md:max-w-60 rounded-sm overflow-hidden shadow-md hover:cursor-pointer hover:shadow-lg'>
            <img className='h-50 w-full' src={defaultImg} alt="This is a default image" />
            <div className='p-5 text-start'>
                <h4 className='font-semibold'>{title}</h4>
                <p className='text-sm text-justify text-gray-600 leading-4 py-1'>{description}</p>
                <p className='text-gray-500 text-[12px] py-1 font-light'>{date}</p>
            </div>
        </div>
    );
}

export default ProjectCard;