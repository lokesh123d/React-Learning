import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAllPosts } from "./postsSlice";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";

const PostLists = () => {
  const posts = useSelector(selectAllPosts);


const orderedPosts  = posts.slice().sort((a,b)=>b.date.localeCompare(a.date))

  const renderedPosts = posts.map((post) => (
    <article key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content.substring(0, 100)}</p>
      <p>
        <PostAuthor userId={post.userId}/>
      <TimeAgo timestamps={post.date}/>
      </p>
    </article>
  ));
  return (
    <section>
      <h2>Posts</h2>
      {renderedPosts}
      {/* <AddPostsForm/> */}
    </section>
  );
};

export default PostLists;
