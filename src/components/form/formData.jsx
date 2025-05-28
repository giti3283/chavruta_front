// // Form data for Chavruta application

// export const countries = [
//     { name: 'ישראל', code: 'IL', flag: '🇮🇱', cities: [
//       { name: 'ירושלים', region: 'מרכז' },
//       { name: 'תל אביב', region: 'מרכז' },
//       { name: 'חיפה', region: 'צפון' },
//       { name: 'באר שבע', region: 'דרום' },
//       { name: 'נתניה', region: 'מרכז' },
//       { name: 'אשדוד', region: 'דרום' },
//       { name: 'פתח תקווה', region: 'מרכז' },
//       { name: 'אשקלון', region: 'דרום' },
//       { name: 'רחובות', region: 'מרכז' },
//       { name: 'בת ים', region: 'מרכז' },
//       { name: 'בני ברק', region: 'מרכז' },
//       { name: 'רמת גן', region: 'מרכז' },
//       { name: 'הרצליה', region: 'מרכז' },
//       { name: 'כפר סבא', region: 'מרכז' },
//       { name: 'רעננה', region: 'מרכז' },
//       { name: 'מודיעין', region: 'מרכז' },
//       { name: 'נצרת', region: 'צפון' },
//       { name: 'עכו', region: 'צפון' },
//       { name: 'טבריה', region: 'צפון' },
//       { name: 'צפת', region: 'צפון' },
//       { name: 'קריית שמונה', region: 'צפון' },
//       { name: 'אילת', region: 'דרום' },
//       { name: 'דימונה', region: 'דרום' },
//       { name: 'ערד', region: 'דרום' }
//     ]},
//     { name: 'ארצות הברית', code: 'US', flag: '🇺🇸', cities: [
//       { name: 'ניו יורק', region: 'מזרח' },
//       { name: 'לוס אנג\'לס', region: 'מערב' },
//       { name: 'שיקגו', region: 'מרכז' },
//       { name: 'מיאמי', region: 'דרום' },
//       { name: 'לאס וגאס', region: 'מערב' },
//       { name: 'בוסטון', region: 'מזרח' },
//       { name: 'פילדלפיה', region: 'מזרח' },
//       { name: 'וושינגטון', region: 'מזרח' }
//     ]},
//     { name: 'קנדה', code: 'CA', flag: '🇨🇦', cities: [
//       { name: 'טורונטו', region: 'אונטריו' },
//       { name: 'מונטריאול', region: 'קוויבק' },
//       { name: 'ונקובר', region: 'קולומביה הבריטית' },
//       { name: 'אוטווה', region: 'אונטריו' }
//     ]},
//     { name: 'בריטניה', code: 'GB', flag: '🇬🇧', cities: [
//       { name: 'לונדון', region: 'אנגליה' },
//       { name: 'מנצ\'סטר', region: 'אנגליה' },
//       { name: 'ברמינגהם', region: 'אנגליה' },
//       { name: 'גלזגו', region: 'סקוטלנד' }
//     ]},
//     { name: 'צרפת', code: 'FR', flag: '🇫🇷', cities: [
//       { name: 'פריז', region: 'איל דה פראנס' },
//       { name: 'מרסיי', region: 'פרובאנס' },
//       { name: 'ליון', region: 'רון אלפ' },
//       { name: 'ניס', region: 'פרובאנס' }
//     ]},
//     { name: 'אוסטרליה', code: 'AU', flag: '🇦🇺', cities: [
//       { name: 'סידני', region: 'ניו סאות\' ויילס' },
//       { name: 'מלבורן', region: 'ויקטוריה' },
//       { name: 'בריסביין', region: 'קווינסלנד' },
//       { name: 'פרת\'', region: 'מערב אוסטרליה' }
//     ]},
//     { name: 'ארגנטינה', code: 'AR', flag: '🇦🇷', cities: [
//       { name: 'בואנוס איירס', region: 'בואנוס איירס' },
//       { name: 'קורדובה', region: 'קורדובה' },
//       { name: 'רוסריו', region: 'סנטה פה' }
//     ]},
//     { name: 'ברזיל', code: 'BR', flag: '🇧🇷', cities: [
//       { name: 'סאו פאולו', region: 'סאו פאולו' },
//       { name: 'ריו דה ז\'נירו', region: 'ריו דה ז\'נירו' },
//       { name: 'ברזיליה', region: 'מחוז פדרלי' }
//     ]},
//     { name: 'דרום אפריקה', code: 'ZA', flag: '🇿🇦', cities: [
//       { name: 'יוהנסבורג', region: 'גאוטנג' },
//       { name: 'קייפטאון', region: 'מערב הכף' },
//       { name: 'דרבן', region: 'קוואזולו נטאל' }
//     ]},
//     { name: 'גרמניה', code: 'DE', flag: '🇩🇪', cities: [
//       { name: 'ברלין', region: 'ברלין' },
//       { name: 'מינכן', region: 'בוואריה' },
//       { name: 'המבורג', region: 'המבורג' },
//       { name: 'פרנקפורט', region: 'הסה' }
//     ]}
//   ];
  
