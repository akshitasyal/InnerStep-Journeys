import React from "react";
import Image from "next/image";
import ContactUsForm from "../../components/contactUsForm";

const VaranasiPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/yatra/kashi/Kashi icon.jpg"
            alt="Varanasi Ghats"
            fill
            className="object-cover brightness-75"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-white/30"></div>
        <div className="absolute h-[50%] bottom-0 left-0 right-0 bg-gradient-to-t from-secondary to-transparent"></div>
        <div className="relative z-10 text-center text-primary px-4">
          <h1 className="font-cinzel text-4xl md:text-6xl font-bold mb-4">
            Varanasi
          </h1>
          <p className="font-alice text-xl md:text-2xl max-w-3xl mx-auto">
            The Eternal City
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
              Welcome to the Sacred City of Varanasi
            </h2>
            <div className="font-alice text-base md:text-lg space-y-4">
              <p>
                Varanasi, one of the world&apos;s oldest continuously inhabited
                cities, is a place where time seems to stand still. Known as the
                spiritual capital of India, this ancient city on the banks of
                the sacred Ganges River has been a center of learning, culture,
                and spirituality for thousands of years.
              </p>
              <p>
                Our carefully crafted Varanasi journey offers you an authentic
                experience of this holy city, combining sacred temple visits
                with immersive spiritual practices, all while being guided by
                knowledgeable locals who understand the deep significance of
                each site.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Itinerary Section */}
      <section className="py-16 bg-secondary/30 relative">
        <div className="container mx-auto px-4">
          <h2 className="font-cinzel text-primary text-3xl md:text-4xl font-bold mb-10 text-center">
            Your Varanasi Journey
          </h2>

          {/* Day 1 */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-primary text-white p-4">
                <h3 className="font-cinzel text-2xl font-bold">
                  Day 1: Arrival & Evening Aarti
                </h3>
              </div>
              <div className="p-6">
                <div className="font-alice space-y-4">
                  <p>
                    <strong>Arrival:</strong> Arrive in the timeless city of
                    light and settle into a heritage stay along the sacred
                    ghats.
                  </p>
                  <p>
                    <strong>Evening:</strong> As dusk approaches, witness the
                    majestic Ganga Aarti at Dashashwamedh Ghat - a celestial
                    spectacle where countless lamps, resonant chants and
                    rhythmic drums transform the river into a flowing altar of
                    devotion.
                  </p>
                </div>

                <div className="mt-6">
                  <h4 className="font-cinzel text-primary text-xl font-bold mb-3">
                    Highlights:
                  </h4>
                  <ul className="font-alice list-disc pl-5 space-y-2">
                    <li>Traditional welcome at a heritage stay</li>
                    <li>First experience of the sacred Ganges River</li>
                    <li>Witnessing the mesmerizing Ganga Aarti ceremony</li>
                    <li>
                      Introduction to Varanasi&apos;s spiritual atmosphere
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Day 2 */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-primary text-white p-4">
                <h3 className="font-cinzel text-2xl font-bold">
                  Day 2: Sunrise & Temple Circuit
                </h3>
              </div>
              <div className="p-6">
                <div className="font-alice space-y-4">
                  <p>
                    <strong>Early Morning:</strong> Awaken with the first rays
                    of dawn and embark on a sunrise boat ride along the Ganga,
                    watching the ancient ghats bathed in golden light.
                  </p>
                  <p>
                    <strong>Morning:</strong> Seek blessings at the revered
                    Kashi Vishwanath Temple, honor the Divine Mother at
                    Annapurna Mandir and reflect on the cycle of life and
                    eternity at Manikarnika Ghat.
                  </p>
                  <p>
                    <strong>Afternoon:</strong> Meander through the old lanes,
                    savoring stories steeped in chai and kachoris, before
                    concluding with a reflective Bhagavad Gita session.
                  </p>
                </div>

                <div className="mt-6">
                  <h4 className="font-cinzel text-primary text-xl font-bold mb-3">
                    Highlights:
                  </h4>
                  <ul className="font-alice list-disc pl-5 space-y-2">
                    <li>Magical sunrise boat ride on the Ganges</li>
                    <li>
                      Darshan at Kashi Vishwanath, one of India&apos;s most
                      sacred temples
                    </li>
                    <li>Exploration of ancient lanes and hidden temples</li>
                    <li>Spiritual discourse on the Bhagavad Gita</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Day 3 */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-primary text-white p-4">
                <h3 className="font-cinzel text-2xl font-bold">
                  Day 3: Sarnath & Farewell
                </h3>
              </div>
              <div className="p-6">
                <div className="font-alice space-y-4">
                  <p>
                    <strong>Morning:</strong> Begin your morning with meditation
                    by the Ganga, letting the river&apos;s eternal flow quiet
                    the soul.
                  </p>
                  <p>
                    <strong>Afternoon:</strong> Journey to Sarnath, the sacred
                    ground where Lord Buddha shared his first sermon, a place of
                    stillness and awakening.
                  </p>
                  <p>
                    <strong>Evening:</strong> Return for departure, carrying the
                    blessings of both Shiva and Buddha.
                  </p>
                </div>

                <div className="mt-6">
                  <h4 className="font-cinzel text-primary text-xl font-bold mb-3">
                    Highlights:
                  </h4>
                  <ul className="font-alice list-disc pl-5 space-y-2">
                    <li>Peaceful meditation by the sacred Ganges</li>
                    <li>
                      Visit to Sarnath, one of Buddhism&apos;s most holy sites
                    </li>
                    <li>Viewing the famous Ashoka Pillar and Dhamek Stupa</li>
                    <li>Final blessings and farewell ceremony</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sacred Places Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <h2 className="font-cinzel text-primary text-3xl md:text-4xl font-bold mb-10 text-center">
            Sacred Places You&apos;ll Experience
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Place 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-[1.02]">
              <div className="relative h-64">
                <Image
                  src="/images/yatra/kashi/Kashi-Vishwanath-Temple-1.jpg"
                  alt="Kashi Vishwanath Temple"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-cinzel text-primary text-xl font-bold mb-2">
                  Kashi Vishwanath Temple
                </h3>
                <p className="font-alice">
                  One of the most famous Hindu temples dedicated to Lord Shiva,
                  believed to be the place where the light of Shiva shines
                  eternally.
                </p>
              </div>
            </div>

            {/* Place 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-[1.02]">
              <div className="relative h-64">
                <Image
                  src="/images/yatra/kashi/Dashashwamedh Ghat.jpg"
                  alt="Dashashwamedh Ghat"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-cinzel text-primary text-xl font-bold mb-2">
                  Dashashwamedh Ghat
                </h3>
                <p className="font-alice">
                  The main ghat in Varanasi, known for its spectacular Ganga
                  Aarti ceremony that takes place every evening at sunset.
                </p>
              </div>
            </div>

            {/* Place 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-[1.02]">
              <div className="relative h-64">
                <Image
                  src="/images/yatra/kashi/Sarnath.jpg"
                  alt="Sarnath"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-cinzel text-primary text-xl font-bold mb-2">
                  Sarnath
                </h3>
                <p className="font-alice">
                  The place where Buddha gave his first sermon after attaining
                  enlightenment, marked by the famous Dhamek Stupa and Ashoka
                  Pillar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights & Rituals Section */}
      <section className="py-16 bg-secondary/30 relative">
        <div className="container mx-auto px-4">
          <h2 className="font-cinzel text-primary text-3xl md:text-4xl font-bold mb-10 text-center">
            Highlights & Rituals
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left Column */}
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="font-cinzel text-primary text-xl font-bold mb-3">
                    Sacred Rituals
                  </h3>
                  <ul className="font-alice list-disc pl-5 space-y-2">
                    <li>
                      Immerse in the sacred Rudrabhishek at Kashi Vishwanath
                    </li>
                    <li>Stand amidst the luminous Ganga Aarti</li>
                    <li>Join in morning mantra chanting along the ghats</li>
                    <li>Participate in a traditional puja ceremony</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="font-cinzel text-primary text-xl font-bold mb-3">
                    Spiritual Practices
                  </h3>
                  <ul className="font-alice list-disc pl-5 space-y-2">
                    <li>Sunrise meditation by the Ganges</li>
                    <li>Guided Bhagavad Gita discourse</li>
                    <li>Silent contemplation at Sarnath</li>
                    <li>Learning traditional Sanskrit mantras</li>
                  </ul>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="font-cinzel text-primary text-xl font-bold mb-3">
                    Cultural Immersion
                  </h3>
                  <ul className="font-alice list-disc pl-5 space-y-2">
                    <li>Explore ancient lanes and hidden temples</li>
                    <li>Taste traditional Banarasi cuisine</li>
                    <li>Witness the famous silk weaving tradition</li>
                    <li>Interact with local priests and scholars</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="font-cinzel text-primary text-xl font-bold mb-3">
                    Transformative Experiences
                  </h3>
                  <ul className="font-alice list-disc pl-5 space-y-2">
                    <li>Reflect on life and death at Manikarnika Ghat</li>
                    <li>Experience the timelessness of Varanasi</li>
                    <li>Connect with both Shaivite and Buddhist traditions</li>
                    <li>
                      Find inner peace amidst the city&apos;s vibrant energy
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-cinzel text-primary text-3xl md:text-4xl font-bold mb-6">
            Begin Your Sacred Journey
          </h2>
          <p className="font-alice text-lg max-w-2xl mx-auto mb-8">
            Experience the timeless city of Varanasi with our carefully curated
            spiritual journey. Connect with ancient traditions, immerse in
            sacred rituals, and transform your inner self.
          </p>
          <button
            type="button"
            className="bg-primary text-white font-cinzel py-3 px-8 rounded-lg text-lg hover:bg-primary/80 transition-colors cursor-pointer"
          >
            Book Your Journey
          </button>
        </div>
      </section>

      {/* Contact Form */}
      <ContactUsForm className="my-20" />
    </div>
  );
};

export default VaranasiPage;
