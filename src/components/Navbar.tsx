"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/lib/i18n";
import LanguageSwitcher from "./LanguageSwitcher";
import { useState } from "react";

export default function Navbar() {
  const { t } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-800/40 bg-black/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/aro-logo.png"
              alt="Aro Software Group Logo"
              width={24}
              height={24}
              className="h-6 w-6"
            />
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/#products" className="text-sm text-zinc-400 hover:text-white transition-colors">
              {t('nav.products')}
            </Link>
            <Link href="/api" className="text-sm text-zinc-400 hover:text-white transition-colors">
              {t('nav.api')}
            </Link>
            <Link href="/team" className="text-sm text-zinc-400 hover:text-white transition-colors">
              {t('nav.team')}
            </Link>
            <Link href="/projects" className="text-sm text-zinc-400 hover:text-white transition-colors">
              {t('nav.projects')}
            </Link>
            <Link href="/blog" className="text-sm text-zinc-400 hover:text-white transition-colors">
              {t('nav.blog')}
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <LanguageSwitcher />

          <Link href="/#contact" className="hidden md:block">
            <Button variant="outline" size="sm" className="border-none text-zinc-400 hover:text-white hover:bg-zinc-800">
              {t('nav.contact')}
            </Button>
          </Link>

          <Link href="/demo" className="hidden sm:block">
            <Button size="sm" className="bg-white text-black hover:bg-zinc-200 font-medium text-xs px-3 py-1 h-7 rounded">
              {t('nav.demo')}
            </Button>
          </Link>

          <button
            className="md:hidden text-zinc-400 hover:text-white p-1.5"
            onClick={toggleMobileMenu}
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-16 z-40 bg-black/95 pt-4 backdrop-blur-md">
          <nav className="container px-4 flex flex-col gap-2">
            <Link href="/#products" className="py-3 px-4 text-white hover:bg-zinc-900/50 rounded-lg" onClick={() => setIsMobileMenuOpen(false)}>
              {t('nav.products')}
            </Link>
            <Link href="/api" className="py-3 px-4 text-white hover:bg-zinc-900/50 rounded-lg" onClick={() => setIsMobileMenuOpen(false)}>
              {t('nav.api')}
            </Link>
            <Link href="/team" className="py-3 px-4 text-white hover:bg-zinc-900/50 rounded-lg" onClick={() => setIsMobileMenuOpen(false)}>
              {t('nav.team')}
            </Link>
            <Link href="/projects" className="py-3 px-4 text-white hover:bg-zinc-900/50 rounded-lg" onClick={() => setIsMobileMenuOpen(false)}>
              {t('nav.projects')}
            </Link>
            <Link href="/blog" className="py-3 px-4 text-white hover:bg-zinc-900/50 rounded-lg" onClick={() => setIsMobileMenuOpen(false)}>
              {t('nav.blog')}
            </Link>
            <Link href="/#contact" className="py-3 px-4 text-white hover:bg-zinc-900/50 rounded-lg" onClick={() => setIsMobileMenuOpen(false)}>
              {t('nav.contact')}
            </Link>
            <Link href="/demo" className="py-3 px-4 text-white hover:bg-zinc-900/50 rounded-lg" onClick={() => setIsMobileMenuOpen(false)}>
              {t('nav.demo')}
            </Link>

            <div className="mt-4 px-4 pt-4 border-t border-zinc-800">
              <h3 className="text-sm font-medium text-zinc-400 mb-2">
                Languages
              </h3>
              <div className="flex flex-col gap-2">
                <button className="py-2 px-4 text-left text-white hover:bg-zinc-900/50 rounded-lg flex items-center gap-2">
                  <span>🇯🇵</span> 日本語
                </button>
                <button className="py-2 px-4 text-left text-white hover:bg-zinc-900/50 rounded-lg flex items-center gap-2">
                  <span>🇺🇸</span> English
                </button>
                <button className="py-2 px-4 text-left text-white hover:bg-zinc-900/50 rounded-lg flex items-center gap-2">
                  <span>🇰🇷</span> 한국어
                </button>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
