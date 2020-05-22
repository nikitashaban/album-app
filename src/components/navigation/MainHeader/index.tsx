import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { observer } from "mobx-react-lite";

import NavLinks from "../NavLinks";
import AuthStore from "../../../stores/auth";
import { useStyles } from "./style";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Button from "@material-ui/core/Button";

const MainHeader: React.FC = () => {
  const history = useHistory();
  const { setIsAuth } = useContext(AuthStore);
  const classes = useStyles();
  const exitHandler = () => {
    setIsAuth(false);
    localStorage.clear();
    history.push("/");
  };
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Button
            onClick={exitHandler}
            startIcon={<ExitToAppIcon />}
            color="inherit"
          >
            LOGOUT
          </Button>
          <div className={classes.linkWrapper}>
            <NavLinks />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default observer(MainHeader);
