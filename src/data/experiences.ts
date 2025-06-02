export interface Experience {
  role: string;
  company: string;
  period: string;
  responsibilities: string[];
  technologies?: string[];
}

export const experienceData: Experience[] = [
  {
    role: 'Senior iOS Developer',
    company: 'TechSolutions Inc.',
    period: '2021 - Present',
    responsibilities: [
      'Lead the development of flagship finance app with over 500K downloads',
      'Architected and implemented SwiftUI migration strategy, improving code maintainability by 40%',
      'Mentored junior developers and conducted code reviews to ensure code quality',
      'Collaborated with design team to implement Apple\'s Human Interface Guidelines',
      'Reduced app crash rate by 75% through comprehensive unit and UI testing'
    ],
    technologies: ['Swift', 'SwiftUI', 'Combine', 'CoreData', 'XCTest', 'Firebase', 'MVVM+C']
  },
  {
    role: 'iOS Developer',
    company: 'MobileInnovations',
    period: '2018 - 2021',
    responsibilities: [
      'Developed and maintained 3 iOS applications for clients in healthcare and retail',
      'Implemented complex custom animations and transitions for enhanced user experience',
      'Integrated RESTful APIs and GraphQL services for real-time data synchronization',
      'Optimized app performance, reducing memory usage by 35%',
      'Participated in agile development process with bi-weekly sprints'
    ],
    technologies: ['Swift', 'UIKit', 'CoreAnimation', 'URLSession', 'Apollo', 'RxSwift', 'MVVM']
  },
  {
    role: 'Junior iOS Developer',
    company: 'AppCreate Studios',
    period: '2016 - 2018',
    responsibilities: [
      'Assisted in development of productivity apps for iPad and iPhone',
      'Implemented UI designs following Apple\'s Human Interface Guidelines',
      'Fixed bugs and improved app stability for existing applications',
      'Developed custom UI components and animations',
      'Participated in code reviews and implemented feedback'
    ],
    technologies: ['Swift', 'Objective-C', 'UIKit', 'Auto Layout', 'CoreData', 'MVC']
  }
];