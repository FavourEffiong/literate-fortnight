import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Mock data
const availableQuizzes = [
  { 
    id: 1, 
    title: 'JavaScript Fundamentals', 
    description: 'Test your knowledge of JavaScript basics including variables, functions, and control flow.',
    questions: 15,
    timeLimit: 20,
    difficulty: 'Beginner'
  },
  { 
    id: 2, 
    title: 'React Components', 
    description: 'Challenge yourself with questions about React components, props, and state management.',
    questions: 12,
    timeLimit: 15,
    difficulty: 'Intermediate'
  },
  { 
    id: 3, 
    title: 'Advanced CSS Techniques', 
    description: 'Test your knowledge of advanced CSS including Flexbox, Grid, and animations.',
    questions: 10,
    timeLimit: 15,
    difficulty: 'Advanced'
  },
];

const recentResults = [
  { id: 1, quiz: 'HTML Basics', score: '85%', date: '2023-05-10', status: 'Passed' },
  { id: 2, quiz: 'CSS Selectors', score: '92%', date: '2023-05-08', status: 'Passed' },
  { id: 3, quiz: 'JavaScript Arrays', score: '78%', date: '2023-05-05', status: 'Passed' },
];

function QuizDashboard() {
  const [activeTab, setActiveTab] = useState('available');

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Quiz Dashboard</h1>
        <div className="flex space-x-4">
          <Link to="/quiz/leaderboard" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            View Leaderboard
          </Link>
        </div>
      </div>

      {/* Dashboard Tabs */}
      <div className="mb-8">
        <div className="border-b border-gray-200 dark:border-gray-700">
          <nav className="flex space-x-8">
            <button
              onClick={() => setActiveTab('available')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'available'
                  ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400'
              }`}
            >
              Available Quizzes
            </button>
            <button
              onClick={() => setActiveTab('results')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'results'
                  ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400'
              }`}
            >
              My Results
            </button>
          </nav>
        </div>
      </div>

      {/* Dashboard Content */}
      {activeTab === 'available' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {availableQuizzes.map((quiz) => (
            <div key={quiz.id} className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{quiz.title}</h2>
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    quiz.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
                    quiz.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {quiz.difficulty}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{quiz.description}</p>
                <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <span>{quiz.questions} questions</span>
                  <span>{quiz.timeLimit} minutes</span>
                </div>
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
                  Start Quiz
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Quiz
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Score
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Date
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              {recentResults.map((result) => (
                <tr key={result.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-white">
                    {result.quiz}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    {result.score}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    {result.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      result.status === 'Passed' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {result.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300">
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default QuizDashboard;






