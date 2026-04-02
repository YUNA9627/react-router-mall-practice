import React, { useEffect, useState } from "react";
import ProductCard from "../component/ProductCard";
import { Container, Row, Col } from "react-bootstrap";
import { useSearchParams } from "react-router";

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();
  const getProducts = async () => {
    let searchQuery = query.get('q') || "";
    console.log(searchQuery)
    let url = `https://my-json-server.typicode.com/YUNA9627/react-router-mall-practice/products?q=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();
    setProductList(data);
  };
  useEffect(() => {
    getProducts();
  }, [query]);

  return (
    <>
      <div>
        <Container>
          <Row>
            {productList
              .filter((item) => item.choice === true)
              .map((menu) => (
                <Col lg={3}>
                  <ProductCard item={menu} />
                </Col>
              ))}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default ProductAll;
