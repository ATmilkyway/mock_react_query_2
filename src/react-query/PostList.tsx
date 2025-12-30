import { useState } from "react";
import usePosts from "./hooks/usePosts";

const PostList = () => {
  const pageSize = 10;
  const [userId, setUserId] = useState<number>();
  const {
    data,
    error,
    isLoading,
    isFetching,
    fetchNextPage,
    isFetchingNextPage,
  } = usePosts({
    pageSize,
  });

  if (isLoading) return <p>Loading ...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <>
      <ul className="list-group">
        {data?.pages.map((posts) =>
          posts.map((post, index) => (
            <li className="list-group-item" key={post.id}>
              {post.title}
            </li>
          ))
        )}
      </ul>
      <button
        className="btn btn-primary my-4 me-4 "
        disabled={isFetchingNextPage}
        onClick={() => fetchNextPage()}
      >
        {isFetchingNextPage ? "Loading ..." : "Load More"}
      </button>
    </>
  );
};

export default PostList;
