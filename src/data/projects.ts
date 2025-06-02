export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  appStoreLink: string;
}

export const projectsData: Project[] = [
  {
    title: 'FinTrack Pro',
    description: 'A comprehensive finance tracking app with budgeting tools, expense categorization, and insightful reports. Features include custom widgets, Apple Watch companion, and iCloud sync.',
    image: 'https://images.pexels.com/photos/6289065/pexels-photo-6289065.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['Swift', 'SwiftUI', 'CoreData', 'WidgetKit', 'CloudKit', 'WatchKit'],
    appStoreLink: 'https://apps.apple.com'
  },
  {
    title: 'MindfulMoment',
    description: 'Meditation and mindfulness app with guided sessions, breathing exercises, and sleep stories. Includes custom audio visualizations and health tracking integration.',
    image: 'https://images.pexels.com/photos/3560044/pexels-photo-3560044.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['Swift', 'Combine', 'AVFoundation', 'HealthKit', 'UIKit', 'CoreAnimation'],
    appStoreLink: 'https://apps.apple.com'
  },
  {
    title: 'TaskFlow',
    description: 'Productivity app with smart task management, calendar integration, and focus timer. Features include natural language input, custom recurring tasks, and cross-device sync.',
    image: 'https://images.pexels.com/photos/7014337/pexels-photo-7014337.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['Swift', 'SwiftUI', 'EventKit', 'CloudKit', 'Siri Shortcuts', 'MVVM'],
    appStoreLink: 'https://apps.apple.com'
  },
  {
    title: 'WeatherScope',
    description: 'Beautiful weather app with hourly forecasts, radar maps, and severe weather alerts. Custom animations for different weather conditions and time of day.',
    image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['Swift', 'CoreLocation', 'MapKit', 'CoreAnimation', 'WeatherKit'],
    appStoreLink: 'https://apps.apple.com'
  },
  {
    title: 'FitJourney',
    description: 'Fitness tracking app with custom workout plans, progress tracking, and social challenges. Includes video guides, Apple Watch workout tracking, and health stats.',
    image: 'https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['Swift', 'HealthKit', 'WatchKit', 'CoreMotion', 'AVKit', 'Firebase'],
    appStoreLink: 'https://apps.apple.com'
  },
  {
    title: 'NoteCanvas',
    description: 'Creative note-taking app with Apple Pencil support, handwriting recognition, and markdown editing. Features include document scanning, iCloud sync, and custom themes.',
    image: 'https://images.pexels.com/photos/6446709/pexels-photo-6446709.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['Swift', 'PencilKit', 'Vision', 'PDFKit', 'CloudKit', 'CoreML'],
    appStoreLink: 'https://apps.apple.com'
  }
];