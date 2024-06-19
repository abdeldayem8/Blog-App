import Postdetail from '@/components/Postdetail/Postdetail';
import { Post } from '@/app/types';

type PageProps = {
  params: { id: number };
};

const FetchData = async (id: number): Promise<Post> => {
  // fetch data from api based on id on the url
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch API data');
  }
  return response.json();
};

const PostDetails = async ({ params }: PageProps) => {
  const { id } = params;

  // if data is true will show the data else will show error message
  try {
    const data = await FetchData(id);
    return (
      <div>
        <Postdetail post={data} />
      </div>
    );
  } catch (error) {
    console.error('Failed to fetch post data:', error);
    return (
      <div>
        <p>Failed to load post.</p>
      </div>
    );
  }
};
export default PostDetails;