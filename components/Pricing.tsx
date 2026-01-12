import React from 'react';
import { PRICING_STRUCTURE, CONTACT_INFO } from '../constants';
import { FadeIn } from './FadeIn';
import { Button } from './Button';

export const Pricing: React.FC = () => {
  const total = PRICING_STRUCTURE.reduce((acc, item) => acc + item.amount, 0);

  return (
    <section id="pricing" className="py-24 bg-[#1D1D1F] text-white relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600 rounded-full blur-[120px] opacity-20 transform translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight mb-4">Inversión Inteligente</h2>
            <p className="text-gray-400 text-lg">
              Invierte $15,000 en tu sistema, no en un gasto. Costos claros desde el día 1.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={200}>
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 md:p-12">
            <div className="space-y-6">
              {PRICING_STRUCTURE.map((item, index) => (
                <div key={index} className="flex flex-col md:flex-row justify-between items-start md:items-center py-4 border-b border-white/10 last:border-0">
                  <div>
                    <h3 className="text-xl font-medium">{item.concept}</h3>
                    <p className="text-sm text-gray-400 mt-1">{item.note}</p>
                  </div>
                  <div className="mt-2 md:mt-0 text-right">
                    <span className="text-2xl font-bold font-mono">
                      ${item.amount.toLocaleString('es-MX')}
                    </span>
                    <span className="text-xs text-gray-500 block">MXN</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-white/20">
              <div className="flex justify-between items-center mb-8">
                <span className="text-lg text-gray-300">Total Estimado (Mes 1)</span>
                <div className="text-right">
                   <span className="text-4xl md:text-5xl font-bold text-[#007AFF] tracking-tight">
                    ~${total.toLocaleString('es-MX')}
                  </span>
                  <span className="text-sm text-gray-500 block">MXN + IVA</span>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center gap-4">
                 <a href={CONTACT_INFO.whatsappLink} target="_blank" rel="noopener noreferrer" className="w-full md:w-auto">
                    <Button variant="secondary" fullWidth className="md:w-auto text-lg py-4 px-10">
                      {CONTACT_INFO.ctaLabel}
                    </Button>
                 </a>
                 <p className="text-xs text-gray-500">
                    *Videollamada de 15 min para verificar si tu negocio califica.
                 </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};