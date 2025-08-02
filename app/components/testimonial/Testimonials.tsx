"use client";
import React, { useEffect, useRef, useState } from "react";
import TestimonialCard from "./TestimonialCard";

interface TestimonialData {
  imageUrl: string;
  name: string;
  location: string;
  comment: string;
}

const testimonialData: TestimonialData[] = [
  {
    imageUrl: "/images/testimonial-1.png", // You'll need to add these images to your public folder
    name: "Aarav Mehta",
    location: "Student, Delhi",
    comment:
      "The temples were magical, but the real change happened during the life skills sessions. I now have tools for focus and inner calm.",
  },
  {
    imageUrl: "/images/testimonial-2.png",
    name: "Priya Sharma",
    location: "Teacher, Mumbai",
    comment:
      "This journey transformed my perspective on teaching. The meditation techniques I learned have helped both me and my students.",
  },
  {
    imageUrl: "/images/testimonial-3.png",
    name: "Raj Patel",
    location: "Business Owner, Bangalore",
    comment:
      "The cultural immersion was profound. I've incorporated the mindfulness practices into my daily routine and business operations.",
  },
  {
    imageUrl: "/images/testimonial-4.png",
    name: "Raj Patel",
    location: "Business Owner, Bangalore",
    comment:
      "The cultural immersion was profound. I've incorporated the mindfulness practices into my daily routine and business operations.",
  },
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dotsCount, setDotsCount] = useState(1);
  const [cardWidth, setCardWidth] = useState(0);
  const [supportCardCount, setSupportCardCount] = useState(1);
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateDotsCount = () => {
      if (!container.current) return;

      const containerWidth = container.current.clientWidth;
      const card = container.current.children[0] as HTMLElement;
      if (!card || card.clientWidth === 0) return;

      const cardWidth = card.clientWidth;
      setCardWidth(cardWidth);
      const cardsPerScreen = Math.floor(containerWidth / cardWidth);
      console.log("CardsPerScreen ", cardsPerScreen);
      setSupportCardCount(cardsPerScreen);
      const cardsLeft = testimonialData.length - cardsPerScreen;
      console.log(cardsLeft);

      setDotsCount(
        cardsLeft > 0 ? Math.min(cardsLeft, testimonialData.length - 1) + 1 : 1
      );
    };

    updateDotsCount();

    window.addEventListener("resize", updateDotsCount);

    return () => {
      window.removeEventListener("resize", updateDotsCount); // Cleanup on unmount
    };
  }, [container.current]);

  useEffect(() => {
    const handleOnScroll = (event: Event) => {
      const target = event.currentTarget as HTMLDivElement;

      const scrollLeft = target.scrollLeft;

      if (cardWidth > 0) {
        const newIndex = Math.round(scrollLeft / cardWidth);
        setCurrentIndex(newIndex);
      }
    };

    const el = container.current;
    if (el) {
      el.addEventListener("scroll", handleOnScroll);
    }

    return () => {
      if (el) {
        el.removeEventListener("scroll", handleOnScroll);
      }
    };
  }, [cardWidth]);

  const HandelSnapping = (destinationIndex: number) => {
    container.current?.scrollTo({
      left: destinationIndex * cardWidth,
      behavior: "smooth",
    });

    setCurrentIndex(destinationIndex);
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-cinzel font-bold text-primary text-center mb-12">
          Real Stories. Real Transformation.
        </h2>

        <div
          className="flex overflow-x-scroll no-scrollbar snap-x snap-mandatory mx-auto"
          ref={container}
        >
          {testimonialData.map((data, index) => (
            <TestimonialCard
              even={index % 2 == 0}
              comment={data.comment}
              imageUrl={data.imageUrl}
              key={index}
              location={data.location}
              name={data.name}
            />
          ))}
        </div>

        <div className="flex  items-center justify-center gap-1 mx-auto">
          {Array.from({ length: dotsCount }).map((_, i) => (
            <div
              key={i}
              className={` rounded-4xl bg-primary cursor-pointer ${
                currentIndex == i ? "w-4 h-4" : "w-3 h-3"
              }`}
              onClick={() => HandelSnapping(i)}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
