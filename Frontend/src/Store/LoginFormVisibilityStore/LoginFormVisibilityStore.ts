import { makeAutoObservable } from "mobx";
import { RootStore } from "../RootStore/RootStore";
type possibleActives = "login" | "register" | "forgotPassword";
class LoginFormVisibilityStore {
  private readonly root: RootStore;
  constructor(root: RootStore) {
    this.root = root;
    makeAutoObservable(this);
  }

  private _isVisible: boolean = false;
  public get isVisible(): boolean {
    return this._isVisible;
  }
  public setIsVisible(v: boolean) {
    this._isVisible = v;
  }

  private _activeButton: possibleActives = "login";
  public get activeButton(): possibleActives {
    return this._activeButton;
  }
  public setActiveButton(v: possibleActives) {
    this._activeButton = v;
  }
}

export default LoginFormVisibilityStore;
