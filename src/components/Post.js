import React, { Component } from "react";
import "../css/Post.css";

export default class Post extends Component {
  render() {
    return (
      <div className="post p-4">
        <h2 className="text-capitalize">{this.props.title}</h2>
        <hr />
        <p className="text-black-50">{this.props.body}</p>
      </div>
    );
  }
}
