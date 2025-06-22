import ProductItem from './ProductItem';
import classes from './Products.module.css'



const DummyProduct =[{
  Id:"p1",
  price:30,
  title:'my first Book',
  name:"the first book i ever wrote"

},
{
  Id:"p2",
  price:20,
  title:'my second Book',
  name:"the second book i ever wrote"

},
{
  Id:"p3",
  price:15,
  title:'my third Book',
  name:"the third book i ever wrote"

},

]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
{DummyProduct.map((products)=>(
  <ProductItem key={products.Id} Id={products.Id} title={products.title} price={products.price} description={products.name}  />
)
)}
      </ul>
     
      
    </section>
  );
};

export default Products;
