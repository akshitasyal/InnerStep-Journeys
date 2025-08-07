import Image from "next/image";
import React from "react";

function ImageGallery({
  serviceName,
  heading,
  quote,
  quoteAuthor,
  section,
}: {
  serviceName: string;
  heading: string;
  quote: string;
  quoteAuthor: string;
  section: string;
}) {
  return (
    <div className="flex flex-col">
      <h2 className="font-cinzel text-center text-4xl font-bold text-primary ">
        {heading}
      </h2>

      <div className="flex justify-center">
        <div className="flex flex-col w-[90%] lg:w-full lg:flex-row flex-wrap gap-5 max-w-7xl my-15">
          <div className="flex flex-1 flex-col justify-end gap-5">
            <Image
              width={1024}
              height={760}
              alt="gallery Image 1"
              className="rounded-4xl shadow-md shadow-primary lg:max-h-55"
              src={`/images/${serviceName}/galleryImage1.png`}
            />
            <Image
              width={1024}
              height={760}
              alt="gallery Image 1"
              className="rounded-4xl shadow-md shadow-primary lg:max-h-55"
              src={`/images/${serviceName}/galleryImage2.png`}
            />
          </div>
          <div className="flex flex-2 flex-col justify-end gap-5">
            <Image
              width={1024}
              height={760}
              alt="gallery Image 1"
              className="rounded-4xl shadow-md shadow-primary"
              src={`/images/${serviceName}/galleryImage3.png`}
            />
            <Image
              width={1024}
              height={760}
              alt="gallery Image 1"
              className="rounded-4xl shadow-md shadow-primary"
              src={`/images/${serviceName}/galleryImage4.png`}
            />
          </div>
          <div className="flex flex-1 flex-col justify-end gap-5">
            <Image
              width={1024}
              height={760}
              alt="gallery Image 1"
              className="rounded-4xl shadow-md shadow-primary object-cover"
              src={`/images/${serviceName}/galleryImage5.png`}
            />
            <Image
              width={1024}
              height={760}
              alt="gallery Image 1"
              className="rounded-4xl shadow-md shadow-primary"
              src={`/images/${serviceName}/galleryImage6.png`}
            />
          </div>
        </div>
      </div>
      <h2 className="mx-auto  font-cinzel text-center text-3xl max-w-[1100px] font-bold text-primary mb-10">
        {quote}
      </h2>

      <h3 className="mx-auto  font-cinzel text-center text-xl max-w-[1100px]  text-primary mb-2">
        {quoteAuthor}
      </h3>
      <h4 className="mx-auto font-cinzel">{section}</h4>
    </div>
  );
}

export default ImageGallery;
