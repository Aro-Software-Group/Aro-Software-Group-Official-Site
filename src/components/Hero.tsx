"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { useTranslation } from "@/lib/i18n";

export default function Hero() {
  const { t } = useTranslation();
  const [stars, setStars] = useState<Array<{ top: string; left: string; size: string; delay: string; opacity: string }>>([]);
  const [searchValue, setSearchValue] = useState("");
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const newStars = Array.from({ length: 50 }).map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 3}px`,
      delay: `${Math.random() * 10}s`,
      opacity: `${Math.random() * 0.8 + 0.2}`,
    }));
    setStars(newStars);
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search logic here
    console.log("Search for:", searchValue);
  };

  const focusSearchInput = () => {
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-24 pb-16 overflow-hidden">
      <div className="orange-glow"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-20">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight tracking-tight">
            {t('hero.title')}
          </h1>

          <p className="text-lg md:text-xl text-zinc-300 max-w-3xl mb-12 leading-relaxed">
            {t('hero.subtitle')}
          </p>

          <div className="relative w-full max-w-2xl mx-auto mb-8">
            <form onSubmit={handleSearchSubmit} className="relative">
              <div
                className="relative w-full h-12 bg-zinc-900/50 border border-zinc-800 rounded-full overflow-hidden group hover:border-zinc-700 transition-colors cursor-text"
                onClick={focusSearchInput}
              >
                <input
                  ref={searchInputRef}
                  type="text"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  placeholder={t('hero.search')}
                  className="w-full h-full bg-transparent border-none px-5 text-white focus:outline-none focus:ring-0"
                />
                <button
                  type="submit"
                  className="absolute right-1 top-1 bg-white text-black rounded-full w-10 h-10 flex items-center justify-center hover:bg-zinc-200 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.3-4.3" />
                  </svg>
                </button>
              </div>
            </form>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#products">
              <Button className="bg-white text-black hover:bg-zinc-200 font-medium px-6 py-6 h-auto text-base">
                {t('hero.viewProducts')}
              </Button>
            </Link>
            <Link href="/#projects">
              <Button variant="outline" className="border-zinc-700 hover:bg-zinc-900 text-white font-medium px-6 py-6 h-auto text-base">
                {t('hero.viewProjects')}
              </Button>
            </Link>
          </div>
        </div>

        <div className="relative h-[300px] md:h-[400px] lg:h-[500px] max-w-5xl mx-auto rounded-xl overflow-hidden mt-8 border border-zinc-800/60 backdrop-blur-sm">
          <div className="absolute inset-0 bg-black/40 p-8 flex flex-col justify-center items-center">
            <p className="section-label mb-4">{t('hero.inDevelopment')}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-4xl">
              {[
                { name: "Aro Agent", icon: "🤖", desc: "AIエージェント" },
                { name: "Aro Brain Studio", icon: "💻", desc: "オフライン生成AI" },
                { name: "Aro Agent Private", icon: "🔒", desc: "オフライン特化" },
                { name: "Aro One", icon: "🧰", desc: "オールインワン" },
              ].map((product, index) => (
                <div
                  key={index}
                  className="bg-zinc-900/60 border border-zinc-800 rounded-lg p-4 backdrop-blur-sm hover:bg-zinc-800/60 transition-colors"
                >
                  <div className="text-2xl mb-2">{product.icon}</div>
                  <h3 className="text-lg font-medium text-white mb-1">{product.name}</h3>
                  <p className="text-zinc-400 text-sm">{product.desc}</p>
                </div>
              ))}
            </div>
            <Link href="/#products" className="mt-8">
              <Button variant="ghost" className="text-primary hover:text-primary/90 hover:bg-zinc-800">
                {t('hero.details')}
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Animated stars background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none star-field">
        <div className="star-layer">
          {stars.map((star, i) => (
            <div
              key={i}
              className="absolute rounded-full animate-twinkle"
              style={{
                top: star.top,
                left: star.left,
                width: star.size,
                height: star.size,
                backgroundColor: "white",
                animationDelay: star.delay,
                opacity: parseFloat(star.opacity),
              }}
            />
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-500 animate-bounce">
          <path d="m6 9 6 6 6-6" />
        </svg>
      </div>
    </section>
  );
}
