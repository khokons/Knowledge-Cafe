import PropTypes from 'prop-types';

const Blog = ({ blog, handleBookMarks, handleTimeAsRead}) => {
    const {title,cover,author_img,reading_time,author,posted_date,hashtags} = blog;
  
    return (
        <div className='mt-10'>
            <img className='w-full' src={cover} alt={`Cover picture of the title ${title}`} />

            <div className='flex justify-between mt-10'>

                <div className='flex items-center'>
                    <img className='w-14' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h5>{author}</h5>
                        <p>{posted_date}</p>
                    </div>
                </div>


                <div>
                    <span>{reading_time} min read</span>
                    <button
                    onClick={() => handleBookMarks(blog)}
                    className='ml-2 bg-gray-500'> 
                    BookMarks </button>
                </div>
            </div>

           <h2 className='text-3xl mt-5 mb-5'>{title}</h2> 

           <p>
            {
                hashtags.map((hash, idx) => <span key={idx}><a href="">#{hash}</a></span>)
            }
           </p>

           <button className='mt-4 bg-red-600 p-2 rounded-md' onClick={() => handleTimeAsRead(reading_time)}>Mark As Read</button>
        </div>
    );
};

Blog.propTypes ={
    blog:PropTypes.object.isRequired,
    handleBookMarks:PropTypes.func,
    handleTimeAsRead:PropTypes.func,
}
export default Blog;