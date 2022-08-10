import Header from "../components/sections/Header/Header";
import Navigation from "../components/sections/Navigation/Navigation";
import { Nominations } from "../types/Nominations.d";
import styles from "./App.module.css";
import useAppRoutes from "./App.routes";

export const nominations: Nominations = [
     { id: "seller", text: "Продавец 2022 года" },
     { id: "manufacturer", text: "Лучший производитель" },
     { id: "forum", text: "Лучший форум 2022 года" },
];

const App = () => {
     const appRoutes = useAppRoutes();
     return (
          <div className={styles.App}>
               <Navigation />
               <main className={styles.main}>
                    <Header />
                    {appRoutes}
               </main>
          </div>
     );
};

export default App;
