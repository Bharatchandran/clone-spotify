import React from "react";

import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import RepeatIcon from "@mui/icons-material/Repeat";
import VolumeDownIcon from "@mui/icons-material/VolumeDown";
import PauseCircleOutlineIcon from "@mui/icons-material/PauseCircleOutline";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";

import "./Footer.css";
import { Grid, Slider } from "@mui/material";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__left">
        <img
          className="footer__albumLogo"
          src="https://images.unsplash.com/photo-1468164016595-6108e4c60c8b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YWxidW0lMjBsb2dvfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60"
          alt=""
        />
        <div className="footer__songInfo">
          <h4>Yeah!</h4>
          <p>Usher</p>
        </div>
      </div>
      <div className="footer__center">
        <ShuffleIcon className="footer__green" />
        <SkipPreviousIcon className="footer__icon" />
        <PlayCircleOutlineIcon fontSize="large" className="footer__icon" />
        <SkipNextIcon className="footer__icon" />
        <RepeatIcon className="footer__green" />
      </div>
      <div className="footer__right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Footer;
