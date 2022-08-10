import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import backImage from "./assets/backImage.png";
import questionImage from "./assets/questionImage.png";
import styles from "./Navigation.module.css";

const Navigation = () => {
     const location = useLocation();

     const [showBackButton, setShowBackButton] = useState(false);

     const backButtonOnClickHandler = () => window.history.back();

     useEffect(() => {
          setShowBackButton(!(location.pathname === "/"));
     }, [location.pathname]);

     return (
          <div className={styles.Navigation}>
               {showBackButton ? (
                    <button className={`${styles.back} `} onClick={backButtonOnClickHandler}>
                         <img src={backImage} alt="" />
                    </button>
               ) : (
                    <div className={styles.fakeBack}></div>
               )}

               <div className={styles.info}>
                    <p className={styles.balance}>
                         <span className={styles.balanceLabel}>{"Баланс: "}</span>
                         <span className={styles.balanceValue}>{"1 голос"}</span>
                    </p>
                    <p className={styles.nick}>{"Arlene McCoy"}</p>
               </div>
               <Link to={"/question"}>
                    <img src={questionImage} alt="" />
               </Link>
          </div>
     );
};

export default Navigation;
