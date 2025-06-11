import React from 'react';

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">Welcome to E-Learning Platform</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-3">Interactive Courses</h2>
          <p className="text-gray-600">Access our library of interactive courses designed to enhance your learning experience.</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-3">AI-Powered Assistant</h2>
          <p className="text-gray-600">Get help from our intelligent assistant that adapts to your learning style.</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-3">Progress Tracking</h2>
          <p className="text-gray-600">Monitor your learning journey with detailed analytics and personalized insights.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;