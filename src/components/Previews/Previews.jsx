import React, { useState, useEffect, useContext } from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import CCContext from "../../context/CCContext.jsx";

import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";
import "../../css/Previews.css";
import AdminPanel from "../AdminPanel/AdminPanel.jsx";

const Previews = (props) => {
  const { post, count } = props;
  const context = useContext(CCContext);
  const { user } = context;

  const [open, setOpen] = useState(false);

  useEffect(() => {
    let setfirstTwo = () => {
      if (count === 0 || count === 1) {
        setOpen(true);
      }
    };
    setfirstTwo();
  }, []);

  const toggleDropdown = () => {
    setOpen(!open);
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
  const handleDate = (date) => {
    let formattedDate = new Date(date).toDateString();

    return formattedDate;
  };

  return (
    <Grid style={{ width: "100%", padding: "1%" }}>
      <Accordion onClick={() => toggleDropdown()} expanded={open}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Grid item xs={8}>
            <Typography variant="h5">{post.title}</Typography>
          </Grid>
          <Grid item xs={4} align="right">
            <Typography variant="subtitle1" color="textSecondary" align="right">
              {handleDate(post.date)}
            </Typography>
          </Grid>
        </AccordionSummary>
        <AccordionDetails className="card">
          <Grid container direction="row" spacing={2} justify="center">
            <Grid item xs={12}>
              <p className="description">
                {setCapsToFirstWord(post.description)}
              </p>
            </Grid>
            <Grid item xs={12} align="right">
              <p className="signature"> ~ {post.signature}</p>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
      <Grid item xs={12}>
        <AdminPanel />
      </Grid>
    </Grid>
  );
};

export default Previews;
