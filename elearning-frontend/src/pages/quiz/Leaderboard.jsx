import React, { useState } from 'react';

// Mock data for leaderboard
const leaderboardData = [
  { id: 1, name: 'Alex Johnson', avatar: '👨‍🎓', score: 1250, quizzes: 15, rank: 1, change: 0 },
  { id: 2, name: 'Maria Garcia', avatar: '👩‍🎓', score: 1180, quizzes: 14, rank: 2, change: 1 },
  { id: 3, name: 'James Smith', avatar: '👨‍💼', score: 1120, quizzes: 13, rank: 3, change: -1 },
  { id: 4, name: 'Sarah Williams', avatar: '👩‍💼', score: 980, quizzes: 12, rank: 4, change: 2 },
  { id: 5, name: 'Robert Brown', avatar: '👨‍🔬', score: 920, quizzes: 11, rank: 5, change: 0 },
  { id: 6, name: 'Jennifer Davis', avatar: '👩‍🔬', score: 870, quizzes: 10, rank: 6, change: 3 },
  { id: 7, name: 'Michael Miller', avatar: '👨‍🏫', score: 810, quizzes: 9, rank: 7, change: -2 },
  { id: 8, name: 'Lisa Wilson', avatar: '👩‍🏫', score: 760, quizzes: 9, rank: 8, change: 0 },
  { id: 9, name: 'David Moore', avatar: '👨‍🎨', score: 720, quizzes: 8, rank: 9, change: -3 },
  { id: 10, name: 'Emma Taylor', avatar: '👩‍🎨', score: 680, quizzes: 8, rank: 10, change: 1 },
];

// Current user data
const currentUser = {
  id: 4,
  name: 'Sarah Williams',
  avatar: '👩‍💼',
  score: 980,
  quizzes: 12,
  rank: 4,
  change: 2
};

function Leaderboard() {
  const [timeframe, setTimeframe] = useState('weekly');

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Leaderboard</h1>
        <div className="inline-flex rounded-md shadow-sm">
          <button
            type="button"
            onClick={() => setTimeframe('weekly')}
            className={`px-4 py-2 text-sm font-medium rounded-l-lg ${
              timeframe === 'weekly'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            Weekly
          </button>
          <button
            type="button"
            onClick={() => setTimeframe('monthly')}
            className={`px-4 py-2 text-sm font-medium ${
              timeframe === 'monthly'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            Monthly
          </button>
          <button
            type="button"
            onClick={() => setTimeframe('alltime')}
            className={`px-4 py-2 text-sm font-medium rounded-r-lg ${
              timeframe === 'alltime'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            All Time
          </button>
        </div>
      </div>

      {/* Current User Card */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Your Ranking</h2>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center text-2xl">
              {currentUser.avatar}
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 dark:text-white">{currentUser.name}</h3>
              <p className="text-gray-500 dark:text-gray-400">Rank #{currentUser.rank}</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold text-gray-800 dark:text-white">{currentUser.score}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">{currentUser.quizzes} quizzes completed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Leaderboard;




