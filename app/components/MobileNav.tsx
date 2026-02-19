'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Home,
  BarChart3,
  Calendar,
  MessageSquare,
  Users,
} from 'lucide-react';

export default function MobileNav() {
  const pathname = usePathname();

  const navItems = [
    { name: 'Home', icon: <Home size={24} />, href: '/' },
    { name: 'Analytics', icon: <BarChart3 size={24} />, href: '/analytics' },
    { name: 'Schedule', icon: <Calendar size={24} />, href: '/schedule' },
    { name: 'Messages', icon: <MessageSquare size={24} />, href: '/messages' },
    { name: 'Audience', icon: <Users size={24} />, href: '/audience' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-[#112240] border-t border-[#233554] py-2 px-4 z-50">
      <div className="flex justify-around items-center">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex flex-col items-center p-2 rounded-lg transition-colors ${
                isActive 
                  ? 'text-[#64ffda]' 
                  : 'text-[#8892b0] hover:text-[#64ffda]'
              }`}
            >
              {item.icon}
              <span className="text-xs mt-1">{item.name}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
    }
