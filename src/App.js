import { useEffect, useState } from "react";
import "./App.css";
import Login from "./Login";
import { getTokenFromURL } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";
import { useDataLayerValue } from "./DataLayer";
const spotify = new SpotifyWebApi();

function App() {
  //Run code based on a given condition

  const [{ user, token }, dispatch] = useDataLayerValue();
  useEffect(() => {
    const hash = getTokenFromURL();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists,
        });
      });
      spotify.getPlaylist("7HfuvcSJ2jgzVnCo1xdA8F").then((response) =>
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        })
      );
    }
  }, []);

  return (
    //BEM convention
    <div className="app">
      {/* <h1>I am Logged in</h1> */}
      {token ? <Player spotify={spotify} /> : <Login />}
      {/* Spotify logo */}
      {/* Login with spotify button */}
    </div>
  );
}

export default App;
