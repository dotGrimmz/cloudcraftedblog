import React, { Fragment, useState, useContext } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import CloudCraftedService from "../../service/CloudCraftedService";
import CCContext from "../../context/CCContext";
import PlacesAutocomplete from "react-places-autocomplete";

import CircularProgress from "@material-ui/core/CircularProgress";

const Movers = (props) => {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [loading, setLoading] = useState(false);
  const [travelData, setTravelData] = useState({
    distance: "",
    duration: "",
  });
  const service = new CloudCraftedService();
  const context = useContext(CCContext);

  // const handleValueChange = (e) => {
  //   let obj = { ...data, [e.target.name]: e.target.value };
  //   setData(obj);
  //   console.log(obj);
  // };

  const handleOriginChange = (value) => {
    setOrigin(value);
  };

  const handleDestinationChange = (value) => {
    setDestination(value);
  };
  const postData = async () => {
    setLoading(true);
    let data = { origin, destination };
    console.log(data, "this is the data");
    try {
      let response = await service.postData(data);
      console.log(response);
      setTravelData(response.data);
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };
  console.log(travelData);
  return (
    <Paper style={styles.root}>
      <Container maxWidth="sm" style={styles.container}>
        <Grid container justify="center">
          <div style={styles.logo}>
            <p style={styles.banner}>Apex Auto Movers</p>
          </div>
        </Grid>
        <Grid container justify="center" spacing={2} direction="column">
          <PlacesAutocomplete
            value={origin}
            onSelect={handleOriginChange}
            onChange={handleOriginChange}
          >
            {({
              getInputProps,
              suggestions,
              getSuggestionItemProps,
              loading,
            }) => (
              <Grid item xs={12}>
                <TextField
                  {...getInputProps()}
                  variant="outlined"
                  label="Origin"
                  name="origin"
                  fullWidth
                />
                {loading && <div> ...loading</div>}
                {suggestions.map((suggestion) => {
                  let style = suggestion.active
                    ? { backgroundColor: "lightblue", cursor: "pointer" }
                    : { backgroundColor: "white", cursor: "pointer" };
                  return (
                    <div
                      {...getSuggestionItemProps(suggestion, {
                        style,
                      })}
                    >
                      {suggestion.description}
                    </div>
                  );
                })}
              </Grid>
            )}
          </PlacesAutocomplete>
          <PlacesAutocomplete
            value={destination}
            onSelect={handleDestinationChange}
            onChange={handleDestinationChange}
          >
            {({
              getInputProps,
              suggestions,
              getSuggestionItemProps,
              loading,
            }) => (
              <Grid item xs={12}>
                <TextField
                  {...getInputProps()}
                  variant="outlined"
                  label="Destination"
                  name="destination"
                  fullWidth
                />
                {loading && <div> ...loading</div>}
                {suggestions.map((suggestion) => {
                  let style = suggestion.active
                    ? { backgroundColor: "lightblue", cursor: "pointer" }
                    : { backgroundColor: "white", cursor: "pointer" };
                  return (
                    <div
                      {...getSuggestionItemProps(suggestion, {
                        style,
                      })}
                    >
                      {suggestion.description}
                    </div>
                  );
                })}
                <Button variant="contained" color="primary" onClick={postData}>
                  Calculate Distance
                </Button>
                {loading && (
                  <Grid item xs={12}>
                    <CircularProgress />
                  </Grid>
                )}
                {"Duration:" + travelData.duration}
                {"Distance:" + travelData.distance}
              </Grid>
            )}
          </PlacesAutocomplete>
          {/* <Grid
            container
            justify="center"
            direction="column"
            alignItems="center"
          >
            <Grid item xs={12} textAlign="center"></Grid> */}

          {/* <Grid item xs={12}>
            
            </Grid> */}
          {/* </Grid> */}
        </Grid>
      </Container>
    </Paper>
  );
};

const styles = {
  root: {
    backgroundColor: "brown",
    width: "100%",
    height: "100%",
    position: "absolute",
    top: "0",
    bottom: "0",
    right: "0",
    left: "0",
  },
  logo: {
    height: "20vh",
    width: "40vh",
    backgroundColor: "blue",
    borderRadius: "50%",
    // display: "inline-block",
    border: "2px solid black",
    marginBottom: "3%",
    marginTop: "2%",
  },
  banner: {
    textAlign: "center",
    fontSize: "40px",
    color: "white",
    paddingTop: "5%",
  },
  container: {
    border: "2px solid black",
    backgroundColor: "white",
    borderRadius: "5%",
    marginTop: "5%",
  },
};

export default Movers;
