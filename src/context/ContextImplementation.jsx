import React, { Component } from "react";
import CCContext from "./CCContext";

class ContextImplementation extends Component {
  setFeaturedPagePost = (post) => {
    this.setState({ FeaturePagePost: post });
  };

  setUser = (credentials) => {
    this.setState({ user: credentials });
  };

  getSignature = () => {
    return this.state.userID === "Grimmz"
      ? "Rakeem X. Gordon"
      : "Angel J. McDay";
  };

  setBlogPost = (blog) => {
    this.setState({ blogPost: blog });
  };

  logOut = () => {
    this.setState({
      user: {
        userID: "",
        password: "",
      },
    });
  };

  // storing credentials in context so the nav bar can show us buttons
  state = {
    user: {
      userID: "Grimmz",
      password: "Password",
    },
    FeaturePagePost: {},
    setFeaturedPagePost: this.setFeaturedPagePost,
    setUser: this.setUser,
    logOut: this.logOut,
    blogPost: {},
    setBlogPost: this.setBlogPost,
  };

  render = () => {
    const { children } = this.props;
    return (
      <CCContext.Provider value={this.state}>{children}</CCContext.Provider>
    );
  };
}

export default ContextImplementation;
