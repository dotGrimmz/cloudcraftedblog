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
  const { user } = context;
  const currentPath = location.pathname;

  const authenticateUserCredentials = () => {
    let notLoggedIn = user.userID !== "" && user.password !== "";
    if (notLoggedIn && currentPath !== "/feature") {
      return true;
    } else if (currentPath === "/feature") {
      return true;
    }
  };

  return (
    <>
      <Toolbar variant="dense" className={classes.toolbar}>
        {authenticateUserCredentials() && (
          <Button size="small" onClick={() => navigationMethod()}>
            {navigationBtnLabel}
          </Button>
        )}
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
