import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './styles/global.css';

// Layout components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Chatbot from './components/chatbot/Chatbot';

// Main pages
import Home from './pages/home/Home';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';

// Dashboard
import Dashboard from './pages/dashboard/Dashboard';

// Quiz pages
import QuizDashboard from './pages/quiz/QuizDashboard';
import Badges from './pages/quiz/Badges';
import Achievements from './pages/quiz/Achievements';
import Leaderboard from './pages/quiz/Leaderboard';

// Classroom pages
import ClassroomDashboard from './pages/classroom/ClassroomDashboard';
import ChatFeature from './pages/classroom/ChatFeature';
import SessionRecordings from './pages/classroom/SessionRecordings';

// Progress pages
import ProgressDashboard from './pages/progress/ProgressDashboard';
import PerformanceReports from './pages/progress/PerformanceReports';
import ActivityLogs from './pages/progress/ActivityLogs';
import PersonalizedRecommendations from './pages/progress/PersonalizedRecommendations';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
        <Header />
        <main className="flex-grow pt-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto py-6">
            <Routes>
              {/* Home and Auth Routes */}
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              
              {/* Dashboard */}
              <Route path="/dashboard" element={<Dashboard />} />
              
              {/* Quiz Routes */}
              <Route path="/quiz/dashboard" element={<QuizDashboard />} />
              <Route path="/quiz/badges" element={<Badges />} />
              <Route path="/quiz/achievements" element={<Achievements />} />
              <Route path="/quiz/leaderboard" element={<Leaderboard />} />
              
              {/* Classroom Routes */}
              <Route path="/classroom/dashboard" element={<ClassroomDashboard />} />
              {/* <Route path="/classroom/materials" element={<CourseMaterials />} /> */}
              <Route path="/classroom/chat" element={<ChatFeature />} />
              <Route path="/classroom/recordings" element={<SessionRecordings />} />
              
              {/* Progress Routes */}
              <Route path="/progress/dashboard" element={<ProgressDashboard />} />
              <Route path="/progress/reports" element={<PerformanceReports />} />
              <Route path="/progress/activity" element={<ActivityLogs />} />
              <Route path="/progress/recommendations" element={<PersonalizedRecommendations />} />
            </Routes>
          </div>
        </main>
        <Chatbot />
        <Footer />
      </div>
    </Router>
  );
}

export default App;




