import React, { useEffect } from "react";
import Swiper from "swiper";

// Swiper Styles & Modules
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

// Global Styles
import "./App.css";

//  Navbar Component
const Navbar = () => (
  <nav className="navbar">
    <h1 className="brand">MyBrand</h1>
    <ul className="nav-links">
      <li>
        <a href="#home">Home</a>
      </li>
      <li>
        <a href="#produk">Produk</a>
      </li>
      <li>
        <a href="#kontak">Kontak</a>
      </li>
    </ul>
    <button className="btn-login">Login</button>
  </nav>
);

// Hero Section with Swiper
const Hero = () => {
  useEffect(() => {
    const swiper = new Swiper(".mySwiper", {
      modules: [Navigation, Pagination],
      loop: true,
      autoplay: { delay: 3000, disableOnInteraction: false },
      pagination: { el: ".swiper-pagination", clickable: true },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

    return () => swiper.destroy();
  }, []);

  return (
    <section className="hero">
      <div className="swiper mySwiper">
        <div className="swiper-wrapper">
          {["images/4.jpg", "images/5.jpg", "images/6.jpg"].map((src, i) => (
            <div className="swiper-slide" key={i}>
              <img src={src} alt={`Slide ${i + 1}`} />
            </div>
          ))}
        </div>
        <div className="swiper-pagination"></div>
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
      </div>
    </section>
  );
};
// Content Section
const Content = () => (
  <section className="content">
    <h2>Tentang Kami</h2>
    <p>
      Kami adalah perusahaan teknologi yang berkomitmen memberikan layanan
      terbaik untuk kebutuhan digital Anda.
    </p>
  </section>
);
const ContactForm = () => (
  <section className="contact-form">
    <h2>Hubungi Kami</h2>
    <form>
      <label htmlFor="name">Nama:</label>
      <input type="text" id="name" name="name" required />

      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" required />

      <label htmlFor="message">Pesan:</label>
      <textarea id="message" name="message" required></textarea>

      <button type="submit">Kirim Pesan</button>
    </form>
  </section>
);

const Testimonial = () => (
  <section className=" testimonial "> 
  <h1></h1>
  </section>
)

// Footer Section
const Footer = () => (
  <footer className="footer">
    <p>&copy; 2025 MyBrand. All rights reserved.</p>
    <div className="social-links">
      {["Instagram", "Twitter", "Facebook"].map((platform, i) => (
        <a key={i} href="#">
          {platform}
        </a>
      ))}
    </div>
  </footer>
);

// 🛍 Product Card Component
const ProductCard = ({ name, price, discount, image }) => {
  const finalPrice = discount ? price - price * (discount / 100) : price;

  return (
    <div className="card">
      <img src={image} alt={name} className="product-image" />
      <h2>📦 {name}</h2>
      <p className="price">
        💰 Harga:{" "}
        <span className={discount ? "discount" : "normal"}>${finalPrice}</span>
      </p>
      {discount > 0 && <p className="discount-tag">🔥 Diskon {discount}%!</p>}
      {discount > 15 && <p className="best-seller">🔥 BEST SELLER</p>}
      {price < 500 && <p className="affordable">Harga Terjangkau</p>}
      <button className={discount ? "btn-discount" : "btn-normal"}>
        Beli Sekarang
      </button>
    </div>
  );
};

// 🛒 Product Section
const ProductSection = () => {
  const products = [
    {
      name: "iPhone 14",
      price: 999,
      discount: 10,
      image: "https://i.pravatar.cc/100?img=10",
    },
    {
      name: "MacBook Pro",
      price: 1999,
      discount: 0,
      image: "https://i.pravatar.cc/100?img=15",
    },
    {
      name: "Smartwatch",
      price: 299,
      discount: 20,
      image: "https://i.pravatar.cc/100?img=5",
    },
    {
      name: "iPad Pro",
      price: 555,
      discount: 15,
      image: "https://i.pravatar.cc/100?img=7",
    },
  ];

  return (
    <div className="product-container">
      {products.map((product, i) => (
        <ProductCard key={i} {...product} />
      ))}
    </div>
  );
};

// 🎯 Main App Component
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Content />
      <ProductSection />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
