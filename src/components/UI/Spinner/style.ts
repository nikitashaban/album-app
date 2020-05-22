import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    spinner: {
      marginTop: 100,
      marginLeft: "45%",
      height: 150,
      width: 150,
      color: theme.palette.primary.main,
      position: "relative",
      display: "inline-block",
      border: "10px solid",
      borderRadius: "50%",
      borderTopColor: "transparent",
      animation: `$rotate 1s linear infinite`,
    },
    "@keyframes rotate": {
      "0%": {
        transform: "rotate(0)",
      },
      "100%": {
        transform: "rotate(360deg)",
      },
    },
  })
);
