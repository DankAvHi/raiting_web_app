import { Present } from "../../../../types/Present";
import styles from "./PrizeModal.module.css";

type PrizeModalProps = {
     prize: Present;
     setPrize: React.Dispatch<React.SetStateAction<Present | null>>;
     setShowPrizeModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const PrizeModal = ({ prize, setPrize, setShowPrizeModal }: PrizeModalProps) => {
     const closeButtonOnClickHandler = () => {
          setShowPrizeModal(false);
          setPrize(null);
     };
     return (
          <div className={styles.PrizeModal}>
               <div className={styles.container}>
                    <h2 className={styles.name}>{`Вы получили ${prize.name}`}</h2>
                    <p className={styles.description}>{prize.description}</p>
                    <p className={styles.chance}>{`Шанс выпадения: ${prize.chance}%`}</p>
                    <button onClick={closeButtonOnClickHandler} className={styles.close}>
                         {"Закрыть"}
                    </button>
               </div>
          </div>
     );
};

export default PrizeModal;
