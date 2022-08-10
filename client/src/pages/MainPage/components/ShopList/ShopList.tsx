import { Link } from "react-router-dom";
import styles from "./ShopList.module.css";

type ShopListProps = {
     shopList: { name: string; url: string; voutes: number }[] | undefined;
     loading: boolean;
};

const ShopList = ({ shopList, loading }: ShopListProps) => {
     if (loading) {
          return <h2>{"Загрузка..."}</h2>;
     }
     if (!shopList) {
          return <h2>{"Не удалось загрузить список"}</h2>;
     }
     return (
          <div className={styles.ShopList}>
               {shopList.map((shop, index) => (
                    <div className={styles.shop} key={`${shop.url}${shop.name}${shop.voutes}`}>
                         <div className={styles.info}>
                              <div className={styles.infoBackground}></div>
                              <p className={styles.topPlace}>{`${index + 1} место`}</p>
                              <p className={styles.name}>{shop.name}</p>
                              <a href={shop.url} rel="noreferrer" target={"_blank"} className={styles.url}>
                                   {shop.url}
                              </a>
                         </div>
                         <div className={styles.action}>
                              <p className={styles.voutes}>{`${shop.voutes} голосов`}</p>
                              <Link state={{ shop }} className={styles.voute} to={`/voute/${shop.name}`}>
                                   {"Голосовать"}
                              </Link>
                         </div>
                    </div>
               ))}
          </div>
     );
};

export default ShopList;
