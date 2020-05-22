import React, { useContext, useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { observer } from "mobx-react-lite";

import Spinner from "../../components/UI/Spinner";
import AlbumsStore from "../../stores/albums";
import InfoCard from "../../components/UI/InfoCard";
import Pagination from "@material-ui/lab/Pagination";
import Fab from "@material-ui/core/Fab";
import Tooltip from "@material-ui/core/Tooltip";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { useStyles } from "./style";

const AlbumPhotos: React.FC = () => {
  const classes = useStyles();
  const { id } = useParams<{ id: string }>();
  const history = useHistory();
  const { getalbumPhotos, albumPhotos, clearalbumPhotos } = useContext(
    AlbumsStore
  );

  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    getalbumPhotos(id);
    return () => clearalbumPhotos();
  }, [getalbumPhotos, id, clearalbumPhotos]);

  const albumPhotosList = albumPhotos.map((album) => (
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
  const currentAlbumPhotosList = albumPhotosList.slice(
    indeOfFirstPost,
    indexOfLastPost
  );
  if (albumPhotos.length === 0) {
    return <Spinner />;
  }
  return (
    <div className={classes.albumPhotosWrapper}>
      <Tooltip
        onClick={() => history.push("/albums")}
        title="Back"
        aria-label="Back"
      >
        <Fab color="primary" className={classes.fab}>
          <ArrowBackIcon />
        </Fab>
      </Tooltip>
      <div>{currentAlbumPhotosList}</div>
      <Pagination
        onChange={(event, page) => setCurrentPage(page)}
        count={Math.ceil(albumPhotosList.length / postPerPage)}
        color="primary"
      />
    </div>
  );
};

export default observer(AlbumPhotos);
