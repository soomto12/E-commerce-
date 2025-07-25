import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import { cartAction } from '../../store/cart-slice';
import { useDispatch } from 'react-redux';

const ProductItem = (props) => {
  const { title, price, description,Id } = props;
const dispatch = useDispatch();

function AddItemtoCart(){
dispatch(cartAction.addItemToCart({
Id,
title,
description,
price,

}))
}
  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={AddItemtoCart} >Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
