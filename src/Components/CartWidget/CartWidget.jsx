import styles from "./CartWidget.module.css";



import { BsCart4 } from "react-icons/bs";
const CartWidget = () => {
  return (
    <div >
      <span className={styles.cartNum} >0</span>
      <BsCart4 color="white" size={30} />
    </div>
  );
};

export default CartWidget;
