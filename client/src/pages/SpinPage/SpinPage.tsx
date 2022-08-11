import { useContext, useEffect, useState } from "react";
import { api } from "../../api/index.api";
import AppContext from "../../app/App.context";
import GradientCircle from "../../components/GradientCircle/GradientCircle";
import { Wheel } from "../../package/react-custom-roulette";
import { WheelData } from "../../package/react-custom-roulette/components/Wheel/types";
import { Present } from "../../types/Present";
import PrizeModal from "./components/PrizeModal/PrizeModal";
import styles from "./SpinPage.module.css";

const SpinPage = () => {
     const { user, loadUser } = useContext(AppContext);
     const { loadPresents, loading } = api().useLoadPresentsApi();
     const { spinRoulette } = api().useSpinRouletteApi();

     const [start, setStart] = useState(false);
     const [presents, setPresents] = useState<Present[]>();
     const [prizeNumber, setPrizeNumber] = useState(0);
     const [showPrizeModal, setShowPrizeModal] = useState(false);
     const [prize, setPrize] = useState<Present | null>(null);

     const prizes: WheelData[] =
          presents?.map((present, index) => ({ option: present.name, id: present.idpresent })) || [];

     useEffect(() => {
          const loadPresentsState = async () => {
               const data: { presents: Present[] } = await loadPresents();
               setPresents(data.presents);
          };

          loadPresentsState();
     }, [loadPresents]);

     useEffect(() => {
          if (!start) {
               const newPrizeNumber = Math.floor(Math.random() * prizes.length);
               setPrizeNumber(newPrizeNumber);
          }
     }, [start, prizes.length]);

     const spinButtonOnClickHandler = () => {
          if (user!.voutes! > 0) setStart(true);
     };

     const wheelOnStopHandler = async () => {
          if (user!.voutes! > 0) {
               const prize = prizes[prizeNumber];
               try {
                    const data = await spinRoulette({ iduser: user!.id, idpresent: prize.id });
                    setPrize(data.present);
                    setShowPrizeModal(true);
                    loadUser();
               } catch (error) {
                    console.error(error);
               }
               setStart(false);
          }
     };

     if (!presents) {
          return <p className={styles.loading}>{"Загрузка..."}</p>;
     }
     if (!loading && !presents) {
          return <p className={styles.loading}>{"Ошибка при загрузке призов"}</p>;
     }

     return (
          <>
               <div className={styles.SpinPage}>
                    <div className={styles.wheelContainer}>
                         <Wheel
                              mustStartSpinning={start}
                              prizeNumber={prizeNumber}
                              data={prizes}
                              backgroundColors={["#42CC36", "#BBC82B"]}
                              textColors={["#000"]}
                              onStopSpinning={wheelOnStopHandler}
                              fontSize={16}
                              outerBorderWidth={0}
                              spinDuration={0.2}
                              radiusLineColor={"#272A26"}
                              textDistance={55}
                         />
                    </div>
                    <button
                         disabled={start || user!.voutes! < 1}
                         className={styles.spinButton}
                         onClick={spinButtonOnClickHandler}
                    >
                         {"Крутить"}
                    </button>
                    <p className={styles.description}>
                         {
                              "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
                         }
                    </p>
               </div>
               {showPrizeModal ? (
                    <PrizeModal setShowPrizeModal={setShowPrizeModal} prize={prize!} setPrize={setPrize} />
               ) : null}

               <GradientCircle />
          </>
     );
};

export default SpinPage;
