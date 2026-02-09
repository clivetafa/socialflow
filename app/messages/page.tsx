'use client';

import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import MessagesSection from '../components/MessagesSection'; // FIXED: Changed from MessageSection to MessagesSection
import { useState } from 'react';

export default function MessagesPage() {
  const [isPostModalOpen, setIsPostModalOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#0a192f]">
      <Sidebar />
      <main className="flex-1 p-6 ml-64">
        <Header onNewPostClick={() => setIsPostModalOpen(true)} />
        
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-[#e6f1ff]">Messages</h1>
          <p className="text-[#8892b0]">Manage all your social media conversations in one place</p>
        </div>

        <MessagesSection /> {/* FIXED: Changed from MessageSection to MessagesSection */}
      </main>
    </div>
  );
}