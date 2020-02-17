import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Schedule({ match }) {
  const { postId } = match.params;
  const post = useSelector(state =>
    state.posts.find(post => post.id === +postId)
  ) || { Title: "Not an Available Post" };

  return (
    <div className="page page_post">
      <h3>{post.Title}</h3>
      <p>The scheduling feature is currently under construction</p>
      <Link to="/">Back to list</Link>
    </div>
  );
}

export default Schedule;
