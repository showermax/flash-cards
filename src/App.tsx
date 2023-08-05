import { Router } from './router.tsx'
import { Provider } from 'react-redux'
import { store } from './services/store.ts'

export function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  )
}
