import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6, 0),
  },
}));

const Footer = (props) => {
  const classes = useStyles();
  const { description, title, navigateToLogin } = props;
  const Copyright = () => {
    return (
      <>
        <Typography variant="body2" color="textSecondary" align="center">
          {"Copyright © "}
          Cloud Crafted LLC {new Date().getFullYear()}
          {"."}
        </Typography>
        {navigateToLogin && (
          <p style={{ textAlign: "center" }}>
            <Link onClick={() => navigateToLogin()} variant="caption">
              Login
            </Link>
          </p>
        )}
      </>
    );
  };

  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
          {title}
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          {description}
        </Typography>
        <Copyright />
      </Container>
    </footer>
  );
};

export default Footer;
