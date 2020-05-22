import { createStyles, makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() =>
  createStyles({
    albumsWrapper: {
      display: "flex",
      flexDirection: "column",
      maxWidth: 1100,
      margin: "0 auto",
      height: "93vh",
      "& > nav": {
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-end",
        flexGrow: 1,
      },
    },
  })
);
