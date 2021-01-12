import React, { useContext, useEffect, Fragment } from "react";
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
import { useLocation } from "react-router-dom";
import rainybackground from "../../images/rainybackground.jpg";
import CloudCraftedService from "../../service/CloudCraftedService";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import roughparchment from "../../images/roughparchment.jpg";

const Blog = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const context = useContext(CCContext);
  const {
    setFeaturedPagePost,
    logOut,
    blogPost,
    user,
    setUser,
    setBlogPost,
  } = context;
  const service = new CloudCraftedService();
  const mobileView = useMediaQuery("(min-width:600px)");

  const location = useLocation();
  const currentPath = location.pathname;
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

  const navigateToHome = () => {
    history.push("/home");
  };

  useEffect(() => {
    const handleLoggedInUser = () => {
      setUser(user);
    };
    handleLoggedInUser();
  }, [user]);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        let response = await service.getAllBlogs();
        setBlogPost(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchBlogPosts();
  }, []);

  const styles = {
    root: {
      backgroundImage: `url(${roughparchment})`,
      backgroundSize: "cover",
      height: "auto",
      maxWidth: "100%",
      backgroundRepeat: "no-repeat",
    },
    blogContainer: {
      backgroundColor: "transparent",
    },
  };

  console.log(mobileView, "this is the mobileview posts");

  return (
    <div style={styles.root}>
      <CssBaseline />
      <Container style={styles.blogContainer} maxWidth="lg">
        <Header
          title={"Jus Grimmz"}
          navigationMethod={navigateToCreate}
          navigationBtnLabel={"Create Blog"}
        />
        <main>
          <FeaturedPost
            post={mainFeaturedPost}
            navigateToFeature={navigateToFeature}
          />
          <Grid
            container
            spacing={3}
            className={classes.mainGrid}
            justify="center"
          >
            <Grid item xs={mobileView ? 8 : 12}>
              {blogPost.map((entree, index) => (
                <Previews post={entree} key={index} count={index} />
              ))}
            </Grid>
            {mobileView && (
              <Grid item xs={4}>
                <Sidebar
                  title={sidebar.title}
                  description={sidebar.description}
                  archives={sidebar.archives}
                  social={sidebar.social}
                />
              </Grid>
            )}
          </Grid>
        </main>
        <Footer navigateToLogin={navigateToLogin} />
      </Container>
    </div>
  );
};

const mainFeaturedPost = {
  title: "A Night at Alley Katz",
  description:
    "This was my second vist to Alley Katz and the wing are no fluke. A bit more on the pricy side. Stars and Strikes didnt have much to offer culinary wise. The food was cold and didnt taste well at all. We ordered mozzarella sticks and they were no better than what you would get out of a freezer at the local kroger but we paid for it so it got eaten. The arcade however was excellent. Guitar Hero was my favorite since it was the only thing I stood a chance in compeitivly against Angel. She beat me in blowling, hoops, and just about anything that was compeitive. The bumper cars section seemed too small for our taste so we opted out. All and all we would return just with full stomaches and a fully blown pre game at the house.",
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
    imageText: "Image Text",
    images: [pizza],
    signature: "Rakeem x Gordon",
  },
  {
    title: "Iniyabi",
    date: "Febuary 14, 2020",
    description:
      "Valentines Day at a Hibachi! The food was tasty and priced fairly equal among other Hibachi's of its kind",
    images: [hibachi],
    signature: "Rakeem x Gordon",
  },
];

// const posts = [
//   {
//     title: "Star & Strikes",
//     date: "May 29, 2020",
//     signature: "Rakeem X Gordon",
//     description:
//       "Stars and Strikes didnt have much to offer culinary wise. The food was cold and didnt taste well at all. We ordered mozzarella sticks and they were no better than what you would get out of a freezer at the local kroger but we paid for it so it got eaten. The arcade however was excellent. Guitar Hero was my favorite since it was the only thing I stood a chance in compeitivly against Angel. She beat me in blowling, hoops, and just about anything that was compeitive. The bumper cars section seemed too small for our taste so we opted out. All and all we would return just with full stomaches and a fully blown pre game at the house.",
//   },
//   {
//     title: "Oak Augusta",
//     signature: "Rakeem X Gordon",
//     date: "October 23, 2020",
//     description:
//       "Oak had a vibe like no other since weve hit the Augusta night life. Grown and sexy feel with a crowd that likes to have a good time. I wish we had a positive review about the Food as well. We ordered the friend lobster tail and lump crab cakes. The lobster tail was just tiny, unseasoned and did we mention it was only half a tail? for 13 dollars. The amount of salt in the crab cakes made them unedible, soggy, and just bad all together. Its a bar .. so next time.. were ordering wings for SURE!",
//   },
//   {
//     title: "Juicy Crab - Smyrna",
//     signature: "Rakeem X Gordon",
//     date: "October 24, 2020",
//     description: "",
//   },
//   {
//     title: "Oak Augusta",
//     signature: "Rakeem X Gordon",
//     date: "October 23, 2020",
//     description:
//       "Oak had a vibe like no other since weve hit the Augusta night life. Grown and sexy feel with a crowd that likes to have a good time. I wish we had a positive review about the Food as well. We ordered the friend lobster tail and lump crab cakes. The lobster tail was just tiny, unseasoned and did we mention it was only half a tail? for 13 dollars. The amount of salt in the crab cakes made them unedible, soggy, and just bad all together. Its a bar .. so next time.. were ordering wings for SURE!",
//   },
//   {
//     title: "Star & Strikes",
//     images: [arcade, pizza, hibachi, wingspics],
//     date: "May 29, 2020",
//     signature: "Rakeem X Gordon",
//     description:
//       "Stars and Strikes didnt have much to offer culinary wise. The food was cold and didnt taste well at all. We ordered mozzarella sticks and they were no better than what you would get out of a freezer at the local kroger but we paid for it so it got eaten. The arcade however was excellent. Guitar Hero was my favorite since it was the only thing I stood a chance in compeitivly against Angel. She beat me in blowling, hoops, and just about anything that was compeitive. The bumper cars section seemed too small for our taste so we opted out. All and all we would return just with full stomaches and a fully blown pre game at the house.",
//   },
//   {
//     title: "Star & Strikes",
//     images: [arcade, pizza, hibachi, wingspics],
//     date: "May 29, 2020",
//     signature: "Rakeem X Gordon",
//     description:
//       "Stars and Strikes didnt have much to offer culinary wise. The food was cold and didnt taste well at all. We ordered mozzarella sticks and they were no better than what you would get out of a freezer at the local kroger but we paid for it so it got eaten. The arcade however was excellent. Guitar Hero was my favorite since it was the only thing I stood a chance in compeitivly against Angel. She beat me in blowling, hoops, and just about anything that was compeitive. The bumper cars section seemed too small for our taste so we opted out. All and all we would return just with full stomaches and a fully blown pre game at the house.",
//   },
//   {
//     title: "Star & Strikes",
//     images: [arcade, pizza, hibachi, wingspics],
//     date: "May 29, 2020",
//     signature: "Rakeem X Gordon",
//     description:
//       "Stars and Strikes didnt have much to offer culinary wise. The food was cold and didnt taste well at all. We ordered mozzarella sticks and they were no better than what you would get out of a freezer at the local kroger but we paid for it so it got eaten. The arcade however was excellent. Guitar Hero was my favorite since it was the only thing I stood a chance in compeitivly against Angel. She beat me in blowling, hoops, and just about anything that was compeitive. The bumper cars section seemed too small for our taste so we opted out. All and all we would return just with full stomaches and a fully blown pre game at the house.",
//   },
// ];

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