//   export const roles = [
//     'תלמיד ישיבה',
//     'אברך',
//     'רב',
//     'מורה',
//     'סטודנט',
//     'עובד',
//     'פנסיונר',
//     'עקרת בית',
//     'עצמאי',
//     'אקדמאי',
//     'רופא',
//     'עורך דין',
//     'מהנדס',
//     'חשב',
//     'מנהל',
//     'מדען',
//     'אמן',
//     'כתב',
//     'מתרגם',
//     'מדריך',
//     'יועץ',
//     'פסיכולוג',
//     'עובד סוציאלי',
//     'אחר'
//   ];
  
//   export const denominations = [
//     'חרדי ליטאי',
//     'חרדי חסידי',
//     'חרדי ספרדי',
//     'דתי לאומי',
//     'דתי מתון',
//     'מסורתי',
//     'חילוני מתעניין',
//     'רפורמי',
//     'קונסרבטיבי',
//     'חב"ד',
//     'ברסלב',
//     'ספרדי מסורתי',
//     'תימני',
//     'אתיופי',
//     'בוכרי',
//     'מרוקאי',
//     'טוניסאי',
//     'אלג\'יראי',
//     'עיראקי',
//     'תורכי',
//     'רוסי',
//     'אמריקאי',
//     'צרפתי',
//     'אנגלי',
//     'אוסטרלי',
//     'ארגנטינאי',
//     'ברזילאי',
//     'דרום אפריקאי',
//     'גרמני',
//     'הולנדי',
//     'בלגי',
//     'שוויצרי',
//     'איטלקי',
//     'ספרדי',
//     'פורטוגלי',
//     'יווני',
//     'בולגרי',
//     'רומני',
//     'הונגרי',
//     'צ\'כי',
//     'פולני',
//     'ליטאי',
//     'לטבי',
//     'אסטוני',
//     'פיני',
//     'שוודי',
//     'נורווגי',
//     'דני',
//     'איסלנדי',
//     'אחר'
//   ];
  
//   export const learningLevels = [
//     { value: 'beginner', label: 'מתחיל', description: 'מכיר אותיות ומילים בסיסיות' },
//     { value: 'elementary', label: 'בסיסי', description: 'יודע לקרוא טקסטים פשוטים' },
//     { value: 'intermediate', label: 'בינוני', description: 'מבין גמרא עם פירוש רש"י' },
//     { value: 'advanced', label: 'מתקדם', description: 'לומד בעיון עם תוספות' },
//     { value: 'expert', label: 'מומחה', description: 'בקי בש"ס ופוסקים' },
//     { value: 'scholar', label: 'תלמיד חכם', description: 'יכול ללמד אחרים' }
//   ];
  
