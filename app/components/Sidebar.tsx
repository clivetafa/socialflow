'use client';

import Link from 'next/link';
import { 
  BarChart3, 
  Calendar, 
  MessageSquare, 
  Users, 
  Settings, 
  HelpCircle,
  Home,
  Bell,
  Search,
  Plus
} from 'lucide-react';
import { useState } from 'react';

export default function Sidebar() {
  const [activeItem, setActiveItem] = useState('Dashboard');

  const navItems = [
    { name: 'Dashboard', icon: <Home size={20} />, href: '/', notification: 3 },
    { name: 'Analytics', icon: <BarChart3 size={20} />, href: '/analytics', notification: 0 },
    { name: 'Schedule', icon: <Calendar size={20} />, href: '/schedule', notification: 5 },
    { name: 'Messages', icon: <MessageSquare size={20} />, href: '/messages', notification: 12 },
    { name: 'Audience', icon: <Users size={20} />, href: '/audience', notification: 0 },
  ];

  const settingsItems = [
    { name: 'Settings', icon: <Settings size={20} />, href: '/settings' },
    { name: 'Help', icon: <HelpCircle size={20} />, href: '/help' },
  ];

  return (
    <div className="w-64 bg-[#112240] h-screen fixed left-0 top-0 border-r border-[#233554] p-6">
      {/* Logo */}
      <div className="mb-10">
        <h1 className="text-2xl font-bold text-[#64ffda]">SocialFlow</h1>
        <p className="text-[#8892b0] text-sm">Social Media Dashboard</p>
      </div>

      {/* Search Bar */}
      <div className="relative mb-8">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#8892b0]" size={18} />
        <input
          type="text"
          placeholder="Search..."
          className="w-full bg-[#0a192f] border border-[#233554] rounded-lg pl-10 pr-4 py-2 text-sm text-[#e6f1ff] focus:outline-none focus:ring-2 focus:ring-[#64ffda]"
        />
      </div>

      {/* Notifications */}
      <div className="flex items-center justify-between mb-8 p-3 bg-[#0a192f] rounded-lg border border-[#233554]">
        <div className="flex items-center gap-3">
          <Bell className="text-[#64ffda]" size={20} />
          <span className="text-sm">Notifications</span>
        </div>
        <span className="bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center">
          7
        </span>
      </div>

      {/* Navigation */}
      <div className="mb-8">
        <h2 className="text-xs font-semibold text-[#8892b0] uppercase tracking-wider mb-4">
          Dashboard
        </h2>
        <nav className="space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setActiveItem(item.name)}
              className={`flex items-center justify-between p-3 rounded-lg transition-all ${activeItem === item.name ? 'bg-[#0a192f] text-[#64ffda] border border-[#64ffda]' : 'text-[#ccd6f6] hover:bg-[#0a192f] hover:text-[#64ffda]'}`}
            >
              <div className="flex items-center gap-3">
                {item.icon}
                <span>{item.name}</span>
              </div>
              {item.notification > 0 && (
                <span className="bg-[#64ffda] text-[#0a192f] text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {item.notification}
                </span>
              )}
            </Link>
          ))}
        </nav>
      </div>

      {/* Settings */}
      <div className="mt-auto">
        <h2 className="text-xs font-semibold text-[#8892b0] uppercase tracking-wider mb-4">
          Settings
        </h2>
        <nav className="space-y-1">
          {settingsItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="flex items-center gap-3 p-3 rounded-lg text-[#ccd6f6] hover:bg-[#0a192f] hover:text-[#64ffda] transition-colors"
            >
              {item.icon}
              <span>{item.name}</span>
            </Link>
          ))}
        </nav>
      </div>

      {/* Quick Post Button */}
      <button className="w-full mt-6 bg-gradient-to-r from-[#64ffda] to-[#52d7b7] text-[#0a192f] font-semibold py-3 rounded-lg flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
        <Plus size={20} />
        Quick Post
      </button>
    </div>
  );
}