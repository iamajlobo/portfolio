
const AboutBody = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-5">
            <div className="p-5 md:p-10 w-full border border-blue-400 rounded-sm shadow-md flex flex-col justify-center">
                <h5 className="text-xl font-semibol mb-5 text-blue-600 text-center md:text-start flex items-center gap-2">
                    <svg className="w-8" version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64" enable-background="new 0 0 64 64" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path fill="#2563EB" d="M22,29c-1.657,0-3,1.343-3,3v2c0,1.657,1.343,3,3,3s3-1.343,3-3v-2C25,30.343,23.657,29,22,29z"></path> <path fill="#2563EB" d="M22,23c-6.627,0-12,5.373-12,12c0,3.072,1.165,5.867,3.064,7.989C14.343,41.326,17.014,39,22,39 c-2.762,0-5-2.238-5-5v-2c0-2.762,2.238-5,5-5s5,2.238,5,5v2c0,2.762-2.238,5-5,5c4.986,0,7.657,2.326,8.936,3.989 C32.835,40.867,34,38.072,34,35C34,28.373,28.627,23,22,23z"></path> <path fill="#2563EB" d="M22,41c-4.361,0-6.543,2.08-7.479,3.374C16.572,46.014,19.169,47,22,47s5.428-0.986,7.48-2.626 C28.545,43.082,26.363,41,22,41z"></path> <path fill="#2563EB" d="M60,11h-8V6c0-0.553-0.447-1-1-1h-6c-0.553,0-1,0.447-1,1v5H20V6c0-0.553-0.447-1-1-1h-6 c-0.553,0-1,0.447-1,1v5H4c-2.211,0-4,1.789-4,4v40c0,2.211,1.789,4,4,4h56c2.211,0,4-1.789,4-4V15C64,12.789,62.211,11,60,11z M46,7h4v8h-4V7z M41,25h6c0.553,0,1,0.447,1,1s-0.447,1-1,1h-6c-0.553,0-1-0.447-1-1S40.447,25,41,25z M14,7h4v8h-4V7z M22,49 c-7.731,0-14-6.269-14-14s6.269-14,14-14s14,6.269,14,14S29.731,49,22,49z M55,45H41c-0.553,0-1-0.447-1-1s0.447-1,1-1h14 c0.553,0,1,0.447,1,1S55.553,45,55,45z M40,38c0-0.553,0.447-1,1-1h10c0.553,0,1,0.447,1,1s-0.447,1-1,1H41 C40.447,39,40,38.553,40,38z M55,33H41c-0.553,0-1-0.447-1-1s0.447-1,1-1h14c0.553,0,1,0.447,1,1S55.553,33,55,33z"></path> </g> </g></svg>
                    Who am I?
                </h5>
                <p className="text-sm text-center md:text-start text-gray-800">
                    I am Alexander Jerome S. Lobo, a third-year Computer Science 
                    student at City College of Angeles, passionate about learning 
                    how technology shapes the modern world. I enjoy solving problems 
                    through code and continuously improving my skills in software 
                    development and system design. Outside academics, I love playing 
                    basketball because it keeps me active and disciplined, and I also 
                    spend time playing Mobile Legends as a way to relax and sharpen my 
                    strategic thinking. These interests help me balance my academic 
                    responsibilities with personal enjoyment. As a student, I am committed
                     to growing both technically and personally through hands-on projects 
                     and continuous learning. My goal is to become a competent and innovative 
                     professional who can contribute meaningful solutions to real-world problems 
                     using technology.
                </p>
            </div>
            <div className="flex flex-col gap-5">
                <div className="border border-blue-400 shadow-sm rounded-sm py-5 px-5 md:px-10">
                    <h3 className="flex gap-2 items-center text-blue-600 font-semibold">
                        <svg className="w-10" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fill="#2563EB"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#2563EB" d="M256 89.61L22.486 177.18 256 293.937l111.22-55.61-104.337-31.9A16 16 0 0 1 256 208a16 16 0 0 1-16-16 16 16 0 0 1 16-16l-2.646 8.602 18.537 5.703a16 16 0 0 1 .008.056l27.354 8.365L455 246.645v12.146a16 16 0 0 0-7 13.21 16 16 0 0 0 7.293 13.406C448.01 312.932 448 375.383 448 400c16 10.395 16 10.775 32 0 0-24.614-.008-87.053-7.29-114.584A16 16 0 0 0 480 272a16 16 0 0 0-7-13.227v-25.42L413.676 215.1l75.838-37.92L256 89.61zM119.623 249L106.5 327.74c26.175 3.423 57.486 18.637 86.27 36.627 16.37 10.232 31.703 21.463 44.156 32.36 7.612 6.66 13.977 13.05 19.074 19.337 5.097-6.288 11.462-12.677 19.074-19.337 12.453-10.897 27.785-22.128 44.156-32.36 28.784-17.99 60.095-33.204 86.27-36.627L392.375 249h-6.25L256 314.063 125.873 249h-6.25z"></path></g></svg>
                        Education
                    </h3>
                    <div className="p-2">
                        <p className="text-sm font-semibold">Bachelor of Science in Computer Science</p>
                        <p className="text-sm text-gray-900">City College of Angeles</p>
                        <p className="text-sm text-gray-700">2023-Present</p>
                    </div>
                    <div className="p-2">
                        <p className="text-sm font-semibold">Senior High School</p>
                        <p className="text-sm text-gray-900">Francisco G. Nepomuceno Memorial High School</p>
                        <p className="text-sm text-gray-700">2020-2022</p>
                    </div>
                </div>
                <div className="border border-blue-400 shadow-sm rounded-sm py-5 px-5 md:px-10 h-full flex flex-col justify-center">
                    <h3 className="flex gap-2 items-center text-blue-600 font-semibold">
                        <svg className="w-8" fill="#2563EB" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M4,21a1,1,0,0,0,1,1H19a1,1,0,0,0,1-1V3a1,1,0,0,0-1-1H5A1,1,0,0,0,4,3ZM12,7.5a2,2,0,1,1-2,2A2,2,0,0,1,12,7.5ZM8.211,16.215a4,4,0,0,1,7.578,0A.993.993,0,0,1,14.83,17.5H9.18A1,1,0,0,1,8.211,16.215Z"></path></g></svg>
                        Contact Information
                    </h3>
                    <div className="p-2">
                        <p><span className="text-sm font-semibold">Email:</span> <a href="mailto:aj.lobo.2004@gmail.com">aj.lobo.2004@gmail.com</a></p>
                    </div>
                    <div className="p-2">
                        <p><span className="text-sm font-semibold">Phone:</span> 09070874633</p>
                    </div>
                    <div className="p-2">
                        <p><span className="text-sm font-semibold">Messanger:</span> <a href="https://m.me/aj.lobo.3154">Aj Lobo</a></p>
                    </div>
                </div>    
            </div>
        </div>
    );
}

export default AboutBody;