import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      margin: "0 auto",
      maxWidth: 400,
      "& > .MuiFormControl-root": {
        margin: theme.spacing(1),
        width: "100%",
      },
      "& > button": {
        width: "100%",
        margin: theme.spacing(1),
      },
    },
    invalidText: {
      color: "red",
    },
  })
);
