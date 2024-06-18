import HomeList from "@/app/components/HomeList/HmoeList";
import { Post } from "@/app/types";

const Posts = async () => {
 const response = await fetch('https://jsonplaceholder.typicode.com/posts');
 const posts : Post[] = await response.json();
  return <>
   <div className="container mx-auto"> 
    <h1 className="text-3xl font-bold text-center my-8">Posts</h1>
    <HomeList posts={posts} />
   </div>
  </>
}


export default Posts