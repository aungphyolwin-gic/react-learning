import { useEffect, useState } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
    
    const {data: blogs, isPending, error} = useFetch('https://json-server-host.vercel.app/blogs');

    // const handleClickAgain = (name,e)=>{
    //     console.log("Hello : " + name)
    //     console.log(e)
    // }
    return (   
        <div className="home">
            { error && <div>{error} </div>}
            { isPending && <div>Loading ...</div>}
           
           { blogs && <BlogList blogs={blogs} title="All blogs!" />}
            {/* <BlogList blogs={blogs.filter(blog=>blog.author==='mario')} title="Mario's blogs!" /> */}
                        

        </div>
     );
}
 
export default Home;