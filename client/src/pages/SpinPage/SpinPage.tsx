import { useState } from "react";
import "react-roulette-pro/dist/index.css";
import GradientCircle from "../../components/GradientCircle/GradientCircle";
import styles from "./SpinPage.module.css";

const presents = [
     { id: 1, text: "sdf", image: "sdf" },
     { id: 12, text: "sdf", image: "sdf" },
     { id: 13, text: "sdf", image: "sdf" },
     { id: 14, text: "sdf", image: "sdf" },
     { id: 15, text: "sdf", image: "sdf" },
     { id: 16, text: "sdf", image: "sdf" },
     { id: 17, text: "sdf", image: "sdf" },
     { id: 18, text: "sdf", image: "sdf" },
];

const SpinPage = () => {
     const [start, setStart] = useState(false);
     return (
          <div className={styles.SpinPage}>
               <button
                    onClick={() => {
                         setStart((prev) => !prev);
                    }}
               >
                    Start
               </button>
               <GradientCircle />
          </div>
     );
};

export default SpinPage;
