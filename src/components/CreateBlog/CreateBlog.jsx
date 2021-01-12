import React, { useState, useContext } from "react";
import Header from "../Header/Header";
import { useHistory } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import { KeyboardDatePicker } from "@material-ui/pickers";
import IconButton from "@material-ui/core/IconButton";
import Chip from "@material-ui/core/Chip";
import CCContext from "../../context/CCContext";
import CloudCraftedService from "../../service/CloudCraftedService";

const CreateBlog = (props) => {
  const history = useHistory();
  const service = new CloudCraftedService();
  const context = useContext(CCContext);
  const { setBlogPost, user, blogPost } = context;

  const [blog, setBlog] = useState({
    title: "",
    date: new Date().toLocaleString() || "",
    description: "",
  });

  const [invalid, setInvalid] = useState(false);
  const handleValueChange = (e) => {
    let obj = { ...blog, [e.target.name]: e.target.value };
    setBlog(obj);
  };

  const handleDateChange = (data) => {
    setBlog({ ...blog, date: data });
  };

  const handleFileSelector = (e) => {
    let selected = e.target.files[0];
    let types = ["images/png", "image/jpeg"];
    if (selected && types.includes(selected.type)) {
      let addFile = [...blog.images];
      addFile.push(selected);
      setBlog({ ...blog, images: addFile });
    } else {
      setBlog({ ...blog, images: blog.images });
    }
  };

  const submitPost = async () => {
    let userId = user.userID;
    console.log("user credentials on a new user", userId);
    // console.log("users id", userCredentials._id);
    try {
      let response = await service.postUserBlog(blog, userId, {});
      response.status === 200
        ? navigateToHome()
        : alert("ERROR MESSAGE DID NOT SEND");
      console.log("post successful", response);
    } catch (err) {
      console.error(err);
    }
  };

  const navigateToHome = () => {
    history.push("/home");
  };

  const handleDeleteImg = (image) => {
    let imgArr = [...blog.images];
    let i = blog.images.indexOf(image);
    if (i > -1) {
      imgArr.splice(i, 1);
      setBlog({ ...blog, images: imgArr });
    }
  };

  const styles = {
    root: {
      width: "50%",
      height: "auto",
      marginTop: "10%",
      paddingTop: "2%",
      paddingBottom: "2%",
      backgroundColor: "lightblue",
      marginLeft: "auto",
      marginRight: "auto",
    },
    card: {
      padding: "2%",
    },
    btn: {
      margin: "2%",
    },
    input: {
      display: "none",
    },
    chip: {
      backgroundColor: "white",
    },
  };
  return (
    <Container maxWidth="lg">
      <Header
        title={"Cloud Crafted Blog"}
        navigationMethod={navigateToHome}
        navigationBtnLabel={"Blog"}
      />
      <Paper style={styles.root}>
        <Container maxWidth="sm" align="center" id="formData">
          <Card raised style={styles.card}>
            <form enctype="multipart/form-data" action="">
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    name="title"
                    variant="outlined"
                    label="Title"
                    fullWidth
                    onChange={(e) => handleValueChange(e)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    name="description"
                    variant="outlined"
                    label="Description"
                    multiline
                    onChange={(e) => handleValueChange(e)}
                    rows={8}
                    fullWidth
                  />
                </Grid>
                <Grid xs={12} item>
                  <KeyboardDatePicker
                    disableToolbar
                    variant="inline"
                    format="MM/dd/yyyy"
                    margin="normal"
                    value={blog.date}
                    label="Date"
                    onChange={(data) => handleDateChange(data)}
                    KeyboardButtonProps={{
                      "aria-label": "change date",
                    }}
                  />
                </Grid>
              </Grid>
            </form>
          </Card>
          <Button
            disabled={invalid}
            style={styles.btn}
            variant="contained"
            color={invalid ? "secondary" : "primary"}
            type="submit"
            onClick={() => submitPost()}
          >
            Create Post
          </Button>
          <input
            accept="image/*"
            id="icon-button-file"
            type="file"
            name="file"
            style={styles.input}
            onChange={(e) => handleFileSelector(e)}
          />
          {/* <Grid item container justify="center" spacing={1}>
            {blog.images.length > 0 &&
              blog.images.map((image, index) => (
                <Grid item xs key={index}>
                  <Chip
                    label={image.name}
                    onDelete={() => handleDeleteImg(image)}
                    style={styles.chip}
                  />
                </Grid>
              ))}
          </Grid> */}
        </Container>
      </Paper>
    </Container>
  );
};

export default CreateBlog;
