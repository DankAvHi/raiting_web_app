import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { api } from "../../api/index.api";
import { nominations } from "../../app/App";
import ShopList from "./components/ShopList/ShopList";
import styles from "./MainPage.module.css";

const allVoutes = 12_123_123;

const MainPage = () => {
     const { loadShops, loading } = api().useLoadShopsApi();
     const location = useLocation();

     const locationID = location.hash.split("#")[1];

     const [shopList, setShopList] = useState();

     useEffect(() => {
          const loadShopList = async () => {
               const nomination = nominations.filter((nomination) => nomination.id === locationID)[0]?.id;
               const data = await loadShops({ nomination: nomination ? nomination : nominations[0].id });
               setShopList(data.shops);
          };

          loadShopList();
     }, [loadShops, locationID]);

     return (
          <div className={styles.MainPage}>
               <div className={styles.allVoutes}>
                    <p className={styles.allVoutesHeading}>{"Всего проголосовали"}</p>
                    <p className={styles.allVoutesValue}>{`${allVoutes} раза`}</p>
               </div>
               <ShopList shopList={shopList} loading={loading} />
          </div>
     );
};

export default MainPage;
