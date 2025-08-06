import { CheckCircle, Award, Users, TrendingUp } from 'lucide-react';

export interface Stat {
  number: string;
  label: string;
  icon: React.ReactNode;
}

export const stats: Stat[] = [
  { 
    number: "10+", 
    label: "שנות ניסיון", 
    icon: Award 
  },
  { 
    number: "3", 
    label: "ערים במרכז", 
    icon: CheckCircle 
  },
  { 
    number: "100%", 
    label: "מחויבות להצלחה", 
    icon: TrendingUp 
  }
];