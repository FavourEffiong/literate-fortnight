import React from 'react';

// Mock data for recommendations
const recommendedCourses = [
  {
    id: 1,
    title: 'React Native Fundamentals',
    description: 'Learn to build mobile apps using React Native',
    level: 'Intermediate',
    duration: '8 weeks',
    match: '95%',
    image: 'https://via.placeholder.com/150'
  },
  {
    id: 2,
    title: 'Advanced Data Visualization',
    description: 'Master D3.js and create interactive data visualizations',
    level: 'Advanced',
    duration: '6 weeks',
    match: '90%',
    image: 'https://via.placeholder.com/150'
  },
  {
    id: 3,
    title: 'Node.js Backend Development',
    description: 'Build scalable backend services with Node.js',
    level: 'Intermediate',
    duration: '10 weeks',
    match: '85%',
    image: 'https://via.placeholder.com/150'
  }
];

const recommendedResources = [
  {
    id: 1,
    title: 'JavaScript: The Hard Parts',
    type: 'Video Series',
    description: 'Deep dive into closures, asynchronous JavaScript, and more',
    reason: 'Based on your performance in Advanced JavaScript Concepts',
    link: '#'
  },
  {
    id: 2,
    title: 'Python for Data Science Handbook',
    type: 'E-Book',
    description: 'Comprehensive guide to using Python for data analysis',
    reason: 'Based on your interest in Data Science Fundamentals',
    link: '#'
  },
  {
    id: 3,
    title: 'CSS Grid Workshop',
    type: 'Interactive Tutorial',
    description: 'Master CSS Grid layout through hands-on exercises',
    reason: 'Complements your Web Development skills',
    link: '#'
  }
];

const skillGaps = [
  {
    id: 1,
    skill: 'Data Structures & Algorithms',
    description: 'Improve your problem-solving skills with fundamental CS concepts',
    recommendedAction: 'Take the "Algorithms & Data Structures" course',
    importance: 'high'
  },
  {
    id: 2,
    skill: 'SQL Database Management',
    description: 'Learn to design and query relational databases effectively',
    recommendedAction: 'Complete the "SQL Fundamentals" tutorial series',
    importance: 'medium'
  },
  {
    id: 3,
    skill: 'Testing & Test-Driven Development',
    description: 'Write better code through automated testing practices',
    recommendedAction: 'Join the "JavaScript Testing Patterns" workshop',
    importance: 'medium'
  }
];

function PersonalizedRecommendations() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Personalized Recommendations</h1>
        <button className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
          </svg>
          Refresh Recommendations
        </button>
      </div>

      {/* Recommended Courses */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Recommended Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recommendedCourses.map((course) => (
            <div key={course.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <div className="relative">
                <img src={course.image} alt={course.title} className="w-full h-40 object-cover" />
                <div className="absolute top-0 right-0 bg-blue-600 text-white px-2 py-1 text-sm font-bold rounded-bl-lg">
                  {course.match} Match
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{course.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{course.description}</p>
                <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <span>{course.level}</span>
                  <span>{course.duration}</span>
                </div>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded">
                  View Course
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skill Gaps */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Identified Skill Gaps</h2>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
          {skillGaps.map((skill, index) => (
            <div 
              key={skill.id} 
              className={`p-6 ${index !== skillGaps.length - 1 ? 'border-b border-gray-200 dark:border-gray-700' : ''}`}
            >
              <div className="flex items-start">
                <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center mr-4 ${
                  skill.importance === 'high' 
                    ? 'bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-300' 
                    : 'bg-yellow-100 text-yellow-600 dark:bg-yellow-900 dark:text-yellow-300'
                }`}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-1">{skill.skill}</h3>
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                      skill.importance === 'high' 
                        ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200' 
                        : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                    }`}>
                      {skill.importance.charAt(0).toUpperCase() + skill.importance.slice(1)} Priority
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-3">{skill.description}</p>
                  <div className="flex items-center text-blue-600 dark:text-blue-400">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                    <span className="font-medium">{skill.recommendedAction}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Recommended Resources */}
      <section>
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Recommended Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recommendedResources.map((resource) => (
            <div key={resource.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full mr-4">
                  {resource.type === 'Video Series' ? (
                    <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  ) : resource.type === 'E-Book' ? (
                    <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                    </svg>
                  ) : (
                    <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                    </svg>
                  )}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800 dark:text-white">{resource.title}</h3>
                  <span className="text-sm text-gray-500 dark:text-gray-400">{resource.type}</span>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{resource.description}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 italic mb-4">{resource.reason}</p>
              <a 
                href={resource.link} 
                className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:underline"
              >
                Access Resource
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default PersonalizedRecommendations;

