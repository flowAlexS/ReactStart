const BlogList = ({ blogs, title }) => {
    return ( 
        <div className="home">
            <h2>{ title }</h2>
            {blogs.map(blog => (
                <div className="blog-preview" key={ blog.id }>
                    <div className="blog-details">
                        <h2>{ blog.title }</h2>
                        <p>Written by { blog.author }</p>
                    </div>

                </div>
            ))}
        </div>
     );
}
 
export default BlogList;