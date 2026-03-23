import React from "react";
import { reactionAdded } from "./postsSlice";
import { useDispatch } from "react-redux";

const reactionEmojies = {
  thumbsUp: '👍',
  wow: '🤩',
  heart: '💙',
  rocket: '🚀',
  coffee: '☕',
};

const ReactionButtons = ({post}) => {
  const dispatch = useDispatch();

const reactionButtons = Object.entries(reactionEmojies).map(([name,emoji])=>{
    return(
        <button
        key={name}
        type="button"
        className="reactionsButtons"
        onClick={()=>{
            dispatch(reactionAdded({postId:post.id,reaction:name}))
        }}
        >
{emoji} {post.reactions[name]}
        </button>
    )
})

  return <div>{reactionButtons}</div>;
};

export default ReactionButtons;
