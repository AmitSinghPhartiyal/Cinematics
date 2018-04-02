export function getReview(movie_id, type) {
  return dispatch => {
    fetch(
      "https://api.themoviedb.org/3/movie/" +
        movie_id +
        "/reviews?api_key=55032e2af54d05c1326b26b0bf830b60"
    )
      .then(response => response.json())
      .then(responseJson => {
        data = responseJson.results;
        dispatch({ type: "REVIEW", payload: data });
      });
  };
}
export function getCast(movie_id, type) {
  return dispatch => {
    fetch(
      "https://api.themoviedb.org/3/" +
        type +
        "/" +
        movie_id +
        "/credits?api_key=55032e2af54d05c1326b26b0bf830b60"
    )
      .then(response => response.json())
      .then(responseJson => {
        data = responseJson.cast;
        dispatch({ type: "CAST", payload: data });
      });
  };
}
export function getMovieDetails(movie_id) {
  return dispatch => {
    fetch(
      "https://api.themoviedb.org/3/movie/" +
        movie_id +
        "?api_key=55032e2af54d05c1326b26b0bf830b60"
    )
      .then(response => response.json())
      .then(responseJson => {
        data = responseJson;
        dispatch({ type: "DETAILS", payload: data });
      });
  };
}
export function getMoviesTrailors(movieId) {
    return dispatch => {
      fetch(
        "https://api.themoviedb.org/3/movie/" +
          movieId +
          "/videos?api_key=55032e2af54d05c1326b26b0bf830b60&language=en-US"
      )
        .then(response => response.json())
        .then(responseJson => {
          dispatch({ type: "MOVIETRAILORS", payload: responseJson });
        })
        .catch(error => {
          console.log(error);
        });
    };
  }