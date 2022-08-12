import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { api } from "../../api/index.api";
import { nominations } from "../../app/App";
import MemberList from "./components/MemberList/MemberList";
import styles from "./MainPage.module.css";

const MainPage = () => {
     const { loadMembers, loading } = api().useLoadMembersApi();
     const location = useLocation();

     const locationID = location.hash.split("#")[1];

     const [memberList, setMemberList] = useState();
     const [allVoutesCount, setAllVoutesCount] = useState<number | undefined>();

     useEffect(() => {
          const loadMemberList = async () => {
               const nomination = nominations.filter((nomination) => nomination.id === locationID)[0]?.id;
               const data = await loadMembers({ nomination: nomination ? nomination : nominations[0].id });
               const allVoutesCount: number = data.members.reduce(
                    (voutesCount: number, a: { voutes: number }) => voutesCount + a.voutes,
                    0
               );
               setAllVoutesCount(allVoutesCount);
               setMemberList(data.members);
          };

          loadMemberList();
     }, [loadMembers, locationID]);

     return (
          <div className={styles.MainPage}>
               {!loading && allVoutesCount ? (
                    <div className={styles.allVoutes}>
                         <p className={styles.allVoutesHeading}>{"Всего проголосовали"}</p>
                         <p className={styles.allVoutesValue}>{`${allVoutesCount} раза`}</p>
                    </div>
               ) : null}
               <MemberList memberList={memberList} loading={loading} />
          </div>
     );
};

export default MainPage;
