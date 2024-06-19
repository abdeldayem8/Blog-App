import { Post } from "@/app/types";
import Link from "next/link";

type HomeListProps = {
    posts: Post[];
  };

  const truncateText = (text: string, maxLength: number) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...';
    }
    return text;
  };

  const HomeList: React.FC<HomeListProps> = ({ posts }) => {
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 p-4">
      {posts.map(post =>(
        <div key={post.id} className="bg-gradient-to-r from-blue-200 to-blue-300 shadow-md  rounded-lg p-4">
        <h2 className="text-xl font-bold mb-2">{post.title}</h2>
        <p className="text-gray-700 mb-4">{truncateText(post.body, 100)}</p>
        <Link href={`/posts/${post.id}`} className="text-blue-500 hover:underline">
        Read more about {post.title}
          </Link>
        </div>
      ))}
    </div>
  )
}
export default HomeList;