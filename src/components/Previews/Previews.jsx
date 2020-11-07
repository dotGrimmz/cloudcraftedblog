import React, { useState } from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import CardContent from "@material-ui/core/CardContent";
import Slide from "@material-ui/core/Slide";
import CardActionArea from "@material-ui/core/CardActionArea";
import "../../css/Previews.css";

const Previews = (props) => {
  const { post } = props;
  const [open, setOpen] = useState(false);
  const [clicked, setClicked] = useState(true);

  const handleImgRotation = () => {
    setOpen(true);
    setClicked(!clicked);
  };

  const setCapsToFirstWord = (description) => {
    let firstWord = description.slice(0, description.indexOf(" "));
    let paragraph = description.slice(
      description.indexOf(" "),
      description.length - 1
    );
    let capitalized = firstWord.toUpperCase();
    return capitalized + paragraph;
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
                    <Grid item xs={12}>
                      <p className="description">
                        {setCapsToFirstWord(post.description)}
                      </p>
                    </Grid>
                    <Grid item xs={12} align="right">
                      <p className="signature"> ~ {post.signature}</p>
                    </Grid>
                    {clicked === false &&
                      post.images.slice(0, 3).map((image, index) => (
                        <Grid item key={index}>
                          <Slide
                            in={open}
                            direction="left"
                            timeout={{ enter: 1000, exit: 1000 }}
                          >
                            <img src={image} className="media" key={image} />
                          </Slide>
                        </Grid>
                      ))}
                    {clicked === true &&
                      post.images.slice(2, 5).map((image, index) => (
                        <Grid item key={index}>
                          <Slide
                            in={open}
                            direction="left"
                            timeout={{ enter: 1000, exit: 1000 }}
                          >
                            <img src={image} className="media" key={image} />
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
