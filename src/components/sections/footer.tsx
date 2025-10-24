import Link from 'next/link';
import Image from 'next/image';
import { Calendar, MapPin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0f1420] text-text-secondary font-body border-t border-white/5">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="pr-4">
            <Link href="/" className="inline-block group mb-4">
              <Image
                src="/logo-devlopia.svg"
                alt="Devlopia"
                width={160}
                height={36}
                className="h-8 w-auto transition-opacity group-hover:opacity-80"
              />
            </Link>
            <p className="text-sm max-w-xs">
              Innovation digitale et automatisation pour votre entreprise.
            </p>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-base md:text-lg">Solutions</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#solutions" className="hover:text-primary transition-colors duration-300 inline-block hover:translate-x-1">
                  Nos Solutions
                </a>
              </li>
              <li>
                <a href="#integrations" className="hover:text-primary transition-colors duration-300 inline-block hover:translate-x-1">
                  Intégrations
                </a>
              </li>
              <li>
                <Link href="/processus" className="hover:text-primary transition-colors duration-300 inline-block hover:translate-x-1">
                  Notre Processus
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-base md:text-lg">Entreprise</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="https://devlopiaweb.fr" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors duration-300 inline-block hover:translate-x-1">
                  Devlopia Web
                </Link>
              </li>
              <li>
                <Link href="/pack-site-ia" className="hover:text-primary transition-colors duration-300 inline-block hover:translate-x-1">
                  Pack Site + IA
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-base md:text-lg">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#calendly" className="flex items-center space-x-3 transition-colors duration-300 hover:text-primary group">
                  <Calendar className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
                  <span>Prendre rendez-vous</span>
                </a>
              </li>
              <li>
                <a href="mailto:contact@devlopiaweb.fr" className="flex items-center space-x-3 transition-colors duration-300 hover:text-primary group">
                  <Mail className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
                  <span>contact@devlopiaweb.fr</span>
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin className="w-4 h-4" />
                <span>France</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-12 md:mt-16 pt-6 md:pt-8 text-center">
          <div className="mb-4 flex flex-wrap justify-center items-center gap-2 text-xs sm:text-sm">
            <Link href="/mentions-legales" className="hover:text-primary transition-colors duration-300">
              Mentions légales
            </Link>
            <span className="text-white/30">•</span>
            <Link href="/politique-de-confidentialite" className="hover:text-primary transition-colors duration-300">
              Politique de confidentialité
            </Link>
            <span className="text-white/30">•</span>
            <Link href="/politique-de-cookies" className="hover:text-primary transition-colors duration-300">
              Politique de cookies
            </Link>
          </div>
          <p className="text-xs sm:text-sm">
            © 2024 Devlopia. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;