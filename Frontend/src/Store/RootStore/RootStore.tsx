import LoginFormVisibilityStore from "../LoginFormVisibilityStore/LoginFormVisibilityStore";
import SelectedModuleStore from "../SelectedModuleStore/SelectedModuleStore";

export class RootStore {
    LoginFormVisibilityStore: LoginFormVisibilityStore;
    SelectedModuleStore: SelectedModuleStore;

    constructor() {
        this.LoginFormVisibilityStore = new LoginFormVisibilityStore(this);
        this.SelectedModuleStore = new SelectedModuleStore(this);
    }
}