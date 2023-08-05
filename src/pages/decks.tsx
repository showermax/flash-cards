import { Button } from '../components/ui'
import { useLazyGetDecksQuery } from '../services/decks'

export const Decks = () => {
  //const { isLoading, data } = useGetDecksQuery()
  const [initializeQuery, { data, isLoading }] = useLazyGetDecksQuery()

  if (isLoading) return <div>Loading...</div>

  return (
    <div>
      isLoading: {isLoading.toString()}
      <Button onClick={() => initializeQuery()}>fetch</Button>
      {JSON.stringify(data)}
    </div>
  )
}
