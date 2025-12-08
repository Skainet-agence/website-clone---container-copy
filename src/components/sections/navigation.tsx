"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navLinks = [
  { href: "/solutions", label: "Solutions" },
  { href: "/integrations", label: "Intégrations" },
  { href: "/processus", label: "Processus" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
];

const dropdownLinks = [
  { href: "https://devlopiaweb.fr", label: "Devlopia Web" },
  { href: "/pack-site-ia", label: "Pack Site + IA" },
];

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleExternalLink = (href: string) => {
    if (href.startsWith('http')) {
      window.open(href, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <header className="fixed top-2 md:top-4 lg:top-8 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-1rem)] md:w-[calc(100%-2rem)] max-w-7xl px-2 md:px-4 transition-all duration-300">
      <div className="relative">
        <div className="flex h-16 md:h-20 items-center justify-between rounded-xl md:rounded-2xl bg-white/10 px-4 md:px-6 shadow-[0_8px_32px_0_rgba(255,255,255,0.1)] backdrop-blur-md border border-white/10">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 group">
              <span className="sr-only">Devlopia</span>
              <Image
                src="/logo-devlopia.svg"
                alt="Devlopia"
                width={180}
                height={40}
                className="h-8 md:h-10 w-auto transition-opacity group-hover:opacity-80"
                priority
              />
            </Link>
          </div>

          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm xl:text-base font-semibold text-white transition-colors hover:text-blue-400 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-blue-400 after:transition-all hover:after:w-full"
              >
                {link.label}
              </Link>
            ))}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-sm xl:text-base font-semibold text-white transition-colors hover:text-blue-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent rounded-md px-2 py-1">
                Devlopia Web
                <ChevronDown className="ml-1 h-4 w-4 transition-transform group-data-[state=open]:rotate-180" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48 bg-background-secondary border-border text-white shadow-xl">
                {dropdownLinks.map((link) => (
                  <DropdownMenuItem 
                    key={link.label}
                    onClick={() => {
                      if (link.href.startsWith('http')) {
                        handleExternalLink(link.href);
                      }
                    }}
                    className="cursor-pointer hover:bg-white/10 transition-colors"
                  >
                    {link.href.startsWith('http') ? (
                      <span className="w-full">{link.label}</span>
                    ) : (
                      <Link href={link.href} className="w-full">
                        {link.label}
                      </Link>
                    )}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          <div className="hidden lg:flex items-center">
            <Button
              asChild
              className="rounded-lg bg-[#0066ff] px-4 xl:px-6 py-2.5 xl:py-3 text-xs xl:text-sm font-semibold uppercase text-white hover:bg-[#0052cc] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30"
            >
              <Link href="#calendly">Prendre RDV</Link>
            </Button>
          </div>
          
          <div className="flex items-center lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white hover:bg-white/20 transition-colors"
              aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
        
        {mobileMenuOpen && (
          <div className="lg:hidden mt-2 md:mt-4 rounded-xl md:rounded-2xl bg-white/10 p-4 md:p-6 backdrop-blur-md border border-white/10 animate-in slide-in-from-top-2 duration-300">
            <nav className="flex flex-col space-y-2 md:space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block rounded-md py-2.5 px-3 text-base font-semibold text-white hover:bg-white/10 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
               <div className="border-t border-gray-600/50 pt-3 md:pt-4 mt-2 md:mt-4">
                 <p className="text-gray-400 text-sm mb-2 px-3 font-medium">Devlopia Web</p>
                 {dropdownLinks.map((link) => (
                   <Link
                     key={link.label}
                     href={link.href}
                     target={link.href.startsWith('http') ? '_blank' : '_self'}
                     rel={link.href.startsWith('http') ? 'noopener noreferrer' : ''}
                     className="block py-2 px-3 font-semibold text-white hover:text-blue-400 hover:bg-white/5 rounded-md transition-colors"
                     onClick={() => setMobileMenuOpen(false)}
                   >
                     {link.label}
                   </Link>
                 ))}
               </div>
              <Button
                asChild
                className="w-full mt-4 rounded-lg bg-[#0066ff] py-3 text-sm font-semibold uppercase text-white hover:bg-[#0052cc] transition-all duration-300"
              >
                <Link href="#calendly" onClick={() => setMobileMenuOpen(false)}>Prendre RDV</Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}