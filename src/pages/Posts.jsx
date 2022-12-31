import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPostsfun } from "../Redux/Posts/post.action";

const Posts = () => {
  const { data } = useSelector((store) => store.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    /* Before Thunk we use that method */
    // getPostsfun(dispatch);

    /* After thunk */
    dispatch(getPostsfun());
  }, []);
  return (
    <div>
      <h1>Post</h1>
      {data.map((post) => (
        <ul key={post.id}>
          <li>{post.message}</li>
        </ul>
      ))}
    </div>
  );
};

export default Posts;
