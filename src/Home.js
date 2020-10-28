import React from "react";
import "./Home.css";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <h1 className="home_title">HOME PAGE</h1>

      <div className="home_buttons">
        <Link to="/formpage">
          <Button variant="outlined" color="primary" className="home_button">
            FORM
          </Button>
        </Link>
        <Link to="/list">
          <Button variant="outlined" color="secondary" className="home_button">
            LISTS
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
