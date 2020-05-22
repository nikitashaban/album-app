import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  root: {
    minHeight: 100,
    minWidth: 275,
    margin: "15px 5px",
    "&  .MuiCardContent-root ": {
      minHeight: 75,
      display: "flex",
      alignItems: "center",
    },
  },

  media: {
    height: 600,
  },
  fab: {
    margin: "auto",
  },
});
