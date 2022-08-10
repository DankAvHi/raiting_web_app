import { Link, useLocation } from "react-router-dom";
import { nominations, nominationsID } from "../../../app/App";
import Nomination from "./components/Nomination/Nomination";
import styles from "./Header.module.css";

const Header = () => {
     const location = useLocation();

     const locationID = location.hash.split("#")[1];

     const checkIsNominationActive = (id: string, index: number) => {
          return (
               location.pathname === "/main" &&
               (id === locationID ||
                    (index === 0 && (typeof locationID === "undefined" || nominationsID.indexOf(locationID) === -1)))
          );
     };

     return (
          <div className={styles.Header}>
               <Link className={styles.spin} to={"/spin"}>
                    {"Крутить барабан"}
               </Link>
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
