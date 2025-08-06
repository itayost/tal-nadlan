export interface Property {
  id: number;
  title: string;
  price: string;
  size: string;
  rooms: string;
  image: string;
  status: "נמכר" | "הושכר" | "זמין" | "בתהליך";
  location?: string;
  description?: string;
  features?: string[];
}

export const properties: Property[] = [
  {
    id: 1,
    title: "דירת 2 חדרים בבניין חדש",
    price: "עסקה הושלמה",
    size: "50 מ״ר",
    rooms: "2 חדרים",
    image: "/images/properties/sold-bialik.jpg",
    status: "נמכר",
    location: "רחוב ביאליק, רמת גן",
    description: "דירת 2 חדרים בבניין חדש ברחוב ביאליק המרכזי והמבוקש",
    features: ["חניה פרטית", "ממ״ד", "בניין חדש", "מיקום מרכזי"]
  },
  {
    id: 2,
    title: "דירת 2 חדרים במיקום מעולה",
    price: "עסקה הושלמה",
    size: "48 מ״ר",
    rooms: "2 חדרים",
    image: "/images/properties/sold-bialik2.jpg",
    status: "נמכר",
    location: "רחוב ביאליק, רמת גן",
    description: "דירת 2 חדרים ברחוב ביאליק המרכזי והמבוקש בבניין חדש",
    features: ["חניה פרטית", "ממ״ד", "בניין חדש", "קרוב לתחבורה"]
  },
  {
    id: 3,
    title: "דירת 2 חדרים משופצת",
    price: "עסקה הושלמה",
    size: "52 מ״ר",
    rooms: "2 חדרים",
    image: "/images/properties/sold-bialik3.jpg",
    status: "נמכר",
    location: "רחוב ביאליק, רמת גן",
    description: "דירת 2 חדרים ברחוב ביאליק המרכזי והמבוקש בבניין חדש",
    features: ["חניה פרטית", "ממ״ד", "בניין חדש", "דירה שמורה"]
  },
  {
    id: 4,
    title: "דירת 4 חדרים בבניין בוטיק",
    price: "עסקה הושלמה",
    size: "100 מ״ר",
    rooms: "4 חדרים",
    image: "/images/properties/sold-yehuda.jpg",
    status: "נמכר",
    location: "שכונת תל יהודה, רמת גן",
    description: "דירת 4 חדרים עם מרפסת וחניה פרטית בבניין בוטיק",
    features: ["מרפסת שמש", "חניה פרטית", "בניין בוטיק", "שכונה שקטה"]
  },
  {
    id: 5,
    title: "3 חדרים להשכרה בגינדי",
    price: "הושכר",
    size: "75 מ״ר",
    rooms: "3 חדרים",
    image: "/images/properties/rent-gindi.jpg",
    status: "הושכר",
    location: "גינדי, תל אביב",
    description: "דירת 3 חדרים עם מרפסת וחניה במיקום מעולה",
    features: ["מרפסת", "חניה", "מיקום מרכזי", "קרוב לתחבורה"]
  },
  {
    id: 6,
    title: "4 חדרים להשכרה בנגבה",
    price: "הושכר",
    size: "95 מ״ר",
    rooms: "4 חדרים",
    image: "/images/properties/rent-negba.jpg",
    status: "הושכר",
    location: "שכונת נגבה, רמת גן",
    description: "דירת 4 חדרים בבניין חדש עם מרפסת שמש וחניה פרטית",
    features: ["מרפסת שמש", "חניה פרטית", "בניין חדש", "שכונה מבוקשת"]
  }
];

// נכסים נוספים לדוגמה - ניתן להחליף בנכסים אמיתיים נוספים
export const additionalProperties: Property[] = [
  {
    id: 7,
    title: "פנטהאוז מדהים ברמת גן",
    price: "₪7,500,000",
    size: "200 מ״ר + 80 מ״ר מרפסות",
    rooms: "5 חדרים",
    image: "https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?w=400",
    status: "זמין",
    location: "רמת גן - הבורסה",
    description: "פנטהאוז יוקרתי עם נוף פנורמי",
    features: ["2 חניות", "מחסן", "מעלית פרטית", "מרפסת גג ענקית"]
  },
  {
    id: 8,
    title: "דירת גן בגבעתיים",
    price: "₪4,800,000",
    size: "110 מ״ר + 50 מ״ר גינה",
    rooms: "4 חדרים",
    image: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=400",
    status: "זמין",
    location: "גבעתיים - בורוכוב",
    description: "דירת גן משופצת ברחוב שקט",
    features: ["גינה מטופחת", "ממ״ד", "מטבח חדש", "מיזוג מרכזי"]
  },
  {
    id: 9,
    title: "דירה בלב תל אביב",
    price: "₪3,200,000",
    size: "85 מ״ר",
    rooms: "3 חדרים",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400",
    status: "זמין",
    location: "תל אביב - רוטשילד",
    description: "דירה משופצת במיקום מרכזי",
    features: ["מרפסת שמש", "קרוב לתחבורה", "בניין באוהאוס", "דירה שקטה"]
  }
];