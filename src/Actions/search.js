export function searchFunction(text, contentType = "Search movie") {
    return dispatch => {
      let uri;
      uri =
        "https://api.themoviedb.org/3/search/multi?api_key=55032e2af54d05c1326b26b0bf830b60&language=en-US&page=1&include_adult=false&query=" +
        text;
      let contentArray = contentType.split(" ");
      fetch(uri)
        .then(response => response.json())
        .then(responseJson => {
          data = responseJson.results;
          obj = _.filter(data, function(o) {
            if (o.media_type == contentArray[1]) {
              return o;
            }
          });
          dispatch({ type: "SEARCH", payload: obj });
        });
    };
  }
  export function changePlaceholder(placeholder) {
    return dispatch => {
      dispatch({ type: "CHANGEPLACEHOLDER", payload: placeholder });
    };
  }
  