//   export const studyMethods = [
//     { value: 'chavruta', label: 'חברותא', icon: '👥', description: 'לימוד בזוגות עם דיון' },
//     { value: 'shiur', label: 'שיעור', icon: '🎓', description: 'הרצאה מובנית' },
//     { value: 'self_study', label: 'לימוד עצמי', icon: '📚', description: 'לימוד אישי מונחה' },
//     { value: 'group', label: 'קבוצה', icon: '👨‍👩‍👧‍👦', description: 'לימוד בקבוצה קטנה' },
//     { value: 'online', label: 'מקוון', icon: '💻', description: 'לימוד דרך האינטרנט' },
//     { value: 'phone', label: 'טלפון', icon: '📞', description: 'לימוד טלפוני' },
//     { value: 'mixed', label: 'משולב', icon: '🔄', description: 'שילוב של שיטות' }
//   ];
  
//   export const studyTimes = [
//     { value: 'morning', label: 'בוקר', icon: '🌅', time: '06:00-12:00' },
//     { value: 'afternoon', label: 'צהריים', icon: '☀️', time: '12:00-18:00' },
//     { value: 'evening', label: 'ערב', icon: '🌆', time: '18:00-22:00' },
//     { value: 'night', label: 'לילה', icon: '🌙', time: '22:00-06:00' },
//     { value: 'flexible', label: 'גמיש', icon: '⏰', time: 'לפי תיאום' }
//   ];
  
//   export const studySubjects = [
//     { 
//       category: 'תנ"ך', 
//       subjects: [
//         'תורה עם פירושים',
//         'נביאים ראשונים',
//         'נביאים אחרונים',
//         'כתובים',
//         'מקרא עם תרגום',
//         'פרשת השבוע',
//         'חמש מגילות',
//         'תהילים',
//         'משלי',
//         'איוב'
//       ]
//     },
//     { 
//       category: 'משנה', 
//       subjects: [
//         'זרעים',
//         'מועד',
//         'נשים',
//         'נזיקין',
//         'קדשים',
//         'טהרות',
//         'אבות',
//         'משנה ברורה'
//       ]
//     },
//     { 
//       category: 'תלמוד בבלי', 
//       subjects: [
//         'ברכות',
//         'שבת',
//         'עירובין',
//         'פסחים',
//         'יומא',
//         'סוכה',
//         'ביצה',
//         'ראש השנה',
//         'תענית',
//         'מגילה',
//         'מועד קטן',
//         'חגיגה',
//         'יבמות',
//         'כתובות',
//         'נדרים',
//         'נזיר',
//         'סוטה',
//         'גיטין',
//         'קידושין',
//         'בבא קמא',
//         'בבא מציעא',
//         'בבא בתרא',
//         'סנהדרין',
//         'מכות',
//         'שבועות',
//         'עבודה זרה',
//         'הוריות',
//         'זבחים',
//         'מנחות',
//         'חולין',
//         'בכורות',
//         'ערכין',
//         'תמורה',
//         'כריתות',
//         'מעילה',
//         'תמיד',
//         'מידות',
//         'קינים',
//         'נדה'
//       ]
//     },
//     { 
//       category: 'תלמוד ירושלמי', 
//       subjects: [
//         'ברכות',
//         'פאה',
//         'דמאי',
//         'כלאים',
//         'שביעית',
//         'תרומות',
//         'מעשרות',
//         'מעשר שני',
//         'חלה',
//         'ערלה',
//         'ביכורים',
//         'שבת',
//         'עירובין',
//         'פסחים',
//         'שקלים',
//         'יומא',
//         'סוכה',
//         'ביצה',
//         'ראש השנה',
//         'תענית',
//         'מגילה',
//         'חגיגה',
//         'מועד קטן',
//         'יבמות',
//         'כתובות',
//         'נדרים',
//         'נזיר',
//         'סוטה',
//         'גיטין',
//         'קידושין',
//         'בבא קמא',
//         'בבא מציעא',
//         'בבא בתרא',
//         'שבועות',
//         'מכות',
//         'סנהדרין',
//         'עבודה זרה',
//         'הוריות',
//         'נדה'
//       ]
//     },
//     { 
//       category: 'הלכה', 
//       subjects: [
//         'שולחן ערוך אורח חיים',
//         'שולחן ערוך יורה דעה',
//         'שולחן ערוך אבן העזר',
//         'שולחן ערוך חושן משפט',
//         'משנה ברורה',
//         'ביאור הלכה',
//         'שער הציון',
//         'כף החיים',
//         'ארוך השולחן',
//         'חיי אדם',
//         'קיצור שולחן ערוך',
//         'בן איש חי',
//         'יביע אומר',
//         'אגרות משה',
//         'מנחת יצחק',
//         'ציץ אליעזר',
//         'שבט הלוי',
//         'אור לציון'
//       ]
//     },
//     { 
//       category: 'קבלה וחסידות', 
//       subjects: [
//         'זוהר',
//         'עץ חיים',
//         'פרי עץ חיים',
//         'שער הגלגולים',
//         'תניא',
//         'לקוטי מוהר"ן',
//         'נועם אלימלך',
//         'קדושת לוי',
//         'מאור ושמש',
//         'אור החיים',
//         'רמח"ל - דרך ה\'',
//         'רמח"ל - מסילת ישרים',
//         'חובות הלבבות',
//         'שערי תשובה',
//         'ספר החינוך'
//       ]
//     },
//     { 
//       category: 'מחשבה ופילוסופיה', 
//       subjects: [
//         'מורה נבוכים',
//         'כוזרי',
//         'עקרים',
//         'ספר האמונות והדעות',
//         'מלחמות ה\'',
//         'אור ה\'',
//         'דרך ה\'',
//         'נפש החיים',
//         'רוח חיים',
//         'שפת אמת',
//         'בית הלוי',
//         'נצח ישראל',
//         'גבורות ה\'',
//         'תפארת ישראל'
//       ]
//     },
//     { 
//       category: 'מדרש ואגדה', 
//       subjects: [
//         'מדרש רבה',
//         'מדרש תנחומא',
//         'פסיקתא דרב כהנא',
//         'פסיקתא רבתי',
//         'ילקוט שמעוני',
//         'מדרש שוחר טוב',
//         'אגדת בראשית',
//         'פרקי דרבי אליעזר',
//         'ספר היובלים',
//         'ספר חנוך'
//       ]
//     },
//     { 
//       category: 'פיוט ותפילה', 
//       subjects: [
//         'סידור עם פירושים',
//         'מחזור',
//         'קינות',
//         'סליחות',
//         'פיוטי יניי',
//         'פיוטי קליר',
//         'פיוטי הקדמונים',
//         'שירי הקודש',
//         'זמירות שבת',
//         'ניגוני חב"ד'
//       ]
//     }
//   ];
  
