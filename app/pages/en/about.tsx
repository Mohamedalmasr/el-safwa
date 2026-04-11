"use client";

import Header from "../../../components/components/Header";
import Footer from "../../../components/components/Footer";

export default function AboutPage() {
  return (
    <>
      <Header lang="en" />

      <div
        className="bg-cover bg-center py-20 mt-16"
        style={{ backgroundImage: "url(/images/about-img.jpg)" }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-4">ABOUT US</h2>
            <nav className="text-white">
              <a href="/en" className="hover:text-[#b0b435]">
                Home
              </a>
              <span className="mx-2">/</span>
              <span className="text-[#b0b435]">ABOUT US</span>
            </nav>
          </div>
        </div>
      </div>

      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative">
              <img
                className="w-full rounded-lg shadow-lg"
                src="/images/Designer.jpeg"
                alt=""
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Who We Are{" "}
                <span className="text-[#b0b435]">EL SAFWA FOR EXPORT</span>
              </h2>
              <p className="text-gray-600 mb-6">
                At EL SAFWA FOR EXPORT, we always strive to be at the forefront
                of leading Egyptian export companies. Our company was founded on
                a commitment to providing high-quality agricultural and
                industrial products to global markets, with the goal of
                enhancing the reputation of Egyptian products and showcasing
                them as a reliable and distinguished choice among international
                consumers.
              </p>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Our Vision:
              </h3>
              <p className="text-gray-600 mb-6">
                We believe that excellence is not just a goal, but a way of
                life. At EL SAFWA FOR EXPORT, our vision is to be leaders in the
                export sector by delivering products that exceed customer
                expectations in terms of quality and reliability. We aim to be
                the bridge that connects Egyptian markets with global ones,
                presenting our products at the highest international standards.
              </p>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Our Mission:
              </h3>
              <p className="text-gray-600">
                We are committed to providing comprehensive export services that
                meet the needs of our clients around the world. By applying
                innovative export strategies, we ensure that Egyptian products
                reach their destinations in the best possible condition while
                maintaining efficiency in terms of time, cost, and product
                safety and quality throughout their journey from the source to
                the final consumer.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Our Values
              </h3>
              <p className="text-gray-600">
                Quality: We are committed to delivering superior products that
                meet global standards.
                <br />
                <br />
                Transparency: We strive to build relationships based on trust
                and transparency with all our partners and clients.
                <br />
                <br />
                Innovation: We continuously adopt the latest innovations in
                agriculture and industry to ensure the improvement of our
                products.
                <br />
                <br />
                Sustainability: We place a strong emphasis on sustainability in
                all our operations to protect the environment and promote
                sustainable development.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Our Services
              </h3>
              <p className="text-gray-600">
                We offer a wide range of high-quality agricultural and
                industrial products. This includes the export of fresh
                vegetables and fruits, industrial products, and many other goods
                that are produced according to the highest standards. We work
                with a broad network of local suppliers to ensure that every
                product we export reflects our commitment to quality and
                excellence.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Our Commitment
              </h3>
              <p className="text-gray-600">
                At EL SAFWA FOR EXPORT, we are dedicated to meeting the needs of
                our clients with the highest levels of efficiency and
                professionalism. We believe that our relationship with our
                clients does not end once the transaction is complete; it is an
                ongoing partnership aimed at mutual success. We focus on
                building long-term relationships based on trust and mutual
                respect.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-8 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              "/images/instagram-img-01.jpg",
              "/images/categories_img_02.jpg",
              "/images/categories_img_03.jpg",
              "/images/instagram-img-02.jpg",
              "/images/instagram-img-04.jpg",
            ].map((src, idx) => (
              <div key={idx} className="relative overflow-hidden group">
                <img
                  src={src}
                  alt=""
                  className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer lang="en" />
    </>
  );
}
