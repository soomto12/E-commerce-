import classes from './CartItem.module.css';
import { useDispatch } from 'react-redux';
import { cartAction } from '../../store/cart-slice';
const CartItem = (props) => {
const dispatch = useDispatch()

  const { title, quantity, total, price,id } = props.item;

  function RemoveItemHandeler(){
    dispatch( cartAction.removeItemFromCart(id))
  }

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total}
          <span className={classes.itemprice}>(${price}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={RemoveItemHandeler}>-</button>
          <button>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
