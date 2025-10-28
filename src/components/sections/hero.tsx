"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import DotGrid from "@/components/ui/DotGrid";

export default function HeroSection() {
  const blobRef1 = useRef<HTMLDivElement>(null);
  const blobRef2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const animateBlobs = () => {
      if (blobRef1.current) {
        blobRef1.current.style.transform = `translate(${Math.sin(Date.now() / 3000) * 50}px, ${Math.cos(Date.now() / 2000) * 50}px)`;
      }
      if (blobRef2.current) {
        blobRef2.current.style.transform = `translate(${Math.cos(Date.now() / 4000) * 50}px, ${Math.sin(Date.now() / 3500) * 50}px)`;
      }
      requestAnimationFrame(animateBlobs);
    };
    const animation = requestAnimationFrame(animateBlobs);
    return () => cancelAnimationFrame(animation);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-background-primary overflow-hidden pt-12">
      {/* DotGrid Background */}
      <div className="absolute inset-0 w-full h-full">
        <DotGrid
          dotSize={7}
          gap={20}
          baseColor="rgba(37, 38, 84, 0.15)"
          activeColor="#0084FF"
          proximity={96}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
        />
      </div>

      <div
        ref={blobRef1}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div
        ref={blobRef2}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />


      <div className="container mx-auto px-4 relative z-10 text-center py-16 md:py-26 max-w-6xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[4.5rem] font-black text-white leading-[1.1] mb-6 md:mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          Propulsez votre entreprise avec{" "}
          <span className="text-[#0084FF] block mt-2">L'intelligence artificielle</span>{" "}
          vers de nouveaux sommets
        </h1>
        
        <div className="space-y-2 animate-in fade-in slide-in-from-bottom-4 duration-700" style={{ animationDelay: '200ms' }}>
          <p className="text-lg sm:text-xl font-normal text-text-secondary">
            Libérez votre génie créatif
          </p>
          <p className="text-lg sm:text-xl font-normal text-text-secondary">
            L'IA s'occupe du reste
          </p>
        </div>
        
        <Link
          href="#calendly"
          className="inline-block rounded-lg bg-[#0066ff] px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-bold uppercase text-white shadow-[0_4px_14px_rgba(0,102,255,0.5)] transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-[0_6px_20px_rgba(0,102,255,0.6)] hover:bg-[#0052cc] animate-in fade-in slide-in-from-bottom-4 duration-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent text-center mt-8"
          style={{ animationDelay: '400ms' }}>

          RÉSERVEZ VOTRE AUDIT GRATUIT MAINTENANT – PLACES LIMITÉES !
        </Link>
      </div>
    </section>);

}