import React, { useState } from "react";
import styled from "styled-components";
import MainCard from "./MainCard";
import { products } from "../utils/constants/products";
import Like from "../assets/icons/favoriteLike.svg";
import Heart from "../assets/icons/heart.svg";

const MainCardGrid = () => {
  const [likedItems, setLikedItems] = useState({});

  const toggleLike = (id) => {
    setLikedItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <Grid>
      {products.map((product) => (
        <MainCard
          key={product.id}
          {...product}
          liked={likedItems[product.id]}
          
        />
      ))}
    </Grid>
  );
};

export default MainCardGrid;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(335px, 1fr));
  gap: 3rem;
  padding: 5rem;
`;
