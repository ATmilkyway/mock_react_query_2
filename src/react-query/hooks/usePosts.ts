import { InfiniteData, useInfiniteQuery, useQuery } from "@tanstack/react-query";
import axios, { all } from "axios";
import { useEffect, useState } from "react";

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

interface PostQuery {
  pageSize: number;
}

const usePosts = (query: PostQuery) =>
  useInfiniteQuery<Post[], Error, InfiniteData<Post[]>, ["posts", PostQuery], number>({
    queryKey: ["posts", query],
    initialPageParam: 1,
    queryFn: ({ pageParam }) =>
      axios
        .get<Post[]>("https://jsonplaceholder.typicode.com/posts", {
          params: {
            _start: (pageParam - 1) * query.pageSize,
            _limit: query.pageSize,
          },
        })
        .then((res) => res.data),
    placeholderData: (prev) => prev,
    getNextPageParam: (lastPage, allPage) => {
      return lastPage.length > 0 ? allPage.length + 1 : undefined;
    },
  });

export default usePosts;
