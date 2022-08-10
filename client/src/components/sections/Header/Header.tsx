import { Link, useLocation } from "react-router-dom";
import { nominations } from "../../../app/App";
import Nomination from "./components/Nomination/Nomination";
import styles from "./Header.module.css";

const Header = () => {
     const location = useLocation();

     const locationID = location.hash.split("#")[1];

     return (
          <div className={styles.Header}>
               <Link className={styles.spin} to={"/spin"}>
                    {"Крутить барабан"}
               </Link>
               <div className={styles.nominations}>
                    {nominations.map((nomination) => (
                         <Nomination
                              key={nomination.id}
                              text={nomination.text}
                              id={nomination.id}
                              isActive={nomination.id === locationID}
                         />
                    ))}
               </div>
          </div>
     );
};

export default Header;
