import React from 'react'
import { Post } from '@/app/types';


type Props = {
  post: Post;
}
const Postdetail= ({ post }: Props) => {
  return <>
  <div className="bg-gradient-to-r from-blue-200 to-blue-300 shadow-md rounded-lg p-6 my-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">{post.title}</h2>
      <p className="text-gray-600 leading-relaxed">{post.body}</p>
    </div>
  </>
}

export default Postdetail
