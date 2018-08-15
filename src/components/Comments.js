import React, { Component } from "react";
import "../css/Comments.css";

export default class Comments extends Component {
  render() {
    return (
      <div className="comments px-3 py-1">
        <div className="row">
          <h3 className="col-md-6 text-capitalize">{this.props.name}</h3>
          <h3 className="col-md-6">{this.props.email}</h3>
        </div>
        <hr />
        <p className="text-black-50">{this.props.body}</p>
      </div>
    );
  }
}
