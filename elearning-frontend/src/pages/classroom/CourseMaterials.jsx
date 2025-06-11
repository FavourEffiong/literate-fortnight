import React, { useState } from 'react';

// Mock data for course materials
const courseMaterials = [
  {
    id: 1,
    courseId: 1,
    title: 'Introduction to Web Development',
    materials: [
      {
        id: 101,
        title: 'HTML Fundamentals',
        type: 'pdf',
        size: '2.4 MB',
        uploadDate: '2023-04-10',
        downloadUrl: '#'
      },
      {
        id: 102,
        title: 'CSS Basics',
        type: 'pdf',
        size: '3.1 MB',
        uploadDate: '2023-04-12',
        downloadUrl: '#'
      },
      {
        id: 103,
        title: 'Introduction to JavaScript',
        type: 'pdf',
        size: '4.2 MB',
        uploadDate: '2023-04-15',
        downloadUrl: '#'
      },
      {
        id: 104,
        title: 'Web Development Tools',
        type: 'video',
        duration: '45:20',
        uploadDate: '2023-04-18',
        watchUrl: '#'
      }
    ]
  },
  {
    id: 2,
    courseId: 2,
    title: 'Advanced JavaScript Concepts',
    materials: [
      {
        id: 201,
        title: 'Closures and Scope',
        type: 'pdf',
        size: '1.8 MB',
        uploadDate: '2023-04-20',
        downloadUrl: '#'
      },
      {
        id: 202,
        title: 'Prototypes and Inheritance',
        type: 'pdf',
        size: '2.5 MB',
        uploadDate: '2023-04-22',
        downloadUrl: '#'
      },
      {
        id: 203,
        title: 'Asynchronous JavaScript',
        type: 'video',
        duration: '52:15',
        uploadDate: '2023-04-25',
        watchUrl: '#'
      },
      {
        id: 204,
        title: 'ES6+ Features',
        type: 'pdf',
        size: '3.7 MB',
        uploadDate: '2023-04-28',
        downloadUrl: '#'
      }
    ]
  },
  {
    id: 3,
    courseId: 3,
    title: 'Data Science Fundamentals',
    materials: [
      {
        id: 301,
        title: 'Introduction to Python',
        type: 'pdf',
        size: '2.9 MB',
        uploadDate: '2023-05-02',
        downloadUrl: '#'
      },
      {
        id: 302,
        title: 'Data Manipulation with Pandas',
        type: 'pdf',
        size: '4.5 MB',
        uploadDate: '2023-05-05',
        downloadUrl: '#'
      },
      {
        id: 303,
        title: 'Data Visualization with Matplotlib',
        type: 'pdf',
        size: '3.8 MB',
        uploadDate: '2023-05-08',
        downloadUrl: '#'
      },
      {
        id: 304,
        title: 'Introduction to Machine Learning',
        type: 'video',
        duration: '58:45',
        uploadDate: '2023-05-12',
        watchUrl: '#'
      }
    ]
  },
  {
    id: 4,
    courseId: 4,
    title: 'Mobile App Development',
    materials: [
      {
        id: 401,
        title: 'Introduction to Android Development',
        type: 'pdf',
        size: '3.2 MB',
        uploadDate: '2023-05-15',
        downloadUrl: '#'
      },
      {
        id: 402,
        title: 'Android Studio Basics',
        type: 'video',
        duration: '30:10',
        uploadDate: '2023-05-17',
        watchUrl: '#'
      },
      {
        id: 403,
        title: 'Building Your First Android App',
        type: 'video',
        duration: '60:00',
        uploadDate: '2023-05-20',
        watchUrl: '#'
      },
      {
        id: 404,
        title: 'Android UI Components',
        type: 'pdf',
        size: '4.1 MB',
        uploadDate: '2023-05-22',
        downloadUrl: '#'
      }
    ]
  },
  {
    id: 5,
    courseId: 5,
    title: 'Cybersecurity Fundamentals',
    materials: [
      {
        id: 501,
        title: 'Introduction to Cybersecurity',
        type: 'pdf',
        size: '2.7 MB',
        uploadDate: '2023-05-25',
        downloadUrl: '#'
      },
      {
        id: 502,
        title: 'Network Security Basics',
        type: 'pdf',
        size: '3.4 MB',
        uploadDate: '2023-05-27',
        downloadUrl: '#'
      },
      {
        id: 503,
        title: 'Cybersecurity Threats and Vulnerabilities',
        type: 'pdf',
        size: '4.0 MB',
        uploadDate: '2023-05-30',
        downloadUrl: '#'
      },
      {
        id: 504,
        title: 'Introduction to Ethical Hacking',
        type: 'video',
        duration: '55:30',
        uploadDate: '2023-06-02',
        watchUrl: '#'
      }
    ]
  },
  {
    id: 6,
    courseId: 6,
    title: 'Project Management',
    materials: [
      {
        id: 601,
        title: 'Introduction to Project Management',
        type: 'pdf',
        size: '3.6 MB',
        uploadDate: '2023-06-05',
        downloadUrl: '#'
      },
      {
        id: 602,
        title: 'Project Planning and Scheduling',
        type: 'pdf',
        size: '4.3 MB',
        uploadDate: '2023-06-07',
        downloadUrl: '#'
      },
      {
        id: 603,
        title: 'Project Risk Management',
        type: 'pdf',
        size: '3.9 MB',
        uploadDate: '2023-06-10',
        downloadUrl: '#'
      },
      {
        id: 604,
        title: 'Project Communication Strategies',
        type: 'video',
        duration: '48:00',
        uploadDate: '2023-06-12',
        watchUrl: '#'
      }
    ]
  },
  {
    id: 7,
    courseId: 7,
    title: 'Artificial Intelligence Basics',
    materials: [
      {
        id: 701,
        title: 'Introduction to AI',
        type: 'pdf',
        size: '2.8 MB',
        uploadDate: '2023-06-15',
        downloadUrl: '#'
      },
      {
        id: 702,
        title: 'Machine Learning Fundamentals',
        type: 'pdf',
        size: '3.5 MB',
        uploadDate: '2023-06-17',
        downloadUrl: '#'
      },
      {
        id: 703,
        title: 'Deep Learning Basics',
        type: 'pdf',
        size: '4.4 MB',
        uploadDate: '2023-06-20',
        downloadUrl: '#'
      },
      {
        id: 704,
        title: 'AI Applications',
        type: 'video',
        duration: '50:30',
        uploadDate: '2023-06-22',
        watchUrl: '#'
      }
    ]
  },
  {
    id: 8,
    courseId: 8,
    title: 'Cloud Computing',
    materials: [
      {
        id: 801,
        title: 'Introduction to Cloud Computing',
        type: 'pdf',
        size: '3.1 MB',
        uploadDate: '2023-06-25',
        downloadUrl: '#'
      },
      {
        id: 802,
        title: 'AWS Basics',
        type: 'pdf',
        size: '4.0 MB',
        uploadDate: '2023-06-27',
        downloadUrl: '#'
      },
      {
        id: 803,
        title: 'Cloud Services Overview',
        type: 'video',
        duration: '40:00',
        uploadDate: '2023-06-30',
        watchUrl: '#'
      },
      {
        id: 804,
        title: 'Cloud Security Best Practices',
        type: 'pdf',
        size: '3.8 MB',
        uploadDate: '2023-07-02',
        downloadUrl: '#'
      }
    ]
  },
  {
    id: 9,
    courseId: 9,
    title: 'Data Structures and Algorithms',
    materials: [
      {
        id: 901,
        title: 'Introduction to Data Structures',
        type: 'pdf',
        size: '3.3 MB',
        uploadDate: '2023-07-05',
        downloadUrl: '#'
      },
      {
        id: 902,
        title: 'Common Data Structures',
        type: 'pdf',
        size: '4.2 MB',
        uploadDate: '2023-07-07',
        downloadUrl: '#'
      },
      {
        id: 903,
        title: 'Algorithm Analysis',
        type: 'pdf',
        size: '3.7 MB',
        uploadDate: '2023-07-10',
        downloadUrl: '#'
      },
      {
        id: 904,
        title: 'Sorting Algorithms',
        type: 'video',
        duration: '55:00',
        uploadDate: '2023-07-12',
        watchUrl: '#'
      }
    ]
  },
  {
    id: 10,
    courseId: 10,
    title: 'Software Engineering Principles',
    materials: [
      {
        id: 1001,
        title: 'Introduction to Software Engineering',
        type: 'pdf',
        size: '3.0 MB',
        uploadDate: '2023-07-15',
        downloadUrl: '#'
      },
      {
        id: 1002,
        title: 'Software Development Lifecycle',
        type: 'pdf',
        size: '4.1 MB',
        uploadDate: '2023-07-17',
        downloadUrl: '#'
      },
      {
        id: 1003,
        title: 'Version Control Systems',
        type: 'pdf',
        size: '3.6 MB',
        uploadDate: '2023-07-20',
        downloadUrl: '#'
      },
      {
        id: 1004,
        title: 'Code Quality and Refactoring',
        type: 'video',
        duration: '47:30',
        uploadDate: '2023-07-22',
        watchUrl: '#'
      }
    ]
  },
  {
    id: 11,
    courseId: 11,
    title: 'Web Design and Development',
    materials: [
      {
        id: 1101,
        title: 'Introduction to Web Design',
        type: 'pdf',
        size: '2.5 MB',
        uploadDate: '2023-07-25',
        downloadUrl: '#'
      },
      {
        id: 1102,
        title: 'Responsive Web Design',
        type: 'pdf',
        size: '3.2 MB',
        uploadDate: '2023-07-27',
        downloadUrl: '#'
      },
      {
        id: 1103,
        title: 'Frontend Frameworks',
        type: 'pdf',
        size: '4.0 MB',
        uploadDate: '2023-07-30',
        downloadUrl: '#'
      },
      {
        id: 1104,
        title: 'Web Design Tools',
        type: 'video',
        duration: '42:00',
        uploadDate: '2023-08-01',
        watchUrl: '#'
      }
    ]
  },
  {
    id: 12,
    courseId: 12,
    title: 'Database Management',
    materials: [
      {
        id: 1201,
        title: 'Introduction to Databases',
        type: 'pdf',
        size: '3.4 MB',
        uploadDate: '2023-08-04',
        downloadUrl: '#'
      },
      {
        id: 1202,
        title: 'SQL Basics',
        type: 'pdf',
        size: '4.3 MB',
        uploadDate: '2023-08-06',
        downloadUrl: '#'
      },
      {
        id: 1203,
        title: 'Database Design Principles',
        type: 'pdf',
        size: '3.8 MB',
        uploadDate: '2023-08-09',
        downloadUrl: '#'
      },
      {
        id: 1204,
        title: 'NoSQL Databases',
        type: 'video',
        duration: '50:15',
        uploadDate: '2023-08-11',
        watchUrl: '#'
      }
    ]
  },
  {
    id: 13,
    courseId: 13,
    title: 'Blockchain Technology',
    materials: [
      {
        id: 1301,
        title: 'Introduction to Blockchain',
        type: 'pdf',
        size: '2.9 MB',
        uploadDate: '2023-08-14',
        downloadUrl: '#'
      },
      {
        id: 1302,
        title: 'Blockchain Fundamentals',
        type: 'pdf',
        size: '3.6 MB',
        uploadDate: '2023-08-16',
        downloadUrl: '#'
      },
      {
        id: 1303,
        title: 'Smart Contracts',
        type: 'pdf',
        size: '4.1 MB',
        uploadDate: '2023-08-19',
        downloadUrl: '#'
      },
      {
        id: 1304,
        title: 'Blockchain Applications',
        type: 'video',
        duration: '52:00',
        uploadDate: '2023-08-21',
        watchUrl: '#'
      }
    ]
  },
  {
    id: 14,
    courseId: 14,
    title: 'User Experience Design',
    materials: [
      {
        id: 1401,
        title: 'Introduction to UX',
        type: 'pdf',
        size: '3.1 MB',
        uploadDate: '2023-08-24',
        downloadUrl: '#'
      },
      {
        id: 1402,
        title: 'User Research Methods',
        type: 'pdf',
        size: '4.0 MB',
        uploadDate: '2023-08-26',
        downloadUrl: '#'
      },
      {
        id: 1403,
        title: 'Wireframing and Prototyping',
        type: 'pdf',
        size: '3.5 MB',
        uploadDate: '2023-08-29',
        downloadUrl: '#'
      },
      {
        id: 1404,
        title: 'Usability Testing',
        type: 'video',
        duration: '45:00',
        uploadDate: '2023-08-31',
        watchUrl: '#'
      }
    ]
  },
  {
    id: 15,
    courseId: 15,
    title: 'Digital Marketing',
    materials: [
      {
        id: 1501,
        title: 'Introduction to Digital Marketing',
        type: 'pdf',
        size: '3.3 MB',
        uploadDate: '2023-09-01',
        downloadUrl: '#'
      },
      {
        id: 1502,
        title: 'Search Engine Optimization',
        type: 'pdf',
        size: '4.2 MB',
        uploadDate: '2023-09-03',
        downloadUrl: '#'
      },
      {
        id: 1503,
        title: 'Social Media Marketing',
        type: 'pdf',
        size: '3.8 MB',
        uploadDate: '2023-09-06',
        downloadUrl: '#'
      },
      {
        id: 1504,
        title: 'Content Marketing Strategies',
        type: 'video',
        duration: '50:00',
        uploadDate: '2023-09-08',
        watchUrl: '#'
      }
    ]
  },
  {
    id: 16,
    courseId: 16,
    title: 'Cybersecurity in the Modern World',
    materials: [
      {
        id: 1601,
        title: 'Introduction to Modern Cybersecurity',
        type: 'pdf',
        size: '3.0 MB',
        uploadDate: '2023-09-11',
        downloadUrl: '#'
      },
      {
        id: 1602,
        title: 'Cybersecurity Trends',
        type: 'pdf',
        size: '4.1 MB',
        uploadDate: '2023-09-13',
        downloadUrl: '#'
      },
      {
        id: 1603,
        title: 'Advanced Cybersecurity Techniques',
        type: 'pdf',
        size: '3.6 MB',
        uploadDate: '2023-09-16',
        downloadUrl: '#'
      },
      {
        id: 1604,
        title: 'Cybersecurity in Organizations',
        type: 'video',
        duration: '55:00',
        uploadDate: '2023-09-18',
        watchUrl: '#'
      }
    ]
  },
  {
    id: 17,
    courseId: 17,
    title: 'Data Science in Practice',
    materials: [
      {
        id: 1701,
        title: 'Introduction to Data Science',
        type: 'pdf',
        size: '2.8 MB',
        uploadDate: '2023-09-21',
        downloadUrl: '#'
      },
      {
        id: 1702,
        title: 'Data Science Projects',
        type: 'pdf',
        size: '3.5 MB',
        uploadDate: '2023-09-23',
        downloadUrl: '#'
      },
      {
        id: 1703,
        title: 'Data Science Tools',
        type: 'pdf',
        size: '4.4 MB',
        uploadDate: '2023-09-26',
        downloadUrl: '#'
      },
      {
        id: 1704,
        title: 'Data Science Case Studies',
        type: 'video',
        duration: '50:30',
        uploadDate: '2023-09-28',
        watchUrl: '#'
      }
    ]
  },
  {
    id: 18,
    courseId: 18,
    title: 'Mobile App Development',
    materials: [
      {
        id: 1801,
        title: 'Introduction to Android Development',
        type: 'pdf',
        size: '3.2 MB',
        uploadDate: '2023-05-15',
        downloadUrl: '#'
      },
      {
        id: 1802,
        title: 'Android Studio Basics',
        type: 'video',
        duration: '30:10',
        uploadDate: '2023-05-17',
        watchUrl: '#'
      },
      {
        id: 1803,
        title: 'Building Your First Android App',
        type: 'video',
        duration: '60:00',
        uploadDate: '2023-05-20',
        watchUrl: '#'
      },
      {
        id: 1804,
        title: 'Android UI Components',
        type: 'pdf',
        size: '4.1 MB',
        uploadDate: '2023-05-22',
        downloadUrl: '#'
      }
    ]
  },
  {
    id: 19,
    courseId: 19,
    title: 'Cybersecurity Fundamentals',
    materials: [
      {
        id: 1901,
        title: 'Introduction to Cybersecurity',
        type: 'pdf',
        size: '2.7 MB',
        uploadDate: '2023-05-25',
        downloadUrl: '#'
      },
      {
        id: 1902,
        title: 'Network Security Basics',
        type: 'pdf',
        size: '3.4 MB',
        uploadDate: '2023-05-27',
        downloadUrl: '#'
      },
      {
        id: 1903,
        title: 'Cybersecurity Threats and Vulnerabilities',
        type: 'pdf',
        size: '4.0 MB',
        uploadDate: '2023-05-30',
        downloadUrl: '#'
      },
      {
        id: 1904,
        title: 'Introduction to Ethical Hacking',
        type: 'video',
        duration: '55:30',
        uploadDate: '2023-06-02',
        watchUrl: '#'
      }
    ]
  },
  {
    id: 20,
    courseId: 20,
    title: 'Project Management',
    materials: [
      {
        id: 2001,
        title: 'Introduction to Project Management',
        type: 'pdf',
        size: '3.6 MB',
        uploadDate: '2023-06-05',
        downloadUrl: '#'
      },
      {
        id: 2002,
        title: 'Project Planning and Scheduling',
        type: 'pdf',
        size: '4.3 MB',
        uploadDate: '2023-06-07',
        downloadUrl: '#'
      },
      {
        id: 2003,
        title: 'Project Risk Management',
        type: 'pdf',
        size: '3.9 MB',
        uploadDate: '2023-06-10',
        downloadUrl: '#'
      },
      {
        id: 2004,
        title: 'Project Communication Strategies',
        type: 'video',
        duration: '48:00',
        uploadDate: '2023-06-12',
        watchUrl: '#'
      }
    ]
  },
  {
    id: 21,
    courseId: 21,
    title: 'Artificial Intelligence Basics',
    materials: [
      {
        id: 2101,
        title: 'Introduction to AI',
        type: 'pdf',
        size: '2.8 MB',
        uploadDate: '2023-06-15',
        downloadUrl: '#'
      },
      {
        id: 2102,
        title: 'Machine Learning Fundamentals',
        type: 'pdf',
        size: '3.5 MB',
        uploadDate: '2023-06-17',
        downloadUrl: '#'
      },
      {
        id: 2103,
        title: 'Deep Learning Basics',
        type: 'pdf',
        size: '4.4 MB',
        uploadDate: '2023-06-20',
        downloadUrl: '#'
      },
      {
        id: 2104,
        title: 'AI Applications',
        type: 'video',
        duration: '50:30',
        uploadDate: '2023-06-22',
        watchUrl: '#'
      }
    ]
  },
  {
    id: 22,
    courseId: 22,
    title: 'Cloud Computing',
    materials: [
      {
        id: 2201,
        title: 'Introduction to Cloud Computing',
        type: 'pdf',
        size: '3.1 MB',
        uploadDate: '2023-06-25',
        downloadUrl: '#'
      },
      {
        id: 2202,
        title: 'AWS Basics',
        type: 'pdf',
        size: '4.0 MB',
        uploadDate: '2023-06-27',
        downloadUrl: '#'
      },
      {
        id: 2203,
        title: 'Cloud Services Overview',
        type: 'video',
        duration: '40:00',
        uploadDate: '2023-06-30',
        watchUrl: '#'
      },
      {
        id: 2204,
        title: 'Cloud Security Best Practices',
        type: 'pdf',
        size: '3.8 MB',
        uploadDate: '2023-07-02',
        downloadUrl: '#'
      }
    ]
  },
  {
    id: 23,
    courseId: 23,
    title: 'Data Structures and Algorithms',
    materials: [
      {
        id: 2301,
        title: 'Introduction to Data Structures',
        type: 'pdf',
        size: '3.3 MB',
        uploadDate: '2023-07-05',
        downloadUrl: '#'
      },
      {
        id: 2302,
        title: 'Common Data Structures',
        type: 'pdf',
        size: '4.2 MB',
        uploadDate: '2023-07-07',
        downloadUrl: '#'
      },
      {
        id: 2303,
        title: 'Algorithm Analysis',
        type: 'pdf',
        size: '3.7 MB',
        uploadDate: '2023-07-10',
        downloadUrl: '#'
      },
      {
        id: 2304,
        title: 'Sorting Algorithms',
        type: 'video',
        duration: '55:00',
        uploadDate: '2023-07-12',
        watchUrl: '#'
      }
    ]
  },
  {
    id: 24,
    courseId: 24,
    title: 'Software Engineering Principles',
    materials: [
      {
        id: 2401,
        title: 'Introduction to Software Engineering',
        type: 'pdf',
        size: '3.0 MB',
        uploadDate: '2023-07-15',
        downloadUrl: '#'
      },
      {
        id: 2402,
        title: 'Software Development Lifecycle',
        type: 'pdf',
        size: '4.1 MB',
        uploadDate: '2023-07-17',
        downloadUrl: '#'
      },
      {
        id: 2403,
        title: 'Version Control Systems',
        type: 'pdf',
        size: '3.6 MB',
        uploadDate: '2023-07-20',
        downloadUrl: '#'
      },
      {
        id: 2404,
        title: 'Code Quality and Refactoring',
        type: 'video',
        duration: '47:30',
        uploadDate: '2023-07-22',
        watchUrl: '#'
      }
    ]
  },
  {
    id: 25,
    courseId: 25,
    title: 'Web Design and Development',
    materials: [
      {
        id: 2501,
        title: 'Introduction to Web Design',
        type: 'pdf',
        size: '2.5 MB',
        uploadDate: '2023-07-25',
        downloadUrl: '#'
      },
      {
        id: 2502,
        title: 'Responsive Web Design',
        type: 'pdf',
        size: '3.2 MB',
        uploadDate: '2023-07-27',
        downloadUrl: '#'
      },
      {
        id: 2503,
        title: 'Frontend Frameworks',
        type: 'pdf',
        size: '4.0 MB',
        uploadDate: '2023-07-30',
        downloadUrl: '#'
      },
      {
        id: 2504,
        title: 'Web Design Tools',
        type: 'video',
        duration: '42:00',
        uploadDate: '2023-08-01',
        watchUrl: '#'
      }
    ]
  },
  {
    id: 26,
    courseId: 26,
    title: 'Database Management',
    materials: [
      {
        id: 2601,
        title: 'Introduction to Databases',
        type: 'pdf',
        size: '3.4 MB',
        uploadDate: '2023-08-04',
        downloadUrl: '#'
      },
      {
        id: 2602,
        title: 'SQL Basics',
        type: 'pdf',
        size: '4.3 MB',
        uploadDate: '2023-08-06',
        downloadUrl: '#'
      },
      {
        id: 2603,
        title: 'Database Design Principles',
        type: 'pdf',
        size: '3.8 MB',
        uploadDate: '2023-08-09',
        downloadUrl: '#'
      },
      {
        id: 2604,
        title: 'NoSQL Databases',
        type: 'video',
        duration: '50:15',
        uploadDate: '2023-08-11',
        watchUrl: '#'
      }
    ]
  },
  {
    id: 27,
    courseId: 27,
    title: 'Blockchain Technology',
    materials: [
      {
        id: 2701,
        title: 'Introduction to Blockchain',
        type: 'pdf',
        size: '2.9 MB',
        uploadDate: '2023-08-14',
        downloadUrl: '#'
      },
      {
        id: 2702,
        title: 'Blockchain Fundamentals',
        type: 'pdf',
        size: '3.6 MB',
        uploadDate: '2023-08-16',
        downloadUrl: '#'
      },
      {
        id: 2703,
        title: 'Smart Contracts',
        type: 'pdf',
        size: '4.1 MB',
        uploadDate: '2023-08-19',
        downloadUrl: '#'
      },
      {
        id: 2704,
        title: 'Blockchain Applications',
        type: 'video',
        duration: '52:00',
        uploadDate: '2023-08-21',
        watchUrl: '#'
      }
    ]
  },
  {
    id: 28,
    courseId: 28,
    title: 'User Experience Design',
    materials: [
      {
        id: 2801,
        title: 'Introduction to UX',
        type: 'pdf',
        size: '3.1 MB',
        uploadDate: '2023-08-24',
        downloadUrl: '#'
      },
      {
        id: 2802,
        title: 'User Research Methods',
        type: 'pdf',
        size: '4.0 MB',
        uploadDate: '2023-08-26',
        downloadUrl: '#'
      },
      {
        id: 2803,
        title: 'Wireframing and Prototyping',
        type: 'pdf',
        size: '3.5 MB',
        uploadDate: '2023-08-29',
        downloadUrl: '#'
      },
      {
        id: 2804,
        title: 'Usability Testing',
        type: 'video',
        duration: '45:00',
        uploadDate: '2023-08-31',
        watchUrl: '#'
      }
    ]
  },
  {
    id: 29,
    courseId: 29,
    title: 'Digital Marketing',
    materials: [
      {
        id: 2901,
        title: 'Introduction to Digital Marketing',
        type: 'pdf',
        size: '3.3 MB',
        uploadDate: '2023-09-01',
        downloadUrl: '#'
      },
      {
        id: 2902,
        title: 'Search Engine Optimization',
        type: 'pdf',
        size: '4.2 MB',
        uploadDate: '2023-09-03',
        downloadUrl: '#'
      },
      {
        id: 2903,
        title: 'Social Media Marketing',
        type: 'pdf',
        size: '3.8 MB',
        uploadDate: '2023-09-06',
        downloadUrl: '#'
      },
      {
        id: 2904,
        title: 'Content Marketing Strategies',
        type: 'video',
        duration: '50:00',
        uploadDate: '2023-09-08',
        watchUrl: '#'
      }
    ]
  },
  {
    id: 30,
    courseId: 30,
    title: 'Cybersecurity in the Modern World',
    materials: [
      {
        id: 3001,
        title: 'Introduction to Modern Cybersecurity',
        type: 'pdf',
        size: '3.0 MB',
        uploadDate: '2023-09-11',
        downloadUrl: '#'
      },
      {
        id: 3002,
        title: 'Cybersecurity Trends',
        type: 'pdf',
        size: '4.1 MB',
        uploadDate: '2023-09-13',
        downloadUrl: '#'
      },
      {
        id: 3003,
        title: 'Advanced Cybersecurity Techniques',
        type: 'pdf',
        size: '3.6 MB',
        uploadDate: '2023-09-16',
        downloadUrl: '#'
      },
      {
        id: 3004,
        title: 'Cybersecurity in Organizations',
        type: 'video',
        duration: '55:00',
        uploadDate: '2023-09-18',
        watchUrl: '#'
      }
    ]
  },
  {
    id: 31,
    courseId: 31,
    title: 'Data Science in Practice',
    materials: [
      {
        id: 3101,
        title: 'Introduction to Data Science',
        type: 'pdf',
        size: '2.8 MB',
        uploadDate: '2023-09-21',
        downloadUrl: '#'
      },
      {
        id: 3102,
        title: 'Data Science Projects',
        type: 'pdf',
        size: '3.5 MB',
        uploadDate: '2023-09-23',
        downloadUrl: '#'
      },
      {
        id: 3103,
        title: 'Data Science Tools',
        type: 'pdf',
        size: '4.4 MB',
        uploadDate: '2023-09-26',
        downloadUrl: '#'
      },
      {
        id: 3104,
        title: 'Data Science Case Studies',
        type: 'video',
        duration: '50:30',
        uploadDate: '2023-09-28',
        watchUrl: '#'
      }
    ]
  },
  {
    id: 32,
    courseId: 32,
    title: 'Mobile App Development',
    materials: [
      {
        id: 3201,
        title: 'Introduction to Android Development',
        type: 'pdf',
        size: '3.2 MB',
        uploadDate: '2023-05-15',
        downloadUrl: '#'
      },
      {
        id: 3202,
        title: 'Android Studio Basics',
        type: 'video',
        duration: '30:10',
        uploadDate: '2023-05-17',
        watchUrl: '#'
      },
      {
        id: 3203,
        title: 'Building Your First Android App',
        type: 'video',
        duration: '60:00',
        uploadDate: '2023-05-20',
        watchUrl: '#'
      },
      {
        id: 3204,
        title: 'Android UI Components',
        type: 'pdf',
        size: '4.1 MB',
        uploadDate: '2023-05-22',
        downloadUrl: '#'
      }
    ]
  },
  {
    id: 33,
    courseId: 33,
    title: 'Cybersecurity Fundamentals',
    materials: [
      {
        id: 3301,
        title: 'Introduction to Cybersecurity',
        type: 'pdf',
        size: '2.7 MB',
        uploadDate: '2023-05-25',
        downloadUrl: '#'
      },
      {
        id: 3302,
        title: 'Network Security Basics',
        type: 'pdf',
        size: '3.4 MB',
        uploadDate: '2023-05-27',
        downloadUrl: '#'
      },
      {
        id: 3303,
        title: 'Cybersecurity Threats and Vulnerabilities',
        type: 'pdf',
        size: '4.0 MB',
        uploadDate: '2023-05-30',
        downloadUrl: '#'
      },
      {
        id: 3304,
        title: 'Introduction to Ethical Hacking',
        type: 'video',
        duration: '55:30',
        uploadDate: '2023-06-02',
        watchUrl: '#'
      }
    ]
  },
  {
    id: 34,
    courseId: 34,
    title: 'Project Management',
    materials: [
      {
        id: 3401,
        title: 'Introduction to Project Management',
        type: 'pdf',
        size: '3.6 MB',
        uploadDate: '2023-06-05',
        downloadUrl: '#'
      },
      {
        id: 3402,
        title: 'Project Planning and Scheduling',
        type: 'pdf',
        size: '4.3 MB',
        uploadDate: '2023-06-07',
        downloadUrl: '#'
      },
      {
        id: 3403,
        title: 'Project Risk Management',
        type: 'pdf',
        size: '3.9 MB',
        uploadDate: '2023-06-10',
        downloadUrl: '#'
      },
      {
        id: 3404,
        title: 'Project Communication Strategies',
        type: 'video',
        duration: '48:00',
        uploadDate: '2023-06-12',
        watchUrl: '#'
      }
    ]
  },
  {
    id: 35,
    courseId: 35,
    title: 'Artificial Intelligence Basics',
    materials: [
      {
        id: 3501,
        title: 'Introduction to AI',
        type: 'pdf',
        size: '2.8 MB',
        uploadDate: '2023-06-15',
        downloadUrl: '#'
      },
      {
        id: 3502,
        title: 'Machine Learning Fundamentals',
        type: 'pdf',
        size: '3.5 MB',
        uploadDate: '2023-06-17',
        downloadUrl: '#'
      },
      {
        id: 3503,
        title: 'Deep Learning Basics',
        type: 'pdf',
        size: '4.4 MB',
        uploadDate: '2023-06-20',
        downloadUrl: '#'
      },
      {
        id: 3504,
        title: 'AI Applications',
        type: 'video',
        duration: '50:30',
        uploadDate: '2023-06-22',
        watchUrl: '#'
      }
    ]
  },
  {
    id: 36,
    courseId: 36,
    title: 'Cloud Computing',
    materials: [
      {
        id: 3601,
        title: 'Introduction to Cloud Computing',
        type: 'pdf',
        size: '3.1 MB',
        uploadDate: '2023-06-25',
        downloadUrl: '#'
      },
      {
        id: 3602,
        title: 'AWS Basics',
        type: 'pdf',
        size: '4.0 MB',
        uploadDate: '2023-06-27',
        downloadUrl: '#'
      },
      {
        id: 3603,
        title: 'Cloud Services Overview',
        type: 'video',
        duration: '40:00',
        uploadDate: '2023-06-30',
        watchUrl: '#'
      },
      {
        id: 3604,
        title: 'Cloud Security Best Practices',
        type: 'pdf',
        size: '3.8 MB',
        uploadDate: '2023-07-02',
        downloadUrl: '#'
      }
    ]
  },
  {
    id: 37,
    courseId: 37,
    title: 'Data Structures and Algorithms',
    materials: [
      {
        id: 3701,
        title: 'Introduction to Data Structures',
        type: 'pdf',
        size: '3.3 MB',
        uploadDate: '2023-07-05',
        downloadUrl: '#'
      },
      {
        id: 3702,
        title: 'Common Data Structures',
        type: 'pdf',
        size: '4.2 MB',
        uploadDate: '2023-07-07',
        downloadUrl: '#'
      },
      {
        id: 3703,
        title: 'Algorithm Analysis',
        type: 'pdf',
        size: '3.7 MB',
        uploadDate: '2023-07-10',
        downloadUrl: '#'
      },
      {
        id: 3704,
        title: 'Sorting Algorithms',
        type: 'video',
        duration: '55:00',
        uploadDate: '2023-07-12',
        watchUrl: '#'
      }
    ]
  },
  {
    id: 38,
    courseId: 38,
    title: 'Software Engineering Principles',
    materials: [
      {
        id: 3801,
        title: 'Introduction to Software Engineering',
        type: 'pdf',
        size: '3.0 MB',
        uploadDate: '2023-07-15',
        downloadUrl: '#'
      },
      {
        id: 3802,
        title: 'Software Development Lifecycle',
        type: 'pdf',
        size: '4.1 MB',
        uploadDate: '2023-07-17',
        downloadUrl: '#'
      },
      {
        id: 3803,
        title: 'Version Control Systems',
        type: 'pdf',
        size: '3.6 MB',
        uploadDate: '2023-07-20',
        downloadUrl: '#'
      },
      {
        id: 3804,
        title: 'Code Quality and Refactoring',
        type: 'video',
        duration: '47:30',
        uploadDate: '2023-07-22',
        watchUrl: '#'
      }
    ]
  },
  {
    id: 39,
    courseId: 39,
    title: 'Web Design and Development',
    materials: [
      {
        id: 3901,
        title: 'Introduction to Web Design',
        type: 'pdf',
        size: '2.5 MB',
        uploadDate: '2023-07-25',
        downloadUrl: '#'
      },
      {
        id: 3902,
        title: 'Responsive Web Design',
        type: 'pdf',
        size: '3.2 MB',
        uploadDate: '2023-07-27',
        downloadUrl: '#'
      },
      {
        id: 3903,
        title: 'Frontend Frameworks',
        type: 'pdf',
        size: '4.0 MB',
        uploadDate: '2023-07-30',
        downloadUrl: '#'
      },
      {
        id: 3904,
        title: 'Web Design Tools',
        type: 'video',
        duration: '42:00',
        uploadDate: '2023-08-01',
        watchUrl: '#'
      }
    ]
  },
  {
    id: 40,
    courseId: 40,
    title: 'Database Management',
    materials: [
      {
        id: 4001,
        title: 'Introduction to Databases',
        type: 'pdf',
        size: '3.4 MB',
        uploadDate: '2023-08-04',
        downloadUrl: '#'
      },
      {
        id: 4002,
        title: 'SQL Basics',
        type: 'pdf',
        size: '4.3 MB',
        uploadDate: '2023-08-06',
        downloadUrl: '#'
      },
      {
        id: 4003,
        title: 'Database Design Principles',
        type: 'pdf',
        size: '3.8 MB',
        uploadDate: '2023-08-09',
        downloadUrl: '#'
      },
      {
        id: 4004,
        title: 'NoSQL Databases',
        type: 'video',
        duration: '50:15',
        uploadDate: '2023-08-11',
        watchUrl: '#'
      }
    ]
  },
  {
    id: 41,
    courseId: 41,
    title: 'Blockchain Technology',
    materials: [
      {
        id: 4101,
        title: 'Introduction to Blockchain',
        type: 'pdf',
        size: '2.9 MB',
        uploadDate: '2023-08-14',
        downloadUrl: '#'
      },
      {
        id: 4102,
        title: 'Blockchain Fundamentals',
        type: 'pdf',
        size: '3.6 MB',
        uploadDate: '2023-08-16',
        downloadUrl: '#'
      },
      {
        id: 4103,
        title: 'Smart Contracts',
        type: 'pdf',
        size: '4.1 MB',
        uploadDate: '2023-08-19',
        downloadUrl: '#'
      },
      {
        id: 4104,
        title: 'Blockchain Applications',
        type: 'video',
        duration: '52:00',
        uploadDate: '2023-08-21',
        watchUrl: '#'
      }
    ]
  },
  {
    id: 42,
    courseId: 42,
    title: 'User Experience Design',
    materials: [
      {
        id: 4201,
        title: 'Introduction to UX',
        type: 'pdf',
        size: '3.1 MB',
        uploadDate: '2023-08-24',
        downloadUrl: '#'
      },
      {
        id: 4202,
        title: 'User Research Methods',
        type: 'pdf',
        size: '4.0 MB',
        uploadDate: '2023-08-26',
        downloadUrl: '#'
      },
      {
        id: 4203,
        title: 'Wireframing and Prototyping',
        type: 'pdf',
        size: '3.5 MB',
        uploadDate: '2023-08-29',
        downloadUrl: '#'
      },
      {
        id: 4204,
        title: 'Usability Testing',
        type: 'video',
        duration: '45:00',
        uploadDate: '2023-08-31',
        watchUrl: '#'
      }
    ]
  },
  {
    id: 43,
    courseId: 43,
    title: 'Digital Marketing',
    materials: [
      {
        id: 4301,
        title: 'Introduction to Digital Marketing',
        type: 'pdf',
        size: '3.3 MB',
        uploadDate: '2023-09-01',
        downloadUrl: '#'
      },
      {
        id: 4302,
        title: 'Search Engine Optimization',
        type: 'pdf',
        size: '4.2 MB',
        uploadDate: '2023-09-03',
        downloadUrl: '#'
      },
      {
        id: 4303,
        title: 'Social Media Marketing',
        type: 'pdf',
        size: '3.8 MB',
        uploadDate: '2023-09-06',
        downloadUrl: '#'
      },
      {
        id: 4304,
        title: 'Content Marketing Strategies',
        type: 'video',
        duration: '50:00',
        uploadDate: '2023-09-08',
        watchUrl: '#'
      }
    ]
  },
  {
    id: 44,
    courseId: 44,
    title: 'Cybersecurity in the Modern World',
    materials: [
      {
        id: 4401,
        title: 'Introduction to Modern Cybersecurity',
        type: 'pdf',
        size: '3.0 MB',
        uploadDate: '2023-09-11',
        downloadUrl: '#'
      },
      {
        id: 4402,
        title: 'Cybersecurity Trends',
        type: 'pdf',
        size: '4.1 MB',
        uploadDate: '2023-09-13',
        downloadUrl: '#'
      },
      {
        id: 4403,
        title: 'Advanced Cybersecurity Techniques',
        type: 'pdf',
        size: '3.6 MB',
        uploadDate: '2023-09-16',
        downloadUrl: '#'
      },
      {
        id: 4404,
        title: 'Cybersecurity in Organizations',
        type: 'video',
        duration: '55:00',
        uploadDate: '2023-09-18',
        watchUrl: '#'
      }
    ]
  },
  {
    id: 45,
    courseId: 45,
    title: 'Data Science in Practice',
    materials: [
      {
        id: 4501,
        title: 'Introduction to Data Science',
        type: 'pdf',
        size: '2.8 MB',
        uploadDate: '2023-09-21',
        downloadUrl: '#'
      },
      {
        id: 4502,
        title: 'Data Science Projects',
        type: 'pdf',
        size: '3.5 MB',
        uploadDate: '2023-09-23',
        downloadUrl: '#'
      },
      {
        id: 4503,
        title: 'Data Science Tools',
        type: 'pdf',
        size: '4.4 MB',
        uploadDate: '2023-09-26',
        downloadUrl: '#'
      },
      {
        id: 4504,
        title: 'Data Science Case Studies',
        type: 'video',
        duration: '50:30',
        uploadDate: '2023-09-28',
        watchUrl: '#'
      }
    ]
  },
  {
    id: 46,
    courseId: 46,
    title: 'Mobile App Development',
    materials: [
      {
        id: 4601,
        title: 'Introduction to Android Development',
        type: 'pdf',
        size: '3.2 MB',
        uploadDate: '2023-05-15',
        downloadUrl: '#'
      },
      {
        id: 4602,
        title: 'Android Studio Basics',
        type: 'video',
        duration: '30:10',
        uploadDate: '2023-05-17',
        watchUrl: '#'
      },
      {
        id: 4603,
        title: 'Building Your First Android App',
        type: 'video',
        duration: '60:00',
        uploadDate: '2023-05-20',
        watchUrl: '#'
      },
      {
        id: 4604,
        title: 'Android UI Components',
        type: 'pdf',
        size: '4.1 MB',
        uploadDate: '2023-05-22',
        downloadUrl: '#'
      }
    ]
  },
  {
    id: 47,
    courseId: 47,
    title: 'Cybersecurity Fundamentals',
    materials: [
      {
        id: 4701,
        title: 'Introduction to Cybersecurity',
        type: 'pdf',
        size: '2.7 MB',
        uploadDate: '2023-05-25',
        downloadUrl: '#'
      },
      {
        id: 4702,
        title: 'Network Security Basics',
        type: 'pdf',
        size: '3.4 MB',
        uploadDate: '2023-05-27',
        downloadUrl: '#'
      },
      {
        id: 4703,
        title: 'Cybersecurity Threats and Vulnerabilities',
        type: 'pdf',
        size: '4.0 MB',
        uploadDate: '2023-05-30',
        downloadUrl: '#'
      },
      {
        id: 4704,
        title: 'Introduction to Ethical Hacking',
        type: 'video',
        duration: '55:30',
        uploadDate: '2023-06-02',
        watchUrl: '#'
      }
    ]
  },
  {
    id: 48,
    courseId: 48,
    title: 'Project Management',
    materials: [
      {
        id: 4801,
        title: 'Introduction to Project Management',
        type: 'pdf',
        size: '3.6 MB',
        uploadDate: '2023-06-05',
        downloadUrl: '#'
      },
      {
        id: 4802,
        title: 'Project Planning and Scheduling',
        type: 'pdf',
        size: '4.3 MB',
        uploadDate: '2023-06-07',
        downloadUrl: '#'
      },
      {
        id: 4803,
        title: 'Project Risk Management',
        type: 'pdf',
        size: '3.9 MB',
        uploadDate: '2023-06-10',
        downloadUrl: '#'
      },
      {
        id: 4804,
        title: 'Project Communication Strategies',
        type: 'video',
        duration: '48:00',
        uploadDate: '2023-06-12',
        watchUrl: '#'
      }
    ]
  },
  {
    id: 49,
    courseId: 49,
    title: 'Artificial Intelligence Basics',
    materials: [
      {
        id: 4901,
        title: 'Introduction to AI',
        type: 'pdf',
        size: '2.8 MB',
        uploadDate: '2023-06-15',
        downloadUrl: '#'
      },
      {
        id: 4902,
        title: 'Machine Learning Fundamentals',
        type: 'pdf',
        size: '3.5 MB',
        uploadDate: '2023-06-17',
        downloadUrl: '#'
      },
      {
        id: 4903,
        title: 'Deep Learning Basics',
        type: 'pdf',
        size: '4.4 MB',
        uploadDate: '2023-06-20',
        downloadUrl: '#'
      },
      {
        id: 4904,
        title: 'AI Applications',
        type: 'video',
        duration: '50:30',
        uploadDate: '2023-06-22',
        watchUrl: '#'
      }
    ]
  },
  {
    id: 50,
    courseId: 50,
    title: 'Cloud Computing',
    materials: [
      {
        id: 5001,
        title: 'Introduction to Cloud Computing',
        type: 'pdf',
        size: '3.1 MB',
        uploadDate: '2023-06-25',
        downloadUrl: '#'
      },
      {
        id: 5002,
        title: 'AWS Basics',
        type: 'pdf',
        size: '4.0 MB',
        uploadDate: '2023-06-27',
        downloadUrl: '#'
      },
      {
        id: 5003,
        title: 'Cloud Services Overview',
        type: 'video',
        duration: '40:00',
        uploadDate: '2023-06-30',
        watchUrl: '#'
      },
      {
        id: 5004,
        title: 'Cloud Security Best Practices',
        type: 'pdf',
        size: '3.8 MB',
        uploadDate: '2023-07-02',
        downloadUrl: '#'
      }
    ]
  },
  {
    id: 51,
    courseId: 51,
    title: 'Data Structures and Algorithms',
    materials: [
      {
        id: 5101,
        title: 'Introduction to Data Structures',
        type: 'pdf',
        size: '3.3 MB',
        uploadDate: '2023-07-05',
        downloadUrl: '#'
      },
      {
        id: 5102,
        title: 'Common Data Structures',
        type: 'pdf',
        size: '4.2 MB',
        uploadDate: '2023-07-07',
        downloadUrl: '#'
      },
      {
        id: 5103,
        title: 'Algorithm Analysis',
        type: 'pdf',
        size: '3.7 MB',
        uploadDate: '2023-07-10',
        downloadUrl: '#'
      },
      {
        id: 5104,
        title: 'Sorting Algorithms',
        type: 'video',
        duration: '55:00',
        uploadDate: '2023-07-12',
        watchUrl: '#'
      }
    ]
  },
  {
    id: 52,
    courseId: 52,
    title: 'Software Engineering Principles',
    materials: [
      {
        id: 5201,
        title: 'Introduction to Software Engineering',
        type: 'pdf',
        size: '3.0 MB',
        uploadDate: '2023-07-15',
        downloadUrl: '#'
      },
      {
        id: 5202,
        title: 'Software Development Lifecycle',
        type: 'pdf',
        size: '4.1 MB',
        uploadDate: '2023-07-17',
        downloadUrl: '#'
      },
      {
        id: 5203,
        title: 'Version Control Systems',
        type: 'pdf',
        size: '3.6 MB',
        uploadDate: '2023-07-20',
        downloadUrl: '#'
      },
      {
        id: 5204,
        title: 'Code Quality and Refactoring',
        type: 'video',
        duration: '47:30',
        uploadDate: '2023-07-22',
        watchUrl: '#'
      }
    ]
  },
  {
    id: 53,
    courseId: 53,
    title: 'Web Design and Development',
    materials: [
      {
        id: 5301,
        title: 'Introduction to Web Design',
        type: 'pdf',
        size: '2.5 MB',
        uploadDate: '2023-07-25',
        downloadUrl: '#'
      },
      {
        id: 5302,
        title: 'Responsive Web Design',
        type: 'pdf',
        size: '3.2 MB',
        uploadDate: '2023-07-27',
        downloadUrl: '#'
      },
      {
        id: 5303,
        title: 'Frontend Frameworks',
        type: 'pdf',
        size: '4.0 MB',
        uploadDate: '2023-07-30',
        downloadUrl: '#'
      },
      {
        id: 5304,
        title: 'Web Design Tools',
        type: 'video',
        duration: '42:00',
        uploadDate: '2023-08-01',
        watchUrl: '#'
      }
    ]
  },
  {
    id: 54,
    courseId: 54,
    title: 'Database Management',
    materials: [
      {
        id: 5401,
        title: 'Introduction to Databases',
        type: 'pdf',
        size: '3.4 MB',
        uploadDate: '2023-08-04',
        downloadUrl: '#'
      },
      {
        id: 5402,
        title: 'SQL Basics',
        type: 'pdf',
        size: '4.3 MB',
        uploadDate: '2023-08-06',
        downloadUrl: '#'
      },
      {
        id: 5403,
        title: 'Database Design Principles',
        type: 'pdf',
        size: '3.8 MB',
        uploadDate: '2023-08-09',
        downloadUrl: '#'
      },
      {
        id: 5404,
        title: 'NoSQL Databases',
        type: 'video',
        duration: '50:15',
        uploadDate: '2023-08-11',
        watchUrl: '#'
      }
    ]
  },
  {
    id: 55,
    courseId: 55,
    title: 'Blockchain Technology',
    materials: [
      {
        id: 5501,
        title: 'Introduction to Blockchain',
        type: 'pdf',
        size: '2.9 MB',
        uploadDate: '2023-08-14',
        downloadUrl: '#'
      },
      {
        id: 5502,
        title: 'Blockchain Fundamentals',
        type: 'pdf',
        size: '3.6 MB',
        uploadDate: '2023-08-16',
        downloadUrl: '#'
      },
      {
        id: 5503,
        title: 'Smart Contracts',
        type: 'pdf',
        size: '4.1 MB',
        uploadDate: '2023-08-19',
        downloadUrl: '#'
      },
      {
        id: 5504,
        title: 'Blockchain Applications',
        type: 'video',
        duration: '52:00',
        uploadDate: '2023-08-21',
        watchUrl: '#'
      }
    ]
  },
  {
    id: 56,
    courseId: 56,
    title: 'User Experience Design',
    materials: [
      {
        id: 5601,
        title: 'Introduction to UX',
        type: 'pdf',
        size: '3.1 MB',
        uploadDate: '2023-08-24',
        downloadUrl: '#'
      },
      {
        id: 5602,
        title: 'User Research Methods',
        type: 'pdf',
        size: '4.0 MB',
        uploadDate: '2023-08-26',
        downloadUrl: '#'
      },
      {
        id: 5603,
        title: 'Wireframing and Prototyping',
        type: 'pdf',
        size: '3.5 MB',
        uploadDate: '2023-08-29',
        downloadUrl: '#'
      },
      {
        id: 5604,
        title: 'Usability Testing',
        type: 'video',
        duration: '45:00',
        uploadDate: '2023-08-31',
        watchUrl: '#'
      }
    ]
  },
  {
    id: 57,
    courseId: 57,
    title: 'Digital Marketing',
    materials: [
      {
        id: 5701,
        title: 'Introduction to Digital Marketing',
        type: 'pdf',
        size: '3.3 MB',
        uploadDate: '2023-09-01',
        downloadUrl: '#'
      },
      {
        id: 5702,
        title: 'Search Engine Optimization',
        type: 'pdf',
        size: '4.2 MB',
        uploadDate: '2023-09-03',
        downloadUrl: '#'
      },
      {
        id: 5703,
        title: 'Social Media Marketing',
        type: 'pdf',
        size: '3.8 MB',
        uploadDate: '2023-09-06',
        downloadUrl: '#'
      },
      {
        id: 5704,
        title: 'Content Marketing Strategies',
        type: 'video',
        duration: '50:00',
        uploadDate: '2023-09-08',
        watchUrl: '#'
      }
    ]
  },
  {
    id: 58,
    courseId: 58,
    title: 'Cybersecurity in the Modern World',
    materials: [
      {
        id: 5801,
        title: 'Introduction to Modern Cybersecurity',
        type: 'pdf',
        size: '3.0 MB',
        uploadDate: '2023-09-11',
        downloadUrl: '#'
      },
      {
        id: 5802,
        title: 'Cybersecurity Trends',
        type: 'pdf',
        size: '4.1 MB',
        uploadDate: '2023-09-13',
        downloadUrl: '#'
      },
      {
        id: 5803,
        title: 'Advanced Cybersecurity Techniques',
        type: 'pdf',
        size: '3.6 MB',
        uploadDate: '2023-09-16',
        downloadUrl: '#'
      },
      {
        id: 5804,
        title: 'Cybersecurity in Organizations',
        type: 'video',
        duration: '55:00',
        uploadDate: '2023-09-18',
        watchUrl: '#'
      }
    ]
  },
  {
    id: 59,
    courseId: 59,
    title: 'Data Science in Practice',
    materials: [
      {
        id: 5901,
        title: 'Introduction to Data Science',
        type: 'pdf',
        size: '2.8 MB',
        uploadDate: '2023-09-21',
        downloadUrl: '#'
      },
      {
        id: 5902,
        title: 'Data Science Projects',
        type: 'pdf',
        size: '3.5 MB',
        uploadDate: '2023-09-23',
        downloadUrl: '#'
      },
      {
        id: 5903,
        title: 'Data Science Tools',
        type: 'pdf',
        size: '4.4 MB',
        uploadDate: '2023-09-26',
        downloadUrl: '#'
      },
      {
        id: 5904,
        title: 'Data Science Case Studies',
        type: 'video',
        duration: '50:30',
        uploadDate: '2023-09-28',
        watchUrl: '#'
      }
    ]
  },
  {
    id: 60,
    courseId: 60,
    title: 'Mobile App Development',
    materials: [
      {
        id: 6001,
        title: 'Introduction to Android Development',
        type: 'pdf',
        size: '3.2 MB',
        uploadDate: '2023-05-15',
        downloadUrl: '#'
      },
      {
        id: 6002,
        title: 'Android Studio Basics',
        type: 'video',
        duration: '30:10',
        uploadDate: '2023-05-17',
        watchUrl: '#'
      },
      {
        id: 6003,
        title: 'Building Your First Android App',
        type: 'video',
        duration: '60:00',
        uploadDate: '2023-05-20',
        watchUrl: '#'
      },
      {
        id: 6004,
        title: 'Android UI Components',
        type: 'pdf',
        size: '4.1 MB',
        uploadDate: '2023-05-22',
        downloadUrl: '#'
      }
    ]
  },
  {
    id: 61,
    courseId: 61,
    title: 'Cybersecurity Fundamentals',
    materials: [
      {
        id: 6101,
        title: 'Introduction to Cybersecurity',
        type: 'pdf',
        size: '2.7 MB',
        uploadDate: '2023-05-25',
        downloadUrl: '#'
      },
      {
        id: 6102,
        title: 'Network Security Basics',
        type: 'pdf',
        size: '3.4 MB',
        uploadDate: '2023-05-27',
        downloadUrl: '#'
      },
      {
        id: 6103,
        title: 'Cybersecurity Threats and Vulnerabilities',
        type: 'pdf',
        size: '4.0 MB',
        uploadDate: '2023-05-30',
        downloadUrl: '#'
      },
      {
        id: 6104,
        title: 'Introduction to Ethical Hacking',
        type: 'video',
        duration: '55:30',
        uploadDate: '2023-06-02',
        watchUrl: '#'
      }
    ]
  },
  {
    id: 62,
    courseId: 62,
    title: 'Project Management',
    materials: [
      {
        id: 6201,
        title: 'Introduction to Project Management',
        type: 'pdf',
        size: '3.6 MB',
        uploadDate: '2023-06-05',
        downloadUrl: '#'
      },
      {
        id: 6202,
        title: 'Project Planning and Scheduling',
        type: 'pdf',
        size: '4.3 MB',
        uploadDate: '2023-06-07',
        downloadUrl: '#'
      },
      {
        id: 6203,
        title: 'Project Risk Management',
        type: 'pdf',
        size: '3.9 MB',
        uploadDate: '2023-06-10',
        downloadUrl: '#'
      },
      {
        id: 6204,
        title: 'Project Communication Strategies',
        type: 'video',
        duration: '48:00',
        uploadDate: '2023-06-12',
        watchUrl: '#'
      }
    ]
  },
  {
    id: 63,
    courseId: 63,
    title: 'Artificial Intelligence Basics',
    materials: [
      {
        id: 6301,
        title: 'Introduction to AI',
        type: 'pdf',
        size: '2.8 MB',
        uploadDate: '2023-06-15',
        downloadUrl: '#'
      },
      {
        id: 6302,
        title: 'Machine Learning Fundamentals',
        type: 'pdf',
        size: '3.5 MB',
        uploadDate: '2023-06-17',
        downloadUrl: '#'
      },
      {
        id: 6303,
        title: 'Deep Learning Basics',
        type: 'pdf',
        size: '4.4 MB',
        uploadDate: '2023-06-20',
        downloadUrl: '#'
      },
      {
        id: 6304,
        title: 'AI Applications',
        type: 'video',
        duration: '50:30',
        uploadDate: '2023-06-22',
        watchUrl: '#'
      }
    ]
  },
  {
    id: 64,
    courseId: 64,
    title: 'Cloud Computing',
    materials: [
      {
        id: 6401,
        title: 'Introduction to Cloud Computing',
        type: 'pdf',
        size: '3.1 MB',
        uploadDate: '2023-06-25',
        downloadUrl: '#'
      },
      {
        id: 6402,
        title: 'AWS Basics',
        type: 'pdf',
        size: '4.0 MB',
        uploadDate: '2023-06-27',
        downloadUrl: '#'
      },
      {
        id: 6403,
        title: 'Cloud Services Overview',
        type: 'video',
        duration: '40:00',
        uploadDate: '2023-06-30',
        watchUrl: '#'
      },
      {
        id: 6404,
        title: 'Cloud Security Best Practices',
        type: 'pdf',
        size: '3.8 MB',
        uploadDate: '2023-07-02',
        downloadUrl: '#'
      }
    ]
  },
  {
    id: 65,
    courseId: 65,
    title: 'Data Structures and Algorithms',
    materials: [
      {
        id: 6501,
        title: 'Introduction to Data Structures',
        type: 'pdf',
        size: '3.3 MB',
        uploadDate: '2023-07-05',
        downloadUrl: '#'
      },
      {
        id: 6502,
        title: 'Common Data Structures',
        type: 'pdf',
        size: '4.2 MB',
        uploadDate: '2023-07-07',
        downloadUrl: '#'
      },
      {
        id: 6503,
        title: 'Algorithm Analysis',
        type: 'pdf',
        size: '3.7 MB',
        uploadDate: '2023-07-10',
        downloadUrl: '#'
      },
      {
        id: 6504,
        title: 'Sorting Algorithms',
        type: 'video',
        duration: '55:00',
        uploadDate: '2023-07-12',
        watchUrl: '#'
      }
    ]
  },
  {
    id: 66,
    courseId: 66,
    title: 'Software Engineering Principles',
    materials: [
      {
        id: 6601,
        title: 'Introduction to Software Engineering',
        type: 'pdf',
        size: '3.0 MB',
        uploadDate: '2023-07-15',
        downloadUrl: '#'
      },
      {
        id: 6602,
        title: 'Software Development Lifecycle',
        type: 'pdf',
        size: '4.1 MB',
        uploadDate: '2023-07-17',
        downloadUrl: '#'
      },
      {
        id: 6603,
        title: 'Version Control Systems',
        type: 'pdf',
        size: '3.6 MB',
        uploadDate: '2023-07-20',
        downloadUrl: '#'
      },
      {
        id: 6604,
        title: 'Code Quality and Refactoring',
        type: 'video',
        duration: '47:30',
        uploadDate: '2023-07-22',
        watchUrl: '#'
      }
    ]
  },
  {
    id: 67,
    courseId: 67,
    title: 'Web Design and Development',
    materials: [
      {
        id: 6701,
        title: 'Introduction to Web Design',
        type: 'pdf',
        size: '2.5 MB',
        uploadDate: '2023-07-25',
        downloadUrl: '#'
      },
      {
        id: 6702,
        title: 'Responsive Web Design',
        type: 'pdf',
        size: '3.2 MB',
        uploadDate: '2023-07-27',
        downloadUrl: '#'
      },
      {
        id: 6703,
        title: 'Frontend Frameworks',
        type: 'pdf',
        size: '4.0 MB',
        uploadDate: '2023-07-30',
        downloadUrl: '#'
      },
      {
        id: 6704,
        title: 'Web Design Tools',
        type: 'video',
        duration: '42:00',
        uploadDate: '2023-08-01',
        watchUrl: '#'
      }
    ]
  },
  {
    id: 68,
    courseId: 68,
    title: 'Database Management',
    materials: [
      {
        id: 6801,
        title: 'Introduction to Databases',
        type: 'pdf',
        size: '3.4 MB',
        uploadDate: '2023-08-04',
        downloadUrl: '#'
      },
      {
        id: 6802,
        title: 'SQL Basics',
        type: 'pdf',
        size: '4.3 MB',
        uploadDate: '2023-08-06',
        downloadUrl: '#'
      },
      {
        id: 6803,
        title: 'Database Design Principles',
        type: 'pdf',
        size: '3.8 MB',
        uploadDate: '2023-08-09',
        downloadUrl: '#'
      },
      {
        id: 6804,
        title: 'NoSQL Databases',
        type: 'video',
        duration: '50:15',
        uploadDate: '2023-08-11',
        watchUrl: '#'
      }
    ]
  },
  {
    id: 69,
    courseId: 69,
    title: 'Blockchain Technology',
    materials: [
      {
        id: 6901,
        title: 'Introduction to Blockchain',
        type: 'pdf',
        size: '2.9 MB',
        uploadDate: '2023-08-14',
        downloadUrl: '#'
      },
      {
        id: 6902,
        title: 'Blockchain Fundamentals',
        type: 'pdf',
        size: '3.6 MB',
        uploadDate: '2023-08-16',
        downloadUrl: '#'
      },
      {
        id: 6903,
        title: 'Smart Contracts',
        type: 'pdf',
        size: '4.1 MB',
        uploadDate: '2023-08-19',
        downloadUrl: '#'
      },
      {
        id: 6904,
        title: 'Blockchain Applications',
        type: 'video',
        duration: '52:00',
        uploadDate: '2023-08-21',
        watchUrl: '#'
      }
    ]
  },
  {
    id: 70,
    courseId: 70,
    title: 'User Experience Design',
    materials: [
      {
        id: 7001,
        title: 'Introduction to UX',
        type: 'pdf',
        size: '3.1 MB',
        uploadDate: '2023-08-24',
        downloadUrl: '#'
      },
      {
        id: 7002,
        title: 'User Research Methods',
        type: 'pdf',
        size: '4.0 MB',
        uploadDate: '2023-08-26',
        downloadUrl: '#'
      },
      {
        id: 7003,
        title: 'Wireframing and Prototyping',
        type: 'pdf',
        size: '3.5 MB',
        uploadDate: '2023-08-29',
        downloadUrl: '#'
      },
      {
        id: 7004,
        title: 'Usability Testing',
        type: 'video',
        duration: '45:00',
        uploadDate: '2023-08-31',
        watchUrl: '#'
      }
    ]
  },
  {
    id: 71,
    courseId: 71,
    title: 'Digital Marketing',
    materials: [
      {
        id: 7101,
        title: 'Introduction to Digital Marketing',
        type: 'pdf',
        size: '3.3 MB',
        uploadDate: '2023-09-01',
        downloadUrl: '#'
      },
      {
        id: 7102,
        title: 'Search Engine Optimization',
        type: 'pdf',
        size: '4.2 MB',
        uploadDate: '2023-09-03',
        downloadUrl: '#'
      },


