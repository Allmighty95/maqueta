import React, { useState } from "react";
import styles from "../styles/MainSection.module.css";
import img1 from "../Assets/desktop-image-hero-1.jpg";
import img2 from "../Assets/desktop-image-hero-2.jpg";
import img3 from "../Assets/desktop-image-hero-3.jpg";
import leftArrow from "../Assets/icon-angle-left.svg";
import rightArrow from "../Assets/icon-angle-right.svg";
import Arrow from "../Assets/icon-arrow.svg";

const slides = [
  {
    image: img1,
    title: "Discover innovative ways to decorate",
    description:
      "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
  },
  {
    image: img2,
    title: "We are available all across the globe",
    description:
      "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
  },
  {
    image: img3,
    title: "Manufactured with the best materials",
    description: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
  },
];

const MainSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    ); // Retrocede a la imagen anterior
  };

  return (
    <main className={styles.main}>
      <div className={styles.left_section}>
        <img
          className={styles.img_section}
          src={slides[currentIndex].image}
          alt="Modern furniture in a room with a plant on the table"
        />

        <button className={styles.arrow1} onClick={prevImage}>
          <img src={leftArrow} alt="Flecha izquierda" />
        </button>
        <button className={styles.arrow2} onClick={nextImage}>
          <img src={rightArrow} alt="Flecha derecha" />
        </button>
      </div>
      <div className={styles.right_section}>
        <h2>{slides[currentIndex].title}</h2>
        <p>{slides[currentIndex].description}</p>
        <button className={styles.shop_now}>
          Shop Now
          <img
            src={Arrow}
            alt="Flecha derecha"
            style={{ marginLeft: "8px", verticalAlign: "middle" }}
          />
        </button>
      </div>
    </main>
  );
};

export default MainSection;