//   export const languages = [
//     { code: 'he', name: 'עברית', flag: '🇮🇱' },
//     { code: 'en', name: 'English', flag: '🇺🇸' },
//     { code: 'yi', name: 'ייִדיש', flag: '🕍' },
//     { code: 'ar', name: 'العربية', flag: '🇸🇦' },
//     { code: 'fr', name: 'Français', flag: '🇫🇷' },
//     { code: 'es', name: 'Español', flag: '🇪🇸' },
//     { code: 'ru', name: 'Русский', flag: '🇷🇺' },
//     { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
//     { code: 'it', name: 'Italiano', flag: '🇮🇹' },
//     { code: 'pt', name: 'Português', flag: '🇵🇹' }
//   ];
  
//   export const formSteps = [
//     {
//       id: 'personal',
//       title: 'פרטים אישיים',
//       description: 'מידע בסיסי עליך',
//       icon: '👤',
//       fields: ['id', 'firstName', 'lastName', 'birthDate', 'gender']
//     },
//     {
//       id: 'contact',
//       title: 'פרטי קשר',
//       description: 'איך ניתן ליצור איתך קשר',
//       icon: '📞',
//       fields: ['cellularTelephone', 'email', 'country', 'city']
//     },
//     {
//       id: 'background',
//       title: 'רקע ומעמד',
//       description: 'מידע על הרקע הדתי והחברתי שלך',
//       icon: '🎓',
//       fields: ['role', 'denomination', 'learningLevel']
//     },
//     {
//       id: 'preferences',
//       title: 'העדפות לימוד',
//       description: 'איך אתה אוהב ללמוד',
//       icon: '📚',
//       fields: ['studyMethods', 'studyTimes', 'preferredSubjects', 'languages']
//     },
//     {
//       id: 'summary',
//       title: 'סיכום ואישור',
//       description: 'בדיקה אחרונה של הפרטים',
//       icon: '✅',
//       fields: []
//     }
//   ];
  
