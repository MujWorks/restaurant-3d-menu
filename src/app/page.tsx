"use client";

import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { ChefHat, Clock, MapPin, Phone, Star, Menu, X } from "lucide-react";
import { useState } from "react";

const menuItems = [
  { name: "Truffle Risotto", price: "$38", desc: "Black truffle, arborio rice, parmesan foam" },
  { name: "Wagyu Beef Tartare", price: "$42", desc: "A5 wagyu, quail egg, caviar" },
  { name: "Lobster Bisque", price: "$28", desc: "Maine lobster, cognac crème" },
  { name: "Filet Mignon", price: "$78", desc: "Grass-fed, truffle butter, red wine jus" },
  { name: "Atlantic Salmon", price: "$56", desc: "Cedar-plank, herb crust" },
  { name: "Chocolate Sphere", price: "$24", desc: "Warm sauce reveal, vanilla ice-cream" },
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const signatureDishes = [
    {
      name: "Truffle Risotto",
      price: "$38",
      img: "https://images.unsplash.com/photo-1621996346565-e3dbc44ae2c4?w=800&auto=format&fit=crop",
    },
    {
      name: "Wagyu Tartare",
      price: "$42",
      img: "https://images.unsplash.com/photo-1607013251379-e6eecfffe234?w=800&auto=format&fit=crop",
    },
    {
      name: "Chocolate Sphere",
      price: "$24",
      img: "https://images.unsplash.com/photo-1571115764595-704f65e60b2f?w=800&auto=format&fit=crop",
    },
  ];

  return (
    <>
      {/* Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 w-full z-50 bg-black/70 backdrop-blur-xl border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <h1 className="text-3xl font-bold tracking-wider">La Belle</h1>
          <div className="hidden md:flex gap-10 text-lg">
            <a href="#home" className="hover:text-amber-400 transition">Home</a>
            <a href="#menu" className="hover:text-amber-400 transition">Menu</a>
            <a href="#contact" className="hover:text-amber-400 transition">Contact</a>
          </div>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden">
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl pt-24 px-8"
        >
          <div className="flex flex-col gap-10 text-3xl text-center">
            <a href="#home" onClick={() => setMobileMenuOpen(false)}>Home</a>
            <a href="#menu" onClick={() => setMobileMenuOpen(false)}>Menu</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a>
          </div>
        </motion.div>
      )}

      {/* Hero */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src="https://assets.mixkit.co/videos/preview/mixkit-chef-cooking-vegetables-in-a-pan-42949-large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60" />
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} className="relative text-center px-6">
          <h1 className="text-6xl md:text-8xl font-bold mb-6">La Belle Époque</h1>
          <p className="text-2xl md:text-4xl text-amber-300 mb-10">Fine Dining • Est. 2025</p>
          <button className="bg-amber-600 hover:bg-amber-500 px-12 py-5 text-xl rounded-full transition hover:scale-105 shadow-2xl">
            Reserve Table
          </button>
        </motion.div>
      </section>

      {/* 3D Signature Dishes */}
      <section className="py-32 bg-gradient-to-b from-black to-zinc-900">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-7xl font-bold text-center mb-20">Signature Dishes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {signatureDishes.map((dish, i) => (
              <Tilt
                key={i}
                tiltMaxAngleX={15}
                tiltMaxAngleY={15}
                perspective={1000}
                scale={1.05}
                className="tilt"
              >
                <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2 }}
                  className="bg-gradient-to-br from-amber-900/20 to-black rounded-3xl overflow-hidden border border-amber-800/30"
                >
                  <img src={dish.img} alt={dish.name} className="w-full h-80 object-cover" />
                  <div className="p-8 text-center">
                    <h3 className="text-3xl font-bold">{dish.name}</h3>
                    <p className="text-amber-400 text-2xl mt-3">{dish.price}</p>
                  </div>
                </motion.div>
              </Tilt>
            ))}
          </div>
        </div>
      </section>

      {/* Full Menu */}
      <section id="menu" className="py-32 bg-zinc-950">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-6xl font-bold text-center mb-20">Full Menu</h2>
          <div className="grid md:grid-cols-2 gap-10">
            {menuItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08 }}
                className="bg-zinc-900/60 backdrop-blur border border-zinc-800 rounded-2xl p-8 hover:border-amber-600 transition"
              >
                <div className="flex justify-between items-start">
                  <h3 className="text-2xl font-semibold">{item.name}</h3>
                  <span className="text-amber-400 text-2xl">{item.price}</span>
                </div>
                <p className="text-gray-400 mt-3">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-black py-20 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-4xl font-bold mb-6">La Belle Époque</h3>
          <div className="flex flex-col md:flex-row justify-center gap-6 text-lg mb-8">
            <p className="flex items-center justify-center gap-2"><MapPin className="w-5 h-5" /> 123 Gourmet St, New York</p>
            <p className="flex items-center justify-center gap-2"><Phone className="w-5 h-5" /> +1 (555) 000-2025</p>
            <p className="flex items-center justify-center gap-2"><Clock className="w-5 h-5" /> Tue–Sun 6PM–11PM</p>
          </div>
          <div className="flex justify-center gap-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-8 h-8 text-amber-500 fill-current" />
            ))}
          </div>
        </div>
      </footer>
    </>
  );
}