import { PencilLine } from "phosphor-react";
import styles from './sidebar.module.css';
import { Avatar } from "./Avatar";

export function Sidebar() {

  return (


    <aside className={styles.sidebar}>
      <img className={styles.cover} src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3" />

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