import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const BlogDetail = () => {
    const { id } = useParams();
    const { data:blog, isPending, error } = useFetch("http://localhost:4000/blogs/"+id);
    const history = useHistory();
    // console.log(blog)

    const handleClick = ()=>{
        console.log(blog,"http://localhost:4000/blogs/"+blog.id)
        fetch("http://localhost:4000/blogs/"+blog.id,{
            method:"DELETE"
        }).then(()=>{
            history.push('/')
        })
    }
    return ( 
        <div className="blog-details">
            { isPending && <div>Loading ...</div>}
            { error && <div>{error}</div>}
            { blog && (
                <article>
                    {console.log(blog)}
                    <h2>{blog.title}</h2>
                    <p>Written by : {blog.author}</p>
                    <div>   {blog.body}</div>
                    <button onClick={handleClick}>Delete</button>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetail;