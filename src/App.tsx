import { Button } from './components'
import { Typography } from './components/ui/typography/typography.tsx'

export function App() {
  return (
    <div>
      <Button variant="primary" as={'a'} href={'google.com'}>
        As link button
      </Button>
      <Button variant="secondary"> Just a button </Button>
      <Typography />
    </div>
  )
}
