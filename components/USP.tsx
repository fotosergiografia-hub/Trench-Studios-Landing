import React from 'react';
import { FadeIn } from './FadeIn';
import { XCircle, Clock, Ghost } from 'lucide-react';

export const USP: React.FC = () => {
  return (
    <section id="problem" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn>
            <h2 className="text-4xl font-bold tracking-tight text-[#1D1D1F] mb-6">
              ¿Te suena familiar?
            </h2>
            <p className="text-xl text-gray-500 font-light">
              El ciclo tradicional de marketing está roto. Nosotros lo arreglamos.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            
            <FadeIn delay={100}>
              <div className="p-8 rounded-3xl bg-gray-50 hover:bg-red-50 transition-colors duration-300">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-6 text-red-500 shadow-sm">
                  <Ghost size={24} />
                </div>
                <h3 className="text-lg font-semibold text-[#1D1D1F] mb-2">Agencias Fantasma</h3>
                <p className="text-gray-500">Nunca ves a quien lleva tu cuenta. Entregables vacíos. Cero compromiso.</p>
              </div>
            </FadeIn>

            <FadeIn delay={200}>
              <div className="p-8 rounded-3xl bg-gray-50 hover:bg-red-50 transition-colors duration-300">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-6 text-red-500 shadow-sm">
                  <XCircle size={24} />
                </div>
                <h3 className="text-lg font-semibold text-[#1D1D1F] mb-2">Mucho ruido, pocas ventas</h3>
                <p className="text-gray-500">Publicar diario en Instagram no paga la nómina. Necesitas un sistema, no likes.</p>
              </div>
            </FadeIn>

            <FadeIn delay={300}>
              <div className="p-8 rounded-3xl bg-gray-50 hover:bg-red-50 transition-colors duration-300">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-6 text-red-500 shadow-sm">
                  <Clock size={24} />
                </div>
                <h3 className="text-lg font-semibold text-[#1D1D1F] mb-2">Sin Tiempo</h3>
                <p className="text-gray-500">Eres dueño de negocio, no creador de contenido. Zapatero a tus zapatos.</p>
              </div>
            </FadeIn>

        </div>
        
        <FadeIn delay={400} className="text-center mt-12">
            <h3 className="text-2xl font-bold text-[#1D1D1F]">
                Nosotros rompemos ese ciclo.
            </h3>
        </FadeIn>
      </div>
    </section>
  );
};