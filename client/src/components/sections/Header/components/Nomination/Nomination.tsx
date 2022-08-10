import { Link } from "react-router-dom";
import styles from "./Nomination.module.css";

type NominationType = {
     text: string;
     id: string;
     isActive: boolean;
};

const Nomination = ({ text, isActive, id }: NominationType) => {
     const activeClassName = isActive ? styles.border_active : null;

     return (
          <Link to={`/#${id}`} className={`${styles.Nomination} `}>
               <p className={styles.text}>{text}</p>

               <div className={`${styles.border} ${activeClassName}`}></div>
          </Link>
     );
};

export default Nomination;
