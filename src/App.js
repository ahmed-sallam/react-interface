import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Post from "./components/Post";
import AddComment from "./components/AddComment";
import CommentsList from "./components/CommentsList";
import axios from "axios";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const home = () => <h1>Home</h1>;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayNav: false,
      posts: [],
      comments: [],
      currentPost: 0,
      postsReady: false,
      commentsReady: false,
      displayAddComment: false
    };
  }
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(res => {
        this.setState({ posts: res.data, postsReady: true });
      })
      .catch(err => console.log(err));

    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then(res => {
        this.setState({ comments: res.data, commentsReady: true });
      })
      .catch(err => console.log(err));
  }
  clicktoggle = () => {
    if (this.state.displayNav) {
      this.setState({ displayNav: !this.state.displayNav });
    } else {
      this.setState({ displayNav: !this.state.displayNav });
    }
  };
  showAddComment = () => {
    if (this.state.displayAddComment) {
      this.setState({ displayAddComment: !this.state.displayAddComment });
    } else {
      this.setState({ displayAddComment: !this.state.displayAddComment });
    }
  };
  changeCurrent = currentPostId => {
    this.setState({ currentPostId });
  };
  addcomment = comment => {
    let comments = this.state.comments;
    comments.push(comment);
    this.setState({ comments });
  };
  render() {
    const Main = ({ match }) => {
      if (this.state.postsReady && this.state.commentsReady) {
        if (this.state.posts[match.params.id - 1] !== undefined) {
          let title = this.state.posts[match.params.id - 1].title;
          let body = this.state.posts[match.params.id - 1].body;
          let filteredComments = this.state.comments.filter(
            comment => parseInt(comment.postId) === parseInt(match.params.id)
          );
          return (
            <div className="mt-3 ">
              <h1 className="text-uppercase py-2 font-weight-bold text-center">
                React Interface
              </h1>
              <Post title={title} body={body} />
              <AddComment
                postid={match.params.id}
                showAddComment={this.showAddComment}
                displayAddComment={this.state.displayAddComment}
                addcomment={this.addcomment}
              />
              <CommentsList comments={filteredComments} />
            </div>
          );
        } else {
          return <h1>Not Found!</h1>;
        }
      } else {
        return <h1>Not Found!</h1>;
      }
    };
    return (
      <BrowserRouter>
        <div>
          <div className="row m-0">
            <Navbar
              clicktoggle={this.clicktoggle}
              changeCurrent={this.changeCurrent}
              displayNav={this.state.displayNav}
              posts={this.state.posts}
            />
            <div className="col-md-9">
              <Switch>
                <Route exact path="/" component={home} />
                <Route path="/:id" component={Main} />
              </Switch>
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
