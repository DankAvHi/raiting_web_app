import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { Slide, toast } from "react-toastify";
import { api } from "../../api/index.api";
import AppContext from "../../app/App.context";
import GradientCircle from "../../components/GradientCircle/GradientCircle";
import styles from "./VoutePage.module.css";

type LocationStateType = {
     member: {
          name: string;
          url: string;
          voutes: number;
          nomination: string;
     };
};

const toastOptions = {
     autoClose: 1500,
     className: styles.notification,
     hideProgressBar: true,
     transition: Slide,
     closeButton: false,
};

const VoutePage = () => {
     const location = useLocation();
     const { voute, loading } = api().useVouteApi();
     const { user, loadUser } = useContext(AppContext);

     const { member } = location.state as LocationStateType;

     const vouteButtonDisabledClassName = user && user.voutes && user.voutes < 1 ? styles.voute_disabled : null;

     const vouteButtonOnClickHandler = async () => {
          try {
               if (!user) {
                    return toast("Не удалось отправить голос", toastOptions);
               }
               const data = await voute({ id: user.id, nomination: member.nomination });
               if (data.succes) {
                    toast("Спасибо за голос! Ваш баланс пополнен.", toastOptions);
                    loadUser();
               } else {
                    toast("Вы уже голосовали сегодня в этой номинации", toastOptions);
               }
          } catch (error) {
               toast("Не удалось отправить голос", toastOptions);
          }
     };
     return (
          <div className={styles.VoutePage}>
               <p className={styles.name}>{member.name}</p>
               <a href={member.url} target={"_blank"} rel="noreferrer" className={styles.url}>
                    {member.url}
               </a>
               <button
                    disabled={loading}
                    onClick={vouteButtonOnClickHandler}
                    className={`${styles.voute} ${vouteButtonDisabledClassName}`}
               >
                    {"Голосовать"}
               </button>

               <p className={styles.description}>
                    {
                         "Голосовать можно раз в сутки в каждой номинации. Ваш голос учтется в рейтинге в течение 5 минут с момента голосования."
                    }
               </p>
               <GradientCircle />
          </div>
     );
};

export default VoutePage;
