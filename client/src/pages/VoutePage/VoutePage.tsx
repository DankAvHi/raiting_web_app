import { useLocation } from "react-router-dom";
import GradientCircle from "../../components/GradientCircle/GradientCircle";
import styles from "./VoutePage.module.css";

type LocationStateType = {
     shop: {
          name: string;
          url: string;
          voutes: number;
     };
};

const VoutePage = () => {
     const location = useLocation();
     const { shop } = location.state as LocationStateType;
     return (
          <div className={styles.VoutePage}>
               <p className={styles.name}>{shop.name}</p>
               <a href={shop.url} target={"_blank"} rel="noreferrer" className={styles.url}>
                    {shop.url}
               </a>
               <button className={styles.voute}>{"Голосовать"}</button>
               <p className={styles.description}>
                    {
                         "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
                    }
               </p>
               <GradientCircle />
          </div>
     );
};

export default VoutePage;
