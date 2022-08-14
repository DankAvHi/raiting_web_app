import GradientCircle from "../../components/GradientCircle/GradientCircle";
import styles from "./QuestionPage.module.css";

const QuestionPage = () => {
     return (
          <div className={styles.QuestionPage}>
               <h2 className={styles.heading}>{`Правила рейтинга`}</h2>
               <p className={styles.text}>
                    {`Вы можете голосовать в каждой из трех номинаций 1 раз в сутки. За каждый голос вы зарабатываете 1 голос на баланс, который можете потратить на прокрутку рулетки.`}
               </p>
               <p className={styles.text}>
                    {`Подведение итогов голосования намечено на конец 2022 года, где мы с вами узнаем лучшего продавца, производителя и лучший форум, которому доверяете в первую очередь вы.`}
               </p>
               <p className={styles.text}>{`Пусть победят сильнейшие!`}</p>
               <GradientCircle />
          </div>
     );
};

export default QuestionPage;
