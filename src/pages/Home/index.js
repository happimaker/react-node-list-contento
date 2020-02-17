/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CircularProgress from "@material-ui/core/CircularProgress";

import Post from "components/Post";
import { LOAD_ALL, DELETE } from "store";

function Home() {
  const dispatch = useDispatch();
  const loaded = useSelector(state => state.loaded);
  const loading = useSelector(state => state.loading);
  const posts = useSelector(state => state.posts);
  const deletePost = useCallback(
    postId => dispatch({ type: DELETE, id: postId }),
    [dispatch]
  );

  useEffect(() => {
    !loaded && dispatch({ type: LOAD_ALL });
  }, []);

  if (loading) return <CircularProgress />;
  if (!loaded) return null;

  return (
    <div className="page page_list">
      <div className="posts">
        {posts.map(post => (
          <Post key={`post_${post.id}`} post={post} onDelete={deletePost} />
        ))}
      </div>
      {!posts.length && (
        <div className="zero-posts">
          <h5>You don't have any posts to display.</h5>
        </div>
      )}
    </div>
  );
}

export default Home;
