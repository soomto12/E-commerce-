import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';


const Cart = (props) => {
const cartItem = useSelector(state=>state.cart.items);

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItem.map((item)=>(
          <CartItem item={{ title:item.name, quantity:item.quantity, price:item.price, total:item.totalPrice, id:item.id  }} />
        ))}
      </ul>
    </Card>
  );
};

export default Cart;
