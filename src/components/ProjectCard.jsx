import defaultImg from '../assets/placeholder.jpg';

const ProjectCard = () => {
    return (
        <div className='bg-white w-full md:max-w-60 rounded-sm overflow-hidden shadow-md hover:cursor-pointer hover:shadow-lg'>
            <img className='w-full' src={defaultImg} alt="This is a default image" />
            <div className='p-5 text-start'>
                <h4 className='font-semibold'>My First Project</h4>
                <p className='text-sm text-justify text-gray-600 leading-4'>A one sentence description of the project. so it is short but meaning ful</p>
                <p className='text-gray-500 text-[12px] py-1 font-light'>March 14,2004</p>
            </div>
        </div>
    );
}

export default ProjectCard;