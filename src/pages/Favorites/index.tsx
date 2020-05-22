import React, { useContext, useState } from "react";
import { observer } from "mobx-react-lite";

import Pagination from "@material-ui/lab/Pagination";
import InfoCard from "../../components/UI/InfoCard";
import AlbumsStore from "../../stores/albums";
import { useStyles } from "./style";

const Favorites: React.FC = () => {
  const classes = useStyles();
  const { favoritePhotos } = useContext(AlbumsStore);
  const [currentPage, setCurrentPage] = useState(1);

  const favoritePhotoList = favoritePhotos.map((album) => (
    <InfoCard
      id={album.id}
      key={album.id}
      title={album.title}
      image={album.url}
      isMedia={true}
    />
  ));

  const postPerPage = 9;
  const indexOfLastPost = currentPage * postPerPage;
  const indeOfFirstPost = indexOfLastPost - postPerPage;
  const currentFavoritePhotoList = favoritePhotoList.slice(
    indeOfFirstPost,
    indexOfLastPost
  );
  if (favoritePhotos.length === 0) {
    return (
      <h3 style={{ textAlign: "center" }}>
        Please, choose your favorite photo in albums
      </h3>
    );
  }
  return (
    <div className={classes.favoritesWrapper}>
      <div>{currentFavoritePhotoList}</div>
      <Pagination
        onChange={(event, page) => setCurrentPage(page)}
        count={Math.ceil(favoritePhotos.length / postPerPage)}
        color="primary"
      />
    </div>
  );
};

export default observer(Favorites);
