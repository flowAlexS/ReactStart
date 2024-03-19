import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./UseFetch";

const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, isPending, error} = useFetch(`http://localhost:8000/blogs/${id}`);
    const history = useHistory();

    const handleClick = () => {
        fetch(`http://localhost:8000/blogs/${id}`, {
            method: "DELETE",
        })
        .then(() => {
            history.push('/');
        })
    }

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
                    <button onClick={handleClick}>delete</button>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;