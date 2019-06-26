import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import FontAwesome from "react-fontawesome";
import "./Navigation.css";

const Navigation = ({ movie }) => (
  <div className="rmdb-navigation">
    <div className="rmdb-navigation-content">
      <Link to="/">
        <p>
          <FontAwesome className="fa-arrow-left" name="search" size="" />
        </p>
        <p>Back</p>
      </Link>
    </div>
  </div>
);

Navigation.propTypes = {
  movie: PropTypes.string
};

export default Navigation;
