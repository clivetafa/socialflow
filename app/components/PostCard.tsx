import { ReactNode } from 'react'; // Add this import

interface PostCardProps {
  platform: string;
  username: string;
  content: string;
  time: string;
  likes: number;
  comments: number;
  shares: number;
  engagementRate: string;
  // Remove these if not used:
  // title?: string;
  // hashtags?: string[];
  // timeAgo?: string;
  // hasEdit?: boolean;
  // hasDelete?: boolean;
}

export default function PostCard({
  platform,
  username,
  content,
  time,
  likes,
  comments,
  shares,
  engagementRate,
}: PostCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className={`p-2 rounded-lg ${
            platform === 'Twitter' ? 'bg-blue-100' :
            platform === 'Instagram' ? 'bg-pink-100' :
            platform === 'LinkedIn' ? 'bg-blue-200' :
            'bg-blue-600'
          }`}>
            <span className={`font-medium ${
              platform === 'Twitter' ? 'text-blue-600' :
              platform === 'Instagram' ? 'text-pink-600' :
              platform === 'LinkedIn' ? 'text-blue-800' :
              'text-white'
            }`}>
              {platform.charAt(0)}
            </span>
          </div>
          <div>
            <h3 className="font-semibold">{platform}</h3>
            <p className="text-gray-500 text-sm">{username}</p>
          </div>
        </div>
        <span className="text-gray-500 text-sm">{time}</span>
      </div>
      
      <p className="text-gray-700 mb-4">{content}</p>
      
      <div className="flex items-center justify-between pt-4 border-t">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="text-gray-500">❤️</span>
            <span>{likes}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gray-500">💬</span>
            <span>{comments}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gray-500">🔄</span>
            <span>{shares}</span>
          </div>
        </div>
        <div className="text-sm font-medium text-green-600">
          {engagementRate} engagement
        </div>
      </div>
    </div>
  );
}