'use client';

import { Bell, User, Calendar, Filter } from 'lucide-react';

interface HeaderProps {
  onNewPostClick: () => void;
}

export default function Header({ onNewPostClick }: HeaderProps) {
  return (
    <div className="flex items-center justify-between mb-8">
      <div>
        <h1 className="text-3xl font-bold text-[#e6f1ff]">Welcome back, Alex! 👋</h1>
        <p className="text-[#8892b0] mt-2">Here's what's happening with your social media today.</p>
        
        {/* Date and Stats */}
        <div className="flex items-center gap-6 mt-4">
          <div className="flex items-center gap-2">
            <Calendar className="text-[#64ffda]" size={18} />
            <span className="text-[#ccd6f6]">Feb 8, 2024</span>
          </div>
          <div className="flex items-center gap-2">
            <Filter className="text-[#64ffda]" size={18} />
            <span className="text-[#ccd6f6]">Last 7 days</span>
          </div>
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        {/* Notifications */}
        <button className="relative p-2 rounded-lg bg-[#112240] border border-[#233554] hover:bg-[#0a192f] transition-colors">
          <Bell className="text-[#ccd6f6]" size={20} />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            3
          </span>
        </button>
        
        {/* New Post Button */}
        <button 
          onClick={onNewPostClick}
          className="bg-gradient-to-r from-[#64ffda] to-[#52d7b7] text-[#0a192f] font-semibold px-6 py-3 rounded-lg flex items-center gap-2 hover:opacity-90 transition-all hover:scale-105"
        >
          <span>+ New Post</span>
        </button>
        
        {/* User Profile */}
        <div className="flex items-center gap-3 p-2 rounded-lg bg-[#112240] border border-[#233554]">
          <div className="w-10 h-10 bg-gradient-to-br from-[#64ffda] to-[#0a192f] rounded-full flex items-center justify-center">
            <User className="text-[#0a192f]" size={20} />
          </div>
          <div>
            <p className="font-semibold text-[#e6f1ff]">Alex Johnson</p>
            <p className="text-xs text-[#8892b0]">Social Media Manager</p>
          </div>
        </div>
      </div>
    </div>
  );
}