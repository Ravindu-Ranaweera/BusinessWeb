
 function Topic({title, description}) {
     return(
        <div className='title' align='center'>
            <p className='text-5xl font-semibold tracking-wide p-5'>{title}</p>
            <p className='text-2xl tracking-wide'>{description}</p>
        </div>
    );
}


export default Topic;