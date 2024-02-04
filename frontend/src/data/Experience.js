// Four fields are required
// 1.name              name of company/firm
// 2.link              link of company's website
// 3 duration       joining and leaving date  i.e. 'oct,20 to jan,21'
// 4.description       whatever you did there or wanna mention something. It should be String Array.

export const ExperienceData = [
  {
    name: "Jio Platforms Limited",
    link: "https://www.jio.com/",
    duration: "June 2022",
    description: [
      "Led the development of key microservices such as Onboarding, Authentication, Cloud Gateway, and an ElasticSearch-based service, focusing on scalability and adaptability.",
      "Streamlined user registration and account setup processes with efficient onboarding microservices, prioritizing a smooth user experience.",
      "Ensured strong access control with robust authentication microservices, guaranteeing security.",
      "Implemented reliable API gateways using modern cloud technologies, facilitating seamless communication within the system.",
      "Enhanced search functionality and data indexing with ElasticSearch, providing users with powerful search capabilities.",
      "Designed microservices to handle asynchronous processing and event-driven workflows using Kafka, ensuring efficient data flow.",
      "Supported integration efforts by maintaining clear documentation and providing ongoing support for smooth collaboration.",
    ],
  },
  {
    name: "Cloutflow (Growlance)",
    link: "https://cloutflow.com/",
    duration: "July 2021 - August 2021",
    description: [
      "Engineered frontend authentication for React applications, leveraging Google Authentication APIs to enhance user security and experience.",
      "Constructed a robust backend infrastructure utilizing Node.js, Express, and REST principles, seamlessly integrating with Firestore database for efficient data management.",
      "Enhanced client experience by integrating backend functionalities with Messenger and Gmail APIs, ensuring seamless communication and interaction within the application ecosystem.",
    ],
  },
  // ,{
  //     name: 'Company ABC',
  //     link: 'www.google.com',
  //     duration: 'feb,19 to aug,20',
  //     description: [
  //         'optimized design',
  //         'got abc award for best performance',
  //         'also got the opportunity to work on abc project',
  //     ],
  // },
];
