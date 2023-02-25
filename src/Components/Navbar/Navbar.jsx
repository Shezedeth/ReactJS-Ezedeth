// ESTILOS EN LINEA

// ESTILOS CSS
// import "./Navbar.css"

// MODULOS DE CSS
import styles from "./Navbar.module.css";

// IMPORTAR IMAGEN DE SRC
import imagen1 from "../../images/zapas.jpg";
import CartWidget from "../CartWidget/CartWidget";

const Navbar = () => {
  return (
    <div className={styles.containerNavbar}>
      <img
        src="https://res.cloudinary.com/dp9azkiny/image/upload/v1677287187/VAPORMAX%20360/273825413_626509361971613_8740050004896669238_n_vhsqe6.jpg"
        alt=""
        style={{ width: "5%", objectFit: "cover" }}
      />

      <ul className={styles.containerList}>
        <li><a className={styles.listaMarcas} href="#"> Nike</a></li>
        <li><a className={styles.listaMarcas} href="#"> Adidas</a></li>
        <li><a className={styles.listaMarcas} href="#"> Fila</a></li>
      </ul>
      <CartWidget />
    </div>
  );
};

export default Navbar;
