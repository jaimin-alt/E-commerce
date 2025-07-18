import React from 'react'
import './about.css'
const About = () => {
  return (
    <div className="about-container">
      <section className="about-hero">
        <h1>Your One-Stop Shop for Style, Comfort & Innovation</h1>
      </section>

      <section className="about-content">
        <h2>Welcome to V-Shop</h2>
        <p>
          We are your go-to destination for everything you need — from the latest in fashion to smart solutions for your home and electronics that make life easier.
        </p>

        <h2>Our Story</h2>
        <p>
          V-Shop was born from a simple idea: to bring together the best of <strong>clothing</strong>, <strong>home essentials</strong>, and <strong>electronics</strong> under one roof. We started with a small collection, driven by passion and purpose — to make shopping more accessible and enjoyable for everyone. Today, we proudly serve thousands of happy customers across India and beyond.
        </p>

        <h2>Our Mission</h2>
        <p>
          To deliver high-quality, affordable products with an unbeatable shopping experience — right at your fingertips.
        </p>

        <h2>What We Offer</h2>
        <ul>
          <li>👗 Trendy Clothing: Curated styles for men, women, and kids.</li>
          <li>🏠 Home Essentials: Smart, stylish, and functional products.</li>
          <li>💻 Electronics: Reliable gadgets for your digital lifestyle.</li>
        </ul>

        <h2>Why Choose V-Shop</h2>
        <ul>
          <li>✅ Handpicked Quality Products</li>
          <li>🚚 Fast & Reliable Delivery</li>
          <li>🔒 Secure Payments</li>
          <li>💬 Responsive Customer Support</li>
          <li>🤝 Customer-Centric Policies</li>
        </ul>

        <h2>Our Promise</h2>
        <p>
          Your satisfaction is our priority. We believe in building long-term relationships through trust, transparency, and top-notch service.
        </p>

        <h2>Let’s Connect</h2>
        <p>
          Got questions or feedback? We’d love to hear from you.<br />
          <a href="mailto:jaiminparmar200606@gmail.com">support@v-shop</a>
        </p>
      </section>
    </div>
  );
};

export default About