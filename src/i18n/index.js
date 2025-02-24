import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    button:{
        readMore:'Read More'
    },
    nav: {
      home: 'HOME',
      about: 'ABOUT THE MINISTRY',
      structure: 'STRUCTURE OF MINISTRY',
      ministerCV: 'MINISTER`S CV',
      undersecretaryCV: 'UNDERSECRETARY CV',
      affiliates:'Affiliates',
      departments:'Departments',
      projects: 'PROJECTS & SERVICES',
      mediaTools: 'MEDIA TOOLS',
      faq: 'FAQ',
      contact: 'CONTACT US'
    },
    bannerHome:{
        discoverText:'Discover more',
        slide1:{
            title:'Ministry of State',
            secondTitle:'for Communications Affairs',
            normalText:'The government entity responsible for the development and regulation of the telecommunications and information technology sector.',
        },
        slide2:{
            title:'Ministry of State',
            secondTitle:'for Communications Affairs',
            normalText:'The enormous development that happened in the field of telecommunications, mail and telephones in Kuwait resulted from huge and fruitful efforts by the officials who worked on that development to support and enhance the services.',
        },
        slide3:{
            title:'Central Agency for',
            secondTitle:'Information Technology',
            normalText:'TCAIT is the home of expertise and reference in the field of information technology in the government sector to contribute to the process of digital transformation and the gradual transition of Kuwaiti society',
        }
    },
    aboutMinistryHomePage:{
        title:'About the Ministry',
        description:`
            The Ministry of State for Communication Affairs in the State of Kuwait is the government entity responsible for the development and regulation of the telecommunications and information technology sector, with the aim of supporting the digital economy and enhancing the efficiency of services provided to citizens and residents. The Ministry is committed to delivering advanced technological solutions that serve all public and private sectors, contributing to improved service efficiency for citizens and residents. It also focuses on creating an integrated technological environment that enables the expansion of digital services, such as smart applications, cloud computing, and communication networks, ensuring a secure and advanced digital experience.
        `
    }
  },
  ar: {
    button:{
        readMore:'اقرأ المزيد'
    },
    nav: {
      home: 'الرئيسية',
      about: 'عن الوزارة',
      structure: 'هيكل الوزارة',
      ministerCV: ' السيرة الذاتية للوزير',
      undersecretaryCV: ' السيرة الذاتية لوكيل الوزارة',
      affiliates:'الجهات التابعة',
      departments:' الأقسام',
      projects: 'المشاريع والخدمات',
      mediaTools: 'الأدوات الإعلامية',
      faq: 'الأسئلة الشائعة',
      contact: 'اتصل بنا'
    },
    bannerHome:{
        discoverText:'اكتشف المزيد',
        slide1:{
            title:'وزارة الدولة',
            secondTitle:'لشؤون الاتصالات',
            normalText:'الجهة الحكومية المسؤولة عن تطوير وتنظيم قطاع الاتصالات وتكنولوجيا المعلومات.',
        },
        slide2:{
            title:'وزارة الدولة',
            secondTitle:'لشؤون الاتصالات',
            normalText:'التطور الهائل الذي حدث في مجال الاتصالات والبريد والهواتف في الكويت نتج عن جهود ضخمة ومثمرة من قبل المسؤولين الذين عملوا على هذا التطوير لدعم وتعزيز الخدمات.',
        },
        slide3:{
            title:'الجهاز المركزي',
            secondTitle:'لتكنولوجيا المعلومات',
            normalText:'الجهاز المركزي لتكنولوجيا المعلومات هو موطن الخبرة والمرجع في مجال تكنولوجيا المعلومات في القطاع الحكومي للمساهمة في عملية التحول الرقمي والانتقال التدريجي للمجتمع الكويتي',
        }
    },
    aboutMinistryHomePage:{
        title:'عن الوزارة',
        description:`
            وزارة الدولة لشؤون الاتصالات في دولة الكويت هي الجهة الحكومية المسؤولة عن تطوير وتنظيم قطاع الاتصالات وتكنولوجيا المعلومات، بهدف دعم الاقتصاد الرقمي وتعزيز كفاءة الخدمات المقدمة للمواطنين والمقيمين. تلتزم الوزارة بتقديم حلول تكنولوجية متطورة تخدم جميع القطاعات العامة والخاصة، مما يساهم في تحسين كفاءة الخدمات للمواطنين والمقيمين. كما تركز على خلق بيئة تكنولوجية متكاملة تمكن من توسيع نطاق الخدمات الرقمية، مثل التطبيقات الذكية والحوسبة السحابية وشبكات الاتصال، مما يضمن تجربة رقمية آمنة ومتطورة.
        `
    }
  }
}

export const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages,
  globalInjection:true
})