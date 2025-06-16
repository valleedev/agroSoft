// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import PrivateRoute from './components/PrivateRoute';

import LoginPage from './modules/auth/pages/LoginPage';
import DashboardView from './modules/dashboard/views/DashboardView';
import CollaboratorsView from './modules/collaborators/views/collaboratorsPage';
import ToolsPage from './modules/tools/views/toolsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <LoginPage /> } />
        <Route path="/dashboard" element={<PrivateRoute><DashboardView /></PrivateRoute>} />
        <Route path="/collaborators" element={<PrivateRoute><CollaboratorsView /></PrivateRoute>} />
        <Route path="/tools" element={<PrivateRoute><ToolsPage /></PrivateRoute>} />
      </Routes>
    </Router>
  );
}

export default App;