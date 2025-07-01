export default function Leaderboard() {
  const topUsers = [
    { rank: 1, name: 'Alice Green', emissions: 0.8, reduction: 45 },
    { rank: 2, name: 'Bob Wilson', emissions: 1.2, reduction: 38 },
    { rank: 3, name: 'Carol Smith', emissions: 1.4, reduction: 32 },
    { rank: 4, name: 'You', emissions: 1.7, reduction: 28, isYou: true },
    { rank: 5, name: 'David Brown', emissions: 1.9, reduction: 25 },
  ]

  const achievements = [
    { name: 'Eco Warrior', description: 'Reduced emissions by 50%', earned: false },
    { name: 'Green Commuter', description: 'Used sustainable transport 20 days', earned: true },
    { name: 'Energy Saver', description: 'Reduced energy usage by 30%', earned: true },
    { name: 'Waste Minimizer', description: 'Minimized waste for 1 month', earned: false },
  ]

  return (Leaderboard & Achievements</h1See how you compare globally{/* Your Rank */}Your Current Rank</h2#4Out of 1,247 users1.7 tonnes CO₂↓ 28% reduction{/* Top Performers */}Top Performers This Month{topUsers.map((user) => ({user.rank === 1 &&🏆</span
                  {user.rank === 2 &&🥈}
                  {user.rank === 3 &&🥉}
                  {user.rank > 3 &&#{user.rank}</span{user.name}{user.emissions} tonnes CO₂{user.reduction}% reduction))}</div Achievements */}Your Achievements</h2v{achievements.map((achievement, index) => (🏆</div{achievement.name}</h3{achievement.description}))})
}
