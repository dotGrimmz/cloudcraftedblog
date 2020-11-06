import React, { useContext } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { makeStyles } from "@material-ui/core/styles";
import FeaturedPost from "../FeaturedPost/FeaturedPost";
import wingspics from "../../images/wingspics.JPG";
import Grid from "@material-ui/core/Grid";
import hibachi from "../../images/hibachi.jpg";
import pizza from "../../images/pizza.jpg";
import AlleyKatz1 from "../../images/AlleyKatz1.jpg";
import AlleyKatz2 from "../../images/AlleyKatz2.jpg";
import AlleyKatz3 from "../../images/AlleyKatz3.jpg";
import MainPost from "../MainPost/MainPost";
import Sidebar from "../Sidebar/Sidebar";
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import Previews from "../Previews/Previews";
import arcade from "../../images/arcade.jpg";
import { useHistory } from "react-router-dom";
import CCContext from "../../context/CCContext";

const Blog = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const context = useContext(CCContext);
  const { setFeaturedPagePost } = context;

  const navigateToCreate = () => {
    history.push("/create");
  };

  const navigateToLogin = () => {
    history.push("/login");
  };

  const navigateToFeature = (post) => {
    history.push("/feature");
    setFeaturedPagePost(post);
  };
  console.log(setFeaturedPagePost);

  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header
          title={"Cloud Crafted Blog"}
          navigationMethod={navigateToCreate}
          navigationBtnLabel={"Create Blog"}
        />
        <main>
          <FeaturedPost
            post={mainFeaturedPost}
            navigateToFeature={navigateToFeature}
          />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <MainPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid
            container
            spacing={3}
            className={classes.mainGrid}
            justify="flex-start"
          >
            {posts.map((entree) => (
              <Grid item xs={8}>
                <Previews post={entree} key={entree.title} />
              </Grid>
            ))}
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid>
        </main>
      </Container>
      <Footer navigateToLogin={navigateToLogin} />
    </>
  );
};

const mainFeaturedPost = {
  title: "A Night at Alley Katz",
  description:
    "This was my second vist to Alley Katz and the wing are no fluke. A bit more on the pricy side",
  imageBG: `url(${wingspics})`,
  imgText: "main image description",
  linkText: "Continue reading…",
  images: [wingspics, AlleyKatz1, AlleyKatz2, AlleyKatz3],
};

const featuredPosts = [
  {
    title: "Oliviana Bar Italiano & Pizzeria",
    date: "May 29, 2020",
    description:
      "The pizza was soggy and over priced. would not recommend at all!",
    image: pizza,
    imageText: "Image Text",
  },
  {
    title: "Iniyabi",
    date: "Febuary 14, 2020",
    description:
      "Valentines Day at a Hibachi! The food was tasty and priced fairly equal among other Hibachi's of its kind",
    image: hibachi,
    imageText: "Image Text",
  },
];

const posts = [
  {
    title: "Star & Strikes",
    images: [arcade, pizza, hibachi, wingspics],
    date: "May 29, 2020",
    description:
      "Stars and Strikes didnt have much to offer culinary wise. The food was cold and didnt taste well at all. We ordered mozzarella sticks and they were no better than what you would get out of a freezer at the local kroger but we paid for it so it got eaten. The arcade however was excellent. Guitar Hero was my favorite since it was the only thing I stood a chance in compeitivly against Angel. She beat me in blowling, hoops, and just about anything that was compeitive. The bumper cars section seemed too small for our taste so we opted out. All and all we would return just with full stomaches and a fully blown pre game at the house.",
  },
  {
    title: "Oak Augusta",
    images: [arcade],
    date: "October 23, 2020",
    description:
      "Oak had a vibe like no other since weve hit the Augusta night life. Grown and sexy feel with a crowd that likes to have a good time. I wish we had a positive review about the Food as well. We ordered the friend lobster tail and lump crab cakes. The lobster tail was just tiny, unseasoned and did we mention it was only half a tail? for 13 dollars. The amount of salt in the crab cakes made them unedible, soggy, and just bad all together. Its a bar .. so next time.. were ordering wings for SURE!",
  },
  {
    title: "Juicy Crab - Smyrna",
    images: [arcade],
    date: "October 24, 2020",
    description: "",
  },
];

const sidebar = {
  title: "Check us Out!",
  description:
    "Rakeem and Angel have been living in the CSRA since 2020 and theyre determined to check out every restaurant that has the buzz around town!",
  archives: [
    { title: "March 2020", url: "#" },
    { title: "February 2020", url: "#" },
    { title: "January 2020", url: "#" },
    { title: "November 1999", url: "#" },
    { title: "October 1999", url: "#" },
    { title: "September 1999", url: "#" },
    { title: "August 1999", url: "#" },
    { title: "July 1999", url: "#" },
    { title: "June 1999", url: "#" },
    { title: "May 1999", url: "#" },
    { title: "April 1999", url: "#" },
  ],
  social: [
    { name: "GitHub", icon: GitHubIcon },
    { name: "Twitter", icon: TwitterIcon },
    { name: "Facebook", icon: FacebookIcon },
  ],
};

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

export default Blog;
