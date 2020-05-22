import { createStyles, makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() =>
  createStyles({
    favoritesWrapper: {
      maxWidth: 610,
      display: "flex",
      flexDirection: "column",
      margin: "0 auto",
      minHeight: "93vh",
      "& > nav": {
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-end",
        flexGrow: 1,
        marginBottom: 10,
      },
    },
  })
);
