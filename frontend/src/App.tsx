import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NoPage from './pages/NoPage'
import Home from './pages/Home'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NoPage />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
