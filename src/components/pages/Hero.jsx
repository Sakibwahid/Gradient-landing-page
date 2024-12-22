import React from "react";
import { FaCloudArrowUp, FaCirclePlay } from "react-icons/fa6";
import { RiShieldCheckFill } from "react-icons/ri";
const Hero = () =>{
    return(
        <div>
            <div className="h-screen overflow-hidden">
    <div className="grid grid-cols-3 bg-custom-gradient-3 rounded-t-3xl">
      <div className="col-span-1">
        <h1 className="text-6xl font-semibold text-right py-10">
          CLOUD<br />REALM<br />CORNER
        </h1>
      </div>
      <div className="col-span-2 flex justify-center">
        <img src="src\assets\Banner.png"></img>
      </div>
    </div>
    <div className="grid grid-cols-3">
      <div className="card rounded-none bg-custom-gradient-2 col-span-1 rounded-bl-3xl">
        <div className="card-body ml-8 pr-24 flex gap-6">
          <FaCloudArrowUp className="w-12 h-12" />
          <div className="mb-5">
            <h3 className="card-title text-3xl">
              Prime<br />Hosting
            </h3>
            <p className="text-sm">
              Unleash Cloud power: elevate your hosting experience
            </p>
          </div>
          <div className="flex items-center gap-3">
            <FaCirclePlay color="orange" className="w-12 h-12" />
            <p className="text-2xl">Watch Video</p>
          </div>
        </div>
      </div>
      <div className="card rounded-none col-span-1 bg-prime-hosting-gradient">
        <div className="card-body ml-8 pr-24 flex gap-6">
          <RiShieldCheckFill className="w-12 h-12" />
          <div className="mb-5">
            <h3 className="card-title text-3xl">
              Prime<br />Hosting
            </h3>
            <p className="text-sm">
              Unleash Cloud power: elevate your hosting experience
            </p>
          </div>
          <button className="btn w-fit items-center flex gap-6 bg-[#74ee15] text-black rounded-full">
            <div>Read more</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4v16m8-8H4"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="card bl-3xl col-span-1 bg-custom-gradient">
        <div className="card-body ml-8 pr-24 flex gap-6">
          <div className="avatar-group -space-x-6 rtl:space-x-reverse">
            <div className="avatar">
              <div className="w-12">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
            <div className="avatar">
              <div className="w-12">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
            <div className="avatar">
              <div className="w-12">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
          </div>
          <div className="mb-5">
            <h3 className="card-title text-3xl">
              Prime<br />Hosting
            </h3>
            <p className="text-sm">
              Unleash Cloud power: elevate your hosting experience
            </p>
          </div>
          <button className="btn w-fit flex items-center gap-6 bg-gray-300 text-black rounded-full">
            <div>Read more</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6m0 0v8m0-8h-8"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
        </div>
    )
}
export default Hero;