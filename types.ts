export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  features: string[];
  icon: React.ComponentType<any>;
}

export interface DaySchedule {
  day: number;
  title: string;
  description: string;
}

export interface PricingItem {
  concept: string;
  amount: number;
  type: 'fee' | 'expense' | 'adspend';
  note?: string;
}