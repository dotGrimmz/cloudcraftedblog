import React, { useContext, useState, useEffect, useCallback } from "react";
import Container from "@material-ui/core/Container";
import Header from "../Header/Header";
import { useHistory } from "react-router-dom";
import CCContext from "../../context/CCContext";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import "../../css/FeaturePage.css";

const FeaturePage = (props) => {
  const history = useHistory();
  const context = useContext(CCContext);
  const { FeaturePagePost } = context;
  const [hover, setHover] = useState(false);

  const [imgAnimationStyle, setImgAnimationStype] = useState({
    item: "",
    bg: "",
  });

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
    item: {
      flex: imgAnimationStyle.img,
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      transition: "flex, 0.8, ease",
      height: "250px",
      width: "200px",
    },
  };

  const [post, setPost] = useState({
    title: FeaturePagePost.title || "",
    description: FeaturePagePost.description || "",
    images: FeaturePagePost.images || [],
  });

  useEffect(() => {
    setPost(FeaturePagePost);
  }, [context]);

  useEffect(() => {
    if (hover) {
      setImgAnimationStype({ bg: "red", img: "1 1 9" });
      console.log("this should be 7");
    } else {
      setImgAnimationStype({ bg: "blue", img: "7 1 0" });
      console.log("this should be 4");
    }
  }, [hover]);

  const navigateToHome = () => {
    history.push("/home");
  };

  const hoverImg = (e) => {
    e.target.style.flex = "7, 1, 0";
  };
  console.log("hoverevent next", hover);
  //build image accordian next
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
            <Typography variant="h2">{post.title}</Typography>
          </Grid>
          <Grid item>
            <Typography variant="h4">{post.description}</Typography>
          </Grid>

          <Grid container style={styles.galleryWrap}>
            {post &&
              post.images.map((image, i) => (
                <Grid
                  onMouseEnter={() => setHover(true)}
                  onMouseOut={() => setHover(false)}
                  item
                  xs
                  key={i}
                >
                  <img src={image} alt="imageone" className="item" />
                </Grid>
              ))}
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
};

export default FeaturePage;
