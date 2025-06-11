import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    // Close any open dropdowns when toggling mobile menu
    setOpenDropdown(null);
  };

  return (
    <nav className="w-full bg-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold text-white">E-Learning</Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-blue-100">Home</Link>
            <Link to="/dashboard" className="text-white hover:text-blue-100">Dashboard</Link>
            
            {/* Courses Dropdown */}
            <div className="relative">
              <button 
                onClick={() => toggleDropdown('courses')} 
                className="text-white hover:text-blue-100 flex items-center"
              >
                Courses
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openDropdown === 'courses' && (
                <div className="absolute z-10 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
                  <Link to="/courses/dashboard" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Dashboard</Link>
                  <Link to="/courses/available" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Available Courses</Link>
                  <Link to="/courses/enrolled" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 pl-8">Enrolled Courses</Link>
                  <Link to="/courses/materials" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Course Materials</Link>
                  <Link to="/courses/discussion" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Discussion</Link>
                </div>
              )}
            </div>
            
            {/* Quiz Dropdown */}
            <div className="relative">
              <button 
                onClick={() => toggleDropdown('quiz')} 
                className="text-white hover:text-blue-100 flex items-center"
              >
                Quiz
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openDropdown === 'quiz' && (
                <div className="absolute z-10 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
                  <Link to="/quiz/dashboard" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Dashboard</Link>
                  <Link to="/quiz/badges" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Badges</Link>
                  <Link to="/quiz/achievements" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Achievements</Link>
                  <Link to="/quiz/leaderboard" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Leaderboard</Link>
                </div>
              )}
            </div>
            
            {/* Classroom Dropdown */}
            <div className="relative">
              <button 
                onClick={() => toggleDropdown('classroom')} 
                className="text-white hover:text-blue-100 flex items-center"
              >
                Classroom
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openDropdown === 'classroom' && (
                <div className="absolute z-10 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
                  <Link to="/classroom/dashboard" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Dashboard</Link>
                  <Link to="/classroom/materials" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Course Materials</Link>
                  <Link to="/classroom/chat" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Chat Feature</Link>
                  <Link to="/classroom/recordings" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Session Recordings</Link>
                  <Link to="/classroom/schedule" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Schedule</Link>
                </div>
              )}
            </div>
            
            {/* Progress Dropdown */}
            <div className="relative">
              <button 
                onClick={() => toggleDropdown('progress')} 
                className="text-white hover:text-blue-100 flex items-center"
              >
                Progress
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openDropdown === 'progress' && (
                <div className="absolute z-10 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
                  <Link to="/progress/dashboard" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Dashboard</Link>
                  <Link to="/progress/reports" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Performance Reports</Link>
                  <Link to="/progress/activity" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Activity Logs</Link>
                  <Link to="/progress/recommendations" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Personalized Recommendations</Link>
                </div>
              )}
            </div>
          </div>
          
          <div className="flex items-center">
            <Link to="/login" className="bg-white text-blue-600 px-4 py-2 rounded-md font-medium hover:bg-blue-50 mr-4">
              Sign In
            </Link>
            <button 
              onClick={toggleMobileMenu}
              className="md:hidden text-white"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-blue-600 border-t border-blue-500">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to="/" className="block px-3 py-2 text-white hover:bg-blue-700 rounded-md">Home</Link>
            <Link to="/dashboard" className="block px-3 py-2 text-white hover:bg-blue-700 rounded-md">Dashboard</Link>
            
            {/* Mobile Courses Menu */}
            <button 
              onClick={() => toggleDropdown('mobile-courses')} 
              className="w-full text-left px-3 py-2 text-white hover:bg-blue-700 rounded-md flex justify-between items-center"
            >
              Courses
              <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 transform ${openDropdown === 'mobile-courses' ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openDropdown === 'mobile-courses' && (
              <div className="pl-4">
                <Link to="/courses/dashboard" className="block px-3 py-2 text-white hover:bg-blue-700 rounded-md">Dashboard</Link>
                <Link to="/courses/available" className="block px-3 py-2 text-white hover:bg-blue-700 rounded-md">Available Courses</Link>
                <Link to="/courses/enrolled" className="block px-3 py-2 text-white hover:bg-blue-700 rounded-md pl-8">Enrolled Courses</Link>
                <Link to="/courses/materials" className="block px-3 py-2 text-white hover:bg-blue-700 rounded-md">Course Materials</Link>
                <Link to="/courses/discussion" className="block px-3 py-2 text-white hover:bg-blue-700 rounded-md">Discussion</Link>
              </div>
            )}
            
            {/* Mobile Quiz Menu */}
            <button 
              onClick={() => toggleDropdown('mobile-quiz')} 
              className="w-full text-left px-3 py-2 text-white hover:bg-blue-700 rounded-md flex justify-between items-center"
            >
              Quiz
              <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 transform ${openDropdown === 'mobile-quiz' ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openDropdown === 'mobile-quiz' && (
              <div className="pl-4">
                <Link to="/quiz/dashboard" className="block px-3 py-2 text-white hover:bg-blue-700 rounded-md">Dashboard</Link>
                <Link to="/quiz/badges" className="block px-3 py-2 text-white hover:bg-blue-700 rounded-md">Badges</Link>
                <Link to="/quiz/achievements" className="block px-3 py-2 text-white hover:bg-blue-700 rounded-md">Achievements</Link>
                <Link to="/quiz/leaderboard" className="block px-3 py-2 text-white hover:bg-blue-700 rounded-md">Leaderboard</Link>
              </div>
            )}
            
            {/* Mobile Classroom Menu */}
            <button 
              onClick={() => toggleDropdown('mobile-classroom')} 
              className="w-full text-left px-3 py-2 text-white hover:bg-blue-700 rounded-md flex justify-between items-center"
            >
              Classroom
              <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 transform ${openDropdown === 'mobile-classroom' ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openDropdown === 'mobile-classroom' && (
              <div className="pl-4">
                <Link to="/classroom/dashboard" className="block px-3 py-2 text-white hover:bg-blue-700 rounded-md">Dashboard</Link>
                <Link to="/classroom/materials" className="block px-3 py-2 text-white hover:bg-blue-700 rounded-md">Course Materials</Link>
                <Link to="/classroom/chat" className="block px-3 py-2 text-white hover:bg-blue-700 rounded-md">Chat Feature</Link>
                <Link to="/classroom/recordings" className="block px-3 py-2 text-white hover:bg-blue-700 rounded-md">Session Recordings</Link>
              </div>
            )}
            
            {/* Mobile Progress Menu */}
            <button 
              onClick={() => toggleDropdown('mobile-progress')} 
              className="w-full text-left px-3 py-2 text-white hover:bg-blue-700 rounded-md flex justify-between items-center"
            >
              Progress
              <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 transform ${openDropdown === 'mobile-progress' ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openDropdown === 'mobile-progress' && (
              <div className="pl-4">
                <Link to="/progress/dashboard" className="block px-3 py-2 text-white hover:bg-blue-700 rounded-md">Dashboard</Link>
                <Link to="/progress/reports" className="block px-3 py-2 text-white hover:bg-blue-700 rounded-md">Performance Reports</Link>
                <Link to="/progress/activity" className="block px-3 py-2 text-white hover:bg-blue-700 rounded-md">Activity Logs</Link>
                <Link to="/progress/recommendations" className="block px-3 py-2 text-white hover:bg-blue-700 rounded-md">Personalized Recommendations</Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;


