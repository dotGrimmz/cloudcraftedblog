import React, { useState } from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Slide from "@material-ui/core/Slide";
import CardActionArea from "@material-ui/core/CardActionArea";

const styles = {
  root: {
    width: "100%",
  },

  media: {
    height: "175px",
    width: "200px",
    border: "1px solid black",
  },
};

//build out the card layout then add another property to the post object called

// preview for a set string amount to display on screen

const Previews = (props) => {
  const { post } = props;
  const [open, setOpen] = useState(false);
  const [clicked, setClicked] = useState(0);
  const handleImgRotation = () => {
    if (clicked === 0) {
      setOpen(true);
    }
    if (post.images.length > 2 && clicked === 0) {
      setClicked(clicked + 1);
    } else if (post.images.length < 2) {
      setClicked(clicked + 1);
    } else if (post.images.length > 2 && clicked > 1) {
      setClicked(clicked * 0);
      console.log(clicked);
    } else if (post.images.length < 2 && clicked > 3) {
      setClicked(clicked * 0);
    } else setClicked(clicked + 1);
  };
  return (
    <Grid style={{ width: "100%" }}>
      <Accordion onClick={() => handleImgRotation()}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Grid item xs={8}>
            <Typography variant="h5">{post.title}</Typography>
          </Grid>
          <Grid item xs={4} align="right">
            <Typography variant="subtitle1" color="textSecondary" align="right">
              {post.date}
            </Typography>
          </Grid>
        </AccordionSummary>
        <AccordionDetails>
          <Container>
            <Card>
              <CardActionArea>
                <CardContent>
                  <Grid container direction="row" spacing={2} justify="center">
                    <Typography>{post.description}</Typography>
                    {clicked === 1 &&
                      post.images.slice(0, 3).map((image) => (
                        <Grid item>
                          <Slide
                            in={open}
                            direction="left"
                            timeout={{ enter: 1000, exit: 1000 }}
                          >
                            <img src={image} style={styles.media} key={image} />
                          </Slide>
                        </Grid>
                      ))}
                    {clicked > 1 &&
                      post.images.slice(2, 5).map((image) => (
                        <Grid item>
                          <Slide
                            in={open}
                            direction="left"
                            timeout={{ enter: 1000, exit: 1000 }}
                          >
                            <img src={image} style={styles.media} key={image} />
                          </Slide>
                        </Grid>
                      ))}
                  </Grid>
                </CardContent>
              </CardActionArea>
            </Card>
          </Container>
        </AccordionDetails>
      </Accordion>
    </Grid>
  );
};

export default Previews;

// const mainFeaturedPost = {
//   title: "A Night at Alley Katz",
//   description:
//     "This was my second vist to Alley Katz and the wing are no fluke. A bit more on the pricy side",
//   image: `url(${wingspics})`,
//   imgText: "main image description",
//   linkText: "Continue reading…",
// };
