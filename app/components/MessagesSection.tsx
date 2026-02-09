'use client';

import { Search, Filter, MoreVertical, Check, Reply, MessageCircle } from 'lucide-react'; // ADDED MessageCircle
import { useState } from 'react';

interface Message {
  id: number;
  name: string;
  avatar: string;
  platform: string;
  message: string;
  time: string;
  unread: boolean;
  selected: boolean;
}

export default function MessagesSection() {
  const [selectedMessage, setSelectedMessage] = useState<number | null>(null);
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, name: 'Sarah Chen', avatar: 'SC', platform: 'Twitter', message: 'Loved your recent campaign! Would love to collaborate.', time: '2 min ago', unread: true, selected: false },
    { id: 2, name: 'Marketing Team', avatar: 'MT', platform: 'Email', message: 'Monthly analytics report is ready for review.', time: '1 hour ago', unread: true, selected: false },
    { id: 3, name: 'David Wilson', avatar: 'DW', platform: 'LinkedIn', message: 'Need your approval on the scheduled posts for next week.', time: '3 hours ago', unread: false, selected: false },
    { id: 4, name: 'Support Team', avatar: 'ST', platform: 'System', message: 'Your support ticket #4567 has been resolved.', time: 'Yesterday', unread: false, selected: false },
    { id: 5, name: 'Alex Turner', avatar: 'AT', platform: 'Facebook', message: 'Can we schedule a meeting tomorrow at 10 AM to discuss the strategy?', time: '2 days ago', unread: false, selected: false },
    { id: 6, name: 'Emma Rodriguez', avatar: 'ER', platform: 'Instagram', message: 'The influencer campaign performance exceeded expectations!', time: '3 days ago', unread: false, selected: false },
  ]);

  const handleSelectMessage = (id: number) => {
    setSelectedMessage(id);
    setMessages(prev => prev.map(msg => ({
      ...msg,
      selected: msg.id === id
    })));
  };

  const markAsRead = (id: number) => {
    setMessages(prev => prev.map(msg =>
      msg.id === id ? { ...msg, unread: false } : msg
    ));
  };

  return (
    <div className="bg-[#112240] rounded-xl border border-[#233554] h-[600px] flex">
      {/* Messages List */}
      <div className="w-1/3 border-r border-[#233554] flex flex-col">
        {/* Header */}
        <div className="p-4 border-b border-[#233554]">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-[#e6f1ff]">Messages</h2>
            <span className="bg-[#64ffda] text-[#0a192f] text-xs font-bold px-2 py-1 rounded-full">
              {messages.filter(m => m.unread).length} new
            </span>
          </div>
          
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#8892b0]" size={18} />
            <input
              type="text"
              placeholder="Search messages..."
              className="w-full bg-[#0a192f] border border-[#233554] rounded-lg pl-10 pr-4 py-2 text-sm text-[#e6f1ff] focus:outline-none focus:ring-2 focus:ring-[#64ffda]"
            />
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto">
          {messages.map(msg => (
            <div
              key={msg.id}
              onClick={() => handleSelectMessage(msg.id)}
              className={`p-4 border-b border-[#233554] cursor-pointer transition-all hover:bg-[#0a192f] ${msg.selected ? 'bg-[#0a192f] border-l-4 border-l-[#64ffda]' : ''}`}
            >
              <div className="flex items-start gap-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${msg.unread ? 'bg-[#64ffda]' : 'bg-[#233554]'}`}>
                  <span className={`font-bold ${msg.unread ? 'text-[#0a192f]' : 'text-[#64ffda]'}`}>
                    {msg.avatar}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <h4 className="font-semibold text-[#e6f1ff] truncate">{msg.name}</h4>
                      <span className="text-xs px-2 py-1 rounded bg-[#233554] text-[#8892b0]">
                        {msg.platform}
                      </span>
                    </div>
                    <span className="text-xs text-[#8892b0]">{msg.time}</span>
                  </div>
                  <p className="text-sm text-[#8892b0] truncate">{msg.message}</p>
                </div>
                {msg.unread && (
                  <div className="w-2 h-2 bg-[#64ffda] rounded-full mt-2"></div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Message Detail */}
      <div className="flex-1 flex flex-col">
        {selectedMessage ? (
          <>
            {/* Message Header */}
            <div className="p-4 border-b border-[#233554] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#64ffda] flex items-center justify-center">
                  <span className="font-bold text-[#0a192f]">
                    {messages.find(m => m.id === selectedMessage)?.avatar}
                  </span>
                </div>
                <div>
                  <h3 className="font-bold text-[#e6f1ff]">
                    {messages.find(m => m.id === selectedMessage)?.name}
                  </h3>
                  <p className="text-sm text-[#8892b0]">
                    via {messages.find(m => m.id === selectedMessage)?.platform}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => markAsRead(selectedMessage)}
                  className="p-2 rounded-lg hover:bg-[#0a192f] text-[#8892b0]"
                  title="Mark as read"
                >
                  <Check size={20} />
                </button>
                <button className="p-2 rounded-lg hover:bg-[#0a192f] text-[#8892b0]">
                  <MoreVertical size={20} />
                </button>
              </div>
            </div>

            {/* Message Content */}
            <div className="flex-1 p-6 overflow-y-auto">
              <div className="max-w-3xl">
                <div className="mb-8">
                  <p className="text-[#e6f1ff] text-lg">
                    {messages.find(m => m.id === selectedMessage)?.message}
                  </p>
                  <span className="text-sm text-[#8892b0] mt-2 block">
                    {messages.find(m => m.id === selectedMessage)?.time}
                  </span>
                </div>
                
                {/* Reply Section */}
                <div className="mt-8 pt-8 border-t border-[#233554]">
                  <h4 className="text-[#ccd6f6] font-medium mb-4">Reply</h4>
                  <textarea
                    className="w-full h-32 bg-[#0a192f] border border-[#233554] rounded-xl p-4 text-[#e6f1ff] resize-none focus:outline-none focus:ring-2 focus:ring-[#64ffda]"
                    placeholder="Type your reply here..."
                  />
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-2">
                      <button className="p-2 rounded-lg hover:bg-[#0a192f] text-[#8892b0]">
                        <Filter size={20} />
                      </button>
                      <button className="p-2 rounded-lg hover:bg-[#0a192f] text-[#8892b0]">
                        <MoreVertical size={20} />
                      </button>
                    </div>
                    <button className="px-6 py-2 rounded-lg bg-gradient-to-r from-[#64ffda] to-[#52d7b7] text-[#0a192f] font-semibold flex items-center gap-2 hover:opacity-90">
                      <Reply size={18} />
                      Send Reply
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#233554] rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="text-[#64ffda]" size={32} />
              </div>
              <h3 className="text-xl font-bold text-[#e6f1ff] mb-2">Select a message</h3>
              <p className="text-[#8892b0]">Choose a conversation from the list to view messages</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}