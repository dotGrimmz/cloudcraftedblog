import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Blog from "./components/Blog/Blog";
import CreateBlog from "./components/CreateBlog/CreateBlog";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import LoginPage from "../src/components/LoginPage/LoginPage";

function App() {
  return (
    <>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Router>
          <Route path="/home" exact component={Blog} />
          <Route path="/create" component={CreateBlog} />
          <Route path="/login" component={LoginPage} />
        </Router>
      </MuiPickersUtilsProvider>
    </>
  );
}

export default App;
