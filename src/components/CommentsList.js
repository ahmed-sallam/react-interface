import React, { Component } from "react";
import Comments from "./Comments";
export default class CommentsList extends Component {
  render() {
    let comments = this.props.comments.map(comment => (
      <Comments
        key={comment.id}
        name={comment.name}
        email={comment.email}
        body={comment.body}
      />
    ));
    return <div>{comments}</div>;
  }
}
