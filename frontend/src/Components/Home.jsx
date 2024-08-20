import React from "react";
import Navbar from './Navbar/Navbar'
import Blogprofileimg from "../assets/Blog Website Design.jpg";
import HTML from "../assets/html.png";
import CSS from "../assets/css-3.png";
import JS from "../assets/js.png";
import DB from "../assets/data-server.png";
import REACT from "../assets/reactjs.png";
import NODE from "../assets/node-js.png";
import project_1 from "../assets/Actodo6.png";
import project_2 from "../assets/Trip1.png";
import project_3 from "../assets/Greenden3.png";
import BlogImage from "../assets/blogImage.png"
import { useNavigate } from 'react-router-dom';
import Footer from "./Footer";

const Home = () => {
  const navigate = useNavigate()
  return (
    <div>
      <div className="flex items-center justify-center">
        <div className="w-full sm:w-1/2 flex-col justify-center">
          <h2 className="text-3xl md:text-6xl font-bold pb-2">
            Hello, It's Me
          </h2>
          <h2 className="text-4xl md:text-7xl font-bold text-orange-400 py-2">
            Nirmal Kumar
          </h2>
          <img
            src={Blogprofileimg}
            alt="Blog profile image"
            className="w-60 block sm:hidden"
          />
          <p className="py-2">
            This is Blogger website here you can write what where you think it
            is the right platform to expose your dream thought
          </p>
          <button className="button-style mt-2">Expose Here</button>
        </div>

        <div className="justify-center hidden sm:block">
          <img
            src={Blogprofileimg}
            alt="Blog profile image"
            className="w-60 md:w-96"
          />
        </div>
      </div>

      <div className="flex justify-evenly py-6">
        <img className="w-12" src={HTML} alt="image" />
        <img className="w-12" src={CSS} alt="image" />
        <img className="w-12" src={JS} alt="image" />
        <img className="w-12" src={DB} alt="image" />
        <img className="w-12" src={REACT} alt="image" />
        <img className="w-12" src={NODE} alt="image" />
      </div>

      <div className="flex flex-col mt-10 items-center justify-around sm:flex-row">
        <div className="flex-col">
          <div className="mt-4 border-[6px] rounded-lg border-purple-500 p-5 border-t-0 w-60 flex-col items-center">
            <div className="rounded-full border-2 p-5 font-bold text-white text-center bg-gradient-to-br from-purple-200 to-purple-600">
              4
            </div>
            <p className="text-center font-medium">Blogs Completed</p>
          </div>
          <div className="mt-4 border-[6px] rounded-lg border-green-500 p-5 border-t-0 w-60 flex-col items-center">
            <div className="rounded-full border-2 p-5 font-bold text-white text-center bg-gradient-to-br from-green-200 to-green-600">
              4
            </div>

            <p className="text-center font-medium">Explore the Experience</p>
          </div>
        </div>

        <div className="ml-4 mt-4 sm:mt-0">
          <h2 className="text-3xl sm:text-7xl font-bold">My Project</h2>
          <h2 className="text-3xl sm:text-7xl font-bold text-orange-400">
            Service
          </h2>
          <p className="my-2">
            I have attached my Portfolio here for your Reference
          </p>
          <button className="button-style mt-2">Portfolio</button>
        </div>
      </div>

      <div>
        <h2 className="text-center text-5xl my-14 font-bold">
          Checkout My <span className="text-orange-400">Live Projects</span>{" "}
          Here
        </h2>
        <div className="flex justify-around my-5 flex-col sm:flex-row">
          <img
            src={project_1}
            alt="project image"
            className="w-64 border rounded-md cursor-pointer"
          />
          <img
            src={project_2}
            alt="project image"
            className="w-64 border rounded-md cursor-pointer"
          />
          <img
            src={project_3}
            alt="project image"
            className="w-64 border rounded-md cursor-pointer"
          />
        </div>
      </div>

      <div className="flex items-center justify-center my-14">
        <div className="justify-center hidden sm:block">
          <img
            src={BlogImage}
            className="w-60 md:w-96 "
            alt="Blog Profile Image"
          />
        </div>
        <div className="w-full sm:w-1/2 flex-col justify-center ml-6">
          <h2 className="text-3xl md:text-6xl font-bold pb-2">
            I like to Write
          </h2>
          <h2 className="text-4xl md:text-7xl font-bold text-orange-400 py-2">
            Blogs About Tech
          </h2>

          <p className="py-2">
            You can know better about me by reading my blogs here. I share my
            expertise here.
          </p>
          <button
            className="button-style mt-2"
            onClick={() => navigate("/blogs")}
          >
            Read My Blogs
          </button>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
