import React from "react";
import { Comment } from "@/components/(server)/Comment";

const CommentWithReplies = ({ comment }) => {
  console.log({ comment });
  return (
    <div key={comment.id}>
      <Comment {...comment} />
      {comment.replies && comment.replies.length > 0 && (
        <div className="ml-9">
          {comment.replies.map((reply) => (
            <CommentWithReplies key={reply.id} comment={reply} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CommentWithReplies;
