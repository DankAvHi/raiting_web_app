import { useCallback, useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { api } from "../api/index.api";
import Header from "../components/sections/Header/Header";
import Navigation from "../components/sections/Navigation/Navigation";
import useLoadTelegramUserData from "../hooks/useLoadTelegramUserData.hook";
import { Nominations } from "../types/Nominations.d";
import AppContext, { AppContextType } from "./App.context";
import styles from "./App.module.css";
import useAppRoutes from "./App.routes";

export const nominations: Nominations = [
     { id: "seller", text: "Продавец 2022 года" },
     { id: "manufacturer", text: "Лучший производитель" },
     { id: "forum", text: "Лучший форум 2022 года" },
];
export const nominationsID = ["seller", "manufacturer", "forum"];

const App = () => {
     const { checkUser } = api().useCheckUserApi();
     const { telegramUserData } = useLoadTelegramUserData();

     const [user, setUser] = useState<AppContextType["user"]>(null);

     const loadUser = useCallback(async () => {
          try {
               const data = await checkUser({ id: telegramUserData!.id });
               const user = data.user;

               return setUser({ ...telegramUserData, ...user });
          } catch (error) {
               console.error("cannot load user");
               setUser({ ...telegramUserData!, presents: null, voutes: null });
          }
     }, [checkUser, telegramUserData]);

     useEffect(() => {
          if (telegramUserData) {
               loadUser();
          }
     }, [telegramUserData, loadUser]);

     const appRoutes = useAppRoutes();

     if (!telegramUserData) {
          return <h2 className={styles.telegramAlert}>{"Не удалось получить данные из Telegram"}</h2>;
     }

     return (
          <AppContext.Provider value={{ user, loadUser }}>
               <div className={styles.App}>
                    <Navigation />
                    <main className={styles.main}>
                         <Header />
                         {appRoutes}
                    </main>
               </div>

               <ToastContainer />
          </AppContext.Provider>
     );
};

export default App;
