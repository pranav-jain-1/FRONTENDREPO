import { Link, useLocation } from 'react-router-dom'
import { useApp } from '../App'

export default function Navigation() {
  const location = useLocation()
  const { state, logout } = useApp()

  const navigation = [
    { name: 'Dashboard', href: '/', current: location.pathname === '/' },
    { name: 'Track Emissions', href: '/track', current: location.pathname === '/track' },
    { name: 'Leaderboard', href: '/leaderboard', current: location.pathname === '/leaderboard' },
  ]

  return (🌱EcoTracker{navigation.map((item) => ({item.name}))}{state.user?.name}Logout)
}
