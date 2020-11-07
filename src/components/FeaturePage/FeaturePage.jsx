import React, { useContext, useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import Header from "../Header/Header";
import { useHistory } from "react-router-dom";
import CCContext from "../../context/CCContext";
import Grid from "@material-ui/core/Grid";
import "../../css/FeaturePage.css";
import Slide from "@material-ui/core/Slide";

const FeaturePage = (props) => {
  const history = useHistory();
  const context = useContext(CCContext);
  const { FeaturePagePost } = context;

  const styles = {
    images: {
      height: "250px",
      width: "200px",
    },
    container: {
      padding: "0",
      margin: "0",
      width: "80%",
      display: "flex",
      flexDirection: "column",
    },
    galleryWrap: {
      width: "100%",
      display: "flex",
      flexDirection: "row",
      height: "70vh",
    },
  };

  const [post, setPost] = useState({
    title: FeaturePagePost.title || "",
    description: FeaturePagePost.description || "",
    images: FeaturePagePost.images || [],
  });

  const [open, setOpen] = useState(false);

  useEffect(() => {
    setPost(FeaturePagePost);
    setOpen(true);
  }, [context]);

  const navigateToHome = () => {
    history.push("/home");
  };

  return (
    <Container maxWidth="lg" align="center">
      <Header
        title={"Cloud Crafted Blog"}
        navigationMethod={navigateToHome}
        navigationBtnLabel={"Cloud Crafted Blog"}
      />
      <Container maxWidth="md">
        <Grid container>
          <Grid item xs={12}>
            <p className="title">{post.title}</p>
          </Grid>
          <Grid item>
            <p className="description">{post.description}</p>
          </Grid>

          <Grid container style={styles.galleryWrap}>
            {post &&
              post.images.map((image, i) => (
                <Slide
                  in={open}
                  direction="left"
                  timeout={{ enter: 1000, exit: 1000 }}
                  key={i}
                >
                  <Grid item xs>
                    <img src={image} alt="imageone" className="item" />
                  </Grid>
                </Slide>
              ))}
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
};

export default FeaturePage;
