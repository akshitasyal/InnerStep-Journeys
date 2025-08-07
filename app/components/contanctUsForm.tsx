import Image from "next/image";
import React from "react";

function ContanctUsForm({ className }: { className?: string }) {
  return (
    <div
      className={"w-full flex flex-col lg:flex-row " + className}
      id="contact"
    >
      <Image
        className="flex-1 w-screen lg:h-full h-[10px] "
        src="/images/contactUsImage.png"
        width={1024}
        height={760}
        alt="Praying Image"
      />
      <div className="flex-1 flex justify-center items-center">
        <form className="flex-1 flex flex-col p-15" action="#" method="post">
          <h1 className="uppercase font-cinzel text-center my-5 text-primary font-bold text-xl lg:text-4xl lg:my-10">
            Reach Out To Us
          </h1>

          <div className="flex flex-col gap-5 lg:flex-row">
            <input
              type="text"
              placeholder="Name"
              className="w-full px-5 py-4 flex-1 border-2 border-primary/70 rounded-3xl placeholder:text-black focus:border-primary outline-0"
            />
            <input
              type="tel"
              placeholder="Phone number"
              className="w-full px-5 py-4 flex-1 border-2 border-primary/70 rounded-3xl placeholder:text-black focus:border-primary outline-0"
            />
          </div>
          <input
            type="text"
            placeholder="Location"
            className="w-full px-5 py-4 my-5 flex-1 border-2 border-primary/70 rounded-3xl placeholder:text-black focus:border-primary outline-0"
          />
          <textarea
            rows={4}
            placeholder="Message"
            className="w-full px-5 py-4 flex-1 border-2 border-primary/70 rounded-3xl placeholder:text-black focus:border-primary outline-0"
          />

          <button
            type="submit"
            className="bg-primary text-secondary px-20 mx-auto my-8 py-2 cursor-pointer"
          >
            Reach Out
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContanctUsForm;
