import React from 'react';
import { FadeIn } from './FadeIn';
import { Button } from './Button';
import { ChevronDown } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-100 rounded-full blur-3xl mix-blend-multiply filter animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gray-100 rounded-full blur-3xl mix-blend-multiply filter"></div>
      </div>

      <div className="max-w-5xl mx-auto px-6 text-center z-10 relative">
        <FadeIn>
          <span className="inline-block px-4 py-1 mb-6 text-xs font-semibold tracking-wider text-[#007AFF] uppercase bg-blue-50 rounded-full border border-blue-100">
            Sucursales Digitales In-Situ
          </span>
        </FadeIn>
        
        <FadeIn delay={100}>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-[#1D1D1F] mb-8 leading-[1.1]">
            No solo creamos anuncios.<br />
            Instalamos tu <span className="text-[#007AFF]">Sucursal Digital</span><br />
            en una semana.
          </h1>
        </FadeIn>

        <FadeIn delay={200}>
          <p className="max-w-2xl mx-auto text-xl text-gray-500 mb-10 leading-relaxed font-light">
            Dejamos de publicar por publicar. Creamos un sistema de ventas in-situ que trabaja para ti 24/7.
          </p>
        </FadeIn>

        <FadeIn delay={300}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={CONTACT_INFO.whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button variant="primary">{CONTACT_INFO.ctaLabel}</Button>
            </a>
            <p className="text-xs text-gray-400 mt-2 sm:mt-0 sm:ml-4">
              Videollamada de 15 min <br/> para analizar tu caso.
            </p>
          </div>
        </FadeIn>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-gray-400">
        <ChevronDown size={24} />
      </div>
    </section>
  );
};