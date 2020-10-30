import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Form from "./Form";
import List from "./List";
import { addProduct } from "./redux";
import { useDispatch } from "react-redux";
import Details from "./Details";
import { useEffect } from "react";
import axios from "./axios";

function App() {
  const dispatch = useDispatch();
  const newProduct = (product) => dispatch(addProduct(product));
  useEffect(() => {
    axios.get("products").then((responce) => {
      responce.data.map((dt) => {
        newProduct(dt);
      });
    });
  }, []);
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/formpage">
            <Form isUpdate />
          </Route>
          <Route path="/list">
            <List />
          </Route>
          <Route path="/details">
            <Details />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
///home/sherin-m/todo/api-task/src
