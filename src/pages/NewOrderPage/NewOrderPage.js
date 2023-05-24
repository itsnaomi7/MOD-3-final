import { useState, useEffect, useRef } from 'react';
import * as itemsAPI from '../../utilities/items-api';
import * as ordersAPI from '../../utilities/orders-api';
import styles from './NewOrderPage.module.css';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../components/Logo/Logo';
import MenuList from '../../components/MenuList/MenuList';
import CategoryList from '../../components/CategoryList/CategoryList';
import OrderDetail from '../../components/OrderDetail/OrderDetail';
import UserLogOut from '../../components/UserLogOut/UserLogOut';
// import Logo from './images/logo';

export default function NewOrderPage({ user, setUser }) {
  const [menuItems, setMenuItems] = useState([]); //an array
  const [activeCat, setActiveCat] = useState('');
  const [cart, setCart] = useState(null);
  //useRef lets us keep a ref of an element through react like querySelector and then we can manipulate it
  const categoriesRef = useRef([]);
  const navigate = useNavigate();

  //will run when the page first mounts to the state
  useEffect(function() {
    async function getItems() {
        //getting all the items
      const items = await itemsAPI.getAll();
    //   looping through the items and selecting the catagories that exist putting them in an array - it remove the duplicate
      categoriesRef.current = items.reduce((cats, item) => {
        const cat = item.category.name;
        return cats.includes(cat) ? cats : [...cats, cat];
      }, []);
      setMenuItems(items);
      setActiveCat(categoriesRef.current[0]);
    }
    getItems();
    async function getCart() {
        //will get the cart and if none will create a new one
      const cart = await ordersAPI.getCart();
      setCart(cart);
    }
    getCart();
  }, []);
  // Providing an empty 'dependency array'
  // results in the effect running after
  // the FIRST render only

  /*-- Event Handlers --*/
  async function handleAddToOrder(itemId) {
    const updatedCart = await ordersAPI.addItemToCart(itemId);
    setCart(updatedCart);
  }

  async function handleChangeQty(itemId, newQty) {
    const updatedCart = await ordersAPI.setItemQtyInCart(itemId, newQty);
    setCart(updatedCart);
  }

  async function handleCheckout() {
    await ordersAPI.checkout();
    navigate('/orders');
  }

  return (
    <main className={styles.NewOrderPage}>
        {/* side bar */}
      <aside>
        <Logo />
        <CategoryList
          categories={categoriesRef.current}
          setActiveCat={setActiveCat}
          activeCat={activeCat}
        />
        <Link to="/orders" className="button btn-sm">PREVIOUS ORDERS</Link>
        <UserLogOut user={user} setUser={setUser} />
      </aside>
    {/* a menu list of the all array catagoriese  */}
      <MenuList
        menuItems={menuItems.filter(item => item.category.name === activeCat)}
        handleAddToOrder={handleAddToOrder}
      />
      {/* passing funcs to the order detail */}
      <OrderDetail
        order={cart}
        handleChangeQty={handleChangeQty}
        handleCheckout={handleCheckout}
      />
    </main>
  );
}