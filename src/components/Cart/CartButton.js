import classes from './CartButton.module.css';
import { uiAction } from '../../store/ui-slice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const CartButton = (props) => {
  const dispatch = useDispatch()
  function toogleCartHandeler(){
dispatch(uiAction.toggle());
  }

  const quantity = useSelector((state=>state.cart.Qunatity))
  return (
    <button className={classes.button} onClick={toogleCartHandeler}>
      <span>My Cart</span>
      <span className={classes.badge}>{quantity}</span>
    </button>
  );
};

export default CartButton;
