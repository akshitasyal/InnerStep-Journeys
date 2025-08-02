import React, { ReactNode } from "react";

function FooterHeading({
  title,
  className,
  highlitedWordIndex,
}: {
  title: string;
  className?: string;
  highlitedWordIndex: number;
}): ReactNode {
  const wordArray = title.split(" ");
  return (
    <h1
      className={`font-cinzel text-center font-semibold text-lg md:text-3xl xl:text-5xl py-30 ${className}`}
    >
      {wordArray.map((word, index) => (
        <span
          key={index}
          className={index === highlitedWordIndex ? "text-primary" : ""}
        >
          {word + " "}
        </span>
      ))}
    </h1>
  );
}

export default FooterHeading;
