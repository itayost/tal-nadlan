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