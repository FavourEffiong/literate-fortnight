import React, { useState } from 'react';

// Mock data for session recordings
const recordings = [
  {
    id: 1,
    courseId: 1,
    title: 'Introduction to HTML and Document Structure',
    instructor: 'Dr. Sarah Johnson',
    date: 'April 10, 2023',
    duration: '1:15:30',
    thumbnail: 'https://images.unsplash.com/photo-1593720213428-28a5b9e94613?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80',
    watchUrl: '#'
  },
  {
    id: 2,
    courseId: 1,
    title: 'CSS Styling and Selectors',
    instructor: 'Dr. Sarah Johnson',
    date: 'April 12, 2023',
    duration: '1:22:45',
    thumbnail: 'https://images.unsplash.com/photo-1523437113738-bbd3cc89fb19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80',
    watchUrl: '#'
  },
  {
    id: 3,
    courseId: 1,
    title: 'JavaScript Basics and DOM Manipulation',
    instructor: 'Dr. Sarah Johnson',
    date: 'April 15, 2023',
    duration: '1:30:15',
    thumbnail: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80',
    watchUrl: '#'
  },
  {
    id: 4,
    courseId: 2,
    title: 'Closures and Lexical Scope',
    instructor: 'Prof. Michael Chen',
    date: 'April 20, 2023',
    duration: '1:18:20',
    thumbnail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80',
    watchUrl: '#'
  },
  {
    id: 5,
    courseId: 2,
    title: 'Prototypal Inheritance',
    instructor: 'Prof. Michael Chen',
    date: 'April 22, 2023',
    duration: '1:25:10',
    thumbnail: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80',
    watchUrl: '#'
  },
  {
    id: 6,
    courseId: 3,
    title: 'Python for Data Science',
    instructor: 'Dr. Emily Rodriguez',
    date: 'May 2, 2023',
    duration: '1:42:35',
    thumbnail: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80',
    watchUrl: '#'
  }
];

// Mock data for courses
const courses = [
  { id: 0, name: 'All Courses' },
  { id: 1, name: 'Introduction to Web Development' },
  { id: 2, name: 'Advanced JavaScript Concepts' },
  { id: 3, name: 'Data Science Fundamentals' }
];

function SessionRecordings() {
  const [selectedCourse, setSelectedCourse] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');

  // Filter recordings based on selected course and search term
  const filteredRecordings = recordings.filter(recording => 
    (selectedCourse === 0 || recording.courseId === selectedCourse) &&
    recording.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Session Recordings</h1>
      </div>

      {/* Filters */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="w-full md:w-1/3">
            <label htmlFor="course-filter" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Filter by Course
            </label>
            <select
              id="course-filter"
              value={selectedCourse}
              onChange={(e) => setSelectedCourse(Number(e.target.value))}
              className="w-full bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md py-2 px-3 text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              {courses.map(course => (
                <option key={course.id} value={course.id}>
                  {course.name}
                </option>
              ))}
            </select>
          </div>
          <div className="w-full md:w-2/3">
            <label htmlFor="search" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Search Recordings
            </label>
            <input
              type="text"
              id="search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by title..."
              className="w-full bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md py-2 px-3 text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>
      </div>

      {/* Recordings Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredRecordings.length > 0 ? (
          filteredRecordings.map(recording => (
            <div key={recording.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <div className="relative">
                <img 
                  src={recording.thumbnail} 
                  alt={recording.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded">
                  {recording.duration}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">{recording.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-1">
                  {courses.find(c => c.id === recording.courseId)?.name}
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">
                  {recording.instructor} • {recording.date}
                </p>
                <div className="flex justify-between items-center">
                  <a 
                    href={recording.watchUrl} 
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                  >
                    <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    Watch Now
                  </a>
                  <button className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center">
            <p className="text-gray-600 dark:text-gray-300">No recordings found.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default SessionRecordings;






