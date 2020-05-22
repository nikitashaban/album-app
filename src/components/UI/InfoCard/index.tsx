import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { observer } from "mobx-react-lite";

import AlbumsStore from "../../../stores/albums";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Fab from "@material-ui/core/Fab";
import Tooltip from "@material-ui/core/Tooltip";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { useStyles } from "./style";

interface InfoCardTypes {
  title: string;
  id: number;
  isMedia?: boolean;
  image?: string;
}

const InfoCard: React.FC<InfoCardTypes> = ({
  id,
  title,
  isMedia = false,
  image,
}) => {
  const { setFavoritePhoto, favoritePhotos } = useContext(AlbumsStore);

  const classes = useStyles();
  const history = useHistory();
  const isFavorite = favoritePhotos.some((photo) => photo.id === id);
  return (
    <Card className={classes.root}>
      <CardActionArea
        disabled={isMedia}
        onClick={() => history.push(`/albums/${id}`)}
      >
        {isMedia && (
          <CardMedia className={classes.media} image={image} title={title} />
        )}
        {!isMedia && (
          <CardContent>
            <Typography variant="h5" component="h2">
              {title}
            </Typography>
          </CardContent>
        )}
      </CardActionArea>
      {isMedia && (
        <CardActions>
          <Tooltip
            onClick={() => setFavoritePhoto(id)}
            title="Add"
            aria-label="add"
          >
            <Fab
              style={isFavorite ? { backgroundColor: "white" } : {}}
              className={classes.fab}
            >
              <FavoriteIcon style={isFavorite ? { color: "#FF4E4E" } : {}} />
            </Fab>
          </Tooltip>
        </CardActions>
      )}
    </Card>
  );
};
export default observer(InfoCard);
