const Api = "https://api.spotify.com/v1";
const header = {
  Accept: "application/json",
  "Content-Type": "application/json",
  Authorization: "Bearer " + localStorage.getItem("token"),
};
//Obtener los datos del usuario
export const getDataUser = async () => {
  const ApiRequest = await fetch(`${Api}/me`, {
    method: "GET",
    headers: header,
  });
  const ApiRequestPromise = await ApiRequest.json();
  return ApiRequestPromise;
};

export const DataUser = () => getDataUser();

//Obtener una PlayList especifica
const getPlayList = async () => {
  const ApiRequest = await fetch(
    `${Api}/playlists/1hX0yEOMQE9v2G8xt3hp7w/tracks`,
    {
      method: "GET",
      headers: header,
    }
  );
  const ApiRequestPromise = await ApiRequest.json();
  let APItemsList = ApiRequestPromise.items.map((item) => item.track);
  return APItemsList;
};

export const PlayList = () => getPlayList();

//Obtener la lista de favoritos del usuario
const getSavedTracks = async () => {
  const ApiRequest = await fetch(`${Api}/me/tracks`, {
    method: "GET",
    headers: header,
  });
  const ApiRequestPromise = await ApiRequest.json();
  let APItemsList = ApiRequestPromise.items.map((item) => item.track);
  return APItemsList;
};

export const FavoriteTracks = () => getSavedTracks();

//Obtener album
const getAlbums = async () => {
  const ApiRequest = await fetch(`${Api}/albums`, {
    method: "GET",
    headers: {
      ids: "82ObEPsp2rxGrnsizN5TX%2C1A2GTWGtFfWp7KSQTwWOyo%2C2noRn2Aes5aoNVsU6iWThc%2C5KSmyxLneU9PjuBZQguAnf%2C6Ys6uRTMti54CH8VEo2xEt%2C7KF1Ain9mYYlg5M46g0i4A",
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  });
  const ApiRequestPromise = await ApiRequest.json();
  let APItemsList = ApiRequestPromise.items.map((item) => item.track);
  return APItemsList;
};

export const Albums = () => getAlbums();

//AuthToken
export const getAuthorizationToken = async () => {
  var myHeaders = new Headers();
  myHeaders.append(
    "Authorization",
    "Basic " +
      Buffer.from(
        "a4c271e80a7a44cb862b630c53527f5c" +
          ":" +
          "4336c81955ed44bab0a81c0c6841d38c"
      ).toString("base64")
  );

  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

  var urlencoded = new URLSearchParams();
  urlencoded.append("grant_type", "authorization_code");
  urlencoded.append("code", localStorage.getItem("token"));
  urlencoded.append("redirect_uri", "http://localhost:3000/principal");

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: urlencoded,
  };

  await fetch("https://accounts.spotify.com/api/token", requestOptions)
    .then((response) => response.json())
    .then((result) => {
      localStorage.setItem("access_token", result["access_token"]);
      localStorage.setItem("refresh_token", result["refresh_token"]);
    })
    .catch((error) => console.log("error", error));
};
