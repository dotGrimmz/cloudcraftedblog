import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import CCContext from "../../context/CCContext";
import { useLocation } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: "transparent",
    padding: theme.spacing(6, 0),
  },
}));

const Footer = (props) => {
  const classes = useStyles();
  const { description, title, navigateToLogin, navigateToHome } = props;
  const context = useContext(CCContext);
  const { user, logOut } = context;
  const location = useLocation();
  const currentPath = location.pathname;

  const Copyright = () => {
    return (
      <>
        <Typography variant="body2" color="textSecondary" align="center">
          {"Copyright © "}
          Jus Grimmz Blog LLC {new Date().getFullYear()}
          {"."}
        </Typography>
        {user.userID === "" && currentPath !== "/login" && (
          <p style={{ textAlign: "center" }}>
            <Link onClick={() => navigateToLogin()} variant="caption">
              Login
            </Link>
          </p>
        )}
        {user.userID !== "" && (
          <p style={{ textAlign: "center" }}>
            <Link onClick={() => logOut()} variant="caption">
              Log Out
            </Link>
          </p>
        )}
        {currentPath === "/login" && (
          <p style={{ textAlign: "center" }}>
            <Link onClick={() => navigateToHome()} variant="caption">
              Back
            </Link>
          </p>
        )}
      </>
    );
  };

  const styles = {
    root: {
      backgroundColor: "lightblue",
    },
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
