import { makeAutoObservable } from "mobx";
import { RootStore } from "../RootStore/RootStore";
type possibleActives = "websites" | "reports" | "notifications";
class SelectedModuleStore {
    private readonly root: RootStore;
    constructor(root: RootStore) {
        this.root = root;
        makeAutoObservable(this);
    }


    private _activeButton: possibleActives = "websites";
    public get activeButton(): possibleActives {
        return this._activeButton;
    }
    public setActiveButton(v: possibleActives) {
        this._activeButton = v;
    }
}

export default SelectedModuleStore;
