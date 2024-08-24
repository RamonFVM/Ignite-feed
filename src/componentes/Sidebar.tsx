import { PencilLine } from "phosphor-react";
import styles from './sidebar.module.css';
import { Avatar } from "./Avatar";

export function Sidebar() {

  return (


    <aside className={styles.sidebar}>
      <img className={styles.cover} src="https://media.licdn.com/dms/image/v2/C4D12AQHqYs1tliOEnQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1579376773402?e=2147483647&v=beta&t=GWuuTYcP3pJepVfYbSjbf24-Fia2tNu1C9qjejRGZnA" />

      <div className={styles.profile}>

          <Avatar hasBorder src="https://avatars.githubusercontent.com/u/162641988?v=4"/>
        



        <strong> Ramon Fhelipe </strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine />
          Editar seu perfil
        </a>
      </footer>
    </aside>


  );
}