import { observable, action } from "mobx";
import { createContext } from "react";

class AuthStore {
  @observable isAuth: boolean = Boolean(localStorage.getItem("user"));

  @action setIsAuth = (isAuth: boolean) => {
    this.isAuth = isAuth;
  };
}

const store = new AuthStore();

export default createContext(store);
