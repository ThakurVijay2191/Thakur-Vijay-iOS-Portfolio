export interface Education {
  degree: string;
  institution: string;
  period: string;
  description: string;
  achievements?: string[];
  relevantCourses?: string[];
}

export const educationData: Education[] = [
  {
    degree: 'Master of Computer Science',
    institution: 'University of Technology',
    period: '2014 - 2016',
    description: 'Specialized in Mobile Computing and Software Engineering with a focus on iOS development.',
    achievements: [
      'GPA: 3.9/4.0',
      'Teaching Assistant for Mobile App Development course',
      'Recipient of Technology Innovation Scholarship'
    ],
    relevantCourses: [
      'Advanced iOS Development',
      'Human-Computer Interaction',
      'Software Architecture',
      'Algorithms & Data Structures',
      'Mobile Computing'
    ]
  },
  {
    degree: 'Bachelor of Science in Computer Science',
    institution: 'State University',
    period: '2010 - 2014',
    description: 'Comprehensive education in computer science fundamentals with electives in mobile development.',
    achievements: [
      'Graduated Cum Laude',
      'Senior Project: iOS fitness app with wearable integration',
      'Student Representative, Computer Science Department'
    ],
    relevantCourses: [
      'Object-Oriented Programming',
      'Database Systems',
      'Mobile App Development',
      'UI/UX Design',
      'Web Technologies'
    ]
  },
  {
    degree: 'Apple Certified iOS Developer',
    institution: 'Apple Developer Academy',
    period: '2016',
    description: 'Intensive iOS development program focusing on Swift, UIKit, and app architecture patterns.',
    achievements: [
      'Developed and published an app on the App Store as capstone project',
      'Selected as one of 50 participants from over 500 applicants'
    ]
  }
];