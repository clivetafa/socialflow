'use client';

import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import StatsCard from './components/StatsCard';
import PostCard from './components/PostCard';
import Calendar from './components/Calendar';
import PostModal from './components/PostModal';
import MessagesSection from './components/MessagesSection';
import {
  Twitter,
  Instagram,
  Linkedin,
  Facebook,
  Heart,
  MessageCircle,
  Share2,
  BarChart3,
  Users,
  Clock,
  FileText,
  TrendingUp,
  DollarSign,
  Eye,
  Plus,
  Calendar as CalendarIcon,
} from 'lucide-react';

export default function HomePage() {
  const [isPostModalOpen, setIsPostModalOpen] = useState(false);

  // Sample messages data
  const messages = [
    { id: 1, name: 'Sarah Chen', message: 'Loved your recent campaign!', time: '2 min ago', unread: true },
    { id: 2, name: 'Marketing Team', message: 'Monthly report is ready', time: '1 hour ago', unread: true },
    { id: 3, name: 'David Wilson', message: 'Need your approval on the post', time: '3 hours ago', unread: false },
    { id: 4, name: 'Support', message: 'Your ticket has been resolved', time: 'Yesterday', unread: false },
    { id: 5, name: 'Alex Turner', message: 'Meeting tomorrow at 10 AM', time: '2 days ago', unread: false },
  ];

  return (
    <div className="flex min-h-screen bg-[#0a192f]">
      <Sidebar />
      <main className="flex-1 p-6 ml-64">
        <Header onNewPostClick={() => setIsPostModalOpen(true)} />
        
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatsCard
            title="Total Posts"
            value="1,234"
            icon={<FileText className="text-[#64ffda]" size={20} />}
            change="+12%"
            trend="up"
            description="From last month"
          />
          <StatsCard
            title="Engagement Rate"
            value="4.5%"
            icon={<BarChart3 className="text-[#64ffda]" size={20} />}
            change="+0.3%"
            trend="up"
            description="From last week"
          />
          <StatsCard
            title="Total Reach"
            value="2.1M"
            icon={<Eye className="text-[#64ffda]" size={20} />}
            change="+245k"
            trend="up"
            description="From last month"
          />
          <StatsCard
            title="Revenue"
            value="$12.4K"
            icon={<DollarSign className="text-[#64ffda]" size={20} />}
            change="+8.2%"
            trend="up"
            description="From last month"
          />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Posts Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-[#112240] rounded-xl border border-[#233554] p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-[#e6f1ff]">Recent Posts</h2>
                <button className="text-[#64ffda] text-sm font-medium hover:underline">
                  View All →
                </button>
              </div>
              
              <PostCard
                platform="Twitter"
                username="@socialflow"
                content="🚀 Just launched our new analytics dashboard! Track your social media performance in real-time with beautiful visualizations and actionable insights. #SocialFlow #Analytics"
                time="2 hours ago"
                likes={245}
                comments={42}
                shares={18}
                engagementRate="4.8%"
              />
              
              <div className="mt-6">
                <PostCard
                  platform="Instagram"
                  username="@socialflow"
                  content="🌟 Behind the scenes of our latest campaign shoot! Our team worked tirelessly to bring you the best content. Can't wait to share the results! #BTS #SocialMedia"
                  time="5 hours ago"
                  likes={1247}
                  comments={89}
                  shares={45}
                  engagementRate="6.2%"
                />
              </div>
            </div>

            {/* Messages Preview */}
            <div className="bg-[#112240] rounded-xl border border-[#233554] p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-[#e6f1ff]">Recent Messages</h2>
                <button className="text-[#64ffda] text-sm font-medium hover:underline">
                  View All Messages →
                </button>
              </div>
              
              <div className="space-y-4">
                {messages.slice(0, 3).map(msg => (
                  <div key={msg.id} className={`p-4 rounded-lg border ${msg.unread ? 'border-[#64ffda] bg-[#0a192f]/50' : 'border-[#233554]'}`}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-full ${msg.unread ? 'bg-[#64ffda]' : 'bg-[#233554]'} flex items-center justify-center`}>
                          <span className={`text-sm font-bold ${msg.unread ? 'text-[#0a192f]' : 'text-[#64ffda]'}`}>
                            {msg.name.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <h4 className="font-medium text-[#e6f1ff]">{msg.name}</h4>
                          <p className="text-sm text-[#8892b0] truncate">{msg.message}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-xs text-[#8892b0]">{msg.time}</span>
                        {msg.unread && (
                          <div className="mt-1 w-2 h-2 bg-[#64ffda] rounded-full ml-auto"></div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <Calendar />
            
            {/* Social Platforms */}
            <div className="bg-[#112240] rounded-xl border border-[#233554] p-6">
              <h3 className="text-lg font-bold text-[#e6f1ff] mb-4">Platform Status</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 rounded-lg bg-[#0a192f]">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-500/20 rounded-lg">
                      <Twitter className="text-blue-400" size={18} />
                    </div>
                    <span className="text-[#ccd6f6]">Twitter</span>
                  </div>
                  <span className="text-[#64ffda] font-medium">Connected</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-[#0a192f]">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-pink-500/20 rounded-lg">
                      <Instagram className="text-pink-400" size={18} />
                    </div>
                    <span className="text-[#ccd6f6]">Instagram</span>
                  </div>
                  <span className="text-[#64ffda] font-medium">Connected</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-[#0a192f]">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-600/20 rounded-lg">
                      <Facebook className="text-blue-300" size={18} />
                    </div>
                    <span className="text-[#ccd6f6]">Facebook</span>
                  </div>
                  <span className="text-yellow-400 font-medium">Needs Attention</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-[#112240] rounded-xl border border-[#233554] p-6">
          <h3 className="text-lg font-bold text-[#e6f1ff] mb-6">Quick Actions</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <button className="flex flex-col items-center justify-center p-4 rounded-lg bg-[#0a192f] border border-[#233554] hover:border-[#64ffda] hover:text-[#64ffda] transition-all">
              <BarChart3 className="mb-2" size={24} />
              <span className="text-sm font-medium">Analytics</span>
            </button>
            <button className="flex flex-col items-center justify-center p-4 rounded-lg bg-[#0a192f] border border-[#233554] hover:border-[#64ffda] hover:text-[#64ffda] transition-all">
              <MessageCircle className="mb-2" size={24} />
              <span className="text-sm font-medium">Messages</span>
            </button>
            <button className="flex flex-col items-center justify-center p-4 rounded-lg bg-[#0a192f] border border-[#233554] hover:border-[#64ffda] hover:text-[#64ffda] transition-all">
              <Users className="mb-2" size={24} />
              <span className="text-sm font-medium">Audience</span>
            </button>
            <button 
              onClick={() => setIsPostModalOpen(true)}
              className="flex flex-col items-center justify-center p-4 rounded-lg bg-gradient-to-br from-[#64ffda] to-[#52d7b7] text-[#0a192f] font-medium hover:opacity-90 transition-opacity"
            >
              <Plus className="mb-1" size={24} />
              <span className="text-sm font-bold">New Post</span>
            </button>
          </div>
        </div>
      </main>

      {/* New Post Modal */}
      <PostModal isOpen={isPostModalOpen} onClose={() => setIsPostModalOpen(false)} />
    </div>
  );
}