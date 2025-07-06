import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";

const resources = {
  en: {
    translation: {
      Home: "Home",
      "About Us": "About Us",
      Solutions: "Solutions",
      Services: "Services",
      Products: "Products",
      "Contact Us": "Contact Us",
      aboutUsPage: {
        title1: "Who Are We?",
        title2: "What Do We Offer?",
        p1: "We are not just another cold, distant corporation. We are a team of hands-on professionals who live and breathe the restaurant industry.After years of hard work, with hands dirtied from intense services and bustling kitchens, we realized one simple truth: managing a restaurant doesn’t have to be this complicated.",
        p2: "We founded our company with a deep understanding of the needs and challenges that come with running a restaurant business. We’ve seen the stress, the wasted time, and the unnecessary costs burdening business owners, and we decided it was time to put an end to it.",
        p3: "Smart and advanced services for managing your restaurant all under one roof. No hidden costs, no surprises, and with a clear and transparent fixed price. We are here to make your management simpler, faster, and more efficient.",
        p4: "It’s time to take control back into your hands. Join us and start working smarter with a solution that truly works for you.",
      },
      header: {
        h1: "YOUR <span id='header-text-style'>ALL-IN-ONE</span><br />SOLUTION",
        h2: "A POS System designed and built to<br /> help restaurants grow and scale.",
      },
      aboutus: {
        header: "About us",
        para: "Iron POS is a cloud-based platform built to simplify restaurant operations. From order management to real-time analytics, we empower food service businesses to work smarter, deliver great customer experiences, and scale with ease.",
      },
      workWithUs: "who we work with",
      stream: {
        header: "Seamless Payments and Powerful Integrations",
        // para: "Effortlessly Manage sales, inventory, customer relationships, and staff from a single platform.",
        1: {
          title: "Third-Party Integrations",
          p: "Connect with delivery systems, accounting tools, and HR platforms.",
        },
        2: {
          title: "Multi-Currency Support",
          p: "Handle dual pricing and multiple currencies.",
        },
        3: {
          title: "Payment Options",
          p: "Accept credit cards, cash, mobile payments, and other methods.",
        },
        4: {
          title: "Basic Receipt Printing",
          p: "Print or email receipts after transactions.",
        },
      },
      services: {
        title: "Streamline Every Step of Your Restaurant Operations",
        title2: "Flexible Solutions for Any Device and Setup",
        p: "Our comprehensive POS system offers",
        p2: "Iron POS works seamlessly with tablets, smartphones (iOS/Android), KDS, CDS, mobile POS devices, and printers \n.With QR and kiosk ordering for self-service and standard compatibility with tablets and receipt printers, it offers a flexible setup for any restaurant.",
        1: {
          title: "Multi-Channel Order Management:",
          p: "Handle orders from QR codes, kiosks, apps, and table reservations.",
        },
        2: {
          title: "Visual Table Layouts:",
          p: "Adjust seating, merge tables, and track real-time changes.",
        },
        3: {
          title: "Menu Synchronization:",
          p: "Update menus across branches instantly.",
        },
        4: {
          title: "Team Management:",
          p: "Track hours, monitor performance, and manage access with role-based permissions.",
        },
        5: {
          title: "Inventory Management:",
          p: "Monitor stock, manage suppliers, and automate reorders.",
        },
        6: {
          title: "Reports and Analytics:",
          p: "Generate real-time, customizable reports on sales and operational data.",
        },
        7: {
          title: "Basic Order Tracking:",
          p: "Accept and process table and walk-in orders.",
        },
      },
      products: {
        title: "tech that works for you",
        p: "Take payments and run your point of sale with hardware that suits your business needs. Check our comparison table to confirm POS compatibility.",
        btn: "All Products",
        1: {
          title: "Iron Kiosk",
          p: "Durable, high-speed displays that simplify order-taking and handle daily restaurant demands—no delays, no downtime.",
        },
        2: {
          title: "Iron Payment Reader",
          p: "Accept all major payment methods with a single, integrated reader, featuring real-time syncing to Iron POS for error-free transactions.",
        },
        3: {
          title: "Iron Tablets",
          p: "An innovative, integrated scale system for precise weight management in the kitchen and at the counter, seamlessly connected to Iron POS to reduce calculation errors.",
        },
        4: {
          title: "Iron Tablets",
          p: "Durable and intuitive tablets designed to streamline table-side ordering, minimize errors, and keep your restaurant operations running smoothly.",
        },
      },
      contact: {
        title: "Want to know if Iron POS is right for your business?",
        firstName: "First Name",
        lastName: "Last Name",
        email: "Email",
        phoneNumber: "Phone Number",
        message: "Message",
        button: "Book a call",
        successMessage: "Email sent!",
        errorMessage: "Something went wrong, try again!",
        sending: "Sending..",
      },
      footer: {
        p: "A cloud-based payment and management solution built for restaurants—simplifying daily operations, boosting efficiency, and fueling growth. Perfect for small cafés and multi-branch chains alike.",
        menu: "menu",
        products: "products",
        home: "Home",
        aboutUs: "About us",
        solutions: "Solutions",
        services: "Services",
        products: "Products",
        contact: "Contact Info",
      },
      centralized: {
        title: "Centralized Control for Multi-Branch Success",
        1: {
          title: "Central Inventory Management:",
          p: "Track and transfer stock between multiple locations.",
        },
        2: {
          title: "Branch-Level Reporting:",
          p: "Compare branch performance and costs from a centralized dashboard.",
        },
        3: {
          title: "Menu Updates:",
          p: "Sync menu changes across branches.",
        },
      },
      tailored: {
        title: "Tailored Apps to Elevate Your Customer Experience",
        1: {
          title: "Custom App Creation:",
          p: "Build branded apps for online ordering and loyalty programs without coding.",
        },
        2: {
          title: "Online Ordering:",
          p: "Enable promotions and support remote orders via social platforms.",
        },
        3: {
          title: "Loyalty Programs:",
          p: "Manage gift cards, points, and customer alerts to retain customers.",
        },
      },
      connected: {
        title: "Stay Connected and In Control from Anywhere",
        p: "Iron POS keeps you connected and in control with remote device monitoring, allowing you to track device statuses and adjust settings from anywhere.Additionally, remote technical support ensures quick issue resolution, minimizing downtime and keeping your operations running smoothly.",
      },
    },
  },
  he: {
    translation: {
      Home: "בית",
      "About Us": "מי אנחנו",
      Solutions: "פתרונות",
      Services: "שירותים",
      Products: "מוצרים",
      "Contact Us": "צור קשר",
      aboutUsPage: {
        title1: "מי אנחנו?",
        title2: "מה אנחנו מציעים?",
        p1: "אנחנו לא עוד תאגיד קר ומרוחק, אלא קבוצה של אנשי שטח שחיים ונושמים את עולם המסעדנות. אחרי שנים של עבודה קשה, עם ידיים מלוכלכות מסרוויסים אינטנסיביים ומטבחים עמוסים, הבנו דבר אחד ברור: ניהול מסעדה לא צריך להיות כזה מסובך.",
        p2: "הקמנו את החברה שלנו מתוך ההבנה העמוקה של הצרכים והאתגרים שמגיעים עם ניהול עסקי מסעדנות. ראינו את הלחץ, את הזמן שמתבזבז, ואת העלויות המיותרות שמכבידות על בעלי העסקים, והחלטנו לשים לזה סוף.",
        p3: "שירותים חכמים ומתקדמים לניהול המסעדה שלך הכל תחת קורת גג אחת. בלי עלויות נסתרות, בלי הפתעות, ועם מחיר FIX ברור ושקוף. אנחנו כאן כדי להפוך את הניהול שלך לפשוט, מהיר ויעיל.",
        p4: "זה הזמן להחזיר את השליטה לידיים שלך. מצטרפים אלינו ומתחילים לעבוד חכם יותר עם פתרון שבאמת עובד בשבילך",
      },
      header: {
        h1: "<span id='header-text-style'>הפתרון המושלם</span><br />TEST",
        // h1: "למסעדה שלך<br /><span id='header-text-style'>הפתרון המושלם</span>",
        h2: "מערכת קופה שתוכננה ונבנתה כדי<br />לעזור למסעדות לצמוח ולהתרחב.",
      },
      aboutus: {
        header: "מי אנחנו ?",
        para: "Iron POS היא פלטפורמה מבוססת ענן שנועדה לפשט את ניהול המסעדות. ממעקב אחר הזמנות ועד ניתוח נתונים בזמן אמת, אנחנו מעניקים לעסקים בענף המזון את הכלים לעבוד בצורה חכמה יותר, לשפר את חוויית הלקוח ולצמוח בקלות.",
      },
      workWithUs: "עם מי אנחנו עובדים",
      stream: {
        header: "תשלומים חלקים ואינטגרציות עוצמתיות",
        // para: "נהלו בקלות מכירות, מלאי, קשרי לקוחות וצוות והכול מפלטפורמה אחת.",
        1: {
          title: "אינטגרציות עם צד שלישי",
          p: "חיבור למערכות משלוחים, כלים פיננסיים ופלטפורמות משאבי אנוש.",
        },
        2: {
          title: "תמיכה במטבעות מרובים:",
          p: "ניהול תמחור כפול ומטבעות מגוונים.",
        },
        3: {
          title: "אפשרויות תשלום:",
          p: "קבלת כרטיסי אשראי, מזומן, תשלומים ניידים ושיטות נוספות.",
        },
        4: {
          title: "הדפסת קבלות בסיסית:",
          p: "הדפסת או שליחת קבלות במייל לאחר העסקה.",
        },
      },
      services: {
        title: "פשטו כל שלב בתפעול המסעדה שלכם",
        title2: "תמיכה בריבוי פלטפורמות וחומרה",
        p: "המערכת המקיפה שלנו מציעה:",
        p2: "Iron POS עובד בצורה חלקה עם טאבלטים, סמארטפונים (iOS/Android), KDS, CDS, מכשירי POS ניידים ומדפסות.עם הזמנות QR וקיוסק לשירות עצמי ותאימות סטנדרטית לטאבלטים ומדפסות קבלות, המערכת מציעה פתרון גמיש לכל מסעדה.",
        1: {
          title: "ניהול הזמנות רב-ערוצי:",
          p: "קבלת הזמנות מ-QR, קיוסקים, אפליקציות והזמנות שולחן.",
        },
        2: {
          title: "פריסת שולחנות ויזואלית:",
          p: "התאמת ישיבה, מיזוג שולחנות ומעקב אחר שינויים בזמן אמת.",
        },
        3: {
          title: "סנכרון תפריטים:",
          p: "עדכון תפריטים בסניפים בלחיצה אחת.",
        },
        4: {
          title: "ניהול צוות:",
          p: "מעקב אחר שעות עבודה, ביצועים וניהול הרשאות מבוססות תפקידים.",
        },
        5: {
          title: "ניהול מלאי:",
          p: "מעקב אחר מלאי, ניהול ספקים ואוטומציה להזמנות מחדש.",
        },
        6: {
          title: "דוחות וניתוחים:",
          p: "יצירת דוחות בזמן אמת המותאמים אישית לנתוני מכירה ותפעול.",
        },
        7: {
          title: "מעקב הזמנות בסיסי:",
          p: "קבלת ועיבוד הזמנות שולחן ומזדמנות.",
        },
      },
      products: {
        title: "טכנולוגיה שעובדת בשבילכם",
        p: "קבלו תשלומים והפעילו את הקופה שלכם בעזרת ציוד המותאם לצורכי העסק.עיינו בטבלת ההשוואה שלנו כדי לוודא תאימות מלאה למערכת",
        btn: "לכל המוצרים",
        1: {
          title: "קיוסק Iron",
          p: "מסך מהיר ועמיד במיוחד שמפשט את תהליך ההזמנה ומתמודד עם הדרישות היומיומיות של מסעדות - ללא עיכובים, ללא השבתות.",
        },
        2: {
          title: "קורא תשלומים Iron",
          p: "קבלו את כל שיטות התשלום המובילות על קורא תשלומים אינטגרטיבי אחד, עם סנכרון בזמן אמת ל-Iron POS לחוויית תשלום ללא טעויות.",
        },
        3: {
          title: "מאזני Iron",
          p: "מערכת מאזניים משולבת וחדשנית לניהול משקלים מדויק במטבח ובקופה, המתחברת ישירות ל-Iron POS ומפחיתה טעויות חישוב.",
        },
        4: {
          title: "Iron טאבלטים",
          p: "טאבלטים קשיחים ואינטואיטיביים שמייעלים הזמנות ליד השולחן, מפחיתים טעויות ושומרים על תפעול חלק של השירות שלכם.",
        },
      },
      contact: {
        title: "רוצים לדעת אם Iron POS מתאים לעסק שלכם?",
        firstName: "שם פרטי",
        lastName: "שם משפחה",
        email: "דוא”ל",
        phoneNumber: "מספר טלפון",
        message: "הודעה",
        button: "קבעו שיחה",
        successMessage: "המייל נשלח בהצלחה!",
        errorMessage: "מייל לא נשלח, נא לנסות שנית",
        sending: "שולח..",
      },
      footer: {
        p: "פתרון ניהול ותשלום בענן, שנבנה במיוחד עבור מסעדות מפשט את הפעילות היומיומית, מייעל תהליכים ומניע צמיחה. מושלם לבתי קפה קטנים ולרשתות מרובות סניפים כאחד.",
        menu: "תפריט",
        products: "מוצרים",
        home: "בית",
        aboutUs: "מי אנחנו",
        solutions: "פתרונות",
        services: "שירותים",
        products: "מוצרים",
        contact: "יצירת קשר",
      },
      centralized: {
        title: "שליטה מרכזית להצלחת רשת סניפים",
        1: {
          title: "ניהול מלאי מרכזי:",
          p: "מעקב וניהול העברת מלאי בין סניפים.",
        },
        2: {
          title: "דוחות רמת סניפים:",
          p: "השוואת ביצועים ועלויות של סניפים מממשק מרכזי.",
        },
        3: {
          title: "עדכוני תפריטים:",
          p: "סנכרון שינויים בתפריט בין סניפים.",
        },
      },
      tailored: {
        title: "אפליקציות מותאמות לשדרוג חוויית הלקוח שלכם",
        1: {
          title: "יצירת אפליקציות מותאמות אישית:",
          p: "בניית אפליקציות ממותגות להזמנות אונליין ותוכניות נאמנות ללא צורך בקידוד.",
        },
        2: {
          title: "הזמנות אונליין:",
          p: "תמיכה במבצעים ובהזמנות מרחוק דרך רשתות חברתיות.",
        },
        3: {
          title: "תוכניות נאמנות:",
          p: "ניהול כרטיסי מתנה, נקודות והתראות לקוחות לשימור לקוחות.",
        },
      },
      connected: {
        title: "הישארו מחוברים ושולטים מכל מקום",
        p: "Iron POS שומרת אתכם מחוברים ושולטים עם מעקב מרחוק אחר מכשירים, המאפשר לכם לעקוב אחר מצב המכשירים ולשנות הגדרות מכל מקום.בנוסף, התמיכה הטכנית מרחוק מבטיחה פתרון מהיר של בעיות, ממזערת השבתות ושומרת על תפעול חלק של העסק שלכם.",
      },
    },
  },
};

i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    supportedLngs: ["en", "he"],
    fallbackLng: "en",
    debug: true,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
