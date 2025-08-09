import { Award, TrendingUp, CheckCircle, Building } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

export interface Stat {
  number: string;
  label: string;
  icon: LucideIcon;
}

export const stats: Stat[] = [
  { 
    number: "מאות", 
    label: "עסקאות מוצלחות", 
    icon: CheckCircle 
  },
  { 
    number: "10+", 
    label: "שנות פעילות", 
    icon: Award 
  },
  { 
    number: "3", 
    label: "ערים במרכז", 
    icon: Building 
  },
  { 
    number: "100%", 
    label: "מחויבות ללקוח", 
    icon: TrendingUp 
  }
];