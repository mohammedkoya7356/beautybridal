import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ScrollReveal from "scrollreveal";
import axios from "axios";
import "./ShopNow.css";

const API = import.meta.env.VITE_API_URL;  // 🔥 Uses your deployed backend URL

const ShopNow = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);   // 🔥 Dynamic products from DB
  const [loadingId, setLoadingId] = useState(null);

  // ⭐ Fetch book cards from backend
  const fetchProducts = async () => {
    try {
      const res = await axios.get(`${API}/api/book-cards`);
      setProducts(res.data);
    } catch (error) {
      console.error("Error fetching cards:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // ⭐ ScrollReveal Animations
  useEffect(() => {
    const sr = ScrollReveal({
      distance: "60px",
      duration: 2000,
      delay: 300,
      easing: "ease",
      reset: false,
    });

    sr.reveal(".shop-heading", { origin: "top" });
    sr.reveal(".product-card", { origin: "bottom", interval: 200 });
    sr.reveal(".product-img", { origin: "left", delay: 400 });
    sr.reveal(".book-btn", { origin: "right", delay: 500 });
  }, []);

  const handleBookClick = (product) => {
    setLoadingId(product._id);
    setTimeout(() => {
      setLoadingId(null);
      navigate("/book", { state: { product } });
    }, 500);
  };

  return (
    <div className="container my-5">
      <h2 className="main text-center mb-4 shop-heading">Book Now</h2>

      <div className="row">
        {products.length === 0 ? (
          <p className="text-center text-muted">No products available.</p>
        ) : (
          products.map((product) => (
            <div className="col-md-4 mb-4 product-card" key={product._id}>
              <div className="card h-100 shadow-sm">
                
                <img
                  src={product.image}
                  className="card-img-top product-img"
                  alt={product.title}
                />

                <div className="card-body text-center">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">${product.price}</p>

                  <button
                    className="btn btn-dark book-btn"
                    onClick={() => handleBookClick(product)}
                    disabled={loadingId === product._id}
                  >
                    {loadingId === product._id ? (
                      <>
                        <span
                          className="spinner-border spinner-border-sm me-2"
                          role="status"
                          aria-hidden="true"
                        ></span>
                        Processing…
                      </>
                    ) : (
                      "Book Now"
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ShopNow;
