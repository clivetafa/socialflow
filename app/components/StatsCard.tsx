import { ReactNode } from 'react'; // Add this import

interface StatsCardProps {
  title: string;
  value: string;
  icon: ReactNode; // This should be ReactNode type
  change: string;
  trend: 'up' | 'down';
  description: string;
}

export default function StatsCard({
  title,
  value,
  icon,
  change,
  trend,
  description,
}: StatsCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="text-gray-500 text-sm">{title}</p>
          <h3 className="text-2xl font-bold mt-1">{value}</h3>
        </div>
        <div className="p-3 bg-gray-50 rounded-lg">
          {icon}
        </div>
      </div>
      <div className="flex items-center gap-2">
        <span className={`text-sm font-medium ${
          trend === 'up' ? 'text-green-600' : 'text-red-600'
        }`}>
          {trend === 'up' ? '↗' : '↘'} {change}
        </span>
        <span className="text-gray-500 text-sm">{description}</span>
      </div>
    </div>
  );
}