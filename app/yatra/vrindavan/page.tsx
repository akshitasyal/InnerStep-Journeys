import React from "react";
import Image from "next/image";
import ContactUsForm from "../../components/contactUsForm";

const VrindavanPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/vrindavan-hero.jpg"
            alt="Vrindavan Temple"
            fill
            className="object-cover brightness-75"
            priority
          />
        </div>
        <div className="relative z-10 text-center text-primary px-4">
          <h1 className="font-cinzel text-4xl md:text-6xl font-bold mb-4">
            Vrindavan
          </h1>
          <p className="font-alice text-xl md:text-2xl max-w-3xl mx-auto">
            The Land of Krishna&apos;s Leelas
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
              Welcome to the Divine Land of Vrindavan
            </h2>
            <div className="font-alice text-base md:text-lg space-y-4">
              <p>
                Vrindavan, the sacred land where Lord Krishna spent his
                childhood, is a place of profound spiritual significance. Here,
                every corner echoes with divine stories, every temple resonates
                with devotional energy, and every path leads to spiritual
                awakening.
              </p>
              <p>
                Our carefully crafted Vrindavan journey offers you an authentic
                experience of this holy land, combining sacred temple visits
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
            Your Vrindavan Journey
          </h2>

          {/* Day 1 */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-primary text-white p-4">
                <h3 className="font-cinzel text-2xl font-bold">
                  Day 1: Arrival & Immersion
                </h3>
              </div>
              <div className="p-6">
                <div className="font-alice space-y-4">
                  <p>
                    <strong>Morning:</strong> Arrive in Vrindavan and settle
                    into your accommodation. Enjoy a traditional welcome with
                    tilak and prasad.
                  </p>
                  <p>
                    <strong>Afternoon:</strong> Visit Prem Mandir, a stunning
                    white marble temple dedicated to Radha Krishna and Sita Ram.
                    Experience the divine atmosphere and architectural beauty.
                  </p>
                  <p>
                    <strong>Evening:</strong> Attend the mesmerizing Yamuna
                    Aarti at Keshi Ghat. Witness the sacred ritual as lamps
                    illuminate the holy river, accompanied by devotional songs
                    and chants.
                  </p>
                </div>

                <div className="mt-6">
                  <h4 className="font-cinzel text-primary text-xl font-bold mb-3">
                    Highlights:
                  </h4>
                  <ul className="font-alice list-disc pl-5 space-y-2">
                    <li>Traditional welcome ceremony with local customs</li>
                    <li>First darshan at the magnificent Prem Mandir</li>
                    <li>Spiritual evening by the sacred Yamuna River</li>
                    <li>Introduction to Vrindavan&apos;s devotional culture</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Day 2 */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-primary text-white p-4">
                <h3 className="font-cinzel text-2xl font-bold">
                  Day 2: Temples, Walks & Inner Practices
                </h3>
              </div>
              <div className="p-6">
                <div className="font-alice space-y-4">
                  <p>
                    <strong>Early Morning:</strong> Begin with a guided
                    meditation session followed by a spiritual discourse on
                    Krishna consciousness.
                  </p>
                  <p>
                    <strong>Morning:</strong> Visit Banke Bihari Temple, one of
                    Vrindavan&apos;s most revered shrines, to experience the
                    unique darshan where the deity is revealed and hidden by a
                    curtain.
                  </p>
                  <p>
                    <strong>Afternoon:</strong> Explore Radha Raman Temple and
                    Radha Damodar Temple, experiencing their unique spiritual
                    atmospheres and historical significance.
                  </p>
                  <p>
                    <strong>Evening:</strong> Participate in the Govardhan
                    Parikrama, a sacred walk around Govardhan Hill, believed to
                    be Lord Krishna himself in the form of a hill.
                  </p>
                </div>

                <div className="mt-6">
                  <h4 className="font-cinzel text-primary text-xl font-bold mb-3">
                    Highlights:
                  </h4>
                  <ul className="font-alice list-disc pl-5 space-y-2">
                    <li>
                      Inner practices to connect with divine consciousness
                    </li>
                    <li>Darshan at Vrindavan&apos;s most beloved temples</li>
                    <li>
                      Learning about the historical and spiritual significance
                      of each site
                    </li>
                    <li>
                      Sacred parikrama experience with stories of Krishna&apos;s
                      leelas
                    </li>
                  </ul>
                </div>

                <div className="mt-6">
                  <h4 className="font-cinzel text-primary text-xl font-bold mb-3">
                    Special Rituals & Experiences:
                  </h4>
                  <ul className="font-alice list-disc pl-5 space-y-2">
                    <li>
                      Participate in the Mangala Aarti at Banke Bihari Temple
                    </li>
                    <li>Receive special blessings from temple priests</li>
                    <li>Learn and practice traditional Vaishnava chants</li>
                    <li>
                      Experience the unique curtain darshan at Banke Bihari
                    </li>
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
            {/* Temple 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-[1.02]">
              <div className="relative h-64">
                <Image
                  src="/images/banke-bihari.jpg"
                  alt="Banke Bihari Temple"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-cinzel text-primary text-xl font-bold mb-2">
                  Banke Bihari Temple
                </h3>
                <p className="font-alice">
                  Home to the enchanting deity of Krishna in his tribhanga
                  posture, this temple is known for its unique curtain darshan
                  and vibrant festivals.
                </p>
              </div>
            </div>

            {/* Temple 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-[1.02]">
              <div className="relative h-64">
                <Image
                  src="/images/prem-mandir.jpg"
                  alt="Prem Mandir"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-cinzel text-primary text-xl font-bold mb-2">
                  Prem Mandir
                </h3>
                <p className="font-alice">
                  A modern architectural marvel in white marble, depicting
                  scenes from Krishna&apos;s life and radiating divine love
                  through its atmosphere.
                </p>
              </div>
            </div>

            {/* Temple 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-[1.02]">
              <div className="relative h-64">
                <Image
                  src="/images/yamuna-ghat.jpg"
                  alt="Yamuna River Ghats"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-cinzel text-primary text-xl font-bold mb-2">
                  Yamuna River Ghats
                </h3>
                <p className="font-alice">
                  The sacred banks where Krishna performed many of his divine
                  leelas, now a place for spiritual reflection and evening
                  aartis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divine Experience Section */}
      <section className="py-16 bg-secondary/30 relative">
        <div className="container mx-auto px-4">
          <h2 className="font-cinzel text-primary text-3xl md:text-4xl font-bold mb-10 text-center">
            The Divine Experience
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left Column */}
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="font-cinzel text-primary text-xl font-bold mb-3">
                    Spiritual Practices
                  </h3>
                  <ul className="font-alice list-disc pl-5 space-y-2">
                    <li>Guided meditation sessions</li>
                    <li>Bhajan and kirtan participation</li>
                    <li>Spiritual discourses on Bhagavad Gita</li>
                    <li>Learning traditional Vaishnava chants</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="font-cinzel text-primary text-xl font-bold mb-3">
                    Cultural Immersion
                  </h3>
                  <ul className="font-alice list-disc pl-5 space-y-2">
                    <li>Traditional Braj cuisine experiences</li>
                    <li>Interaction with local devotees</li>
                    <li>Witnessing traditional arts and crafts</li>
                    <li>Understanding the lifestyle of Vrindavan</li>
                  </ul>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="font-cinzel text-primary text-xl font-bold mb-3">
                    Sacred Rituals
                  </h3>
                  <ul className="font-alice list-disc pl-5 space-y-2">
                    <li>Participation in temple aartis</li>
                    <li>Special pujas with local priests</li>
                    <li>Sacred parikramas (circumambulations)</li>
                    <li>Yamuna River ceremonies</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="font-cinzel text-primary text-xl font-bold mb-3">
                    Inner Transformation
                  </h3>
                  <ul className="font-alice list-disc pl-5 space-y-2">
                    <li>Self-reflection practices</li>
                    <li>Understanding Krishna consciousness</li>
                    <li>Connecting with divine love</li>
                    <li>Finding peace in sacred surroundings</li>
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
            Experience the divine land of Vrindavan with our carefully curated
            spiritual journey. Connect with the essence of devotion, immerse in
            sacred practices, and transform your inner self.
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

export default VrindavanPage;
