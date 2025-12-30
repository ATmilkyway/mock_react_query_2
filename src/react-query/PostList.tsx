import { useState } from "react";
import usePosts from "./hooks/usePosts";

const PostList = () => {
  const [page, setPage] = useState(1);
  const pageSize = 10;
  const [userId, setUserId] = useState<number>();
  const {
    data: posts,
    error,
    isLoading,
    isFetching,
  } = usePosts({ page, pageSize });

  if (isLoading) return <p>Loading ...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <>
      <ul className="list-group">
        {posts?.map((post) => (
          <li key={post.id} className="list-group-item">
            {post.title}
          </li>
        ))}
      </ul>
      <button
        className="btn btn-primary my-4 me-4 "
        disabled={page === 1}
        onClick={() => setPage(page - 1)}
      >
        Previous
      </button>
      <button className="btn btn-primary  " onClick={() => setPage(page + 1)}>
        Next
      </button>
    </>
  );
};

export default PostList;
