import Postdetail from '@/components/Postdetail/Postdetail';
import React from 'react';

type PageProps = {
    params: {id:number};
  }

const PostDetails =  async (props : PageProps) => {

    const {id}= props.params;

   const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
   const data= await response.json();
  return (
    <div>
        <Postdetail post={data}/>
    </div>
  );
};

export default PostDetails;