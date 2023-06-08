import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import Home from './pages/Home/Home'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Layout />}>
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
