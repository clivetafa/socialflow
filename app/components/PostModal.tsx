'use client';

import { X, Image, Video, Link, Smile, Calendar, Globe, Twitter, Instagram, Facebook, Linkedin } from 'lucide-react';
import { useState } from 'react';

interface PostModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PostModal({ isOpen, onClose }: PostModalProps) {
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>(['Twitter']);
  const [postContent, setPostContent] = useState('');
  const [scheduledTime, setScheduledTime] = useState('now');

  const platforms = [
    { id: 'twitter', name: 'Twitter', icon: <Twitter size={18} />, color: 'bg-blue-500' },
    { id: 'instagram', name: 'Instagram', icon: <Instagram size={18} />, color: 'bg-pink-500' },
    { id: 'facebook', name: 'Facebook', icon: <Facebook size={18} />, color: 'bg-blue-600' },
    { id: 'linkedin', name: 'LinkedIn', icon: <Linkedin size={18} />, color: 'bg-blue-700' },
  ];

  const handlePlatformToggle = (platformId: string) => {
    setSelectedPlatforms(prev =>
      prev.includes(platformId)
        ? prev.filter(p => p !== platformId)
        : [...prev, platformId]
    );
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-[#112240] border border-[#233554] rounded-2xl w-full max-w-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#233554]">
          <div>
            <h2 className="text-xl font-bold text-[#e6f1ff]">Create New Post</h2>
            <p className="text-[#8892b0] text-sm">Schedule posts across multiple platforms</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-[#0a192f] transition-colors"
          >
            <X className="text-[#8892b0]" size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Platforms Selection */}
          <div className="mb-6">
            <h3 className="text-[#ccd6f6] font-medium mb-3">Select Platforms</h3>
            <div className="flex gap-3">
              {platforms.map(platform => (
                <button
                  key={platform.id}
                  onClick={() => handlePlatformToggle(platform.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all ${selectedPlatforms.includes(platform.id)
                      ? 'bg-[#0a192f] border-[#64ffda] text-[#64ffda]'
                      : 'bg-[#0a192f] border-[#233554] text-[#8892b0] hover:border-[#64ffda]'
                    }`}
                >
                  <div className={`p-1 rounded ${platform.color}`}>
                    {platform.icon}
                  </div>
                  <span>{platform.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Post Content */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-[#ccd6f6] font-medium">Post Content</h3>
              <span className="text-[#8892b0] text-sm">{postContent.length}/280 characters</span>
            </div>
            <textarea
              value={postContent}
              onChange={(e) => setPostContent(e.target.value)}
              placeholder="What's on your mind?"
              className="w-full h-40 bg-[#0a192f] border border-[#233554] rounded-xl p-4 text-[#e6f1ff] resize-none focus:outline-none focus:ring-2 focus:ring-[#64ffda]"
            />
            
            {/* Formatting Tools */}
            <div className="flex items-center gap-2 mt-3">
              <button className="p-2 rounded-lg hover:bg-[#0a192f] text-[#8892b0]">
                <Image size={20} />
              </button>
              <button className="p-2 rounded-lg hover:bg-[#0a192f] text-[#8892b0]">
                <Video size={20} />
              </button>
              <button className="p-2 rounded-lg hover:bg-[#0a192f] text-[#8892b0]">
                <Link size={20} />
              </button>
              <button className="p-2 rounded-lg hover:bg-[#0a192f] text-[#8892b0]">
                <Smile size={20} />
              </button>
              <button className="p-2 rounded-lg hover:bg-[#0a192f] text-[#8892b0]">
                <Globe size={20} />
              </button>
            </div>
          </div>

          {/* Scheduling */}
          <div className="mb-8">
            <h3 className="text-[#ccd6f6] font-medium mb-3">Schedule</h3>
            <div className="flex items-center gap-4">
              <div className="flex-1">
                <label className="block text-[#8892b0] text-sm mb-2">Post Time</label>
                <select
                  value={scheduledTime}
                  onChange={(e) => setScheduledTime(e.target.value)}
                  className="w-full bg-[#0a192f] border border-[#233554] rounded-lg p-3 text-[#e6f1ff] focus:outline-none focus:ring-2 focus:ring-[#64ffda]"
                >
                  <option value="now">Post Now</option>
                  <option value="1h">In 1 hour</option>
                  <option value="tomorrow">Tomorrow 9:00 AM</option>
                  <option value="custom">Custom Time</option>
                </select>
              </div>
              <button className="flex items-center gap-2 p-3 rounded-lg bg-[#0a192f] border border-[#233554] text-[#8892b0] hover:text-[#64ffda] hover:border-[#64ffda] mt-6">
                <Calendar size={18} />
                <span>Calendar</span>
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between p-6 border-t border-[#233554]">
          <button
            onClick={onClose}
            className="px-6 py-3 rounded-lg border border-[#233554] text-[#8892b0] hover:border-[#64ffda] hover:text-[#64ffda] transition-colors"
          >
            Save as Draft
          </button>
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-6 py-3 rounded-lg border border-[#233554] text-[#8892b0] hover:border-[#64ffda] hover:text-[#64ffda] transition-colors"
            >
              Cancel
            </button>
            <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-[#64ffda] to-[#52d7b7] text-[#0a192f] font-semibold hover:opacity-90 transition-opacity">
              {scheduledTime === 'now' ? 'Post Now' : 'Schedule Post'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}