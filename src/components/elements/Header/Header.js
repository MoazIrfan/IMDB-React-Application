import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

import HeroImage from "../../elements/HeroImage/HeroImage";
import SearchBar from "../../elements/SearchBar/SearchBar";
import FourColGrid from "../../elements/FourColGrid/FourColGrid";
import MovieThumb from "../../elements/MovieThumb/MovieThumb";
import LoadMoreBtn from "../../elements/LoadMoreBtn/LoadMoreBtn";
import Spinner from "../../elements/Spinner/Spinner";

const Header = ({
  movies,
  heroImage,
  loading,
  currentPage,
  totalPages,
  searchTerm,
  searchMovies,
  loadMoreMovies
}) => <div className="rmdb-header" />;

export default Header;
