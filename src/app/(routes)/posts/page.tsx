import HomeList from "@/components/HomeList/HmoeList";

const getData = async()=>{
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if(!response.ok){
    throw new Error('Failed To Fetch API Data')
  }
  return response.json();
}
const Posts = async () => {
  const Data = await getData();
  return <>
   <div className="container mx-auto"> 
    <h1 className="text-3xl font-bold text-center my-8">Posts</h1>
    <HomeList posts={Data} />
   </div>
  </>
}

export default Posts