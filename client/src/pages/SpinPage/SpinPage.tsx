import { useContext, useEffect, useMemo, useState } from "react";
import { api } from "../../api/index.api";
import AppContext from "../../app/App.context";
import GradientCircle from "../../components/GradientCircle/GradientCircle";
import { Wheel } from "../../package/react-custom-roulette";
import { WheelData } from "../../package/react-custom-roulette/components/Wheel/types";
import { Present } from "../../types/Present";
import PrizeModal from "./components/PrizeModal/PrizeModal";
import styles from "./SpinPage.module.css";

const randomizer = (values: WheelData[]) => {
     let i,
          pickedValue,
          randomNr = Math.random() * 100,
          threshold = 0;

     for (i = 0; i < values.length; i++) {
          if (values[i].chance >= 100) {
               pickedValue = i;
               break;
          }
          if (values[i].chance < 1) {
               continue;
          }

          threshold += values[i].chance;
          if (threshold > randomNr) {
               pickedValue = i;
               break;
          }
     }

     return pickedValue || 0;
};

const SpinPage = () => {
     const { user, loadUser } = useContext(AppContext);
     const { loadPresents, loading } = api().useLoadPresentsApi();
     const { spinRoulette } = api().useSpinRouletteApi();

     const [start, setStart] = useState(false);
     const [presents, setPresents] = useState<Present[]>();
     const [prizeNumber, setPrizeNumber] = useState<number | null>(null);
     const [showPrizeModal, setShowPrizeModal] = useState(false);
     const [prize, setPrize] = useState<Present | null>(null);

     const prizes: WheelData[] = useMemo(
          () =>
               presents?.map((present, index) => ({
                    option: present.name,
                    id: present.idpresent,
                    chance: present.chance,
               })) || [],
          [presents]
     );

     useEffect(() => {
          const loadPresentsState = async () => {
               const data: { presents: Present[] } = await loadPresents();
               setPresents(data.presents);
          };

          loadPresentsState();
     }, [loadPresents]);

     useEffect(() => {
          if (!start) {
               setPrizeNumber(randomizer(prizes.filter((value) => value.chance > 0)));
               setStart(false);
          }
     }, [start, prizes]);

     const spinButtonOnClickHandler = () => {
          if (user!.voutes! > 0) setStart(true);
     };

     const wheelOnStopHandler = async () => {
          if (user!.voutes! > 0) {
               const prize = prizes[prizeNumber || 0];
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
     if (prizeNumber === null) {
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
                              backgroundColors={["#0cd33e", "#cde033"]}
                              textColors={["#000"]}
                              onStopSpinning={wheelOnStopHandler}
                              fontSize={16}
                              outerBorderWidth={0}
                              spinDuration={1.4}
                              radiusLineColor={"#272A26"}
                              textDistance={55}
                         />
                    </div>
                    <button
                         disabled={start || (user !== null && user.voutes !== null && user.voutes < 1)}
                         className={styles.spinButton}
                         onClick={spinButtonOnClickHandler}
                    >
                         {"Крутить"}
                    </button>
                    <p className={styles.description}>
                         {`Голосуйте каждый день во всех трех номинациях, чтобы зарабатывать голоса на свой баланс и тратить их здесь.
                              Самые удачливые заберут самые жирные призы!`}
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
