export interface Testimonial {
  id: number;
  name: string;
  location: string;
  text: string;
  rating: number;
  type: "קנייה" | "מכירה" | "השכרה" | "השקעה";
  date?: string;
  propertyType?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 9,
    name: "משפחת עוזיהו",
    location: "רמת גן",
    text: "טל הוא מתווך מאוד מקצועי ואמין אדם מקסים, נחמד ושירותי. טל ליווה אותנו לאורך כל הדרך ברכישת הדירה הציע עזרה במציאת עורך דין עשה את כל מה שביכולתו כדי לעזור במחיר ולסבסד כמה שניתן היה מאוד קשוב לצרכים שלנו וסבלני לאורך כל ההחלטות עשה את כל מה שביכולתו לקדם את העסקה בצורה נעימה והוגנת למוכר ולקונה הרגשנו שיש עלל מי לסמוך. בקיצור עשר מעשר💪🏻",
    rating: 5,
    type: "קנייה",
    propertyType: "דירת 4 חדרים"
  },
  {
    id: 1,
    name: "משפחת כהן",
    location: "רמת גן",
    text: "טל ליווה אותנו בתהליך רכישת הבית החדש שלנו. המקצועיות, הסבלנות וההתמדה שלו - בדיוק כמו בספורט - הביאו אותנו לעסקה מושלמת!",
    rating: 5,
    type: "קנייה",
    date: "ינואר 2024",
    propertyType: "דירת 4 חדרים"
  },
  {
    id: 2,
    name: "יוסי ומיכל לוי",
    location: "גבעתיים",
    text: "אחרי חודשים של חיפושים, טל מצא לנו את הדירה המושלמת תוך שבועיים! הידע שלו בשוק המקומי והיכולת למצוא בדיוק מה שחיפשנו - פשוט מדהים.",
    rating: 5,
    type: "קנייה",
    date: "דצמבר 2023",
    propertyType: "דירת 3.5 חדרים"
  },
  {
    id: 3,
    name: "ד״ר אברהמי",
    location: "תל אביב",
    text: "מכרנו את הדירה שלנו דרך טל במחיר מעל הציפיות ובזמן שיא! הוא ידע בדיוק איך לשווק את הנכס ולהביא את הקונים הנכונים.",
    rating: 5,
    type: "מכירה",
    date: "נובמבר 2023",
    propertyType: "פנטהאוז"
  },
  {
    id: 4,
    name: "עו״ד שרה רוזנברג",
    location: "רמת גן",
    text: "טל הוא לא רק מתווך, הוא יועץ אמיתי. עזר לנו להבין את השוק, ליווה אותנו בכל שלב וחסך לנו הרבה כסף בדרך. ממליצה בחום!",
    rating: 5,
    type: "קנייה",
    date: "אוקטובר 2023",
    propertyType: "דירת גן"
  },
  {
    id: 5,
    name: "משפחת גולדשטיין",
    location: "גבעתיים",
    text: "השכרנו דירה דרך טל. השירות המקצועי, הזמינות המלאה והיחס האישי - הכל היה מעל ומעבר. מרגישים שיש לנו מישהו לסמוך עליו.",
    rating: 5,
    type: "השכרה",
    date: "ספטמבר 2023",
    propertyType: "דירת 2.5 חדרים"
  },
  {
    id: 6,
    name: "אלי ונועה ברק",
    location: "רמת גן",
    text: "עבודת צוות אמיתית! טל עבד איתנו יד ביד, הבין בדיוק את הצרכים שלנו ומצא לנו את הבית המושלם למשפחה. תודה על הליווי המקצועי!",
    rating: 5,
    type: "קנייה",
    date: "אוגוסט 2023",
    propertyType: "דירת 5 חדרים"
  },
  {
    id: 7,
    name: "דני מזרחי",
    location: "תל אביב",
    text: "כמו במגרש - טל לא מוותר עד שהוא משיג את המטרה. מצא לי נכס להשקעה מעולה במחיר מצוין. מקצוען אמיתי!",
    rating: 5,
    type: "השקעה",
    date: "יולי 2023",
    propertyType: "דירה להשקעה"
  },
  {
    id: 8,
    name: "רונית ואסף",
    location: "גבעתיים",
    text: "הרגשנו שטל באמת דואג לנו ולא סתם מנסה לסגור עסקה. הסבלנות, המקצועיות והידע שלו עזרו לנו למצוא את הבית החדש שלנו.",
    rating: 5,
    type: "קנייה",
    date: "יוני 2023",
    propertyType: "קוטג׳"
  }
];