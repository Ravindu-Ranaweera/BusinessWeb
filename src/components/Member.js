
function Member({path, name}) {
    return(
            <div className ='relative overflow-hidden w-64 flex-1 m-12 rounded-md'>
                <img src = {path} className='w-full' alt = "" />
                <div className='absolute bottom-0.5 p-5'>
                    <h3 className='text-sm font-bold text-white p-2'>Head of Consulting </h3>
                    <h3 className='text-3xl font-bold text-white p-2'>{name} </h3>
                    <p className='font-semibold text-2xl text-white p-2'> P.D.Silva</p>
                    <hr></hr>
                    <h3 className='text-xl text-white p-2'> pds@hr.com</h3>
                </div>
            </div>  
    );
}

export default Member;