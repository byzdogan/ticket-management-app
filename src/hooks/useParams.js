import { useParams } from 'react-router-dom'

export const useCustomParams = () => {
  const params = useParams()
  console.log(params)
  return params
}
