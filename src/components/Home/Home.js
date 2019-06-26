import React from "react";
import HeroImage from "../elements/HeroImage/HeroImage";
import SearchBar from "../elements/SearchBar/SearchBar";
import FourColGrid from "../elements/FourColGrid/FourColGrid";
import MovieThumb from "../elements/MovieThumb/MovieThumb";
import LoadMoreBtn from "../elements/LoadMoreBtn/LoadMoreBtn";
import Spinner from "../elements/Spinner/Spinner";
import { IMAGE_BASE_URL, POSTER_SIZE, BACKDROP_SIZE } from "../../config";
import "./Home.css";

const Home = ({
  movies,
  heroImage,
  loading,
  currentPage,
  totalPages,
  searchTerm,
  searchMovies,
  loadMoreMovies
}) => (
  <div className="rmdb-home">
    {heroImage ? (
      <div>
        <SearchBar callback={searchMovies} />
        <HeroImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${heroImage.backdrop_path}`}
          title={heroImage.original_title}
          text={heroImage.overview}
        />
      </div>
    ) : null}
    <div className="rmdb-home-grid">
      <FourColGrid
        header={searchTerm ? "Search Result" : "Latest"}
        loading={loading}
      >
        {movies.map((element, i) => (
          <MovieThumb
            key={i}
            clickable={true}
            image={
              element.poster_path
                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${element.poster_path}`
                : "./images/no_image.jpg"
            }
            movieId={element.id}
            movieName={element.original_title}
          />
        ))}
      </FourColGrid>
      {loading ? <Spinner /> : null}
      {currentPage <= totalPages && !loading ? (
        <LoadMoreBtn text="Show More" onClick={loadMoreMovies} />
      ) : null}
    </div>
  </div>
);

export default Home;
