import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { Slide, toast } from "react-toastify";
import { nominations, nominationsID } from "../../../app/App";
import AppContext from "../../../app/App.context";
import Nomination from "./components/Nomination/Nomination";
import styles from "./Header.module.css";

const Header = () => {
     const location = useLocation();
     const { user } = useContext(AppContext);

     const locationID = location.hash.split("#")[1];

     const checkIsNominationActive = (id: string, index: number) => {
          return (
               location.pathname === "/main" &&
               (id === locationID ||
                    (index === 0 && (typeof locationID === "undefined" || nominationsID.indexOf(locationID) === -1)))
          );
     };

     const vouteButtonNoVoutesOnClickHandler = () => {
          toast(
               typeof user?.voutes !== "undefined" && user.voutes !== null
                    ? "У вас нет голосов, заработайте их голосуя в номинациях"
                    : "Не удалось загрузить информацию о балансе голосов",
               {
                    position: "top-right",
                    autoClose: 1500,
                    className: styles.notification,
                    hideProgressBar: true,
                    transition: Slide,
                    closeButton: false,
               }
          );
     };

     return (
          <div className={styles.Header}>
               {location.pathname !== "/spin" ? (
                    user?.voutes && user.voutes > 0 ? (
                         <Link className={styles.spin} to={"/spin"}>
                              {"Крутить барабан"}
                         </Link>
                    ) : (
                         <button
                              onClick={vouteButtonNoVoutesOnClickHandler}
                              className={`${styles.spin} ${styles.spin_disabled}`}
                         >
                              {"Крутить барабан"}
                         </button>
                    )
               ) : null}
               <div className={styles.nominations}>
                    {nominations.map((nomination, index) => (
                         <Nomination
                              key={nomination.id}
                              text={nomination.text}
                              id={nomination.id}
                              isActive={checkIsNominationActive(nomination.id, index)}
                         />
                    ))}
               </div>
          </div>
     );
};

export default Header;
