import { useApp } from '../App'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const { login } = useApp()
  const navigate = useNavigate()

  const handleLogin = () => {
    login()
    navigate('/')
  }

  return (🌱</spanEcoTracker</hTrack your carbon footprintEmail</divPasswordSign In)
}
