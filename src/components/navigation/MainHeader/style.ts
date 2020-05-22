import { createStyles, makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() =>
  createStyles({
    root: {
      flexGrow: 1,
      "& .MuiToolbar-root": {
        display: "flex",
        justifyContent: "space-between",
      },
    },
    linkWrapper: {
      display: "flex",
    },
  })
);
