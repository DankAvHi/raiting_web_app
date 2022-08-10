import { createContext } from "react";
import { User } from "../types/User";

export type AppContextType = {
     user: User;
};

const initialContext: AppContextType = {
     user: undefined,
};

const AppContext = createContext(initialContext);

export default AppContext;
