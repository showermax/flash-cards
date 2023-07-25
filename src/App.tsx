import { Button } from './components'
import { Typography } from './components/ui/typography/typography.tsx'

export function App() {
  return (
    <div>
      <Button variant="primary" as={'a'} href={'google.com'}>
        As link button
      </Button>
      <Button variant="secondary" href={'http://google.com'}>
        {' '}
        Just a button{' '}
      </Button>
      <Typography useMyTag={'a'} href={'http://google.com'}>
        HI Im TYpography{' '}
      </Typography>
    </div>
  )
}
