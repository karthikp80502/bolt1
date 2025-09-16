import React from 'react';
import { Calendar, Users, MessageSquare, BarChart3, Clock, CheckCircle } from 'lucide-react';

const TherapistDashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Therapist Dashboard</h1>
          <p className="text-gray-600">Welcome back! Here's an overview of your practice.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Today's Sessions</p>
                <p className="text-2xl font-bold text-gray-900">8</p>
              </div>
              <Calendar className="h-8 w-8 text-blue-600" />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Active Patients</p>
                <p className="text-2xl font-bold text-gray-900">24</p>
              </div>
              <Users className="h-8 w-8 text-green-600" />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Unread Messages</p>
                <p className="text-2xl font-bold text-gray-900">3</p>
              </div>
              <MessageSquare className="h-8 w-8 text-purple-600" />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">This Week</p>
                <p className="text-2xl font-bold text-gray-900">32</p>
              </div>
              <BarChart3 className="h-8 w-8 text-orange-600" />
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Today's Schedule */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">Today's Schedule</h2>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {[
                  { time: '9:00 AM', patient: 'Sarah Johnson', type: 'CBT Session', status: 'upcoming' },
                  { time: '10:30 AM', patient: 'Michael Chen', type: 'Initial Consultation', status: 'upcoming' },
                  { time: '2:00 PM', patient: 'Emma Davis', type: 'Follow-up', status: 'completed' },
                  { time: '3:30 PM', patient: 'James Wilson', type: 'Group Therapy', status: 'upcoming' },
                ].map((appointment, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4 text-gray-500" />
                        <span className="text-sm font-medium text-gray-900">{appointment.time}</span>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">{appointment.patient}</p>
                        <p className="text-xs text-gray-500">{appointment.type}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      {appointment.status === 'completed' ? (
                        <CheckCircle className="h-5 w-5 text-green-600" />
                      ) : (
                        <div className="h-2 w-2 bg-blue-600 rounded-full"></div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">Quick Actions</h2>
            </div>
            <div className="p-6">
              <div className="space-y-3">
                <button className="w-full text-left p-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors">
                  <div className="flex items-center space-x-3">
                    <Calendar className="h-5 w-5 text-blue-600" />
                    <span className="text-sm font-medium text-gray-900">Schedule Appointment</span>
                  </div>
                </button>
                <button className="w-full text-left p-3 bg-green-50 hover:bg-green-100 rounded-lg transition-colors">
                  <div className="flex items-center space-x-3">
                    <Users className="h-5 w-5 text-green-600" />
                    <span className="text-sm font-medium text-gray-900">Add New Patient</span>
                  </div>
                </button>
                <button className="w-full text-left p-3 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors">
                  <div className="flex items-center space-x-3">
                    <MessageSquare className="h-5 w-5 text-purple-600" />
                    <span className="text-sm font-medium text-gray-900">Send Message</span>
                  </div>
                </button>
                <button className="w-full text-left p-3 bg-orange-50 hover:bg-orange-100 rounded-lg transition-colors">
                  <div className="flex items-center space-x-3">
                    <BarChart3 className="h-5 w-5 text-orange-600" />
                    <span className="text-sm font-medium text-gray-900">View Reports</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TherapistDashboard;