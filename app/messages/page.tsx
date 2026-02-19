'use client';

import { useState, useEffect } from 'react';
import MessagesSection from '../components/MessagesSection';
import MobileNav from '../components/MobileNav';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function MessagesPage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a192f] pb-16 md:pb-0">
      {/* Mobile Header */}
      {isMobile && (
        <div className="sticky top-0 bg-[#112240] border-b border-[#233554] p-4 z-10">
          <Link href="/" className="flex items-center gap-2 text-[#64ffda]">
            <ArrowLeft size={20} />
            <span>Back to Dashboard</span>
          </Link>
        </div>
      )}
      
      <div className="p-4 md:p-6">
        <MessagesSection />
      </div>
      
      {isMobile && <MobileNav />}
    </div>
  );
      }
