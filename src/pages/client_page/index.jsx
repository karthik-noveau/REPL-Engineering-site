import MyComponent from "../../components/image_layout";
import { ScrollToTop } from "../../components/scrollto_top";
import { SingleBanner } from "../../components/single_banner";
import { CLIENTS_DATA } from "../home_page/constant";

import styles from "./client.module.css";

export default function Client() {
  ScrollToTop();
  return (
    <>
      <SingleBanner
        bgImage="https://firebasestorage.googleapis.com/v0/b/repl-f5b12.appspot.com/o/Img2.webp?alt=media&token=845251db-aa2d-4736-bf44-fe8e595020d8"
        content="CLIENTS"
      />
      <div className={styles.clientsWrapper}>
        <div className={styles.clientsContainer}>
          {false &&
            CLIENTS_DATA.map((item) => {
              return (
                <div className={styles.cardInfoContainer} key="client">
                  <img src={item.img} alt={item.name} />
                  <div className={styles.textInfo}>{item.name}</div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}
