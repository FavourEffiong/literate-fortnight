import React from 'react';
import { Link } from 'react-router-dom';

// Mock data for courses
const courses = [
  {
    id: 1,
    title: 'Introduction to Web Development',
    instructor: 'Dr. Sarah Johnson',
    progress: 75,
    nextClass: 'Tomorrow, 10:00 AM',
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 2,
    title: 'Advanced JavaScript Concepts',
    instructor: 'Prof. Michael Chen',
    progress: 45,
    nextClass: 'Thursday, 2:00 PM',
    image: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 3,
    title: 'Data Science Fundamentals',
    instructor: 'Dr. Emily Rodriguez',
    progress: 30,
    nextClass: 'Friday, 11:00 AM',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80'
  }
];

// Mock data for upcoming sessions
const upcomingSessions = [
  {
    id: 1,
    title: 'CSS Grid and Flexbox Deep Dive',
    course: 'Introduction to Web Development',
    date: 'May 15, 2023',
    time: '10:00 AM - 11:30 AM',
    instructor: 'Dr. Sarah Johnson'
  },
  {
    id: 2,
    title: 'Promises, Async/Await and Error Handling',
    course: 'Advanced JavaScript Concepts',
    date: 'May 18, 2023',
    time: '2:00 PM - 3:30 PM',
    instructor: 'Prof. Michael Chen'
  },
  {
    id: 3,
    title: 'Data Visualization with Python',
    course: 'Data Science Fundamentals',
    date: 'May 19, 2023',
    time: '11:00 AM - 12:30 PM',
    instructor: 'Dr. Emily Rodriguez'
  }
];

function ClassroomDashboard() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Classroom Dashboard</h1>
        <Link
          to="/classroom/materials"
          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700"
        >
          View All Materials
        </Link>
      </div>

      {/* Active Courses */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">My Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div key={course.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <img 
                src={course.image} 
                alt={course.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{course.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">Instructor: {course.instructor}</p>
                
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600 dark:text-gray-300">Progress</span>
                    <span className="text-gray-800 dark:text-white font-medium">{course.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div 
                      className="bg-blue-600 h-2.5 rounded-full"
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Next class: {course.nextClass}
                  </span>
                  <Link
                    to={`/classroom/course/${course.id}`}
                    className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 text-sm font-medium"
                  >
                    Enter Class
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Upcoming Sessions */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Upcoming Sessions</h2>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Session
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Course
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Date & Time
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Instructor
                  </th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                {upcomingSessions.map((session) => (
                  <tr key={session.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900 dark:text-white">{session.title}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500 dark:text-gray-300">{session.course}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500 dark:text-gray-300">{session.date}</div>
                      <div className="text-sm text-gray-500 dark:text-gray-300">{session.time}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500 dark:text-gray-300">{session.instructor}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button className="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300">
                        Add to Calendar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section>
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Quick Links</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link
            to="/classroom/materials"
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 flex items-center hover:bg-gray-50 dark:hover:bg-gray-700"
          >
            <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full mr-4">
              <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Course Materials</h3>
              <p className="text-gray-600 dark:text-gray-300">Access all your learning resources</p>
            </div>
          </Link>
          
          <Link
            to="/classroom/chat"
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 flex items-center hover:bg-gray-50 dark:hover:bg-gray-700"
          >
            <div className="bg-green-100 dark:bg-green-900 p-3 rounded-full mr-4">
              <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Chat</h3>
              <p className="text-gray-600 dark:text-gray-300">Connect with instructors and peers</p>
            </div>
          </Link>
          
          <Link
            to="/classroom/recordings"
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 flex items-center hover:bg-gray-50 dark:hover:bg-gray-700"
          >
            <div className="bg-purple-100 dark:bg-purple-900 p-3 rounded-full mr-4">
              <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Recordings</h3>
              <p className="text-gray-600 dark:text-gray-300">Review past sessions</p>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default ClassroomDashboard;