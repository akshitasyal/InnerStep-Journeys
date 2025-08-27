"use client"
import React from 'react';
import Image from 'next/image';
import { dana } from '../lib/data/dana';
import ContanctUsForm from '../components/contanctUsForm';

const Dana = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center bg-gradient-to-b from-amber-100 to-amber-50">
        <div className="relative z-10 text-center px-4">
          <h1 className="font-cinzel text-4xl md:text-6xl font-bold mb-4 text-primary">
            {dana.heading}
          </h1>
          <p className="font-alice text-xl md:text-2xl max-w-3xl mx-auto text-gray-800">
            In Hindu dharma, Dana / Daan is not mere charity but a sacred duty (dharma), an offering that
            purifies the heart of the giver while uplifting the receiver.
          </p>
        </div>
      </section>
      
      {/* Introduction Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="flex justify-center mb-12">
            <Image
              src="/svg/seperator.svg"
              alt="Decorative element"
              width={400}
              height={30}
              className="h-8 w-auto"
            />
          </div>

          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-cinzel text-primary text-3xl md:text-4xl font-bold mb-6">
              {dana.activity.heading}
            </h2>
            <div className="font-alice text-base md:text-lg space-y-4 mb-12">
              <p>
                {dana.activity.subHeading}
              </p>
            </div>
          </div>
          
          {/* Quote Section */}
          <div className="bg-primary/10 py-12 px-4 rounded-lg mb-16">
            <div className="max-w-4xl mx-auto text-center">
              <div className="text-4xl text-primary mb-4">❝</div>
              <p className="font-alice text-xl italic mb-4">{dana.imageGallery.quote}</p>
              <p className="font-cinzel text-primary">— {dana.imageGallery.quoteAuthor}</p>
            </div>
          </div>
          
          {/* Activities Grid */}
          <div className="max-w-6xl mx-auto">
            <h2 className="font-cinzel text-primary text-2xl md:text-3xl font-bold mb-8 text-center">
              Our Daan Programs
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {dana.activity.activity.map((activity, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-[1.02]">
                  <div className="relative h-64">
                    <Image
                      src={activity.src || ''}
                      alt={activity.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-cinzel text-primary text-xl font-bold mb-2">{activity.title}</h3>
                    <p className="font-alice mb-4">{activity.description}</p>
                    <div className="mt-4">
                      <h4 className="font-cinzel text-primary font-semibold mb-2">Includes:</h4>
                      <ul className="font-alice list-disc pl-5 space-y-2">
                        {activity.includes?.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

         
          
          {/* Closing Section */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="font-cinzel text-primary text-2xl md:text-3xl font-bold mb-6">
                  Join Us in the Sacred Act of Giving
                </h2>
                <div className="font-alice text-base md:text-lg space-y-4 mb-8">
                  <p>
                    Through Daan, we embody the timeless principle of Vasudhaiva Kutumbakam: "the world is one family."
                    At InnerStep Journeys, we help you transform the act of giving into a spiritual experience,
                    guiding you to places and communities where your Daan creates not just support, but blessings
                    that ripple outward in devotion and compassion.
                  </p>
                </div>
                <button className="bg-primary text-white font-cinzel py-3 px-8 rounded-lg text-lg hover:bg-primary/80 transition-colors cursor-pointer mt-4">
                  Begin Your Journey
                </button>
              </div>
            </div>
          </section>
          
          {/* Contact Form */}
          <ContanctUsForm className="my-20" />
        </div>
      </section>
    </div>
  );
};

export default Dana;
