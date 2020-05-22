import React, { useContext, useEffect, useState } from "react";
import { observer } from "mobx-react-lite";

import Spinner from "../../components/UI/Spinner";
import AlbumsStore from "../../stores/albums";
import InfoCard from "../../components/UI/InfoCard";
import Pagination from "@material-ui/lab/Pagination";
import { useStyles } from "./style";

const Albums: React.FC = () => {
  const classes = useStyles();
  const { getAlbums, albums } = useContext(AlbumsStore);

  useEffect(() => {
    getAlbums();
  }, [getAlbums]);
  const albumsList = albums.map((album) => (
    <InfoCard id={album.id} key={album.id} title={album.title} />
  ));
  const [currentPage, setCurrentPage] = useState(1);

  const postPerPage = 9;
  const indexOfLastPost = currentPage * postPerPage;
  const indeOfFirstPost = indexOfLastPost - postPerPage;
  const currentAlbums = albumsList.slice(indeOfFirstPost, indexOfLastPost);
  if (albums.length === 0) {
    return <Spinner />;
  }
  return (
    <div className={classes.albumsWrapper}>
      {currentAlbums}
      <Pagination
        onChange={(event, page) => setCurrentPage(page)}
        count={Math.ceil(albumsList.length / postPerPage)}
        color="primary"
      />
    </div>
  );
};

export default observer(Albums);
