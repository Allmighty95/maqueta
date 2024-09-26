import React from "react";
import styles from "../styles/AboutSection.module.css";
import img from "../Assets/image-about-dark.jpg";
import img2 from "../Assets/image-about-light.jpg";

const AboutSection = () => {
  return (
    <section className={styles.about_section}>
      <div className={styles.about_image}>
        <img
          src={img}
          alt="Modern furniture in a room with a plant on the table"
        />
      </div>
      <div className={styles.about_text}>
        <h3>About Our Furniture</h3>
        <p>
          Our multifunctional collection blends design and function to suit your
          individual taste. Make each room unique, or pick a cohesive theme that
          best expresses your interests and what inspires you.
        </p>
      </div>
      <div className={styles.img2}>
        <img
          src={img2}
          alt="Modern furniture in a room with a plant on the table"
        />
      </div>
    </section>
  );
};

export default AboutSection;
