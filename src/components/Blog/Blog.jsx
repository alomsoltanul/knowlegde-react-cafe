import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';
const Blog = ({ blog, handleBookmarks }) => {
    const {title,cover,author_img,author,posted_date,reading_times,hashtags} = blog;
    return (
        <div className='mb-20'>
            <img  className='w-full mb-6' src={cover} alt={`image of a ${title}`} />
            <div className='flex justify-between'>
                <div className='flex'>
                    <img className='w-14 rounded-xl' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h4 className="text-2xl">{author}</h4>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                
                    <span>{reading_times} min read</span>
                    <button onClick={() =>handleBookmarks(blog)} className='ml-2'><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h2 className="text-4xl mt-6">{title}</h2>
            {
                hashtags.map((hash,idx) => <span key={idx}> <a href="">#{hash}</a></span>)
            }
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleBookmarks: PropTypes.func
}
export default Blog; 