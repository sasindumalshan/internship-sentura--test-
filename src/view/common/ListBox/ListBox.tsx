
function ListBox() {

    return (
        <>
        <div className="shadow-sm flex flex-wrap justify-center gap-2 w-[100%] p-4 rounded-lg">
            <div className="flex flex-wrap justify-between w-[100%] ">
                <h1>Sasidnu Malshan</h1>
                <h1>Galle,Sri Lanka</h1>
                <h1>0770659786</h1>
                <h1>saidnu@gmail.com</h1>
                <h1>comment</h1>
                <div className="flex flex-wrap gap-4">
                    <button>
                        <img src="src/assets/icon/icons8-remove-24.png" alt="" />
                    </button>
                    <button type='submit'>
                        <img src="src/assets/icon/icons8-pencil-24.png" alt="" />
                    </button>
                </div>
            </div>
            
        </div>
        </>
    )
}
export default ListBox;