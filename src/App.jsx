import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import TodoListPage from './pages/TodoList'
import ExpenseTrackerPage from './pages/ExpenseTracker'
import HealthTrackerPage from './pages/HealthTracker'
import SettingsPage from './pages/Settings'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="todolist" element={<TodoListPage />} />
          <Route path="expense-tracker" element={<ExpenseTrackerPage />} />
          <Route path="health-tracker" element={<HealthTrackerPage />} />
          <Route path="settings" element={<SettingsPage />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
