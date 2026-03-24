import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAllPosts ,getPostsError ,getPostsStatus , fetchPosts } from "./postsSlice";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";

const PostLists = () => {

  const dispatch = useDispatch()
  const posts = useSelector(selectAllPosts);
  const postsStatus = useSelector(getPostsStatus);
  const error = useSelector(getPostsError);


useEffect(()=>{
if(postsStatus == 'idle'){
  dispatch(fetchPosts())
}
},[postsStatus , dispatch])

  const orderedPosts = posts
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));

  const renderedPosts = orderedPosts.map((post) => (
    <article key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content.substring(0, 100)}</p>
      <p>
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamps={post.date} />
      </p>
      <ReactionButtons post={post} />
    </article>
  ));
  return (
    <section>
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  );
};

export default PostLists;
