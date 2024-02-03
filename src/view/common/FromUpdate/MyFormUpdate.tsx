 import { Link } from "react-router-dom";

import React, { useState } from 'react';

const MyFormUpdate: React.FC = () => {

  return (
    <form> 
       <div className="shadow-lg flex flex-wrap justify-end gap-2 w-[100%] p-4">
             <div className="flex flex-wrap justify-between w-[100%] font-light p-3">
                 <h1 className="font-bold">ID : <span>C001</span></h1>

             </div>
             
             <div className="w-[100%] p-3 flex flex-wrap justify-start flex-row gap-3">
                 <input
                  type="text"
                  name="email"
                  placeholder="First Name" className="bg-slate-100  p-1 pl-3 rounded-[6px] w-[49%] h-[40px]"></input>
                  
                  <input
                  type="text"
                  name="middle_name"
                  placeholder="Middle Name" className="bg-slate-100  p-1 pl-3 rounded-[6px] w-[49%] h-[40px]"></input>

                  <input
                  type="text"
                  name="email"
                  placeholder="Last Name" className="bg-slate-100  p-1 pl-3 rounded-[6px] w-[49%] h-[40px]"></input>
             </div>

             <div className="w-[100%] p-3 flex flex-wrap justify-start flex-row gap-3">
                 
                  <input
                  type="text"
                  name="nickname"
                  placeholder="Nick Name" className="bg-slate-100  p-1 pl-3 rounded-[6px] w-[49%] h-[40px]"></input>

                  <input
                  type="text"
                  name="family_name"
                  placeholder="Family Name" className="bg-slate-100  p-1 pl-3 rounded-[6px] w-[49%] h-[40px]"></input>
             </div>

             <div className=" w-[100%] p-3">
                 <input
                  type="text"
                  name="email"
                  placeholder="Email" className="bg-slate-100  p-1 pl-3 rounded-[6px] w-[100%] h-[40px]"></input>
             </div>

             <div className=" w-[100%] p-3">
                 <input
                  type="text"
                  name="phone_number"
                  placeholder="Phone Number" className="bg-slate-100  p-1 pl-3 rounded-[6px] w-[50%] h-[40px]"></input>
             </div>
            
            <div className=" w-[100%] p-3">
                 <input
                  type="text"
                  name="comment"
                  placeholder="Comment" className="bg-slate-100  p-1 pl-3 rounded-[6px] w-[50%] h-[80px]"></input>
             </div>

             <div className="flex flex-wrap">
                 <Link to={'/'}>
                     <button className="text-[16px] font-light p-1 pl-3 pr-3 text-gray-500 bg-[#e0e1e1] rounded-[6px] mr-4">
                         Close
                     </button>
                     
                 </Link>
                 <button className="text-[16px] font-light p-1 pl-3 pr-3 text-[#103121] bg-[#39ff9f4b] rounded-[6px] mr-4">
                          Done
                </button>
                 
                
             </div>
            
         </div>
    </form>
  );
};

export default MyFormUpdate;