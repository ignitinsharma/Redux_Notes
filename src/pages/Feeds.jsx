import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFeedsfun } from "../Redux/Feeds/feeds.action";

const Feeds = () => {
  /* Here by using useSelector we are basicily getting the data from feeds state 
    how..?? 
    first-> useSelector is accessing the data from store and 
            store.feeds means it is accessing the feeds state so 
            this way useSelector gives us the actual state data.
  */
  const { data, loading, error } = useSelector((store) => store.feeds);

  /* We use this for sending the date between redux things */
  const dispatch = useDispatch();
  console.log(data);

  useEffect(() => {
    /* Here we are passing that callback and then we are simple this dispatch sending those things
        into action and checking which thing we wanna do ...
    */
    // getFeedsfun(dispatch);
    dispatch(getFeedsfun());
  }, []);
  return (
    <div>
      <h1>Feeds</h1>
      {data.map((post) => (
        <ul key={post.id}>
          <li>{post.message}</li>
        </ul>
      ))}
    </div>
  );
};

export default Feeds;
