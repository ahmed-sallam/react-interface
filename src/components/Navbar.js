import React from "react";
import "../css/Navbar.css";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  handleClick = () => {
    this.props.clicktoggle();
  };
  handlePostClick = e => {
    e.preventDefault();
    this.props.changeCurrent(e.target.id);
    console.log(e.target.id);
  };
  render() {
    let ToggleColor = {
      backgroundColor: this.props.displayNav ? "#f6f5e7" : "#1e3d54"
    };
    let posts = this.props.posts.map(post => (
      <li key={post.id} id={post.id} onClick={this.handlePostClick}>
        <Link to={"" + post.id}>{post.title}</Link>
      </li>
    ));
    return (
      <div className="navbar col-sm-3 p-0">
        <div className="btn-toggle" onClick={this.handleClick}>
          <div className="dot" style={ToggleColor} />
          <div className="dot" style={ToggleColor} />
          <div className="dot" style={ToggleColor} />
        </div>
        <nav style={{ display: this.props.displayNav ? "block" : "none" }}>
          <h1>Posts List</h1>
          <hr />
          <ul>{posts}</ul>
        </nav>
      </div>
    );
  }
}
export default Navbar;
