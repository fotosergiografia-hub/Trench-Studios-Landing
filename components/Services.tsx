import React from 'react';
import { SERVICES } from '../constants';
import { FadeIn } from './FadeIn';
import { Check } from 'lucide-react';

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <FadeIn>
            <h2 className="text-4xl font-bold tracking-tight text-[#1D1D1F] mb-4">
              Tu Motor de Crecimiento
            </h2>
            <p className="text-lg text-gray-500 font-light">
              Construimos activos que son de tu propiedad. Sin alquileres.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <FadeIn key={service.title} delay={index * 150} className="h-full">
              <div className="bg-[#FAFAFA] p-8 rounded-3xl border border-gray-100 h-full flex flex-col hover:border-blue-100 hover:shadow-xl transition-all duration-300">
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center mb-6 text-[#007AFF] shadow-sm">
                  <service.icon size={20} />
                </div>
                
                <h3 className="text-xl font-bold text-[#1D1D1F] mb-3">
                  {service.title}
                </h3>
                
                <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2 pt-6 border-t border-gray-200/50 mt-auto">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-xs font-medium text-gray-600">
                      <Check size={14} className="text-[#007AFF] mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};