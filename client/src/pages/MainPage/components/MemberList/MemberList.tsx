import { Link } from "react-router-dom";
import styles from "./MemberList.module.css";

type MemberListProps = {
     memberList: { name: string; url: string; voutes: number; nomination: string }[] | undefined;
     loading: boolean;
};

const MemberList = ({ memberList, loading }: MemberListProps) => {
     if (loading) {
          return <h2 className={styles.noData}>{"Загрузка..."}</h2>;
     }
     if (!memberList) {
          return <h2 className={styles.noData}>{"Не удалось загрузить список"}</h2>;
     }
     return (
          <div className={styles.MemberList}>
               {memberList.map((member, index) => (
                    <Link
                         state={{ member }}
                         className={styles.member}
                         to={`/voute/${member.name}`}
                         key={`${member.url}${member.name}${member.voutes}`}
                    >
                         <div className={styles.info}>
                              <div className={styles.infoBackground}></div>
                              <p className={styles.topPlace}>{`${index + 1} место`}</p>
                              <p className={styles.name}>{member.name}</p>
                              <a href={member.url} rel="noreferrer" target={"_blank"} className={styles.url}>
                                   {member.url}
                              </a>
                         </div>
                         <div className={styles.action}>
                              <p className={styles.voutes}>{`${member.voutes} голосов`}</p>
                              <Link state={{ member }} className={styles.voute} to={`/voute/${member.name}`}>
                                   {"Голосовать"}
                              </Link>
                         </div>
                    </Link>
               ))}
          </div>
     );
};

export default MemberList;
