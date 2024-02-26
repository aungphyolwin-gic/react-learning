import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [ blogs, setBlogs] = useState(null)
    const [ isPending, setIsPending] = useState(true)

    useEffect(()=>{
      setTimeout(()=>{
        fetch('http://localhost:4000/blogs')
        .then((res)=>{
            if(!res.ok){
                throw Error("could not fetch the data the resource.")
            }
            return res.json();
        })
        .then( data => {
            console.log (data);
            setBlogs(data);
            setIsPending(false)
        })
        .catch((err)=>{
            console.log(err.message)
        }); 
      },1000)
    },[]);
    // const handleClickAgain = (name,e)=>{
    //     console.log("Hello : " + name)
    //     console.log(e)
    // }
    return (   
        <div className="home">
            { isPending && <div>Loading ...</div>}
           
           { blogs && <BlogList blogs={blogs} title="All blogs!" />}
            {/* <BlogList blogs={blogs.filter(blog=>blog.author==='mario')} title="Mario's blogs!" /> */}
                        

        </div>
     );
}
 
export default Home;