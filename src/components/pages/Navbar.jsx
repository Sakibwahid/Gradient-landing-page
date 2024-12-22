import React from "react";

const Navbar = () => {
  return (
    <div className="navbar text-white px-0 pt-6">
      <div className="navbar-start flex items-end gap-8">
       <div className="text-4xl p-0">
          Gradient
       </div>
       <div>
         <ul className="flex gap-3">
           <li>Solution</li>
           <li>Pricing</li>
           <li>Contact US</li>
         </ul>
       </div>
      </div>
     
      <div className="navbar-end">
         <button className="btn btn-xs sm:btn-sm md:btn-md btn-ghost"> 
            Sign Up
         </button>
         <button className="btn btn-outline  border-gray-200 rounded-full px-6">
            Free Trial
         </button>
      </div>
    </div>
  );
};

export default Navbar;
