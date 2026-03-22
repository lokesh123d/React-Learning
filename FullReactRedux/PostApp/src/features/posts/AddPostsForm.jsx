import { nanoid } from "@reduxjs/toolkit";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postsAdded } from "./postsSlice";
import { selectAllUsers } from "../users/usersSlice";
const AddPostsForm = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [usersId, setUsersId] = useState("");

  const users = useSelector(selectAllUsers);

  function onSavePostAdded() {
    if (title && content) {
      dispatch(postsAdded(title, content, usersId));

      setTitle("");
      setContent("");
    }
  }

const canSave = Boolean(title) && Boolean(content) && Boolean(usersId)

  const usersOptions = users.map((user) => (
    <option value={user.id} key={user.id}>
      {user.name}
    </option>
  ));

  return (
    <section>
      <h2>Add a new Posts</h2>
      <form action="">
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="userselect">Author:</label>
        <select
          name="userselect"
          value={usersId}
          onChange={(e) => setUsersId(e.target.value)}
          id="userselect"
        >
          <option value="">Select Author</option>
          {usersOptions}
        </select>
        <label htmlFor="postContent">Post Content:</label>
        <textarea
          name="postContent"
          id="postContent"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <button type="button" onClick={onSavePostAdded}disabled={!canSave} >
          Save Post
        </button>
      </form>
    </section>
  );
};

export default AddPostsForm;
