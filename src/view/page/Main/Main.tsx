import { Link, Outlet } from "react-router-dom";
import Headeer from "../../common/Header/Header";
import MyForm from "../../common/FromSave/MyForm";
import ListBox from "../../common/ListBox/ListBox";

function Main() {
    return(
        <>
        <Headeer></Headeer>
       <section className="w-[100%] p-12 flex flex-wrap justify-center">
            <div className="flex flex-wrap justify-between w-[100%] mb-2">
                <div > 
                    <button className="text-[16px] font-bold p-1  text-[#192620] bg-[#ababab40] rounded-[6px] border-[#ababab40] border-[2px] pr-10 pl-10">
                        All
                    </button>
                </div >  

                <div className="flex flex-wrap gap-4">
                  <Link to={'new'}>  
                      <button className="text-[16px] font-bold p-1 pl-3 pr-3 text-[#00bf63] bg-[#00ff8440] rounded-[6px] border-[#00BF63] border-[2px]">
                          ADD +
                      </button>
                  </Link>
                  <Link to={'update'}>
                    <button className="text-[16px] font-bold p-1 pl-3 pr-3 text-[#00bf63] bg-[#00ff8440] rounded-[6px] border-[#00BF63] border-[2px]">
                          UPDATE +
                    </button>
                  </Link>
                </div>
            </div>
            
            <section className="mb-8 w-[100%]">
              <Outlet></Outlet>
              {/* <MyForm></MyForm> */}

             
            </section>


            <div className=" flex flex-wrap justify-center gap-2 w-[100%] p-4 rounded-lg font-bold">
            <div className="flex flex-wrap justify-between w-[100%] ">
                <h1>Full Name</h1>
                <h1>Location</h1>
                <h1>Contact</h1>
                <h1>Mail</h1>
                <h1>comment</h1>
                <img className="h-[25px]" src="src/assets/icon/icons8-option-50.png" alt="" />
            </div>  
        </div>

           
            <ListBox></ListBox>
            <ListBox></ListBox>
            <ListBox></ListBox>
            <ListBox></ListBox>
            <ListBox></ListBox>
        </section>

         
        
        </>
        );
}

export default Main;