function Headeer() {
    return (
    <>
    <header className="">
        <section className="flex flex-wrap justify-between align-middle shadow-lg p-4 pl-16 pr-16 w-lvw">
        <h1 className="font-bold lg:text-[26px] sm:text-[20px]"><span className="text-[#00BF63]">Sentura </span> USER CRUD</h1>
        <div>
            <button className="text-[16px] font-bold p-1 pl-3 pr-3 text-white bg-[#00BF63] rounded-[6px] mr-4 border-[#00BF63] border-[2px]">
                SIGN IN
            </button>
            <button className="text-[16px] font-bold p-1 pl-3 pr-3 text-[#00BF63] bg-[#00ff8440] rounded-[6px] border-[#00BF63] border-[2px]">
            SIGN UP
            </button>
        </div>
        </section>
        
    </header>
    </>
    )
}
export default Headeer;