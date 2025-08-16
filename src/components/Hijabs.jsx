// components/Hijabs.jsx
import React from "react";
import HijabCard from "./HijabCard";

const hijabs = [
  {
    name: "Classic Georgette - Black",
    image: "https://modesatire.com/cdn/shop/products/WhatsAppImage2022-01-21at3.31.44AM_21_540x.jpg?v=1642723475",
    price: 10.0,
  },
  {
    name: "Classic Georgette - Navy Blue",
    image: "https://modesatire.com/cdn/shop/products/WhatsAppImage2022-01-21at3.31.44AM_21_b09c02d0-d47d-4b43-a142-b6a046c09d77_540x.jpg?v=1642724440",
    price: 12.0,
  },
  {
    name: "Classic Georgette - Nude Pink",
    image: "https://modesatire.com/cdn/shop/products/image_a2def318-0f6f-4628-97ce-5157cb88632b_540x.jpg?v=1649955257",
    price: 13.0,
  },
  {
    name: "Classic Georgette - Mulberry",
    image: "https://modesatire.com/cdn/shop/products/WhatsAppImage2022-01-21at3.31.44AM_11_540x.jpg?v=1642724070",
    price: 14.0,
  },
  {
    name: "Classic Georgette - Khaki",
    image: "https://modesatire.com/cdn/shop/products/image_5fffd7bc-e464-4e48-9e5c-793b76175759_540x.jpg?v=1676062178",
    price: 15.0,
  },
  {
    name: "Classic Georgette - Maldives",
    image: "https://modesatire.com/cdn/shop/products/image_b1202575-fb46-4030-9208-83ede99a6187_540x.jpg?v=1649957622",
    price: 16.0,
  },
  {
    name: "Classic Georgette - Eggplant",
    image: "https://modesatire.com/cdn/shop/products/image_42850526-3da0-40b4-89e4-dd1a7c4c1651_540x.jpg?v=1649956548",
    price: 17.0,
  },
  {
    name: "Classic Georgette - Charcoal",
    image: "https://modesatire.com/cdn/shop/products/image_6f21d265-e335-402a-97f2-9cb6cfd3fb53_540x.jpg?v=1649956678",
    price: 18.0,
  },
  {
    name: "Classic Georgette - Peacock",
    image: "https://modesatire.com/cdn/shop/products/WhatsAppImage2022-01-21at3.31.04AM_14_540x.jpg?v=1642723919",
    price: 19.0,
  },
  {
    name: "Classic Georgette - Sage",
    image: "https://modesatire.com/cdn/shop/products/WhatsAppImage2022-01-21at3.31.04AM_22_540x.jpg?v=1642723980",
    price: 20.0,
  },
];

function Hijabs() {
  return (
    <div className="py-10 flex justify-center bg-pink-100 min-h-screen">
      <div className="w-[90%]">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Our Hijabs Collection
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5">
          {hijabs.map((hijab, index) => (
            <HijabCard
              key={index}
              name={hijab.name}
              image={hijab.image}
              price={hijab.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Hijabs;
