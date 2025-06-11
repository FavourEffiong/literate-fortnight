import React, { useState } from 'react';

// Mock data for activity logs
const activityData = [
  {
    id: 1,
    type: 'quiz',
    title: 'JavaScript Fundamentals Quiz',
    course: 'Advanced JavaScript Concepts',
    date: '2023-05-15',
    time: '10:30 AM',
    duration: '45 minutes',
    result: '85%'
  },
  {
    id: 2,
    type: 'assignment',
    title: 'Data Visualization Project',
    course: 'Data Science Fundamentals',
    date: '2023-05-14',
    time: '3:45 PM',
    duration: '2 hours',
    result: 'Submitted'
  },
  {
    id: 3,
    type: 'video',
    title: 'Closures and Lexical Scope',
    course: 'Advanced JavaScript Concepts',
    date: '2023-05-13',
    time: '2:15 PM',
    duration: '35 minutes',
    result: 'Completed'
  },
  {
    id: 4,
    type: 'reading',
    title: 'Introduction to Pandas',
    course: 'Data Science Fundamentals',
    date: '2023-05-12',
    time: '11:20 AM',
    duration: '50 minutes',
    result: 'Completed'
  },
  {
    id: 5,
    type: 'forum',
    title: 'Discussion: React Hooks Best Practices',
    course: 'Advanced JavaScript Concepts',
    date: '2023-05-11',
    time: '4:30 PM',
    duration: '25 minutes',
    result: 'Participated'
  },
  {
    id: 6,
    type: 'quiz',
    title: 'HTML Basics Quiz',
    course: 'Introduction to Web Development',
    date: '2023-05-10',
    time: '9:15 AM',
    duration: '30 minutes',
    result: '95%'
  },
  {
    id: 7,
    type: 'assignment',
    title: 'CSS Layout Project',
    course: 'Introduction to Web Development',
    date: '2023-05-09',
    time: '2:00 PM',
    duration: '3 hours',
    result: 'Graded: A'
  },
  {
    id: 8,
    type: 'video',
    title: 'Introduction to Python',
    course: 'Data Science Fundamentals',
    date: '2023-05-08',
    time: '10:45 AM',
    duration: '45 minutes',
    result: 'Completed'
  },
  {
    id: 9,
    type: 'reading',
    title: 'JavaScript: The Good Parts',
    course: 'Advanced JavaScript Concepts',
    date: '2023-05-07',
    time: '1:30 PM',
    duration: '1 hour',
    result: 'Completed'
  },
  {
    id: 10,
    type: 'forum',
    title: 'Discussion: CSS Grid vs Flexbox',
    course: 'Introduction to Web Development',
    date: '2023-05-06',
    time: '3:15 PM',
    duration: '40 minutes',
    result: 'Participated'
  }
];

function ActivityLogs() {
  const [selectedType, setSelectedType] = useState('all');
  const [selectedCourse, setSelectedCourse] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Get unique courses for filter dropdown
  const courses = [...new Set(activityData.map(activity => activity.course))];
  
  // Filter activities based on selected filters and search query
  const filteredActivities = activityData.filter(activity => {
    const matchesType = selectedType === 'all' || activity.type === selectedType;
    const matchesCourse = selectedCourse === 'all' || activity.course === selectedCourse;
    const matchesSearch = activity.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          activity.course.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesType && matchesCourse && matchesSearch;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Activity Logs</h1>
        <button className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
          </svg>
          Export Activity
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label htmlFor="type-filter" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Activity Type
            </label>
            <select
              id="type-filter"
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="w-full bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md py-2 px-3 text-sm text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="all">All Types</option>
              <option value="quiz">Quizzes</option>
              <option value="assignment">Assignments</option>
              <option value="video">Videos</option>
              <option value="reading">Readings</option>
              <option value="forum">Forum Discussions</option>
            </select>
          </div>
          <div>
            <label htmlFor="course-filter" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Course
            </label>
            <select
              id="course-filter"
              value={selectedCourse}
              onChange={(e) => setSelectedCourse(e.target.value)}
              className="w-full bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md py-2 px-3 text-sm text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="all">All Courses</option>
              {courses.map((course, index) => (
                <option key={index} value={course}>{course}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="search" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </div>
              <input
                type="text"
                id="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md py-2 pl-10 pr-3 text-sm text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Search activities..."
              />
            </div>
          </div>
        </div>
      </div>

      {/* Activity List */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Activity
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Type
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Course
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Date & Time
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Duration
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Result
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              {filteredActivities.map((activity) => (
                <tr key={activity.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900 dark:text-white">{activity.title}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      activity.type === 'quiz' 
                        ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' 
                        : activity.type === 'assignment' 
                          ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                          : activity.type === 'video'
                            ? 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200'
                            : activity.type === 'reading'
                              ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                              : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200'
                    }`}>
                      {activity.type.charAt(0).toUpperCase() + activity.type.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900 dark:text-white">{activity.course}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900 dark:text-white">{activity.date}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">{activity.time}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                    {activity.duration}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900 dark:text-white">{activity.result}</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-6">
        <div className="text-sm text-gray-700 dark:text-gray-300">
          Showing <span className="font-medium">{filteredActivities.length}</span> of <span className="font-medium">{activityData.length}</span> activities
        </div>
        <div className="flex space-x-2">
          <button className="px-3 py-1 border border-gray-300 dark:border-gray-600 rounded-md text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700">
            Previous
          </button>
          <button className="px-3 py-1 border border-gray-300 dark:border-gray-600 rounded-md text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default ActivityLogs;