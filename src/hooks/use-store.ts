import React, { useContext } from "react";
import { Store } from "../stores/store";

const StoreContext = React.createContext(new Store());

export const useStore = () => useContext(StoreContext);
