import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, Badge } from "react-bootstrap";
import { useParams } from "react-router";
import "../ProductDetail.css";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState("");

  const getProductDetail = async () => {
    const url = `https://my-json-server.typicode.com/YUNA9627/react-router-mall-practice/products/${id}`;
    const response = await fetch(url);
    const data = await response.json();
    setProduct(data);
  };

  useEffect(() => {
    getProductDetail();
  }, [id]);

  if (!product) {
  return <div>로딩중...</div>;
}

  return (
    <div className="product-detail-page">
      <Container className="py-5">
        <Row className="g-5">
          <Col md={6}>
            <div className="product-image-wrap">
              <img
                src={product.img}
                alt={product.title}
                className="product-detail-image"
              />
            </div>
          </Col>

          <Col md={6}>
            <div className="product-info-box">
              {product.new === true && (
                <Badge bg="dark" className="mb-3 px-3 py-2">
                  NEW
                </Badge>
              )}

              <h2 className="product-title">{product.title}</h2>

              <div className="price-box">
                <span className="product-price">
                  ₩{product.price?.toLocaleString()}
                </span>
              </div>

              <div className="option-section">
                <p className="option-title">사이즈</p>
                <div className="size-button-wrap">
                  {["S", "M", "L"].map((size) => (
                    <button
                      key={size}
                      className={`size-button ${
                        selectedSize === size ? "active" : ""
                      }`}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div className="selected-option-box">
                <div>
                  <strong>상품명:</strong> {product.title}
                </div>
                <div>
                  <strong>사이즈:</strong> {selectedSize || "선택 안 함"}
                </div>
              </div>

              <div className="total-box">
                <span>총 상품 금액</span>
                <strong>₩{product.price?.toLocaleString()}</strong>
              </div>

              <div className="action-buttons">
                <Button variant="outline-dark" size="lg">
                  장바구니
                </Button>
                <Button variant="dark" size="lg">
                  바로구매
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProductDetail;