import { Button, List } from "@mui/material";

export const Products = ({ shops, changeShop }) => {
  return (
    <List>
      {shops
        .filter((el) => el.restaurant === changeShop)
        .map(({ _id, title, price }) => (
          <li key={_id}>
            <h3>{title}</h3>
            <p>
              <strong>Price:</strong> {price}
            </p>
            <Button variant="outlined">add to cart</Button>
          </li>
        ))}
    </List>
  );
};
