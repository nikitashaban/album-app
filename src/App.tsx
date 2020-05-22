import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { observer } from "mobx-react-lite";

import Favorites from "./pages/Favorites";
import AuthStore from "./stores/auth";
import Auth from "./pages/Auth";
import Albums from "./pages/Albums";
import AlbumPhotos from "./pages/AlbumPhotos";
import MainHeader from "./components/navigation/MainHeader";

const App: React.FC = () => {
  const { isAuth } = useContext(AuthStore);

  if (isAuth) {
    return (
      <React.Fragment>
        <MainHeader />
        <Switch>
          <Route path="/albums/:id" component={AlbumPhotos} />
          <Route path="/albums" component={Albums} />
          <Route path="/favorites" component={Favorites} />
          <Redirect to="/albums" />
        </Switch>
      </React.Fragment>
    );
  } else {
    return (
      <Switch>
        <Route path="/" component={Auth} />
        <Redirect to="/" />
      </Switch>
    );
  }
};

export default observer(App);
