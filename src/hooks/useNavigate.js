import { useNavigate } from 'react-router-dom'

export const useCustomNavigation = () => {
  const navigate = useNavigate()
  return navigate
}
