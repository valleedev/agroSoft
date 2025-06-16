// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './modules/auth/pages/LoginPage';
import DashboardView from './modules/dashboard/views/DashboardView';
import CollaboratorsView from './modules/collaborators/views/collaboratorsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardView />} />
        <Route path="/collaborators" element={<CollaboratorsView />} />
      </Routes>
    </Router>
  );
}

export default App;