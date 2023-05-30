import { IoIosArrowDown } from "react-icons/io";
import { AiOutlineUser } from "react-icons/ai";
import logo from "../../assets/logo.png";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.menu}>
        <div>
          <img className="logo" src={logo} alt="logo" />
        </div>
          <ul>
            <li>
              <a>
                Invertir <IoIosArrowDown />
              </a>
            </li>
            <li>
              <a>Visor ML</a>
            </li>
            <li>
              <div><span><AiOutlineUser/></span><p>Iniciar sesión</p></div>
            </li>
            <li>
              <div>Crear cuenta</div>
            </li>
          </ul>
      </nav>
    </header>
  );
};
