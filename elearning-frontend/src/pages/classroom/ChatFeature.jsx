import React, { useState } from 'react';

// Mock data for chat messages
const initialMessages = [
  {
    id: 1,
    sender: 'Dr. Sarah Johnson',
    avatar: '👩‍🏫',
    message: 'Hello everyone! Welcome to our Web Development course. Feel free to ask any questions here.',
    timestamp: '10:00 AM',
    isInstructor: true
  },
  {
    id: 2,
    sender: 'Alex Thompson',
    avatar: '👨‍🎓',
    message: 'Thanks Dr. Johnson! I had a question about the CSS Grid assignment. Is it due this Friday?',
    timestamp: '10:05 AM',
    isInstructor: false
  },
  {
    id: 3,
    sender: 'Dr. Sarah Johnson',
    avatar: '👩‍🏫',
    message: 'Yes, the CSS Grid assignment is due this Friday at 11:59 PM. Make sure to submit it through the assignments portal.',
    timestamp: '10:07 AM',
    isInstructor: true
  },
  {
    id: 4,
    sender: 'Maria Garcia',
    avatar: '👩‍🎓',
    message: 'I\'m having trouble with the flexbox container. Can we go over that again in the next class?',
    timestamp: '10:15 AM',
    isInstructor: false
  },
  {
    id: 5,
    sender: 'Dr. Sarah Johnson',
    avatar: '👩‍🏫',
    message: 'Absolutely, Maria! I\'ll make sure to cover flexbox containers in more detail during our next session. In the meantime, check out the additional resources I posted.',
    timestamp: '10:18 AM',
    isInstructor: true
  }
];

// Mock data for active courses
const courses = [
  { id: 1, name: 'Introduction to Web Development' },
  { id: 2, name: 'Advanced JavaScript Concepts' },
  { id: 3, name: 'Data Science Fundamentals' }
];

function ChatFeature() {
  const [messages, setMessages] = useState(initialMessages);
  const [newMessage, setNewMessage] = useState('');
  const [selectedCourse, setSelectedCourse] = useState(1);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim() === '') return;

    const newMsg = {
      id: messages.length + 1,
      sender: 'You',
      avatar: '👨‍🎓',
      message: newMessage,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isInstructor: false
    };

    setMessages([...messages, newMsg]);
    setNewMessage('');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Course Chat</h1>
        <div className="relative">
          <select
            value={selectedCourse}
            onChange={(e) => setSelectedCourse(Number(e.target.value))}
            className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md py-2 pl-3 pr-10 text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            {courses.map(course => (
              <option key={course.id} value={course.id}>
                {course.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
        <div className="p-4 bg-gray-50 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-600">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
            {courses.find(c => c.id === selectedCourse)?.name} - Class Chat
          </h2>
        </div>

        {/* Chat messages */}
        <div className="p-4 h-96 overflow-y-auto">
          {messages.map((msg) => (
            <div key={msg.id} className={`mb-4 flex ${msg.sender === 'You' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-3/4 ${msg.sender === 'You' ? 'order-2' : 'order-1'}`}>
                <div className="flex items-center mb-1">
                  {msg.sender !== 'You' && (
                    <span className="mr-2 text-xl">{msg.avatar}</span>
                  )}
                  <span className={`font-medium text-sm ${msg.isInstructor ? 'text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-300'}`}>
                    {msg.sender}
                    {msg.isInstructor && ' (Instructor)'}
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400 ml-2">{msg.timestamp}</span>
                </div>
                <div className={`p-3 rounded-lg ${
                  msg.sender === 'You' 
                    ? 'bg-blue-600 text-white' 
                    : msg.isInstructor 
                      ? 'bg-blue-100 dark:bg-blue-900 text-gray-800 dark:text-gray-100' 
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100'
                }`}>
                  <p className="text-sm">{msg.message}</p>
                </div>
              </div>
              {msg.sender === 'You' && (
                <span className="text-xl order-1 mr-2">{msg.avatar}</span>
              )}
            </div>
          ))}
        </div>

        {/* Message input */}
        <div className="p-4 border-t border-gray-200 dark:border-gray-600">
          <form onSubmit={handleSendMessage} className="flex">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-grow px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Send
            </button>
          </form>
        </div>
      </div>

      <div className="mt-8 bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Chat Guidelines</h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-300">
          <li>Be respectful to instructors and fellow students</li>
          <li>Stay on topic and keep discussions relevant to the course</li>
          <li>Use appropriate language and maintain academic integrity</li>
          <li>For private concerns, please message your instructor directly</li>
          <li>Technical issues should be directed to the support team</li>
        </ul>
      </div>
    </div>
  );
}

export default ChatFeature;