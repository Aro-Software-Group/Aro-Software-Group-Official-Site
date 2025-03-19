"use client";

import Link from "next/link";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { useTranslation } from "@/lib/i18n";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="relative mt-24 border-t border-zinc-800 pt-12 pb-8 footer-gradient">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 pb-12">
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <Image
                src="/images/aro-logo.png"
                alt="Aro Software Group Logo"
                width={32}
                height={32}
                className="h-8 w-auto"
              />
              <span className="text-lg font-semibold text-white">ARO</span>
            </Link>
            <p className="text-zinc-400 text-sm mb-4 max-w-xs">
              {t('footer.description')}
            </p>
            <div className="flex gap-4">
              <Link href="https://x.com/Group_Aro" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </Link>
              <Link href="https://github.com/Aro-Software-Group" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </Link>
              <Link href="https://discord.gg/M7HsKhMRBS" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="9" cy="12" r="1" />
                  <circle cx="15" cy="12" r="1" />
                  <path d="M7.5 7.2A11.4 11.4 0 0 1 16 7a4 4 0 0 1 2.6 1.5 12 12 0 0 1 1.1 1.5 4 4 0 0 1-1.4 5.8L18 17l-1.1 1a2 2 0 0 1-2.6 0L12 16l-2.3 2a2 2 0 0 1-2.6 0L6 17l-.4-1.2a4 4 0 0 1-1.3-5.7l.2-.3A12 12 0 0 1 5.6 8.5 4 4 0 0 1 7.5 7.2Z" />
                </svg>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-medium text-white mb-4">{t('footer.projects')}</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/projects" className="text-zinc-400 text-sm hover:text-white transition-colors">
                  {t('footer.allProjects')}
                </Link>
              </li>
              <li>
                <Link href="/projects#development" className="text-zinc-400 text-sm hover:text-white transition-colors">
                  {t('footer.inDevelopment')}
                </Link>
              </li>
              <li>
                <Link href="/projects#active" className="text-zinc-400 text-sm hover:text-white transition-colors">
                  {t('footer.active')}
                </Link>
              </li>
              <li>
                <Link href="/projects#discontinued" className="text-zinc-400 text-sm hover:text-white transition-colors">
                  {t('footer.discontinued')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-white mb-4">{t('footer.team')}</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/team" className="text-zinc-400 text-sm hover:text-white transition-colors">
                  {t('footer.teamIntro')}
                </Link>
              </li>
              <li>
                <Link href="/team#vision" className="text-zinc-400 text-sm hover:text-white transition-colors">
                  {t('footer.vision')}
                </Link>
              </li>
              <li>
                <Link href="/team#activities" className="text-zinc-400 text-sm hover:text-white transition-colors">
                  {t('footer.activities')}
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-zinc-400 text-sm hover:text-white transition-colors">
                  {t('nav.contact')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-white mb-4">{t('footer.resources')}</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/blog" className="text-zinc-400 text-sm hover:text-white transition-colors">
                  {t('footer.blog')}
                </Link>
              </li>
              <li>
                <Link href="https://github.com/Aro-Software-Group" target="_blank" rel="noopener noreferrer" className="text-zinc-400 text-sm hover:text-white transition-colors">
                  {t('footer.github')}
                </Link>
              </li>
              <li>
                <Link href="https://discord.gg/M7HsKhMRBS" target="_blank" rel="noopener noreferrer" className="text-zinc-400 text-sm hover:text-white transition-colors">
                  {t('footer.discord')}
                </Link>
              </li>
              <li>
                <Link href="https://x.com/Group_Aro" target="_blank" rel="noopener noreferrer" className="text-zinc-400 text-sm hover:text-white transition-colors">
                  {t('footer.x')}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="bg-zinc-800" />

        <div className="flex flex-col md:flex-row justify-between items-center mt-8">
          <p className="text-zinc-500 text-sm">
            &copy; {new Date().getFullYear()} Aro Software Group. {t('footer.rights')}
          </p>
          <div className="flex gap-6 mt-4 md:mt-0 items-center">
            <Link href="/#privacy" className="text-zinc-500 text-sm hover:text-white transition-colors">
              {t('footer.privacy')}
            </Link>
            <Link href="/#terms" className="text-zinc-500 text-sm hover:text-white transition-colors">
              {t('footer.terms')}
            </Link>
            <div className="ml-2">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
