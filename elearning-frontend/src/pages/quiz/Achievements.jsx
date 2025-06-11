import React from 'react';

// Mock data for achievements
const achievements = [
  {
    id: 1,
    name: 'First Steps',
    description: 'Complete your first quiz',
    icon: '🚶',
    unlocked: true,
    date: '2023-04-10',
    xp: 50
  },
  {
    id: 2,
    name: 'Knowledge Explorer',
    description: 'Complete quizzes in 5 different categories',
    icon: '🧭',
    unlocked: true,
    date: '2023-04-18',
    xp: 100
  },
  {
    id: 3,
    name: 'Quiz Master',
    description: 'Score 100% on 3 different quizzes',
    icon: '🏆',
    unlocked: true,
    date: '2023-04-25',
    xp: 150
  },
  {
    id: 4,
    name: 'Dedicated Learner',
    description: 'Complete 10 quizzes in total',
    icon: '📚',
    unlocked: false,
    progress: '7/10',
    xp: 200
  },
  {
    id: 5,
    name: 'Streak Champion',
    description: 'Complete quizzes on 14 consecutive days',
    icon: '🔥',
    unlocked: false,
    progress: '5/14',
    xp: 300
  },
  {
    id: 6,
    name: 'Subject Expert',
    description: 'Complete all quizzes in a single subject with an average score of 90% or higher',
    icon: '🎓',
    unlocked: false,
    progress: '3/5',
    xp: 500
  }
];

function Achievements() {
  // Calculate total XP
  const totalXP = achievements
    .filter(achievement => achievement.unlocked)
    .reduce((sum, achievement) => sum + achievement.xp, 0);

  // Calculate level based on XP (just a simple formula for demo)
  const level = Math.floor(totalXP / 100) + 1;
  
  // Calculate progress to next level
  const nextLevelXP = level * 100;
  const prevLevelXP = (level - 1) * 100;
  const levelProgress = ((totalXP - prevLevelXP) / (nextLevelXP - prevLevelXP)) * 100;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Achievements</h1>
      </div>

      {/* User Level Card */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="bg-blue-600 text-white text-xl font-bold rounded-full w-12 h-12 flex items-center justify-center">
              {level}
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Level {level}</h2>
              <p className="text-gray-600 dark:text-gray-300">
                {totalXP} XP total
              </p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-500 dark:text-gray-400">Next level</p>
            <p className="text-lg font-medium text-gray-800 dark:text-white">Level {level + 1}</p>
          </div>
        </div>
        <div className="mt-4">
          <div className="flex justify-between text-sm mb-1">
            <span className="text-gray-600 dark:text-gray-300">{totalXP} XP</span>
            <span className="text-gray-600 dark:text-gray-300">{nextLevelXP} XP</span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
            <div 
              className="bg-blue-600 h-2.5 rounded-full"
              style={{ width: `${levelProgress}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Achievements Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {achievements.map((achievement) => (
          <div 
            key={achievement.id} 
            className={`rounded-lg shadow-md overflow-hidden ${
              achievement.unlocked 
                ? 'bg-white dark:bg-gray-800' 
                : 'bg-gray-100 dark:bg-gray-700 opacity-75'
            }`}
          >
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="text-4xl mr-4">{achievement.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{achievement.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{achievement.description}</p>
                </div>
              </div>
              
              {achievement.unlocked ? (
                <div className="mt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-green-600 dark:text-green-400 text-sm font-medium">Unlocked on {achievement.date}</span>
                    <span className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 text-xs font-medium px-2.5 py-0.5 rounded">
                      +{achievement.xp} XP
                    </span>
                  </div>
                </div>
              ) : (
                <div className="mt-4">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600 dark:text-gray-300">Progress</span>
                    <span className="text-gray-800 dark:text-white font-medium">{achievement.progress}</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                    <div 
                      className="bg-blue-500 h-2 rounded-full"
                      style={{ width: `${(parseInt(achievement.progress.split('/')[0]) / parseInt(achievement.progress.split('/')[1])) * 100}%` }}
                    ></div>
                  </div>
                  <div className="mt-2 text-right">
                    <span className="bg-gray-100 text-gray-800 dark:bg-gray-600 dark:text-gray-300 text-xs font-medium px-2.5 py-0.5 rounded">
                      +{achievement.xp} XP
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Achievements;