//   export const genderOptions = [
//     { value: 'male', label: 'זכר', icon: '👨' },
//     { value: 'female', label: 'נקבה', icon: '👩' }
//   ];
  
//   export const defaultFormData = {
//     id: '',
//     firstName: '',
//     lastName: '',
//     birthDate: '',
//     gender: '',
//     cellularTelephone: '',
//     email: '',
//     country: null,
//     city: null,
//     role: '',
//     denomination: '',
//     learningLevel: '',
//     studyMethods: [],
//     studyTimes: [],
//     preferredSubjects: [],
//     languages: ['he'], // Hebrew as default
//     additionalInfo: '',
//     agreeToTerms: false,
//     allowContact: true,
//     newsletter: false
//   };
  
//   export const getStepProgress = (currentStep, totalSteps) => {
//     return Math.round((currentStep / (totalSteps - 1)) * 100);
//   };
  
//   export const getRequiredFieldsForStep = (stepId) => {
//     const step = formSteps.find(s => s.id === stepId);
//     return step ? step.fields : [];
//   };
  
//   export const getCitiesForCountry = (countryCode) => {
//     const country = countries.find(c => c.code === countryCode);
//     return country ? country.cities : [];
//   };
  
//   export const getSubjectsByCategory = (category) => {
//     const subjectGroup = studySubjects.find(s => s.category === category);
//     return subjectGroup ? subjectGroup.subjects : [];
//   };
  
//   export const getAllSubjects = () => {
//     return studySubjects.reduce((acc, group) => {
//       return [...acc, ...group.subjects.map(subject => ({
//         name: subject,
//         category: group.category
//       }))];
//     }, []);
//   };
  
//   export const formatFormDataForSubmission = (formData) => {
//     return {
//       ...formData,
//       country: formData.country?.name || '',
//       city: formData.city?.name || '',
//       studyMethods: formData.studyMethods.map(method => method.value || method),
//       studyTimes: formData.studyTimes.map(time => time.value || time),
//       preferredSubjects: formData.preferredSubjects.map(subject => subject.name || subject),
//       languages: formData.languages.map(lang => lang.code || lang),
//       submittedAt: new Date().toISOString(),
//       version: '1.0'
//     };
//   };
  
//   export const validateStepCompletion = (stepId, formData) => {
//     const requiredFields = getRequiredFieldsForStep(stepId);
//     const missingFields = [];
  
//     requiredFields.forEach(field => {
//       const value = formData[field];
      
//       if (Array.isArray(value)) {
//         if (value.length === 0) {
//           missingFields.push(field);
//         }
//       } else if (!value || (typeof value === 'string' && value.trim() === '')) {
//         missingFields.push(field);
//       }
//     });
  
//     return {
//       isComplete: missingFields.length === 0,
//       missingFields,
//       completionPercentage: Math.round(((requiredFields.length - missingFields.length) / requiredFields.length) * 100)
//     };
//   };
  
