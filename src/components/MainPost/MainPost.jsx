import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Hidden from "@material-ui/core/Hidden";
import pizza from "../../images/pizza.jpg";
import hibachiupdated from "../../images/hibachiupdated.jpg";

const useStyles = makeStyles({
  card: {
    display: "flex",
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
});

function MainPost(props) {
  const classes = useStyles();
  const { post, navigateToFeature } = props;
  //description should be at least 100 chars to avoid responsiveness bug

  return (
    <Grid item xs={12} md={6}>
      <CardActionArea
        component="a"
        href="#"
        onClick={() => navigateToFeature(post)}
      >
        <Card className={classes.card}>
          <div className={classes.cardDetails}>
            <CardContent>
              <Typography component="h2" variant="h5">
                {post.title}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {post.date}
              </Typography>

              <Typography variant="subtitle1" paragraph>
                {post.description.slice(0, 100)}
              </Typography>
              <Typography variant="subtitle1" color="primary">
                Continue reading...
              </Typography>
            </CardContent>
          </div>
          <Hidden xsDown>
            <CardMedia className={classes.cardMedia} image={post.images[0]} />
          </Hidden>
        </Card>
      </CardActionArea>
    </Grid>
  );
}

export default MainPost;
