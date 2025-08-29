import React from "react";
import Image from "next/image";
import ContanctUsForm from "../../components/contanctUsForm";

const UjjainPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/ujjain-hero.jpg"
            alt="Ujjain Mahakaleshwar Temple"
            fill
            className="object-cover brightness-75"
            priority
          />
        </div>
        <div className="relative z-10 text-center text-primary px-4">
          <h1 className="font-cinzel text-4xl md:text-6xl font-bold mb-4">
            Ujjain
          </h1>
          <p className="font-alice text-xl md:text-2xl max-w-3xl mx-auto">
            The Jyotirlinga of Time
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
              Welcome to the Ancient City of Ujjain
            </h2>
            <div className="font-alice text-base md:text-lg space-y-4">
              <p>
                Ujjain, one of India&apos;s seven sacred cities, is where time
                itself is believed to pause in reverence to the Divine. Home to
                the revered Mahakaleshwar Jyotirlinga, this ancient city on the
                banks of the Shipra River has been a center of spiritual
                learning, astronomy, and devotion for millennia.
              </p>
              <p>
                Our carefully crafted Ujjain journey offers you an authentic
                experience of this holy city, combining sacred temple visits
                with immersive spiritual rituals, all while being guided by
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
            Your Ujjain Journey
          </h2>

          {/* Day 1 */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-primary text-white p-4">
                <h3 className="font-cinzel text-2xl font-bold">
                  Day 1: Arrival & Darshan
                </h3>
              </div>
              <div className="p-6">
                <div className="font-alice space-y-4">
                  <p>
                    <strong>Arrival:</strong> Arrive in Ujjain, the ancient city
                    where time itself is believed to pause in reverence to the
                    Divine. Settle into an ashram-style stay.
                  </p>
                  <p>
                    <strong>Evening:</strong> As twilight falls, receive
                    blessings at the Mahakaleshwar Jyotirlinga, one of
                    Shiva&apos;s most powerful abodes. Conclude the evening with
                    the solemn beauty of the Shayan Aarti, surrendering the day
                    into the Lord&apos;s care.
                  </p>
                </div>

                <div className="mt-6">
                  <h4 className="font-cinzel text-primary text-xl font-bold mb-3">
                    Highlights:
                  </h4>
                  <ul className="font-alice list-disc pl-5 space-y-2">
                    <li>
                      Traditional welcome at an ashram-style accommodation
                    </li>
                    <li>First darshan at the revered Mahakaleshwar Temple</li>
                    <li>Witnessing the evening Shayan Aarti ceremony</li>
                    <li>Introduction to Ujjain&apos;s spiritual atmosphere</li>
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
                  Day 2: Bhasma Aarti & Temple Circuit
                </h3>
              </div>
              <div className="p-6">
                <div className="font-alice space-y-4">
                  <p>
                    <strong>Early Morning:</strong> Before dawn breaks, witness
                    the awe-inspiring Bhasma Aarti at Mahakaleshwar, a sacred
                    ritual where Shiva is worshipped with holy ash - symbolizing
                    time, eternity and transcendence.
                  </p>
                  <p>
                    <strong>Morning:</strong> Continue your pilgrimage to the
                    fierce Kal Bhairav Temple, where offerings of oil invoke
                    divine protection.
                  </p>
                  <p>
                    <strong>Afternoon:</strong> Visit the luminous Harsiddhi
                    Temple, where rows of lamps create a radiant sea of
                    devotion.
                  </p>
                  <p>
                    <strong>Evening:</strong> Immerse yourself in the sacred
                    waters of the Shipra River at Ram Ghat, cleansing body and
                    spirit alike.
                  </p>
                </div>

                <div className="mt-6">
                  <h4 className="font-cinzel text-primary text-xl font-bold mb-3">
                    Highlights:
                  </h4>
                  <ul className="font-alice list-disc pl-5 space-y-2">
                    <li>
                      Experiencing the soul-stirring Bhasma Aarti ceremony
                    </li>
                    <li>Making sacred oil offerings at Kal Bhairav Temple</li>
                    <li>
                      Witnessing the luminous Deep Daan at Harsiddhi Temple
                    </li>
                    <li>Ritual bath in the sacred Shipra River</li>
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
                  Day 3: Sacred Learning & Farewell
                </h3>
              </div>
              <div className="p-6">
                <div className="font-alice space-y-4">
                  <p>
                    <strong>Morning:</strong> Visit the revered Sandipani
                    Ashram, the ancient gurukul where Krishna, Balarama and
                    Sudama once studied under their guru.
                  </p>
                  <p>
                    <strong>Afternoon:</strong> Absorb the wisdom of these
                    grounds before concluding your journey, carrying with you
                    the blessings of Mahakal - Lord of Time.
                  </p>
                </div>

                <div className="mt-6">
                  <h4 className="font-cinzel text-primary text-xl font-bold mb-3">
                    Highlights:
                  </h4>
                  <ul className="font-alice list-disc pl-5 space-y-2">
                    <li>Exploring the historic Sandipani Ashram</li>
                    <li>Learning about Krishna&apos;s time as a student</li>
                    <li>Final darshan and blessings at Mahakaleshwar</li>
                    <li>Farewell ceremony with traditional prasad</li>
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
                  src="/images/mahakaleshwar-temple.jpg"
                  alt="Mahakaleshwar Temple"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-cinzel text-primary text-xl font-bold mb-2">
                  Mahakaleshwar Temple
                </h3>
                <p className="font-alice">
                  One of the twelve Jyotirlingas, this temple houses the
                  powerful, self-manifested form of Lord Shiva as Mahakaleshwar,
                  the Lord of Time.
                </p>
              </div>
            </div>

            {/* Place 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-[1.02]">
              <div className="relative h-64">
                <Image
                  src="/images/kal-bhairav-temple.jpg"
                  alt="Kal Bhairav Temple"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-cinzel text-primary text-xl font-bold mb-2">
                  Kal Bhairav Temple
                </h3>
                <p className="font-alice">
                  Dedicated to Bhairava, the fierce manifestation of Lord Shiva,
                  this temple is known for its unique ritual of offering liquor
                  to the deity.
                </p>
              </div>
            </div>

            {/* Place 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-[1.02]">
              <div className="relative h-64">
                <Image
                  src="/images/sandipani-ashram.jpg"
                  alt="Sandipani Ashram"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-cinzel text-primary text-xl font-bold mb-2">
                  Sandipani Ashram
                </h3>
                <p className="font-alice">
                  The ancient gurukul where Lord Krishna received his education,
                  preserving the tradition of guru-shishya parampara.
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
                      Witness the soul-stirring Bhasma Aarti at Mahakaleshwar
                    </li>
                    <li>Make sacred oil offerings at Kal Bhairav Temple</li>
                    <li>
                      Participate in the luminous Deep Daan at Harsiddhi Temple
                    </li>
                    <li>Experience the evening Shayan Aarti ceremony</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="font-cinzel text-primary text-xl font-bold mb-3">
                    Spiritual Practices
                  </h3>
                  <ul className="font-alice list-disc pl-5 space-y-2">
                    <li>Ritual bath in the sacred Shipra River</li>
                    <li>Guided meditation at Sandipani Ashram</li>
                    <li>Learning traditional Shiva mantras</li>
                    <li>Contemplation on the banks of the Shipra</li>
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
                    <li>Experience traditional Malwa cuisine</li>
                    <li>
                      Learn about Ujjain&apos;s ancient astronomical traditions
                    </li>
                    <li>Interact with local priests and scholars</li>
                    <li>Witness traditional arts and crafts</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="font-cinzel text-primary text-xl font-bold mb-3">
                    Transformative Experiences
                  </h3>
                  <ul className="font-alice list-disc pl-5 space-y-2">
                    <li>Connect with the timeless energy of Mahakal</li>
                    <li>Experience the city where time is believed to pause</li>
                    <li>Walk in the footsteps of Lord Krishna as a student</li>
                    <li>
                      Receive blessings from one of Shiva&apos;s most powerful
                      abodes
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
            Experience the ancient city of Ujjain with our carefully curated
            spiritual journey. Connect with the Lord of Time, immerse in sacred
            rituals, and transform your inner self.
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
      <ContanctUsForm className="my-20" />
    </div>
  );
};

export default UjjainPage;
