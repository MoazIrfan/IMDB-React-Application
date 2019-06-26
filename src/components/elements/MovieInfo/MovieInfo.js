import React from "react";
import { IMAGE_BASE_URL, POSTER_SIZE, BACKDROP_SIZE } from "../../../config";
import PropTypes from "prop-types";
import FontAwesome from "react-fontawesome";
import MovieThumb from "../MovieThumb/MovieThumb";
import { calcTime, convertMoney } from "../../../helpers.js";
import "./MovieInfo.css";

const MovieInfo = ({ movie, directors, time, budget, revenue }) => (
  <div
    className="rmdb-movieinfo"
    style={{
      background: movie.backdrop_path
        ? `url('${IMAGE_BASE_URL}${BACKDROP_SIZE}${movie.backdrop_path}')`
        : "#000"
    }}
  >
    <div className="rmdb-movieinfo-content">
      <div className="rmdb-movieinfo-thumb">
        <MovieThumb
          image={
            movie.poster_path
              ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
              : "./images/no_image.jpg"
          }
          clickable={false}
        />
      </div>
      <div className="rmdb-movieinfo-text">
        <h1>{movie.title}</h1>
        <h3 className="cc">OVERVIEW</h3>
        <p>{movie.overview}</p>
        <h3 className="cc">IMDB RATING</h3>
        <div className="rmdb-rating">
          <meter
            min="0"
            max="100"
            optimum="100"
            low="40"
            high="70"
            value={movie.vote_average * 10}
          />
          <p className="rmdb-score">{movie.vote_average}</p>
        </div>
        {directors.length > 1 ? (
          <h3 className="cc">DIRECTORS</h3>
        ) : (
          <h3 className="cc">DIRECTOR</h3>
        )}
        {directors.map((element, i) => {
          return (
            <p key={i} className="rmdb-director">
              {element.name}
            </p>
          );
        })}

        <div className="rmdb-movieinfobar-content-col">
          <FontAwesome className="fa-time" name="clock-o" size="2x" />
          <span className="rmdb-movieinfobar-info">
            Running time: {calcTime(time)}
          </span>
        </div>
        <div className="rmdb-movieinfobar-content-col">
          <FontAwesome className="fa-budget" name="money" size="2x" />
          <span className="rmdb-movieinfobar-info">
            Budget: {convertMoney(budget)}
          </span>
        </div>
        <div className="rmdb-movieinfobar-content-col">
          <FontAwesome className="fa-revenue" name="ticket" size="2x" />
          <span className="rmdb-movieinfobar-info">
            Revenue: {convertMoney(revenue)}
          </span>
        </div>
      </div>
    </div>
  </div>
);

MovieInfo.propTypes = {
  movie: PropTypes.object,
  directors: PropTypes.array,
  time: PropTypes.number,
  budget: PropTypes.number,
  revenue: PropTypes.number
};

export default MovieInfo;