//   export const getFieldLabel = (fieldName, language = 'he') => {
//     const labels = {
//       he: {
//         id: 'תעודת זהות',
//         firstName: 'שם פרטי',
//         lastName: 'שם משפחה',
//         birthDate: 'תאריך לידה',
//         gender: 'מין',
//         cellularTelephone: 'טלפון נייד',
//         email: 'דואר אלקטרוני',
//         country: 'מדינה',
//         city: 'עיר',
//         role: 'תפקיד/מעמד',
//         denomination: 'זרם דתי',
//         learningLevel: 'רמת לימוד',
//         studyMethods: 'שיטות לימוד',
//         studyTimes: 'זמני לימוד',
//         preferredSubjects: 'נושאי לימוד מועדפים',
//         languages: 'שפות',
//         additionalInfo: 'מידע נוסף',
//         agreeToTerms: 'הסכמה לתנאים',
//         allowContact: 'אישור יצירת קשר',
//         newsletter: 'עדכונים בדואר אלקטרוני'
//       },
//       en: {
//         id: 'ID Number',
//         firstName: 'First Name',
//         lastName: 'Last Name',
//         birthDate: 'Birth Date',
//         gender: 'Gender',
//         cellularTelephone: 'Mobile Phone',
//         email: 'Email',
//         country: 'Country',
//         city: 'City',
//         role: 'Role/Status',
//         denomination: 'Religious Stream',
//         learningLevel: 'Learning Level',
//         studyMethods: 'Study Methods',
//         studyTimes: 'Study Times',
//         preferredSubjects: 'Preferred Subjects',
//         languages: 'Languages',
//         additionalInfo: 'Additional Information',
//         agreeToTerms: 'Agree to Terms',
//         allowContact: 'Allow Contact',
//         newsletter: 'Email Updates'
//       }
//     };
  
//     return labels[language]?.[fieldName] || fieldName;
//   };
  
//   export const getStepTitle = (stepId, language = 'he') => {
//     const step = formSteps.find(s => s.id === stepId);
//     if (!step) return '';
  
//     const titles = {
//       he: {
//         personal: 'פרטים אישיים',
//         contact: 'פרטי קשר',
//         background: 'רקע ומעמד',
//         preferences: 'העדפות לימוד',
//         summary: 'סיכום ואישור'
//       },
//       en: {
//         personal: 'Personal Details',
//         contact: 'Contact Information',
//         background: 'Background & Status',
//         preferences: 'Learning Preferences',
//         summary: 'Summary & Confirmation'
//       }
//     };
  
//     return titles[language]?.[stepId] || step.title;
//   };
  
//   export const getStepDescription = (stepId, language = 'he') => {
//     const step = formSteps.find(s => s.id === stepId);
//     if (!step) return '';
  
//     const descriptions = {
//       he: {
//         personal: 'מידע בסיסי עליך',
//         contact: 'איך ניתן ליצור איתך קשר',
//         background: 'מידע על הרקע הדתי והחברתי שלך',
//         preferences: 'איך אתה אוהב ללמוד',
//         summary: 'בדיקה אחרונה של הפרטים'
//       },
//       en: {
//         personal: 'Basic information about you',
//         contact: 'How we can reach you',
//         background: 'Information about your religious and social background',
//         preferences: 'How you like to study',
//         summary: 'Final review of your details'
//       }
//     };
  
//     return descriptions[language]?.[stepId] || step.description;
//   };
  
//   // Helper functions for form validation and processing
//   export const isValidStep = (stepIndex, formData) => {
//     if (stepIndex < 0 || stepIndex >= formSteps.length) return false;
    
//     const step = formSteps[stepIndex];
//     const validation = validateStepCompletion(step.id, formData);
    
//     return validation.isComplete;
//   };
  
//   export const getNextIncompleteStep = (formData) => {
//     for (let i = 0; i < formSteps.length - 1; i++) { // Exclude summary step
//       const step = formSteps[i];
//       const validation = validateStepCompletion(step.id, formData);
      
//       if (!validation.isComplete) {
//         return i;
//       }
//     }
    
//     return formSteps.length - 1; // Return summary step if all others are complete
//   };
  
//   export const getFormCompletionStatus = (formData) => {
//     const totalSteps = formSteps.length - 1; // Exclude summary step
//     let completedSteps = 0;
//     const stepStatuses = [];
  
//     for (let i = 0; i < totalSteps; i++) {
//       const step = formSteps[i];
//       const validation = validateStepCompletion(step.id, formData);
      
//       stepStatuses.push({
//         stepId: step.id,
//         stepIndex: i,
//         isComplete: validation.isComplete,
//         completionPercentage: validation.completionPercentage,
//         missingFields: validation.missingFields
//       });
  
//       if (validation.isComplete) {
//         completedSteps++;
//       }
//     }
  
//     return {
//       completedSteps,
//       totalSteps,
//       overallPercentage: Math.round((completedSteps / totalSteps) * 100),
//       stepStatuses,
//       isFormComplete: completedSteps === totalSteps
//     };
//   };
  
