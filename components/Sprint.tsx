import React from 'react';
import { SPRINT_BENEFITS, CONTACT_INFO } from '../constants';
import { FadeIn } from './FadeIn';
import { Button } from './Button';

export const Sprint: React.FC = () => {
  return (
    <section id="sprint" className="py-24 bg-[#FAFAFA] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="lg:w-1/2">
            <FadeIn>
              <h2 className="text-4xl font-bold tracking-tight text-[#1D1D1F] mb-6">
                La Solución: El Sprint
              </h2>
              <p className="text-xl text-gray-500 font-light mb-8">
                En 5 días, tu negocio queda armado y listo para vender.
              </p>
              
              <div className="space-y-6">
                {SPRINT_BENEFITS.map((item, index) => (
                  <div key={index} className="flex gap-4 p-4 rounded-2xl bg-white border border-gray-100 hover:shadow-lg transition-all duration-300">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-[#007AFF]">
                        <item.icon size={24} />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#1D1D1F] mb-1">{item.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <a href={CONTACT_INFO.whatsappLink} target="_blank" rel="noopener noreferrer">
                    <Button variant="primary">{CONTACT_INFO.ctaLabel}</Button>
                </a>
              </div>
            </FadeIn>
          </div>

          <div className="lg:w-1/2">
            <FadeIn delay={200}>
              <div className="relative">
                 <div className="absolute -inset-4 bg-gradient-to-r from-blue-100 to-gray-100 rounded-[2rem] blur-2xl opacity-50"></div>
                 <img 
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" 
                    alt="Team working in situ" 
                    className="relative rounded-[2rem] shadow-2xl w-full object-cover aspect-square grayscale hover:grayscale-0 transition-all duration-700"
                 />
                 <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/20">
                    <p className="text-[#1D1D1F] font-semibold text-center">"En 5 días, negocio listo."</p>
                 </div>
              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
};