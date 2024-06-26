import { createContext } from "react";
import { User } from "../types/User";

export type AppContextType = {
     user: User;
     loadUser: () => Promise<void>;
};

const initialContext: AppContextType = {
     user: null,
     loadUser: async () => {},
};

const AppContext = createContext(initialContext);

export default AppContext;
