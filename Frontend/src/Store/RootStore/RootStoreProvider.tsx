import React, { createContext } from "react";

import { RootStore } from "./RootStore";
let store: RootStore;

// eslint-disable-next-line @typescript-eslint/naming-convention
export const RootStoreContext = createContext<RootStore | null>(null);

export function RootStoreProvider({ children }: { children: React.ReactNode }): JSX.Element {
	store ??= new RootStore();
	return <RootStoreContext.Provider value={store}>{children}</RootStoreContext.Provider>;
}