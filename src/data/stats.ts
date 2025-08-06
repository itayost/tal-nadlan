import { Award, TrendingUp, CheckCircle } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

export interface Stat {
  number: string;
  label: string;
  icon: LucideIcon;
}

export const stats: Stat[] = [
  { 
    number: "מאות", 
    label: "לקוחות מרוצים", 
    icon: CheckCircle 
  },
  { 
    number: "10+", 
    label: "שנות ניסיון", 
    icon: Award 
  },
  { 
    number: "3", 
    label: "ערים במרכז", 
    icon: TrendingUp 
  }
];