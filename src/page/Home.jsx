import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ReactPlayer from 'react-player';
import { Home, Trending, Subscriptions, History, VideoLibrary, Clock, ThumbsUp, Search, Menu, Bell, User } from 'lucide-react';
import { auth, db } from "../utils/firebaseApp";
import { collection, addDoc } from "firebase/firestore";

const HomePage = () => {
  const [showSubscription, setShowSubscription] = useState(false);
  const [videoStartTime, setVideoStartTime] = useState(null);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const videos = [
    {
      id: 1,
      url: 'https://www.youtube.com/watch?v=w4vdcwQzRZA',
      title: 'Breaking News: Latest Updates',
      channel: 'News Channel',
      views: '1.2M views',
      timestamp: '2 hours ago'
    },
    {
      id: 2,
      url: 'https://www.youtube.com/watch?v=_D7MGFRNtUE',
      title: 'Local News Coverage',
      channel: 'Local News',
      views: '500K views',
      timestamp: '5 hours ago'
    },
    // Add more videos as needed
  ];

  const subscriptionPlans = [
    {
      id: 'basic',
      name: 'Basic Plan',
      price: '₹99/month',
      features: ['Access to all news videos', 'Ad-free experience', 'HD quality']
    },
    {
      id: 'premium',
      name: 'Premium Plan',
      price: '₹199/month',
      features: ['Everything in Basic', 'Exclusive content', '4K quality', 'Offline downloads']
    }
  ];

  const handleVideoStart = () => {
    setVideoStartTime(Date.now());
  };

  const handleVideoProgress = () => {
    if (videoStartTime && !showSubscription) {
      const timeWatched = (Date.now() - videoStartTime) / 1000; // Convert to seconds
      if (timeWatched > 120) { // 2 minutes
        setShowSubscription(true);
      }
    }
  };

  const handleSubscribe = async (planId) => {
    try {
      if (!auth.currentUser) {
        // Redirect to login if not authenticated
        return;
      }

      const subscriptionData = {
        userId: auth.currentUser.uid,
        planId: planId,
        startDate: new Date(),
        status: 'active'
      };

      await addDoc(collection(db, "subscriptions"), subscriptionData);
      setShowSubscription(false);
      setSelectedPlan(planId);
    } catch (error) {
      console.error("Error subscribing:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm fixed w-full top-0 z-50">
        <div className="flex items-center justify-between px-4 py-2">
          <div className="flex items-center space-x-4">
            <Menu className="h-6 w-6 cursor-pointer" />
            <img src="/src/assets/logo.png" alt="Logo" className="h-8" />
          </div>
          
          <div className="flex-1 max-w-2xl mx-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="w-full px-4 py-2 rounded-full border focus:outline-none focus:border-blue-500"
              />
              <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Bell className="h-6 w-6 cursor-pointer" />
            <User className="h-6 w-6 cursor-pointer" />
          </div>
        </div>
      </header>

      {/* Sidebar */}
      <aside className="fixed left-0 top-14 w-64 h-full bg-white p-4 overflow-y-auto">
        <nav className="space-y-2">
          <Link to="/" className="flex items-center space-x-3 p-2 rounded hover:bg-gray-100">
            <Home className="h-5 w-5" />
            <span>Home</span>
          </Link>
          <Link to="/trending" className="flex items-center space-x-3 p-2 rounded hover:bg-gray-100">
            <Trending className="h-5 w-5" />
            <span>Trending</span>
          </Link>
          <Link to="/subscriptions" className="flex items-center space-x-3 p-2 rounded hover:bg-gray-100">
            <Subscriptions className="h-5 w-5" />
            <span>Subscriptions</span>
          </Link>
          <hr className="my-4" />
          <Link to="/library" className="flex items-center space-x-3 p-2 rounded hover:bg-gray-100">
            <VideoLibrary className="h-5 w-5" />
            <span>Library</span>
          </Link>
          <Link to="/history" className="flex items-center space-x-3 p-2 rounded hover:bg-gray-100">
            <History className="h-5 w-5" />
            <span>History</span>
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="ml-64 pt-14 p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => (
            <div key={video.id} className="bg-white rounded-lg shadow overflow-hidden">
              <div className="relative pt-[56.25%]">
                <ReactPlayer
                  url={video.url}
                  width="100%"
                  height="100%"
                  style={{ position: 'absolute', top: 0, left: 0 }}
                  controls
                  onStart={handleVideoStart}
                  onProgress={handleVideoProgress}
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg">{video.title}</h3>
                <p className="text-gray-600">{video.channel}</p>
                <div className="flex items-center text-sm text-gray-500">
                  <span>{video.views}</span>
                  <span className="mx-1">•</span>
                  <span>{video.timestamp}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Subscription Modal */}
      {showSubscription && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-2xl w-full mx-4">
            <h2 className="text-2xl font-bold mb-4">Choose Your Subscription Plan</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {subscriptionPlans.map((plan) => (
                <div key={plan.id} className="border rounded-lg p-6 hover:border-blue-500 transition-colors">
                  <h3 className="text-xl font-semibold">{plan.name}</h3>
                  <p className="text-2xl font-bold text-blue-600 my-4">{plan.price}</p>
                  <ul className="space-y-2 mb-6">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => handleSubscribe(plan.id)}
                    className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Subscribe Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;