//   // Export utility functions for external use
//   export const formUtils = {
//     getStepProgress,
//     getRequiredFieldsForStep,
//     getCitiesForCountry,
//     getSubjectsByCategory,
//     getAllSubjects,
//     formatFormDataForSubmission,
//     validateStepCompletion,
//     getFieldLabel,
//     getStepTitle,
//     getStepDescription,
//     isValidStep,
//     getNextIncompleteStep,
//     getFormCompletionStatus
//   };
  
//   // Constants for form configuration
//   export const FORM_CONFIG = {
//     MAX_STUDY_METHODS: 5,
//     MAX_STUDY_TIMES: 3,
//     MAX_PREFERRED_SUBJECTS: 10,
//     MAX_LANGUAGES: 5,
//     MIN_AGE: 13,
//     MAX_AGE: 120,
//     PHONE_LENGTH: 10,
//     ID_LENGTH: 9,
//     AUTO_SAVE_INTERVAL: 30000, // 30 seconds
//     SESSION_TIMEOUT: 1800000, // 30 minutes
//     MAX_ADDITIONAL_INFO_LENGTH: 500
//   };
  
//   // Form field configurations
//   export const FIELD_CONFIGS = {
//     id: {
//       type: 'text',
//       maxLength: FORM_CONFIG.ID_LENGTH,
//       pattern: '[0-9]{9}',
//       required: true,
//       validation: 'israeliId'
//     },
//     firstName: {
//       type: 'text',
//       maxLength: 30,
//       required: true,
//       validation: 'name'
//     },
//     lastName: {
//       type: 'text',
//       maxLength: 30,
//       required: true,
//       validation: 'name'
//     },
//     birthDate: {
//       type: 'date',
//       required: true,
//       validation: 'age'
//     },
//     gender: {
//       type: 'select',
//       options: genderOptions,
//       required: true
//     },
//     cellularTelephone: {
//       type: 'tel',
//       maxLength: FORM_CONFIG.PHONE_LENGTH,
//       pattern: '05[0-9]{8}',
//       required: true,
//       validation: 'israeliPhone'
//     },
//     email: {
//       type: 'email',
//       required: true,
//       validation: 'email'
//     },
//     country: {
//       type: 'autocomplete',
//       options: countries,
//       required: true
//     },
//     city: {
//       type: 'autocomplete',
//       options: [], // Dynamic based on country
//       required: true
//     },
//     role: {
//       type: 'autocomplete',
//       options: roles,
//       required: true
//     },
//     denomination: {
//       type: 'autocomplete',
//       options: denominations,
//       required: true
//     },
//     learningLevel: {
//       type: 'select',
//       options: learningLevels,
//       required: true
//     },
//     studyMethods: {
//       type: 'multiselect',
//       options: studyMethods,
//       maxSelections: FORM_CONFIG.MAX_STUDY_METHODS,
//       required: true
//     },
//     studyTimes: {
//       type: 'multiselect',
//       options: studyTimes,
//       maxSelections: FORM_CONFIG.MAX_STUDY_TIMES,
//       required: true
//     },
//     preferredSubjects: {
//       type: 'multiselect',
//       options: getAllSubjects(),
//       maxSelections: FORM_CONFIG.MAX_PREFERRED_SUBJECTS,
//       required: true
//     },
//     languages: {
//       type: 'multiselect',
//       options: languages,
//       maxSelections: FORM_CONFIG.MAX_LANGUAGES,
//       required: true,
//       defaultValue: ['he']
//     },
//     additionalInfo: {
//       type: 'textarea',
//       maxLength: FORM_CONFIG.MAX_ADDITIONAL_INFO_LENGTH,
//       required: false
//     },
//     agreeToTerms: {
//       type: 'checkbox',
//       required: true
//     },
//     allowContact: {
//       type: 'checkbox',
//       required: false,
//       defaultValue: true
//     },
//     newsletter: {
//       type: 'checkbox',
//       required: false,
//       defaultValue: false
//     }
//   };
  
  
  