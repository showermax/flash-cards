import { Button, Checkbox } from './components'

export function App() {
  return (
    <div>
      <Button variant="primary" as={'a'} href={'google.com'}>
        As link button
      </Button>

      <Checkbox />
    </div>
  )
}
