import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Blog from "./components/Blog/Blog";
import CreateBlog from "./components/CreateBlog/CreateBlog";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import LoginPage from "../src/components/LoginPage/LoginPage";
import FeaturePage from "../src/components/FeaturePage/FeaturePage";
import ContextImplementation from "../src/context/ContextImplementation";
import Movers from "./components/Movers/Movers";

function App() {
  return (
    <>
      <ContextImplementation>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Router>
            <Route path="/home" exact component={Blog} />
            <Route path="/create" component={CreateBlog} />
            <Route path="/login" component={LoginPage} />
            <Route path="/feature" component={FeaturePage} />
            <Route path="/movers" component={Movers} />
          </Router>
        </MuiPickersUtilsProvider>
      </ContextImplementation>
    </>
  );
}

export default App;
