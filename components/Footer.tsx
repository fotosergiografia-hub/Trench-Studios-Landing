import React from 'react';
import { CONTACT_INFO } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="py-12 bg-[#FAFAFA] border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
           <a href="#" className="text-xl font-bold tracking-tighter text-[#1D1D1F]">
            Trench Studios<span className="text-[#007AFF]">.</span>
          </a>
          <p className="text-sm text-gray-500 mt-2">
            Arquitectos de Sucursales Digitales.
          </p>
        </div>

        <div className="text-center md:text-right space-y-2">
          <p className="text-sm text-[#1D1D1F]">
            <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-[#007AFF] transition-colors">
              {CONTACT_INFO.email}
            </a>
          </p>
          <p className="text-sm text-[#1D1D1F]">
             <a href={CONTACT_INFO.whatsappLink} className="hover:text-[#007AFF] transition-colors">
              WhatsApp: {CONTACT_INFO.whatsapp}
            </a>
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-8 pt-8 border-t border-gray-100 text-center">
        <p className="text-xs text-gray-400">
          © {new Date().getFullYear()} Trench Studios. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};