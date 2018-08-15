import React, { Component } from "react";
import "../css/AddComment.css";

export default class AddComment extends Component {
  handleClick = e => {
    this.props.showAddComment();
  };
  handleSubmit = () => {
    let comment = {
      postId: this.props.postid,
      id: 501,
      name: this.name.value,
      email: this.email.value,
      body: this.body.value
    };
    this.props.addcomment(comment);
  };
  render() {
    return (
      <div className="add-comment py-3">
        <h3 className="text-center p-2 mb-0" onClick={this.handleClick}>
          +Add Comment
        </h3>
        <form
          className="mt-0 p-2"
          style={{ display: this.props.displayAddComment ? "block" : "none" }}
          onSubmit={this.handleSubmit}
        >
          <div className="row">
            <div className="col-sm-6">
              <input
                type="text"
                name="name"
                placeholder="Enter Name"
                ref={i => (this.name = i)}
              />
            </div>
            <div className="col-sm-6">
              <input
                type="text"
                name="email"
                placeholder="Enter E-mail"
                ref={i => (this.email = i)}
              />
            </div>
          </div>
          <textarea
            type="text"
            placeholder="Enter your Comment"
            ref={i => (this.body = i)}
          />
          <button type="submit" className="btn">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
