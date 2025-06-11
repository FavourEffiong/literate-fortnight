import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Mock data for dashboard
const courseProgress = [
  { id: 1, name: 'Introduction to React', progress: 75, lastAccessed: '2023-05-15' },
  { id: 2, name: 'Advanced JavaScript', progress: 45, lastAccessed: '2023-05-10' },
  { id: 3, name: 'UI/UX Design Principles', progress: 90, lastAccessed: '2023-05-12' },
];

const upcomingEvents = [
  { id: 1, title: 'React Hooks Workshop', date: '2023-05-20', time: '10:00 AM' },
  { id: 2, title: 'JavaScript Quiz', date: '2023-05-22', time: '2:00 PM' },
  { id: 3, title: 'Group Project Meeting', date: '2023-05-25', time: '3:30 PM' },
];

const recentAnnouncements = [
  { id: 1, title: 'New Course Available', content: 'Check out our new course on React Native!', date: '2023-05-14' },
  { id: 2, title: 'Platform Maintenance', content: 'The platform will be down for maintenance on May 21st from 2-4 AM.', date: '2023-05-13' },
];

function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Dashboard</h1>
        <div className="flex space-x-4">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            Start Learning
          </button>
        </div>
      </div>

      {/* Dashboard Tabs */}
      <div className="mb-8">
        <div className="border-b border-gray-200 dark:border-gray-700">
          <nav className="flex space-x-8">
            <button
              onClick={() => setActiveTab('overview')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'overview'
                  ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('courses')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'courses'
                  ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400'
              }`}
            >
              My Courses
            </button>
            <button
              onClick={() => setActiveTab('calendar')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'calendar'
                  ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400'
              }`}
            >
              Calendar
            </button>
          </nav>
        </div>
      </div>

      {/* Dashboard Content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Course Progress */}
        <div className="md:col-span-2 bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Course Progress</h2>
          <div className="space-y-4">
            {courseProgress.map((course) => (
              <div key={course.id} className="border-b border-gray-200 dark:border-gray-700 pb-4 last:border-0 last:pb-0">
                <div className="flex justify-between mb-1">
                  <span className="text-gray-700 dark:text-gray-300">{course.name}</span>
                  <span className="text-gray-500 dark:text-gray-400">{course.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full"
                    style={{ width: `${course.progress}%` }}
                  ></div>
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  Last accessed: {course.lastAccessed}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4">
            <Link to="/classroom/materials" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 text-sm font-medium">
              View all courses →
            </Link>
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Upcoming Events</h2>
          <div className="space-y-4">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="border-b border-gray-200 dark:border-gray-700 pb-4 last:border-0 last:pb-0">
                <h3 className="font-medium text-gray-800 dark:text-white">{event.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {event.date} at {event.time}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-4">
            <button className="text-blue-600 hover:text-blue-800 dark:text-blue-400 text-sm font-medium">
              View calendar →
            </button>
          </div>
        </div>

        {/* Recent Announcements */}
        <div className="md:col-span-3 bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Recent Announcements</h2>
          <div className="space-y-4">
            {recentAnnouncements.map((announcement) => (
              <div key={announcement.id} className="border-b border-gray-200 dark:border-gray-700 pb-4 last:border-0 last:pb-0">
                <h3 className="font-medium text-gray-800 dark:text-white">{announcement.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 my-1">{announcement.content}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">{announcement.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;