import React from "react";
import { NavLink } from "react-router-dom";

import PhotoAlbumIcon from "@material-ui/icons/PhotoAlbum";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { useStyles } from "./style";

const NavLinks: React.FC = () => {
  const classes = useStyles();
  return (
    <>
      <NavLink
        className={classes.navigationItem}
        activeClassName={classes.navigationItemActive}
        to="/albums"
      >
        <PhotoAlbumIcon />
        &nbsp;Albums
      </NavLink>
      <NavLink
        className={classes.navigationItem}
        activeClassName={classes.navigationItemActive}
        to="/favorites"
      >
        <FavoriteIcon />
        &nbsp;Favorites
      </NavLink>
    </>
  );
};

export default NavLinks;
