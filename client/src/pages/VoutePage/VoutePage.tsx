import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Slide, toast } from "react-toastify";
import { api } from "../../api/index.api";
import AppContext from "../../app/App.context";
import GradientCircle from "../../components/GradientCircle/GradientCircle";
import styles from "./VoutePage.module.css";

type LocationStateType = {
     shop: {
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
     const navigate = useNavigate();
     const { voute, loading } = api().useVouteApi();
     const { user, loadUser } = useContext(AppContext);

     const { shop } = location.state as LocationStateType;

     const vouteButtonOnClickHandler = async () => {
          try {
               if (!user) {
                    return toast("Не удалось отправить голос", toastOptions);
               }
               const data = await voute({ id: user.id, nomination: shop.nomination });
               if (data.succes) {
                    toast("Ваш голос зачислится в ближайшее время", toastOptions);
                    navigate("/main");
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
               <p className={styles.name}>{shop.name}</p>
               <a href={shop.url} target={"_blank"} rel="noreferrer" className={styles.url}>
                    {shop.url}
               </a>
               <button disabled={loading} onClick={vouteButtonOnClickHandler} className={styles.voute}>
                    {"Голосовать"}
               </button>
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
