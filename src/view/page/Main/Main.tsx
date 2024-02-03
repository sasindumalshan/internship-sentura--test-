import { Link } from "react-router-dom";
import Headeer from "../../common/Header/Header";

function Main() {
    return(
        <>
        <Headeer></Headeer>
       <section className="w-[100%] p-12 flex flex-wrap justify-center">
            <div className="flex flex-wrap justify-between w-[100%] mb-7">
                <div > 
                    <button className="text-[16px] font-bold p-1  text-[#192620] bg-[#ababab40] rounded-[6px] border-[#ababab40] border-[2px] pr-10 pl-10">
                        All
                    </button>
                </div >  
                <Link className="flex flex-wrap gap-4" to={'new'}>  
                    <button className="text-[16px] font-bold p-1 pl-3 pr-3 text-[#00bf63] bg-[#00ff8440] rounded-[6px] border-[#00BF63] border-[2px]">
                        ADD +
                    </button>
                    <button className="text-[16px] font-bold p-1 pl-3 pr-3 text-[#00bf63] bg-[#00ff8440] rounded-[6px] border-[#00BF63] border-[2px]">
                        UPDATE +
                    </button>
                </Link>
            </div>

         </section>
        </>
        );
}

export default Main;