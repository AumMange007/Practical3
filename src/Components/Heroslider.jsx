import { useEffect, useState } from "react";
import { hero1, hero2, hero3 } from "../assets";

const slides = [
  {
    image: hero1,
    title: "Experience Luxury",
    subtitle: "Iconic Destinations",
    description: "Timeless hospitality crafted for the modern traveler.",
  },
  {
    image: hero2,
    title: "Unforgettable Stays",
    subtitle: "World Class Hotels",
    description: "Where elegance meets comfort in every detail.",
  },
  {
    image: hero3,
    title: "Moments That Matter",
    subtitle: "Curated Experiences",
    description: "Personalized journeys designed for you.",
  },
];

function Heroslider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[90vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-[2000ms] ease-in-out ${
            index === current ? "opacity-100 scale-105" : "opacity-0 scale-100"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

          <div className="absolute inset-0 flex items-center px-24 text-white">
            <div className="max-w-xl">
              <p className="mb-4 text-sm tracking-[0.35em] uppercase opacity-80">
                {slide.subtitle}
              </p>

              <h1 className="text-6xl font-serif leading-tight">
                {slide.title}
              </h1>

              <p className="mt-6 text-lg opacity-90">{slide.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Heroslider;
