

function Card({text, path}) {
    return (
        <div className='w-60 h-80 bg-white rounded-lg overflow-hidden filter drop-shadow-xl m-auto' >
            <img className='w-full h-40 object-cover ' src={path} />
            <div>
                <h3 className='text-2xl font-bold p-5'>{text}</h3>
            </div>

        </div>
    )
}

export default Card
