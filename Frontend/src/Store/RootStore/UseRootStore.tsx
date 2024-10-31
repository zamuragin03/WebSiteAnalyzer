import { useContext } from "react";

import { RootStore } from "./RootStore";
import { RootStoreContext } from "./RootStoreProvider";

export function useRootStore(): RootStore {
	const context = useContext(RootStoreContext);
	if (context === null) {
		throw new Error("useRootStore must be used within RootStoreProvider");
	}

	return context;
}