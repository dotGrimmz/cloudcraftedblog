import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import Header from "../Header/Header";
import { useHistory } from "react-router-dom";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FilterDramaIcon from "@material-ui/icons/FilterDrama";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Footer from "../Footer/Footer";

const LoginPage = (props) => {
  const history = useHistory();
  const [credentials, setCredentials] = useState({
    userName: "",
    password: "",
  });

  const navigateToHome = () => {
    history.push("/home");
  };

  const handleValueChange = (e) => {
    let obj = { ...credentials, [e.target.name]: e.target.value };
    setCredentials(obj);
    console.log(obj);
  };

  const styles = {
    root: {
      width: "80%",
      height: "auto",
      marginTop: "10%",
      paddingTop: "2%",
      paddingBottom: "2%",
      backgroundColor: "lightblue",
      marginLeft: "auto",
      marginRight: "auto",
      border: "1px solid #77aaff",
      borderRadius: "3%",
    },
    input: {
      padding: "2%",
      marginLeft: "auto",
      marginRight: "auto",
    },
    icon: {
      width: "30%",
      height: "30%",
    },
  };

  return (
    <>
      <Container maxWidth="lg" pb={2}>
        <Header
          title={"Log In"}
          navigationMethod={navigateToHome}
          navigationBtnLabel={"Cloud Crafted Blog"}
        />
        <Container maxWidth="sm" style={styles.root}>
          <Box align="center">
            <FilterDramaIcon style={styles.icon} />
          </Box>
          <TextField
            name="userName"
            variant="outlined"
            label="User Name"
            fullWidth
            onChange={(e) => handleValueChange(e)}
            style={styles.input}
            size="small"
          />
          <TextField
            name="password"
            variant="outlined"
            label="Password"
            fullWidth
            onChange={(e) => handleValueChange(e)}
            style={styles.input}
            size="small"
          />
          <Box align="center">
            <Button variant="contained" color="primary" type="submit">
              Log In
            </Button>
          </Box>
        </Container>
      </Container>
      <Footer />
    </>
  );
};

export default LoginPage;
