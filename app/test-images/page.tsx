import Image from 'next/image';
import React from 'react';

export default function TestImages() {
  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-6">Test Images</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="text-center">
          <div className="relative w-full aspect-square mb-2 border border-gray-300">
            <Image 
              src="/images/vrindavan-icon.jpg" 
              alt="Vrindavan Icon" 
              fill 
              className="object-cover"
            />
          </div>
          <p>vrindavan-icon.jpg</p>
        </div>
        <div className="text-center">
          <div className="relative w-full aspect-square mb-2 border border-gray-300">
            <Image 
              src="/images/ujjain-icon.jpg" 
              alt="Ujjain Icon" 
              fill 
              className="object-cover"
            />
          </div>
          <p>ujjain-icon.jpg</p>
        </div>
        <div className="text-center">
          <div className="relative w-full aspect-square mb-2 border border-gray-300">
            <Image 
              src="/images/varanasi-icon.jpg" 
              alt="Varanasi Icon" 
              fill 
              className="object-cover"
            />
          </div>
          <p>varanasi-icon.jpg</p>
        </div>
        <div className="text-center">
          <div className="relative w-full aspect-square mb-2 border border-gray-300">
            <Image 
              src="/images/rishikesh-icon.jpg" 
              alt="Rishikesh Icon" 
              fill 
              className="object-cover"
            />
          </div>
          <p>rishikesh-icon.jpg</p>
        </div>
      </div>
    </div>
  );
}