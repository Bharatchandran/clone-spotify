import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import { Avatar } from "@mui/material";
import { useDataLayerValue } from "./DataLayer";
function Header() {
  const [{ user }, dispatch] = useDataLayerValue();
  return (
    <div className="header">
      <dic className="header__left">
        <SearchIcon />
        <input
          placeholder="Search for Artists, Songs, or Podcasts "
          type="text"
        />
      </dic>
      <dic className="header__right">
        <Avatar alt={user?.display_name} src={user?.images[0]?.url} />
        <h4>{user?.display_name}</h4>
      </dic>
    </div>
  );
}

export default Header;
