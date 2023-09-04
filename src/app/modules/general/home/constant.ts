export class Feature {
  name: string;
  description: string;
  icon: string;
  link: string;

  constructor() {
    this.name = '';
    this.description = '';
    this.icon = '';
    this.link = '';
  }
}

export const CLINIC_Data: any = {
  '@context': 'http://schema.org',
  '@type': 'Hospital',
  url: 'https://rubyhall.com/',
  description: `Dr. Choure's Namo Dental Care is a multi-specialty Dental   clinic offering a full
            range of Dental services, such as Root Canal Treatment (RCT) and
            Oral Surgery, We make people look beautiful. Namo Dental Care was
            started with a vision to help people achieve the best version of
            themselves. Our goal has always been to provide quality treatment
            ethically and responsibly and add value to people's lives. All the
            dental treatments at our clinic are performed by specialists who
            have a Masters degree (MDS). We work by appointment only. It's all
            about making our patient's lives easier and making them look good.`,
  image: 'https://rubyhall.com/img/logo.png',
  name: 'Namo Dental Care, Beed',
  MedicalSpecialty: [
    'Root Canal',
    'Orthodontic',
    'Orthopedic',
    'braces',
    'aligner',
    'Teeth Cleaning by ultrasonic machine',
    'Dentistry',
    'Fixed teeth by bridge and implant',
    'Tooth coloured filling',
    'Emergency',
    'Pedodontic',
    'Surgical extraction',
    'Ceramic',
    'Zerconia',
    'Metal Cap Available',
    'Complete and Partial Denture',
  ],
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Rajiv Gandhi Chowk, Opp. SBI bank, Canal Road, Beed-431122',
    addressLocality: 'Beed',
    addressRegion: 'Maharashtra',
    postalCode: '431122',
    addressCountry: 'India',
  },
  currenciesAccepted: 'INR',
  paymentAccepted: 'Card, Cash, UPI',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.5',
    reviewCount: '12071',
  },
  areaServed: [
    'Beed',
    'Ambejogai',
    'Aurangabad',
    'Kaij',
    'Latur',
    'Osmanabad',
    'Dharashiv',
    'Sambhajinagar',
    'Georai',
    'Ashti',
    'Pune',
    'Maharashtra',
    'India',
  ],
  brand: 'Namo Dental Care',
  parentOrganization: {
    '@type': 'MedicalOrganization',
    name: 'Namo Dental Care, Beed',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '18.99382',
    longitude: '75.74607',
  },
  hasMap: 'https://goo.gl/maps/uMsDJergBDQNFqUB9',
  openingHours:
    'Mo 10:00-09:00 Tu 10:00-09:00 We 10:00-09:00 Th 10:00-09:00 Fr 10:00-09:00 Sa 10:00-09:00 Su 10:00-09:00',
  sameAs: [
    'https://www.facebook.com/rubyhallclinichospital',
    'https://in.linkedin.com/company/ruby-hall-clinic-pune',
    'https://www.instagram.com/rubyhallclinichospitalsgroup/',
  ],
};
