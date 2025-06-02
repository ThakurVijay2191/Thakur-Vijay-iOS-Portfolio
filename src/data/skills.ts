export interface Skill {
  name: string;
  level: string;
  percentage: number;
}

export interface SkillsData {
  languages: Skill[];
  technologies: Skill[];
  tools: Skill[];
  additional: string[];
}

export const skillsData: SkillsData = {
  languages: [
    { name: 'Swift', level: 'Expert', percentage: 95 },
    { name: 'Objective-C', level: 'Advanced', percentage: 85 },
    { name: 'SwiftUI', level: 'Expert', percentage: 90 },
    { name: 'UIKit', level: 'Expert', percentage: 95 },
    { name: 'C/C++', level: 'Intermediate', percentage: 70 }
  ],
  technologies: [
    { name: 'CoreData', level: 'Advanced', percentage: 90 },
    { name: 'Core Animation', level: 'Advanced', percentage: 85 },
    { name: 'ARKit', level: 'Intermediate', percentage: 75 },
    { name: 'Metal', level: 'Basic', percentage: 50 },
    { name: 'HealthKit', level: 'Advanced', percentage: 85 },
    { name: 'CloudKit', level: 'Advanced', percentage: 80 }
  ],
  tools: [
    { name: 'Xcode', level: 'Expert', percentage: 95 },
    { name: 'Git', level: 'Advanced', percentage: 90 },
    { name: 'Sketch/Figma', level: 'Intermediate', percentage: 75 },
    { name: 'Instruments', level: 'Advanced', percentage: 85 },
    { name: 'Firebase', level: 'Advanced', percentage: 80 },
    { name: 'CI/CD (Fastlane)', level: 'Advanced', percentage: 80 }
  ],
  additional: [
    'App Store Optimization',
    'UI/UX Design',
    'Agile/Scrum',
    'TestFlight Beta Testing',
    'RESTful APIs',
    'GraphQL',
    'Unit Testing',
    'UI Testing',
    'Localization',
    'Accessibility',
    'Performance Optimization',
    'Reactive Programming',
    'App Store Guidelines',
    'Human Interface Guidelines'
  ]
};