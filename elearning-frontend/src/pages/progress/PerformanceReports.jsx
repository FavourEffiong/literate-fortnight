import React, { useState } from 'react';

// Mock data for performance metrics
const performanceMetrics = {
  overallGrade: 'B+',
  overallPercentage: 87,
  totalAssignments: 24,
  completedAssignments: 22,
  totalQuizzes: 15,
  completedQuizzes: 15,
  averageQuizScore: 82,
  totalCourseHours: 120,
  completedHours: 78
};

// Mock data for course performance
const coursePerformance = [
  {
    id: 1,
    title: 'Introduction to Web Development',
    grade: 'A',
    percentage: 92,
    assignments: { completed: 8, total: 8 },
    quizzes: { completed: 5, total: 5, averageScore: 90 },
    status: 'Completed'
  },
  {
    id: 2,
    title: 'Advanced JavaScript Concepts',
    grade: 'B+',
    percentage: 87,
    assignments: { completed: 7, total: 8 },
    quizzes: { completed: 5, total: 5, averageScore: 84 },
    status: 'In Progress'
  },
  {
    id: 3,
    title: 'Data Science Fundamentals',
    grade: 'B',
    percentage: 82,
    assignments: { completed: 7, total: 8 },
    quizzes: { completed: 5, total: 5, averageScore: 78 },
    status: 'In Progress'
  }
];

// Mock data for assessment history
const assessmentHistory = [
  {
    id: 1,
    title: 'JavaScript Fundamentals Quiz',
    type: 'Quiz',
    course: 'Advanced JavaScript Concepts',
    date: '2023-05-15',
    score: 85,
    maxScore: 100,
    status: 'Completed'
  },
  {
    id: 2,
    title: 'CSS Layout Project',
    type: 'Assignment',
    course: 'Introduction to Web Development',
    date: '2023-05-10',
    score: 92,
    maxScore: 100,
    status: 'Completed'
  },
  {
    id: 3,
    title: 'Data Visualization Project',
    type: 'Assignment',
    course: 'Data Science Fundamentals',
    date: '2023-05-08',
    score: 88,
    maxScore: 100,
    status: 'Completed'
  },
  {
    id: 4,
    title: 'HTML Basics Quiz',
    type: 'Quiz',
    course: 'Introduction to Web Development',
    date: '2023-05-05',
    score: 95,
    maxScore: 100,
    status: 'Completed'
  },
  {
    id: 5,
    title: 'Python Basics Quiz',
    type: 'Quiz',
    course: 'Data Science Fundamentals',
    date: '2023-05-03',
    score: 78,
    maxScore: 100,
    status: 'Completed'
  }
];

function PerformanceReports() {
  const [selectedCourse, setSelectedCourse] = useState('all');
  const [selectedTimeframe, setSelectedTimeframe] = useState('all');

  // Filter assessment history based on selected course
  const filteredAssessments = selectedCourse === 'all' 
    ? assessmentHistory 
    : assessmentHistory.filter(assessment => 
        assessment.course === coursePerformance.find(course => course.id === parseInt(selectedCourse))?.title
      );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Performance Reports</h1>
        <button className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
          </svg>
          Export Report
        </button>
      </div>

      {/* Overall Performance Summary */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Overall Performance</h2>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center justify-center p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
              <div className="text-5xl font-bold text-blue-600 dark:text-blue-400 mb-2">{performanceMetrics.overallGrade}</div>
              <p className="text-gray-500 dark:text-gray-400">Overall Grade</p>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mt-4">
                <div 
                  className="bg-blue-600 h-2.5 rounded-full"
                  style={{ width: `${performanceMetrics.overallPercentage}%` }}
                ></div>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{performanceMetrics.overallPercentage}%</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                <div className="text-2xl font-bold text-gray-800 dark:text-white mb-1">
                  {performanceMetrics.completedAssignments}/{performanceMetrics.totalAssignments}
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Assignments Completed</p>
              </div>
              <div className="flex flex-col p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                <div className="text-2xl font-bold text-gray-800 dark:text-white mb-1">
                  {performanceMetrics.completedQuizzes}/{performanceMetrics.totalQuizzes}
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Quizzes Completed</p>
              </div>
              <div className="flex flex-col p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                <div className="text-2xl font-bold text-gray-800 dark:text-white mb-1">
                  {performanceMetrics.averageQuizScore}%
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Average Quiz Score</p>
              </div>
              <div className="flex flex-col p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                <div className="text-2xl font-bold text-gray-800 dark:text-white mb-1">
                  {performanceMetrics.completedHours}/{performanceMetrics.totalCourseHours}
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Hours Completed</p>
              </div>
            </div>

            <div className="flex flex-col p-6 border border-gray-200 dark:border-gray-700 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Performance Insights</h3>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-green-500 mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Strong performance in Web Development courses
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-green-500 mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  100% quiz completion rate
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-yellow-500 mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                  </svg>
                  Data Science quiz scores need improvement
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-blue-500 mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                  </svg>
                  Consistent improvement trend over time
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Course Performance */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Course Performance</h2>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Course
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Grade
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Assignments
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Quizzes
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                {coursePerformance.map((course) => (
                  <tr key={course.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900 dark:text-white">{course.title}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="text-sm font-medium text-gray-900 dark:text-white mr-2">{course.grade}</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">({course.percentage}%)</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900 dark:text-white">
                        {course.assignments.completed}/{course.assignments.total}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900 dark:text-white">
                        {course.quizzes.completed}/{course.quizzes.total} (Avg: {course.quizzes.averageScore}%)
                      </div>
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
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Assessment History */}
      <section>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Assessment History</h2>
          <div className="flex space-x-2">
            <select
              value={selectedCourse}
              onChange={(e) => setSelectedCourse(e.target.value)}
              className="bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md py-2 px-3 text-sm text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="all">All Courses</option>
              {coursePerformance.map(course => (
                <option key={course.id} value={course.id}>{course.title}</option>
              ))}
            </select>
            <select
              value={selectedTimeframe}
              onChange={(e) => setSelectedTimeframe(e.target.value)}
              className="bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md py-2 px-3 text-sm text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="all">All Time</option>
              <option value="month">Last Month</option>
              <option value="week">Last Week</option>
            </select>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Assessment
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Type
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Course
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Date
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Score
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                {filteredAssessments.map((assessment) => (
                  <tr key={assessment.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900 dark:text-white">{assessment.title}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-sm text-gray-500 dark:text-gray-400">{assessment.type}</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-sm text-gray-500 dark:text-gray-400">{assessment.course}</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-sm text-gray-500 dark:text-gray-400">{assessment.date}</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <span className="text-sm font-medium text-gray-900 dark:text-white mr-2">{assessment.score}</span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">/{assessment.maxScore}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PerformanceReports;

