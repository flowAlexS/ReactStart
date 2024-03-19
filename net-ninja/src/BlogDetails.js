import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./UseFetch";

const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, isPending, error} = useFetch(`http://localhost:8000/blogs/${id}`);


    return ( 
        <div className="blog-details">
            { isPending && <div> Loading... </div>}
            { error && { error }}
            { blog && (
                <article>
                    <h2>{ blog.title }</h2>
                    <p>Written by { blog.author }</p>
                    <div>
                        { blog.body }
                    </div>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;