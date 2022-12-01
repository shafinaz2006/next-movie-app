import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addComment } from '../redux/movieSlice';

interface CommentProps {
  comments: string[],
  id: string,
}
const Comments = (props: CommentProps) => {

  const dispatch = useDispatch();
  const [newComment, setNewComment] = useState('');
  
  const getComment = (event: any) => {
    setNewComment(event.target.value);
  }
  return(
    <div>
      <h3>Comments: </h3>
      <p> {props.comments.length} comments: </p>
      {props.comments.length > 0 && 
        props.comments.map((comment: string, i: number) => <p key={i}>{comment}</p>)
      }
      <label htmlFor='comment'>Add your comment: </label>
      <input type='text' id='comment' onChange={getComment}/>
      <button onClick={() => dispatch(addComment({id: props.id, comment: newComment}))}>
        Add comment
      </button>
    </div>
  )
};

export default Comments;

function dispatch(arg0: any): void {
  throw new Error('Function not implemented.');
}
