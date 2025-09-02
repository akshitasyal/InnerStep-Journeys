import React from "react";
import Image from "next/image";
import ContactUsForm from "../../components/contactUsForm";

const RishikeshPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/rishikesh-hero.jpg"
            alt="Rishikesh"
            fill
            className="object-cover brightness-75"
            priority
          />
        </div>
        <div className="relative z-10 text-center text-primary px-4">
          <h1 className="font-cinzel text-4xl md:text-6xl font-bold mb-4">
            Rishikesh
          </h1>
          <p className="font-alice text-xl md:text-2xl max-w-3xl mx-auto">
            The Yoga Capital
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
              Welcome to the Spiritual Gateway of the Himalayas
            </h2>
            <div className="font-alice text-base md:text-lg space-y-4">
              <p>
                Rishikesh, where the sacred Ganges emerges from the Himalayas,
                has been a spiritual haven for seekers for centuries. This
                tranquil city, nestled between forested hills and the flowing
                river, is renowned as the &apos;Yoga Capital of the World&apos;.
              </p>
              <p>
                Our carefully crafted Rishikesh journey offers you an authentic
                experience of this holy city, combining sacred temple visits
                with immersive yoga and meditation practices, all while being
                guided by knowledgeable locals who understand the deep
                significance of each site.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Itinerary Section */}
      <section className="py-16 bg-secondary/30 relative">
        <div className="container mx-auto px-4">
          <h2 className="font-cinzel text-primary text-3xl md:text-4xl font-bold mb-10 text-center">
            Your Rishikesh Journey
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
                    <strong>Arrival:</strong> Arrive in Rishikesh, where the
                    Himalayas embrace the sacred Ganga. Settle into your
                    accommodation and prepare for your spiritual journey.
                  </p>
                  <p>
                    <strong>Evening:</strong> Begin your journey at Triveni
                    Ghat, joining the mesmerizing evening Ganga Aarti, as lamps
                    float like stars upon the river.
                  </p>
                  <p>
                    <strong>Late Evening:</strong> Stroll across the legendary
                    Laxman Jhula and Ram Jhula, bridges steeped in myth and
                    devotion. End the evening with a rejuvenating yoga and
                    pranayama session, aligning breath, body and spirit.
                  </p>
                </div>

                <div className="mt-6">
                  <h4 className="font-cinzel text-primary text-xl font-bold mb-3">
                    Highlights:
                  </h4>
                  <ul className="font-alice list-disc pl-5 space-y-2">
                    <li>Witnessing the divine Ganga Aarti at Triveni Ghat</li>
                    <li>
                      Walking across the iconic suspension bridges of Rishikesh
                    </li>
                    <li>First yoga and pranayama session by the Ganges</li>
                    <li>
                      Introduction to Rishikesh&apos;s spiritual atmosphere
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
                  Day 2: Temples & Meditation
                </h3>
              </div>
              <div className="p-6">
                <div className="font-alice space-y-4">
                  <p>
                    <strong>Early Morning:</strong> At dawn, seek blessings at
                    the revered Neelkanth Mahadev Temple, nestled amidst
                    forested hills.
                  </p>
                  <p>
                    <strong>Mid-Morning:</strong> Return to the riverbanks for
                    guided meditation by the Ganga, where the flow of water
                    becomes a mantra of its own.
                  </p>
                  <p>
                    <strong>Afternoon:</strong> Enrich your soul with a Bhagavad
                    Gita discourse and explore the spiritual sanctuaries of
                    Rishikesh&apos;s many ashrams.
                  </p>
                </div>

                <div className="mt-6">
                  <h4 className="font-cinzel text-primary text-xl font-bold mb-3">
                    Highlights:
                  </h4>
                  <ul className="font-alice list-disc pl-5 space-y-2">
                    <li>Darshan at the sacred Neelkanth Mahadev Temple</li>
                    <li>Meditation practice by the flowing Ganges</li>
                    <li>Spiritual discourse on the Bhagavad Gita</li>
                    <li>Exploring Rishikesh&apos;s renowned ashrams</li>
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
                  Day 3: Healing & Farewell
                </h3>
              </div>
              <div className="p-6">
                <div className="font-alice space-y-4">
                  <p>
                    <strong>Morning:</strong> Awaken to the wisdom of holistic
                    well-being with Ayurveda therapies and healing workshops,
                    restoring balance and harmony.
                  </p>
                  <p>
                    <strong>Afternoon:</strong> A quiet morning meditation
                    prepares you for a radiant farewell.
                  </p>
                  <p>
                    <strong>Evening:</strong> Join the grand Ganga Aarti at
                    Parmarth Niketan, where devotion, music and light merge into
                    a transcendental offering.
                  </p>
                </div>

                <div className="mt-6">
                  <h4 className="font-cinzel text-primary text-xl font-bold mb-3">
                    Highlights:
                  </h4>
                  <ul className="font-alice list-disc pl-5 space-y-2">
                    <li>
                      Experiencing traditional Ayurvedic healing practices
                    </li>
                    <li>Final meditation session for inner reflection</li>
                    <li>
                      Participating in the grand Ganga Aarti at Parmarth Niketan
                    </li>
                    <li>Farewell ceremony with traditional blessings</li>
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
                  src="/images/triveni-ghat.jpg"
                  alt="Triveni Ghat"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-cinzel text-primary text-xl font-bold mb-2">
                  Triveni Ghat
                </h3>
                <p className="font-alice">
                  The sacred confluence where three holy rivers meet, known for
                  its spiritual significance and the mesmerizing evening aarti
                  ceremony.
                </p>
              </div>
            </div>

            {/* Place 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-[1.02]">
              <div className="relative h-64">
                <Image
                  src="/images/neelkanth-mahadev.jpg"
                  alt="Neelkanth Mahadev Temple"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-cinzel text-primary text-xl font-bold mb-2">
                  Neelkanth Mahadev Temple
                </h3>
                <p className="font-alice">
                  An ancient temple dedicated to Lord Shiva, nestled in the
                  Himalayan foothills, where Shiva is said to have consumed the
                  poison that turned his throat blue.
                </p>
              </div>
            </div>

            {/* Place 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-[1.02]">
              <div className="relative h-64">
                <Image
                  src="/images/parmarth-niketan.jpg"
                  alt="Parmarth Niketan"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-cinzel text-primary text-xl font-bold mb-2">
                  Parmarth Niketan
                </h3>
                <p className="font-alice">
                  One of the largest ashrams in Rishikesh, known for its
                  spectacular Ganga Aarti and yoga traditions that attract
                  spiritual seekers from around the world.
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
                    Spiritual Practices
                  </h3>
                  <ul className="font-alice list-disc pl-5 space-y-2">
                    <li>Yoga and pranayama on the riverbanks</li>
                    <li>Guided meditation sessions</li>
                    <li>Bhagavad Gita discourses</li>
                    <li>Mantra chanting and kirtan</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="font-cinzel text-primary text-xl font-bold mb-3">
                    Sacred Rituals
                  </h3>
                  <ul className="font-alice list-disc pl-5 space-y-2">
                    <li>Soul-stirring Ganga Aarti at Triveni Ghat</li>
                    <li>Grand Ganga Aarti at Parmarth Niketan</li>
                    <li>Traditional temple pujas</li>
                    <li>Ritual bathing in the sacred Ganges</li>
                  </ul>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="font-cinzel text-primary text-xl font-bold mb-3">
                    Healing Traditions
                  </h3>
                  <ul className="font-alice list-disc pl-5 space-y-2">
                    <li>Ayurvedic healing therapies</li>
                    <li>Holistic wellness workshops</li>
                    <li>Natural healing practices</li>
                    <li>Balancing body, mind, and spirit</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="font-cinzel text-primary text-xl font-bold mb-3">
                    Transformative Experiences
                  </h3>
                  <ul className="font-alice list-disc pl-5 space-y-2">
                    <li>Kirtan evenings in ashrams</li>
                    <li>Connection with the flowing Ganges</li>
                    <li>Learning from spiritual masters</li>
                    <li>Finding inner peace in the Himalayan foothills</li>
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
            Experience the spiritual gateway of the Himalayas with our carefully
            curated Rishikesh journey. Connect with ancient yoga traditions,
            immerse in sacred rituals, and transform your inner self.
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

export default RishikeshPage;
