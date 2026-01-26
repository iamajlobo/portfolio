import profile from '../assets/loboaj.png';

const Hero = () => {
  return (
    <section className="max-w-6xl mx-auto flex flex-col md:flex-row py-10 md:py-15 px-5 md:px-20 justify-center items-center gap-3">
      
      <div className="w-full md:w-[60%] leading-5 order-2 md:order-1">
        <h3 className="text-md md:text-2xl text-blue-600 font-semibold">
          Hello, I'm
        </h3>

        <h1 className="text-3xl md:text-4xl lg:text-6xl font-semibold leading-8 md:leading-10 lg:leading-15 mb-1 md:mb-3">
          Alexander Jerome Sagun Lobo
        </h1>

        <p className="text-[14px] md:text-base">
          Computer Science Student at City College of Angeles
        </p>

        <div className="mt-3 mb-10 md:mb-0 flex gap-2">
          <a
            className="text-center w-20 md:w-25 lg:w-30 py-2 px-3 text-sm md:text-md md:py-2 md:px-2 font-semibold text-white bg-blue-600 border-2
                     border-blue-600 rounded hover:bg-white hover:text-blue-600 transition ease-in-out duration-500"
            href="https://github.com/iamajlobo"
            target="_blank"
          >
            Github
          </a>

          <a
            className="text-center w-20 md:w-25 lg:w-30 py-2 px-3 text-sm md:text-md md:py-2 md:px-5 text-blue-600 border-2 border-blue-600 rounded 
                    hover:bg-blue-600 hover:text-white transition ease-in-out duration-400"
            href="https://www.linkedin.com/in/aj-lobo-9a16773a8/"
            target="_blank"
          >
            LinkedIn
          </a>
        </div>
      </div>

      <div className="w-full md:w-[40%] md:pl-3 order-1 md:order-2 mb-3 md:mb-0">
        <img
          className="rounded-[30px] w-full md:w-100"
          src={profile}
          alt="My Profile"
        />
      </div>

    </section>
  );
};

export default Hero;
