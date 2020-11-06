import React, { Component } from "react";
import CCContext from "./CCContext";

class ContextImplementation extends Component {
  setFeaturedPagePost = (post) => {
    this.setState({ FeaturePagePost: post });
  };
  state = {
    credentials: {
      userID: this.userID || "",
      password: this.password || "",
    },
    FeaturePagePost: {},
    setFeaturedPagePost: this.setFeaturedPagePost,
  };

  render = () => {
    const { children } = this.props;
    return (
      <CCContext.Provider value={this.state}>{children}</CCContext.Provider>
    );
  };
}

export default ContextImplementation;
