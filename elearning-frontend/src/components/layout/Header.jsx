import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Navbar from './Navbar';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Check if we're on the homepage
  const isHomePage = location.pathname === '/';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-blue-700 shadow-md' : isHomePage ? 'bg-transparent' : 'bg-blue-600'
    }`}>
      <Navbar />
      
      {/* Announcement banner - can be conditionally shown */}
      {false && (
        <div className="bg-yellow-500 text-white text-center py-2 px-4">
          <p className="text-sm font-medium">
            🎉 New courses available! <a href="#" className="underline font-bold">Check them out</a>
          </p>
        </div>
      )}
    </header>
  );
}

export default Header;


