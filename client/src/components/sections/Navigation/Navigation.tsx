import { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import AppContext from "../../../app/App.context";
import backImage from "./assets/backImage.png";
import questionImage from "./assets/questionImage.png";
import styles from "./Navigation.module.css";

const Navigation = () => {
     const location = useLocation();
     const { user } = useContext(AppContext);

     const [showBackButton, setShowBackButton] = useState(false);

     useEffect(() => {
          setShowBackButton(!(location.pathname === "/"));
     }, [location.pathname]);

     return (
          <div className={styles.Navigation}>
               {showBackButton ? (
                    <Link className={`${styles.back} `} to={"/main"}>
                         <img src={backImage} alt="" />
                    </Link>
               ) : (
                    <div className={styles.fakeBack}></div>
               )}

               <div className={styles.info}>
                    <p className={styles.balance}>
                         <span className={styles.balanceLabel}>{"Баланс: "}</span>
                         <span className={styles.balanceValue}>{`${user?.voutes} голос`}</span>
                    </p>
                    <p className={styles.nick}>{`${user?.name}`}</p>
               </div>
               <Link to={"/question"}>
                    <img src={questionImage} alt="" />
               </Link>
          </div>
     );
};

export default Navigation;
