 import { Link } from "react-router-dom";

import React, { useState } from 'react';

const MyForm: React.FC = () => {

    const [text,setText] =useState('');


    const textOnChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setText(event.target.value);
      };
    
    
      
    
      const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        fetch('https://da610f21da0c45f6bbae03983477d8a7.weavy.io/api/apps/1/posts', {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer wyu_YosUo03NoCKwwroyKX5cUstBdjPgal3mPn5o',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            text: text,
            blobs: [],
            options: []
        })
        }).then((response) => response.json())
          .then((data) => {
            console.log(data);
            // Handle the response data
           // alert(data)
          })
          .catch((error) => {
            // Handle any errors
          //  alert(error)
          });
      };




  return (
    <form onSubmit={handleSubmit} > 
       <div className="shadow-lg flex flex-wrap justify-end gap-2 w-[100%] p-4">
             
             <div className="w-[100%] p-3 flex flex-wrap justify-start flex-row gap-3">
             <input
                  type="text"
                  name="text"
                  value={text}
                  onChange={textOnChange}
                  placeholder="Creat Post" className="bg-slate-100  p-1 pl-3 rounded-[6px] w-[100%] h-[100px]"></input>
                 
             </div>
             <div className="w-[100%] p-3 flex flex-wrap justify-between flex-row gap-6 ">
                    <button className="bg-slate-200 rounded-lg p-2 pr-5 pl-5">
                        <img className="h-[20px]" src="src/assets/icon/icons8-link-64.png" alt="" />
                    </button>
                    <div className="flex flex-wrap">
                        <Link to={'/'}>
                            <button className="text-[16px] p-1 pl-3 pr-3 text-gray-500 bg-[#e0e1e1] rounded-[6px] mr-4 font-bold">
                                Cancel
                            </button>
                            
                        </Link>
                        <button className="text-[16px] p-1 pl-3 pr-3 text-[#103121] bg-[#39ff9f4b] rounded-[6px] mr-4 font-bold">
                                Post
                        </button>   
                    </div>
                </div>


            
         </div>
    </form>
  );
};

export default MyForm;