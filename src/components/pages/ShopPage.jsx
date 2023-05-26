import { useEffect, useState } from "react";
import { fetchShops } from "service/api";

const ShopPage = () => {
  const [shops, setShops] = useState([]);

  useEffect(() => {
    const products = async () => {
      try {
        const shops = await fetchShops();
        setShops(shops);
        console.log(shops);
      } catch (error) {
        console.log(error);
      }
    };
    products();
  }, []);

  return (
    <section>
      <h1>Shops</h1>
      <h2>Burger King</h2>
      <h2>"CFK"</h2>
      <ul>
        {shops.map(({ _id, title, price }) => (
          <li key={_id}>
            <h3>{title}</h3>
            <p>
              <strong>Price:</strong> {price}
            </p>
            <button>add cart</button>
          </li>
        ))}
      </ul>
    </section>
  );
};
export default ShopPage;
