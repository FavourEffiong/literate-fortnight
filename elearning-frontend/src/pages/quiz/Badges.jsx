import React from 'react';

// Mock data for badges
const badges = [
  {
    id: 1,
    name: 'Quick Learner',
    description: 'Complete 5 quizzes with a score of 80% or higher',
    image: '🏆',
    earned: true,
    progress: '5/5',
    date: '2023-04-15'
  },
  {
    id: 2,
    name: 'Knowledge Seeker',
    description: 'Complete quizzes in 3 different subject areas',
    image: '🔍',
    earned: true,
    progress: '3/3',
    date: '2023-04-20'
  },
  {
    id: 3,
    name: 'Perfect Score',
    description: 'Achieve 100% on any quiz',
    image: '⭐',
    earned: true,
    progress: '1/1',
    date: '2023-04-25'
  },
  {
    id: 4,
    name: 'Speed Demon',
    description: 'Complete a quiz in less than half the allotted time',
    image: '⚡',
    earned: false,
    progress: '0/1',
    date: null
  },
  {
    id: 5,
    name: 'Consistency King',
    description: 'Complete at least one quiz every day for 7 consecutive days',
    image: '📅',
    earned: false,
    progress: '3/7',
    date: null
  },
  {
    id: 6,
    name: 'Subject Master',
    description: 'Score 90% or higher on all quizzes in a single subject',
    image: '🎓',
    earned: false,
    progress: '2/5',
    date: null
  }
];

function Badges() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">My Badges</h1>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
        <div className="flex items-center space-x-4">
          <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full">
            <span className="text-2xl">🏅</span>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Badge Collection</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Earn badges by completing quizzes and achieving learning milestones
            </p>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-4">
          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
            <p className="text-sm text-gray-500 dark:text-gray-400">Earned Badges</p>
            <p className="text-2xl font-bold text-gray-800 dark:text-white">3</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
            <p className="text-sm text-gray-500 dark:text-gray-400">Available Badges</p>
            <p className="text-2xl font-bold text-gray-800 dark:text-white">6</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {badges.map((badge) => (
          <div 
            key={badge.id} 
            className={`rounded-lg shadow-md overflow-hidden ${
              badge.earned 
                ? 'bg-white dark:bg-gray-800' 
                : 'bg-gray-100 dark:bg-gray-700'
            }`}
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <div className="text-4xl mr-4">{badge.image}</div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{badge.name}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{badge.description}</p>
                  </div>
                </div>
                {badge.earned && (
                  <div className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                    Earned
                  </div>
                )}
              </div>
              <div className="mt-4">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600 dark:text-gray-300">Progress</span>
                  <span className="text-gray-800 dark:text-white font-medium">{badge.progress}</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full ${badge.earned ? 'bg-green-500' : 'bg-blue-500'}`}
                    style={{ width: `${(parseInt(badge.progress.split('/')[0]) / parseInt(badge.progress.split('/')[1])) * 100}%` }}
                  ></div>
                </div>
                {badge.earned && (
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                    Earned on {badge.date}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Badges;