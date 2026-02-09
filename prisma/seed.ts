import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  console.log('Seeding database...')
  
  // Create a test user
  const user = await prisma.user.upsert({
    where: { email: 'admin@socialflow.com' },
    update: {},
    create: {
      email: 'admin@socialflow.com',
      name: 'Admin User',
      role: 'admin',
    },
  })

  console.log('Created user:', user.email)
  
  // Create sample posts
  const posts = [
    {
      title: 'New Product Launch',
      content: 'Check out our latest product! #innovation',
      platform: 'twitter',
      scheduledAt: new Date(),
      published: true,
      likes: 1234,
      comments: 89,
      shares: 234,
      userId: user.id,
    },
    {
      title: 'Behind the Scenes',
      content: 'How we create content daily ',
      platform: 'instagram',
      scheduledAt: new Date(Date.now() + 86400000),
      published: false,
      likes: 0,
      comments: 0,
      shares: 0,
      userId: user.id,
    },
  ]

  for (const postData of posts) {
    const post = await prisma.post.create({
      data: postData,
    })
    console.log('Created post:', post.title)
  }

  // Create sample analytics
  const platforms = ['twitter', 'instagram', 'facebook', 'linkedin']
  const today = new Date()
  
  for (let i = 0; i < 7; i++) {
    const date = new Date(today)
    date.setDate(date.getDate() - i)
    
    for (const platform of platforms) {
      await prisma.analytics.create({
        data: {
          date,
          platform,
          followers: Math.floor(Math.random() * 100000) + 50000,
          engagement: Math.random() * 5 + 1,
          reach: Math.floor(Math.random() * 500000) + 100000,
          clicks: Math.floor(Math.random() * 1000),
          impressions: Math.floor(Math.random() * 10000),
          userId: user.id,
        },
      })
    }
  }

  console.log('Database seeded successfully!')
}

main()
  .catch((e) => {
    console.error('Seeding error:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
