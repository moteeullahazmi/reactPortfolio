import image from "../image/image.png";

function Hero() {
  return (
  
      <div id="home"
        className="px-16 flex min-h-screen w-full items-center justify-center py-28 md:px-32"
      >
        <div className="flex flex-col items-center justify-center gap-10 text-white">
          <div>
          <img
            src={image}
            alt="image"
            className="w-[300px] cursor-pointer rounded-full shadow-xl shadow-indigo-900 transition-all duration-300 hover:-translate-y-5 hover:scal-105 hover:shadow-2xl hover:shadow-indigo-600 md:w-[350px]"
          />
        </div>
        <div className="flex max-w-[600px] flex-col items-center justify-center gap-3 text-center">
          <h1 className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent  text-5xl font-light md:text-7xl">
            Moteeullah Azmi
          </h1>
          <h3 className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent  text-2xl font-light md:text-3xl">
            Full Stack Developer
          </h3>
          <p>
          I'm a Full Stack Developer specializing in the MERN stack and Tailwind CSS, dedicated to building scalable applications and dynamic user experiences. Let's build something great together!


          </p>
        </div>
        </div>
      </div>
 
  );
}

export default Hero;
