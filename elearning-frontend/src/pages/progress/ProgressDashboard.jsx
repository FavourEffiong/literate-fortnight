import React from 'react';
import { Link } from 'react-router-dom';

// Mock data for progress overview
const progressOverview = {
  coursesCompleted: 3,
  coursesInProgress: 2,
  totalQuizzesTaken: 15,
  averageScore: 82,
  totalHoursSpent: 48,
  lastActivity: '2 hours ago'
};

// Mock data for course progress
const courseProgress = [
  {
    id: 1,
    title: 'Introduction to Web Development',
    progress: 100,
    status: 'Completed',
    grade: 'A',
    lastAccessed: '2023-05-01'
  },
  {
    id: 2,
    title: 'Advanced JavaScript Concepts',
    progress: 75,
    status: 'In Progress',
    grade: 'B+',
    lastAccessed: '2023-05-15'
  },
  {
    id: 3,
    title: 'Data Science Fundamentals',
    progress: 45,
    status: 'In Progress',
    grade: 'B',
    lastAccessed: '2023-05-14'
  },
  {
    id: 4,
    title: 'UI/UX Design Principles',
    progress: 100,
    status: 'Completed',
    grade: 'A-',
    lastAccessed: '2023-04-20'
  },
  {
    id: 5,
    title: 'Mobile App Development',
    progress: 100,
    status: 'Completed',
    grade: 'A',
    lastAccessed: '2023-03-15'
  }
];

// Mock data for recent activities
const recentActivities = [
  {
    id: 1,
    type: 'quiz',
    title: 'JavaScript Fundamentals Quiz',
    course: 'Advanced JavaScript Concepts',
    date: '2023-05-15',
    time: '10:30 AM',
    result: '85%'
  },
  {
    id: 2,
    type: 'assignment',
    title: 'Data Visualization Project',
    course: 'Data Science Fundamentals',
    date: '2023-05-14',
    time: '3:45 PM',
    result: 'Submitted'
  },
  {
    id: 3,
    type: 'video',
    title: 'Closures and Lexical Scope',
    course: 'Advanced JavaScript Concepts',
    date: '2023-05-13',
    time: '2:15 PM',
    result: 'Completed'
  },
  {
    id: 4,
    type: 'reading',
    title: 'Introduction to Pandas',
    course: 'Data Science Fundamentals',
    date: '2023-05-12',
    time: '11:20 AM',
    result: 'Completed'
  }
];

function ProgressDashboard() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Progress Dashboard</h1>
        <div className="flex space-x-2">
          <Link
            to="/progress/reports"
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700"
          >
            View Detailed Reports
          </Link>
        </div>
      </div>

      {/* Progress Overview Cards */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Progress Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <div className="flex items-center">
              <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full mr-4">
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                </svg>
              </div>
              <div>
                <p className="text-gray-500 dark:text-gray-400 text-sm">Courses</p>
                <div className="flex items-end">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mr-2">{progressOverview.coursesCompleted}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">completed</p>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{progressOverview.coursesInProgress} in progress</p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <div className="flex items-center">
              <div className="bg-green-100 dark:bg-green-900 p-3 rounded-full mr-4">
                <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <div>
                <p className="text-gray-500 dark:text-gray-400 text-sm">Quizzes</p>
                <div className="flex items-end">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mr-2">{progressOverview.totalQuizzesTaken}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">completed</p>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{progressOverview.averageScore}% average score</p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <div className="flex items-center">
              <div className="bg-purple-100 dark:bg-purple-900 p-3 rounded-full mr-4">
                <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <div>
                <p className="text-gray-500 dark:text-gray-400 text-sm">Learning Time</p>
                <div className="flex items-end">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mr-2">{progressOverview.totalHoursSpent}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">hours</p>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Last active: {progressOverview.lastActivity}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Progress */}
      <section className="mb-10">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Course Progress</h2>
          <Link
            to="/progress/activity"
            className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 text-sm font-medium"
          >
            View All Courses
          </Link>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Course
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Progress
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Grade
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Last Accessed
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                {courseProgress.map((course) => (
                  <tr key={course.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900 dark:text-white">{course.title}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-1">
                        <div 
                          className="bg-blue-600 h-2.5 rounded-full"
                          style={{ width: `${course.progress}%` }}
                        ></div>
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">{course.progress}% complete</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        course.status === 'Completed' 
                          ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' 
                          : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                      }`}>
                        {course.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900 dark:text-white">{course.grade}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      {course.lastAccessed}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Recent Activity */}
      <section>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Recent Activity</h2>
          <Link
            to="/progress/activity"
            className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 text-sm font-medium"
          >
            View All Activity
          </Link>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
          <ul className="divide-y divide-gray-200 dark:divide-gray-700">
            {recentActivities.map((activity) => (
              <li key={activity.id} className="p-6">
                <div className="flex items-start">
                  <div className={`p-2 rounded-full mr-4 ${
                    activity.type === 'quiz' 
                      ? 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400' 
                      : activity.type === 'assignment' 
                        ? 'bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400'
                        : activity.type === 'video'
                          ? 'bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400'
                          : 'bg-yellow-100 dark:bg-yellow-900 text-yellow-600 dark:text-yellow-400'
                  }`}>
                    {activity.type === 'quiz' && (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    )}
                    {activity.type === 'assignment' && (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                      </svg>
                    )}
                    {activity.type === 'video' && (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    )}
                    {activity.type === 'reading' && (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                      </svg>
                    )}
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900 dark:text-white">{activity.title}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {activity.course} - {activity.date} at {activity.time}
                    </div>
                    {activity.result && (
                      <div className="text-sm text-gray-600 dark:text-gray-300">
                        Result: {activity.result}
                      </div>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}

export default ProgressDashboard;
