import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  root: {
    minWidth: 275,
    margin: "15px 5px",
    "&  .MuiCardContent-root ": {
      padding: 32,
    },
  },

  media: {
    height: 600,
  },
  fab: {
    margin: "auto",
  },
});
