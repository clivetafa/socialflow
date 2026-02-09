'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

export default function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const daysInMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDate();

  const firstDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  ).getDay();

  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const emptyDays = Array.from({ length: firstDayOfMonth }, (_, i) => i);

  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
  };

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const scheduledPosts = [5, 12, 18, 25]; // Days with scheduled posts

  return (
    <div className="bg-[#112240] rounded-xl border border-[#233554] p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold text-[#e6f1ff]">Calendar</h3>
        <div className="flex items-center gap-2">
          <button
            onClick={prevMonth}
            className="p-2 rounded-lg hover:bg-[#0a192f] text-[#8892b0]"
          >
            <ChevronLeft size={20} />
          </button>
          <span className="text-[#e6f1ff] font-medium">
            {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
          </span>
          <button
            onClick={nextMonth}
            className="p-2 rounded-lg hover:bg-[#0a192f] text-[#8892b0]"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-2 mb-4">
        {dayNames.map(day => (
          <div key={day} className="text-center text-sm font-medium text-[#8892b0] py-2">
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-2">
        {emptyDays.map(empty => (
          <div key={`empty-${empty}`} className="h-10"></div>
        ))}
        
        {days.map(day => {
          const hasPost = scheduledPosts.includes(day);
          const isToday = day === new Date().getDate() && 
            currentDate.getMonth() === new Date().getMonth();
          
          return (
            <div
              key={day}
              className={`h-10 flex items-center justify-center rounded-lg text-sm font-medium transition-all ${
                isToday
                  ? 'bg-[#64ffda] text-[#0a192f]'
                  : hasPost
                  ? 'bg-[#0a192f] border border-[#64ffda] text-[#64ffda]'
                  : 'text-[#ccd6f6] hover:bg-[#0a192f]'
              }`}
            >
              {day}
              {hasPost && (
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-[#64ffda] rounded-full"></div>
              )}
            </div>
          );
        })}
      </div>

      {/* Legend */}
      <div className="mt-6 pt-6 border-t border-[#233554]">
        <h4 className="text-sm font-medium text-[#ccd6f6] mb-3">Legend</h4>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-[#64ffda] rounded-full"></div>
            <span className="text-xs text-[#8892b0]">Today</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 border border-[#64ffda] rounded-full"></div>
            <span className="text-xs text-[#8892b0]">Scheduled Post</span>
          </div>
        </div>
      </div>
    </div>
  );
}