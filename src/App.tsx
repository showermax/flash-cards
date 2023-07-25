import { Button } from './components'

export function App() {
  return (
    <div>
      <Button variant="primary" as={'a'} href={'google.com'}>
        {' '}
        As link button{' '}
      </Button>
      <Button variant="secondary"> Just a button </Button>
    </div>
  )
}
