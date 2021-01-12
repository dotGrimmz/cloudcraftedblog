import React, { useState, useContext, useEffect } from "react";
import Container from "@material-ui/core/Container";
import Header from "../Header/Header";
import { useHistory } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import FilterDramaIcon from "@material-ui/icons/FilterDrama";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Footer from "../Footer/Footer";
import CCContext from "../../context/CCContext";
import CloudCraftedService from "../../service/CloudCraftedService";
import Typography from "@material-ui/core/Typography";

const LoginPage = (props) => {
  const history = useHistory();
  const service = new CloudCraftedService();
  const context = useContext(CCContext);
  const { setUser, user } = context;

  const [credentials, setCredentials] = useState({
    userName: "",
    password: "",
  });

  const [isError, setIsError] = useState(false);

  useEffect(() => {
    let resetError = () => {
      setIsError(false);
    };
    setTimeout(resetError, 2000);
  }, [isError]);

  const navigateToHome = () => {
    history.push("/home");
  };

  const handleValueChange = (e) => {
    let obj = { ...credentials, [e.target.name]: e.target.value };
    setCredentials(obj);
  };

  const authenticateUser = async () => {
    try {
      await service.authenticateCredentials(credentials).then((response) => {
        setUser(response.data);
        navigateToHome();
      });
    } catch (err) {
      console.log("Error message:", err);
    }
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

  let errorMessage = (
    <Typography color="error" align="center">
      "Now stop being lazy ... type something my guy!"
    </Typography>
  );

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
          <Box align="center" component="div" flexDirection="column">
            <Button
              variant="contained"
              color="primary"
              type="submit"
              onClick={() => authenticateUser()}
            >
              Log In
            </Button>
          </Box>
          {isError && errorMessage}
        </Container>
      </Container>
      <Footer navigateToHome={navigateToHome} />
    </>
  );
};

export default LoginPage;
