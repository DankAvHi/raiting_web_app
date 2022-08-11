import { useContext, useEffect, useState } from "react";
import { api } from "../../api/index.api";
import AppContext from "../../app/App.context";
import { Present } from "../../types/Present";
import styles from "./PrizesPage.module.css";

const PrizesPage = () => {
     const { user } = useContext(AppContext);
     const { loadPrizes, loading } = api().useLoadPrizesApi();

     const [prizes, setPrizes] = useState<Present[] | null>(null);

     useEffect(() => {
          const setLoadedPrizes = async () => {
               const data: { prizes: Present[] } = await loadPrizes({ id: user?.id || 0 });
               setPrizes(data.prizes);
          };

          setLoadedPrizes();
     }, [loadPrizes, user]);

     if (loading) {
          return <h2 className={styles.noData}>{"Загрузка..."}</h2>;
     }

     if (!prizes || loading) {
          return <h2 className={styles.noData}>{"Не удалось загрузить призы"}</h2>;
     }

     return (
          <div className={styles.PrizesPage}>
               <h2 className={styles.heading}>{"Ваши призы"}</h2>
               <ul className={styles.prizeList}>
                    {prizes!.length ? (
                         prizes!.map((prize) => {
                              return (
                                   <div className={styles.prize}>
                                        <h3 className={styles.name}>{prize.name}</h3>
                                        <p className={styles.description}>{prize.description}</p>
                                        <p className={styles.chance}>{`Шанс получения: ${prize.chance}%`}</p>
                                   </div>
                              );
                         })
                    ) : (
                         <h2 className={styles.noData}>{"У вас пока нет призов, выиграйте их крутя барабан"}</h2>
                    )}
               </ul>
          </div>
     );
};

export default PrizesPage;
