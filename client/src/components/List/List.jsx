import React from "react";
import "./List.scss";
import Card from "../Card/Card";
import useFetch from "../../hooks/useFetch";

const List = ({ subCats, maxPrice, sort, catId }) => {
  console.log(subCats);
  console.log(catId);
  console.log(maxPrice);
  console.log(sort);
  // const { data, loading, error } = useFetch(
  //   `/products?populate=*&[filters][categories][id]=${catId}${subCats.map(
  //     (item) => `&[filters][sub_categories][id][$eq]=${item}`
  //   )}&[filters][price][$lte]=${maxPrice}&sort=price:${sort}`
  // );
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][categories][id]=${catId}${subCats.map(
      (item) => `&[filters][sub_categories][id][$eq]=${item}`
    )}&[filters][price][$lte]=${maxPrice}`
  );

  return (
    <div className="list">
      {loading
        ? "loading"
        : data?.map((item) => <Card item={item} key={item.id} />)}
    </div>
  );
};

export default List;
