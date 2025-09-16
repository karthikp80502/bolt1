import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Calendar, Users, MessageSquare, BarChart3, Clock, CheckCircle,
  Video, Heart, Target, Award, Plus, Settings, Bell
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useTheme } from '../contexts/ThemeContext';

function TherapistDashboard() {
  const { user } = useAuth();
  const { theme } = useTheme();

  const quickActions = [
    {
      icon: Users,
      title: 'List Service',
      description: 'Create your professional profile for video therapy',
      link: '/list-service',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Calendar,
      title: 'Appointments',
      description: 'View and manage your therapy sessions',
      link: '/appointments',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Users,
      title: 'Patients',
      description: 'Manage your patient records and progress',
      link: '/patients',
      color: 'from-teal-500 to-green-500'
    },
    {
      icon: MessageSquare,
      title: 'Messages',
      description: 'Communicate with your patients',
      link: '/messages',
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <div className={`h-screen flex flex-col ${
      theme === 'dark' ? 'bg-gray-900' : 'bg-gradient-to-br from-purple-50 via-blue-50 to-teal-50'
    }`}>
      <div className="flex-1 overflow-y-auto p-4">
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-4"
        >
          <h1 className={`text-2xl font-bold mb-2 ${
            theme === 'dark' ? 'text-white' : 'text-gray-800'
          }`}>
            Welcome back, Dr. {user?.name}!
          </h1>
          <p className={`text-base ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Manage your practice and help patients on their healing journey
          </p>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-4 mb-4">
          {[
            { title: "Today's Sessions", value: '8', icon: Calendar, color: 'from-blue-500 to-cyan-500' },
            { title: 'Active Patients', value: '24', icon: Users, color: 'from-green-500 to-teal-500' },
            { title: 'Unread Messages', value: '3', icon: MessageSquare, color: 'from-purple-500 to-pink-500' },
            { title: 'This Week', value: '32', icon: BarChart3, color: 'from-orange-500 to-red-500' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`p-4 rounded-xl shadow-lg ${
                theme === 'dark' ? 'bg-gray-800' : 'bg-white'
              }`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className={`text-sm font-medium ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {stat.title}
                  </h3>
                  <p className={`text-xl font-bold ${
                    theme === 'dark' ? 'text-white' : 'text-gray-800'
                  }`}>
                    {stat.value}
                  </p>
                </div>
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${stat.color} flex items-center justify-center`}>
                  <stat.icon className="w-5 h-5 text-white" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-4"
        >
          <h3 className={`text-lg font-semibold mb-4 ${
            theme === 'dark' ? 'text-white' : 'text-gray-800'
          }`}>
            Quick Actions
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickActions.map((action, index) => (
              <Link key={index} to={action.link}>
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`p-4 rounded-xl shadow-lg transition-all duration-300 cursor-pointer ${
                    theme === 'dark' ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:shadow-xl'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${action.color} flex items-center justify-center mb-3`}>
                    <action.icon className="w-5 h-5 text-white" />
                  </div>
                  <h4 className={`text-base font-semibold mb-2 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-800'
                  }`}>
                    {action.title}
                  </h4>
                  <p className={`text-sm ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {action.description}
                  </p>
                </motion.div>
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Today's Schedule */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className={`p-4 rounded-xl shadow-lg ${
            theme === 'dark' ? 'bg-gray-800' : 'bg-white'
          }`}
        >
          <h3 className={`text-lg font-semibold mb-4 ${
            theme === 'dark' ? 'text-white' : 'text-gray-800'
          }`}>
            Today's Schedule
          </h3>
          <div className="space-y-3">
            {[
              { time: '9:00 AM', patient: 'Sarah Johnson', type: 'CBT Session', status: 'upcoming' },
              { time: '10:30 AM', patient: 'Michael Chen', type: 'Initial Consultation', status: 'upcoming' },
              { time: '2:00 PM', patient: 'Emma Davis', type: 'Follow-up', status: 'completed' },
              { time: '3:30 PM', patient: 'James Wilson', type: 'Group Therapy', status: 'upcoming' },
            ].map((appointment, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className={`flex items-center justify-between p-3 rounded-lg ${
                  theme === 'dark' ? 'bg-gray-700' : 'bg-gray-50'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className="flex items-center space-x-2">
                    <Clock className={`w-4 h-4 ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                    }`} />
                    <span className={`text-sm font-medium ${
                      theme === 'dark' ? 'text-white' : 'text-gray-800'
                    }`}>
                      {appointment.time}
                    </span>
                  </div>
                  <div>
                    <p className={`font-medium ${
                      theme === 'dark' ? 'text-white' : 'text-gray-800'
                    }`}>
                      {appointment.patient}
                    </p>
                    <p className={`text-sm ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      {appointment.type}
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  {appointment.status === 'completed' ? (
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  ) : (
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {quickActions.map((action, index) => (
            <Link key={index} to={action.link}>
              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`p-4 rounded-xl shadow-lg transition-all duration-300 cursor-pointer ${
                  theme === 'dark' ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:shadow-xl'
                }`}
              >
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${action.color} flex items-center justify-center mb-3`}>
                  <action.icon className="w-5 h-5 text-white" />
                </div>
                <h4 className={`text-base font-semibold mb-2 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-800'
                }`}>
                  {action.title}
                </h4>
                <p className={`text-sm ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {action.description}
                </p>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default TherapistDashboard;