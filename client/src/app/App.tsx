import { useEffect, useState } from "react";
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
     const appRoutes = useAppRoutes();
     const { checkUser, loading: userLoading } = api().useCheckUserApi();
     const { telegramUserData } = useLoadTelegramUserData();

     const [user, setUser] = useState<AppContextType["user"]>();

     useEffect(() => {
          if (telegramUserData) {
               const loadUser = async () => {
                    const data = await checkUser({ id: telegramUserData.id });
                    const user = data.user;
                    setUser({ ...telegramUserData, ...user });
               };

               loadUser();
          }
     }, [telegramUserData]);

     if (!telegramUserData) {
          return <h2 className={styles.telegramAlert}>{"Не удалось получить данные из Telegram"}</h2>;
     }

     if (userLoading) {
          return null;
     }

     return (
          <AppContext.Provider value={{ user }}>
               <div className={styles.App}>
                    <Navigation />
                    <main className={styles.main}>
                         <Header />
                         {appRoutes}
                    </main>
               </div>
          </AppContext.Provider>
     );
};

export default App;
