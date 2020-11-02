import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const Header = (props) => {
  const classes = useStyles();
  const { navigationBtnLabel, navigationMethod } = props;

  return (
    <>
      <Toolbar variant="dense" className={classes.toolbar}>
        <Button size="small" onClick={() => navigationMethod()}>
          {navigationBtnLabel}
        </Button>
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
        <Button size="small">Edit</Button>
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
