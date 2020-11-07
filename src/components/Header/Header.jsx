import React, { useContext } from "react";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import CCContext from "../../context/CCContext";
import { useLocation } from "react-router-dom";

const Header = (props) => {
  const classes = useStyles();
  const { navigationBtnLabel, navigationMethod } = props;
  const location = useLocation();
  const context = useContext(CCContext);
  const { credentials } = context;
  const currentPath = location.pathname;

  const authenticateUserCredentials = () => {
    return credentials.userID !== "" && credentials.password !== "";
  };

  const correctURL = () => {
    if (currentPath === "/home") return false;
    return currentPath === "/login" ? "/login" : "/feature";
  };

  return (
    <>
      <Toolbar variant="dense" className={classes.toolbar}>
        {authenticateUserCredentials() && (
          <Button size="small" onClick={() => navigationMethod()}>
            {navigationBtnLabel}
          </Button>
        )}

        {correctURL() ? (
          <Button size="small" onClick={() => navigationMethod()}>
            {navigationBtnLabel}
          </Button>
        ) : null}

        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          className={classes.toolbarTitle}
        >
          {props.title}
        </Typography>
      </Toolbar>
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
}));

export default Header;
