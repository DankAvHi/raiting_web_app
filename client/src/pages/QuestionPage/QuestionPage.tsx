import GradientCircle from "../../components/GradientCircle/GradientCircle";
import styles from "./QuestionPage.module.css";

const QuestionPage = () => {
     return (
          <div className={styles.QuestionPage}>
               <p className={styles.text}>
                    {
                         "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
                    }
               </p>
               <p className={styles.text}>
                    {
                         "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
                    }
               </p>
               <GradientCircle />
          </div>
     );
};

export default QuestionPage;
