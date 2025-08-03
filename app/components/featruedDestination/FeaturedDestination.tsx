import Image from "next/image";
import React from "react";
import styles from "./style.module.css";

const FeaturedDestination: React.FC = () => {
  return (
    <section className=" py-16 relative overflow-hidden">
      {/* Background pattern - optional */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="w-full h-full bg-[url('/svg/bg-vector.svg')] bg-repeat opacity-30"></div>
      </div>

      <div className="container mx-auto px-4">
        {/* Heading with improved spacing */}
        <div className="text-center mb-12">
          <p className="text-primary font-cinzel text-sm md:text-base uppercase tracking-wider mb-3">
            FEATURED SACRED DESTINATION
          </p>
          <h2 className="font-cinzel text-primary text-3xl md:text-5xl font-bold">
            VRINDAVAN RETREATS
          </h2>
        </div>

        {/* Image Grid - Using CSS module styles with improved container */}
        <div className="flex justify-center w-full">
          <div className={`${styles["grid-container"]}`}>
            {/* First row */}
            <div
              className={`${styles["grid-item"]} ${styles.item1} transform transition-transform duration-300 hover:scale-[1.02]`}
            >
              <Image
                src="/images/sacredPlacesImage1.png"
                alt="Celebration in Vrindavan"
                width={1024}
                height={720}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            {/* Rest of the grid items remain the same */}
            <div
              className={`${styles["grid-item"]} ${styles.item2} transform transition-transform duration-300 hover:scale-[1.02]`}
            >
              <Image
                src="/images/sacredPlacesImage2.png"
                alt="Shiva statue"
                width={1024}
                height={720}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div
              className={`${styles["grid-item"]} ${styles.item3} transform transition-transform duration-300 hover:scale-[1.02]`}
            >
              <Image
                src="/images/sacredPlacesImage3.png"
                alt="Temple entrance with checkered floor"
                width={1024}
                height={600}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div
              className={`${styles["grid-item"]} ${styles.item4} transform transition-transform duration-300 hover:scale-[1.02]`}
            >
              <Image
                src="/images/sacredPlacesImage4.png"
                alt="View from boat"
                width={1024}
                height={720}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            {/* Second row */}
            <div
              className={`${styles["grid-item"]} ${styles.item5} transform transition-transform duration-300 hover:scale-[1.02]`}
            >
              <Image
                src="/images/sacredPlacesImage5.png"
                alt="Temple architecture"
                width={1024}
                height={720}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div
              className={`${styles["grid-item"]} ${styles.item6} transform transition-transform duration-300 hover:scale-[1.02]`}
            >
              <Image
                src="/images/sacredPlacesImage6.png"
                alt="Boat ride on river"
                width={1024}
                height={720}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div
              className={`${styles["grid-item"]} ${styles.item7} transform transition-transform duration-300 hover:scale-[1.02]`}
            >
              <Image
                src="/images/sacredPlacesImage7.png"
                alt="Child during Holi festival"
                width={1024}
                height={720}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div
              className={`${styles["grid-item"]} ${styles.item8} transform transition-transform duration-300 hover:scale-[1.02]`}
            >
              <Image
                src="/images/sacredPlacesImage8.png"
                alt="Elderly woman in traditional dress"
                width={1024}
                height={720}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div
              className={`${styles["grid-item"]} ${styles.item9} transform transition-transform duration-300 hover:scale-[1.02]`}
            >
              <Image
                src="/images/sacredPlacesImage9.png"
                alt="Sadhu with traditional items"
                width={1024}
                height={720}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div
              className={`${styles["grid-item"]} ${styles.item10} transform transition-transform duration-300 hover:scale-[1.02]`}
            >
              <Image
                src="/images/sacredPlacesImage10.png"
                alt="Sadhu with traditional items"
                width={1024}
                height={720}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDestination;
