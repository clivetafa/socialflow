// app/data.ts
export const statsData = [
  {
    id: 1,
    title: "Total Followers",
    value: "495.2K",
    change: "+12.5%",
    description: "vs last month",
    trend: "up" as const,
  },
  {
    id: 2,
    title: "Engagement Rate",
    value: "4.2%",
    change: "+8.3%",
    description: "vs last month",
    trend: "up" as const,
  },
  {
    id: 3,
    title: "Total Reach",
    value: "2.4M",
    change: "+2.1%",
    description: "vs last month",
    trend: "up" as const,
  },
  {
    id: 4,
    title: "Posts This Month",
    value: "48",
    change: "+15.7%",
    description: "vs last month",
    trend: "up" as const,
  },
];

export const postsData = [
  {
    id: 1,
    title: "New Product Drop",
    content: "Check out our latest drop 🚀",
    hasEdit: true,
    hasDelete: true,
  },
  {
    id: 2,
    title: "Behind the Scenes",
    content: "Here's how we create content daily.",
    hasEdit: true,
    hasDelete: true,
  },
];

export const platformData = [
  {
    id: 1,
    name: "Twitter / X",
    followers: "125.4K",
    change: "+12.5%",
  },
  {
    id: 2,
    name: "Instagram",
    followers: "89.2K",
    change: "+8.3%",
  },
  {
    id: 3,
    name: "LinkedIn",
    followers: "45.6K",
    change: "+15.2%",
  },
  {
    id: 4,
    name: "Facebook",
    followers: "231.8K",
    change: "+5.7%",
  },
];

export const recentPosts = [
  {
    id: 1,
    content: "Just launched our new feature! Check it out and let us know what you think.",
    hashtags: "#ProductLaunch #Innovation",
    likes: 1234,
    comments: 89,
    shares: 234,
  },
  {
    id: 2,
    content: "Behind the scenes at our latest photoshoot ✨ Stay tuned for the big reveal!",
    likes: 5678,
    comments: 456,
    shares: 123,
  },
  {
    id: 3,
    content: "Excited to announce our partnership with leading tech companies to drive innovation in...",
    likes: 890,
    comments: 67,
    shares: 45,
  },
  {
    id: 4,
    content: "Thank you to our amazing community for 100K followers! We couldn't have done it without you ❤️",
    likes: 3456,
    comments: 234,
    shares: 567,
  },
];

export const calendarEvents = [
  {
    id: 1,
    title: "New blog post: 10 Tips for Social Media Success in 2024",
    date: "Today",
    time: "3:00 PM",
    type: "blog" as const,
  },
  {
    id: 2,
    title: "Product showcase - Winter collection preview",
    date: "Tomorrow",
    time: "10:00 AM",
    type: "product" as const,
  },
  {
    id: 3,
    title: "Weekly industry insights and trends analysis",
    date: "Feb 7",
    time: "9:00 AM",
    type: "insights" as const,
  },
];