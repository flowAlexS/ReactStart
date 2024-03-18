const BlogList = ({ blogs, title, handleDelete }) => {
    return ( 
        <div className="home">
            <h2>{ title }</h2>
            {blogs.map(blog => (
                <div className="blog-preview" key={ blog.id }>
                    <div class="blog-details">
                        <h2>{ blog.title }</h2>
                        <p>Written by { blog.author }</p>
                        <div>
                            <button onClick={() => handleDelete(blog.id)}>delete blog</button>
                        </div>                        
                    </div>

                </div>
            ))}
        </div>
     );
}
 
export default BlogList;