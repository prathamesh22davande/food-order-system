import React from "react";
import MenuItem from "./MenuItem";

const MenuList = () => {
  const MENU = [
    {
      id: 1,
      name: "Vegan Cold Brew",
      image:
        "https://images.unsplash.com/photo-1495221521568-8b714b2cb6fd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
      price: 25,
    },
    {
      id: 2,
      name: "Vanilla Cream Frappuccino®",
      image:
        "https://images.unsplash.com/photo-1592321675774-3de57f3ee0dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
      price: 20,
    },
    {
      id: 3,
      name: "New York Cheesecake",
      image:
        "https://images.unsplash.com/photo-1619985632461-f33748ef8f3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=668&q=80",
      price: 25,
    },
    {
      id: 4,
      name: "Almond & Butterscotch Cookie",
      image:
        "https://images.unsplash.com/photo-1627388483909-3c712c62d834?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
      price: 25,
    },
    {
      id: 5,
      name: "Caramel Macchiato",
      image:
        "https://images.unsplash.com/photo-1579888071069-c107a6f79d82?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
      price: 25,
    },
    {
      id: 6,
      name: "Vanilla Cupcakes",
      image:
        "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
      price: 25,
    },
  ];

  return (
    <div className="container mt-4">
      <div className="row">
        {MENU.map((dish) => {
          return (
            <MenuItem
              key={dish.id}
              id={dish.id}
              name={dish.name}
              price={dish.price}
              image={dish.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MenuList;
