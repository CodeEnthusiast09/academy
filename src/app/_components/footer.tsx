import Image from "next/image";
import React from "react";
import { FaInstagram, FaFacebook, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const navLinks = {
    "Veb sayt": ["Bosh sahifa", "Kurslar"],
    "Ma’lumotlar": [
      "Biz haqimizda",
      "Foydalanish shartlari",
      "Xavfsizlik siyosati",
    ],
    Manzil: [
      "Toshkent sh. Yakkasaroy t. Shota Rustaveli 1-tor ko'chasi, 6-uy",
      "info@Aliacademy.uz",
    ],
  };

  return (
    // <footer className="relative bg-[#252641] text-white h-[720px] md:h-[560px] px-6 py-12 mt-5">
    <footer className="relative bg-[#252641] text-white h-[720px] md:h-[560px] px-6 mt-5 flex items-center justify-center">
      {/* Top right vector */}
      <div className="absolute top-0 right-0 hidden md:block">
        <Image
          alt="vector top"
          src="/images/white-design-up.png"
          width={257}
          height={104}
          priority
        />
      </div>

      {/* Bottom left vector */}
      <div className="absolute bottom-0 left-0 hidden md:block">
        <Image
          alt="vector bottom"
          src="/images/white-design-down.png"
          width={257}
          height={104}
          priority
        />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Logo + Social Icons */}
        <div className="flex flex-col items-center md:items-start gap-6">
          <Image
            alt="logo"
            src="/images/logo.png"
            width={151}
            height={97}
            priority
          />
          <div className="flex gap-4">
            <a
              href="#instagram"
              className="hover:text-primary100 transition-colors"
            >
              <FaInstagram size={25} />
            </a>
            <a
              href="#facebook"
              className="hover:text-primary100 transition-colors"
            >
              <FaFacebook size={25} />
            </a>
            <a
              href="#twitter"
              className="hover:text-primary100 transition-colors"
            >
              <FaXTwitter size={25} />
            </a>
          </div>
        </div>

        {/* Navigation Columns */}
        {Object.entries(navLinks).map(([title, links]) => (
          <div key={title}>
            <h3 className="text-xl md:text-2xl font-semibold mb-4">{title}</h3>
            <ul className="space-y-2">
              {links.map((link, idx) => (
                <li key={idx}>
                  {title !== "Manzil" ? (
                    <a
                      href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                      className="text-sm text-gray-300 hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  ) : (
                    <p className="text-sm text-gray-300">{link}</p>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
