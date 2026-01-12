import { Clock, BarChart3, Bot, MapPin, Camera, Zap } from 'lucide-react';
import { NavItem, ServiceItem, DaySchedule, PricingItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'El Problema', href: '#problem' },
  { label: 'La Solución', href: '#sprint' },
  { label: 'Crecimiento', href: '#services' },
  { label: 'Inversión', href: '#pricing' },
];

export const SPRINT_BENEFITS = [
  {
    title: '1. Inmersión Total',
    description: 'Vamos a tu local. Nadie puede vender tu experiencia si no la vive.',
    icon: MapPin
  },
  {
    title: '2. Contenido Estratégico',
    description: '3 meses de activos listos. Adiós a la improvisación y al estrés creativo.',
    icon: Camera
  },
  {
    title: '3. Pauta Inteligente',
    description: 'Configuración de Ads enfocada en ROI. Tu dinero vuelve multiplicado.',
    icon: Zap
  }
];

export const SERVICES: ServiceItem[] = [
  {
    title: 'Sprint de Inmersión',
    description: 'Infraestructura digital completa en 5 días. Sin esperas.',
    features: ['Estrategia In-Situ', 'Producción Sniper', 'Lanzamiento Inmediato'],
    icon: MapPin
  },
  {
    title: 'Gestión de Crecimiento',
    description: 'Optimizamos tus campañas diariamente para escalar resultados.',
    features: ['Media Buying', 'Reportes de ROI', 'Escalado'],
    icon: BarChart3
  },
  {
    title: 'Automatización',
    description: 'Tu negocio atiende 24/7. Calificamos leads en automático.',
    features: ['WhatsApp API', 'CRM Setup', 'Lead Scoring'],
    icon: Bot
  }
];

export const PRICING_STRUCTURE: PricingItem[] = [
  {
    concept: 'Inversión Sistema Trench',
    amount: 15000,
    type: 'fee',
    note: 'Tu infraestructura de ventas'
  },
  {
    concept: 'Viáticos (Estimado)',
    amount: 8000,
    type: 'expense',
    note: 'Vuelos y Hospedaje (Costo real)'
  },
  {
    concept: 'Inversión en Pauta (Ads)',
    amount: 7000,
    type: 'adspend',
    note: 'Pago directo a Meta'
  }
];

export const CONTACT_INFO = {
  email: 'clubtrenchstudios@gmail.com',
  whatsapp: '9998997877',
  whatsappLink: 'https://wa.me/message/WLE2W2FUSYZZJ1',
  ctaLabel: 'Agendar Diagnóstico Gratuito'
};